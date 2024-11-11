'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { DINish } from "./fonts";

interface Item {
  id: number;
  imageUrl: string;
  description: string;
  legend: string;
  categoryId: number;
  query: string;
}

const items: Item[] = [
  {
    id: 1, imageUrl: '/usecases/case1.1.png', description: 'How many unique customers do we have in each state?', legend: 'The map shows a choropleth (heat map) of the United States where darker teal indicates higher customer concentration and lighter teal indicates lower customer concentration.', categoryId: 1, query: `
    SELECT 
      customer_state, 
      COUNT(DISTINCT(customer_unique_id)) AS count 
    FROM 
      ecommerce.public.customers 
    GROUP BY 
      customer_state 
    ORDER BY count
    ` },
  {
    id: 2, imageUrl: '/usecases/case1.2.png', description: 'What is the total revenue and total number of items sold for each product category?', legend: 'The chart shows a dual-axis visualization. Blue bars show revenue by product category (left y-axis, in millions) and orange dots show times bought/count of items (right y-axis, in thousands).', categoryId: 1, query: `
    WITH a AS (
      SELECT 
        c.product_category_name, 
        b.price 
      FROM 
        ecommerce.public.orders a
      LEFT JOIN 
        ecommerce.public.order_items b ON a.order_id = b.order_id
      LEFT JOIN 
        ecommerce.public.products c ON b.product_id = c.product_id
      WHERE 
        a.order_status = 'delivered'
    )

    SELECT 
      REPLACE(product_category_name, '_', ' ') AS "Product category", 
      SUM(price) AS total, 
      COUNT(product_category_name) AS count 
    FROM 
      a 
    GROUP BY 
      product_category_name 
    ORDER BY 
      total DESC
    ` },
  {
    id: 3, imageUrl: '/usecases/case1.3.png', description: 'What is the distribution of customer review scores for each US state?', legend: 'The chart is a Grouped Bar Chart (also called a Clustered Bar Chart) showing review score distribution across US states. Each state has five bars representing the count of customer reviews received for each rating level (1-5 stars), allowing for easy comparison of rating distributions between states.', categoryId: 1, query: `
    WITH a AS (
      SELECT 
        b.customer_state, 
        c.review_score 
      FROM 
        ecommerce.public.orders a
      JOIN 
        ecommerce.public.customers b ON a.customer_id = b.customer_id
      JOIN 
        ecommerce_reviews.default.ecommerce_reviews c ON a.order_id = c.order_id
    )
    
    SELECT 
      customer_state, 
      review_score, 
      COUNT(review_score) AS count 
    FROM 
      a 
    GROUP BY 
      customer_state, 
      review_score
      ` },
  {
    id: 4, imageUrl: '/usecases/case1.4.png', description: 'What is the distribution of payment types for orders?', legend: 'The chart shows the percentage breakdown of payment methods used in e-commerce transactions, with credit card payments dominating at nearly three-quarters of all transactions.', categoryId: 1, query: `
    SELECT 
      REPLACE(payment_type, '_', ' ') AS "payment type", 
      COUNT(payment_type) AS count 
    FROM 
      ecommerce.public.order_payments 
    GROUP BY 
      payment_type
    ` },
  {
    id: 5, imageUrl: '/usecases/case4.1.png', description: 'What is the distribution of students by grade in our institutions?', legend: 'The image shows three donut charts representing the enrollment breakdown by grade at the Carrington branch across three years (2019-2021). The legend on the right shows all grades from Nursery through Grade 12. This suggests that Carrington is a full K-12 school (plus nursery) with relatively balanced enrollment across grade levels, though with some variation in class sizes year to year.', categoryId: 4, query: `
    SELECT 
      branch AS "branch::filter",
      year,
      grade,
      SUM(students) AS total
    FROM 
      gsheets.school_fp_a.enrollment
    GROUP BY 
      branch, year, grade
    ORDER BY 
      grade, year, branch
` },
  {
    id: 6, imageUrl: '/usecases/case4.2.png', description: 'What is the relation between Enrollment and Revenue?', legend: 'The chart displays a combined bar and line chart displaying data for the Saint Connor branch of an educational institution from 2019 to 2021. An interesting observation is that while enrollment numbers decreased in 2021, the revenue remained relatively high, suggesting possible tuition increases or additional revenue streams that helped maintain revenue levels despite lower enrollment.', categoryId: 4, query: `
 WITH a AS (
    SELECT branch, year, SUM(students) AS total
    FROM gsheets.school_fp_a.enrollment
    GROUP BY branch, year
)

SELECT 
  a.branch AS "branch::filter",
  a.year,
  a.total AS "enrollment total",
  b.revenue
FROM a
JOIN gsheets.school_fp_a.kpi b
ON a.branch = b.branch AND a.year = b.year
` },
  {
    id: 7, imageUrl: '/usecases/case4.3.png', description: 'How do we automate calculating the numbers required for financial reporting?', legend: 'The chart shows the operating cycle across different branches of an institution over three years (2019-2021), shown in different shades of blue. The operating cycle represents how long it takes for a business to convert investments in inventory and other resources into cash flows from sales.', categoryId: 4, query: `
  SELECT 
    branch,
    year,
    accounts_payable_turnover AS "accounts payable turnover",
    accounts_receivable_turnover AS "accounts receivable turnover",
    cash_conversions_cycle AS "cash conversions cycle",
    days_in_payables AS "days in payables",
    days_in_receivables AS "days in receivables",
    liquidity,
    operating_cycle AS "operating cycle",
    operating_margin AS "operating margin"
  FROM 
    gsheets.school_fp_a.kfr
  ` },
  {
    id: 14, imageUrl: '/usecases/case4.4.png', description: 'What are all the financial metrics for each branch, broken down by year?', legend: '', categoryId: 4, query: `
    SELECT 
        branch,
        year,
        compensation,
        depreciation,
        mandatory_contributions AS "mandatory contributions",
        net_savings AS "net savings",
        opex,
        revenue,
        salaries,
        savings_before_depreciation AS "savings before depreciation"
    FROM 
        gsheets.school_fp_a.kpi
  ` },
  {
    id: 8, imageUrl: '/usecases/case3.1.png', description: 'What is the relation between returns and volatility for US tech stocks and market instruments?', legend: 'The chart shows a scatter plot comparing returns (in percentage/basis points) against volatility for selected technology companies (like AAPL, AMD, AMZN, etc.) and market instruments (like USD)', categoryId: 3, query: `SELECT * FROM gsheets.ustech.pflat
    `
  },
  {
    id: 10, imageUrl: '/usecases/case2.1.png', description: 'What is the current profit/loss breakdown by industry group?', legend: 'This chart visualizes the profitability distribution across different industry groups, making it easy to compare relative performance and identify the strongest and weakest performing sectors in the portfolio.', categoryId: 2, query: `
    SELECT 
      industry_group, 
      SUM(CAST(current_profit AS DECIMAL)) AS current_profit 
    FROM 
      portfolio.asset_mgmt.client_x 
    WHERE 
      industry_group IS NOT NULL 
    GROUP BY 
      industry_group
    `
  },
  {
    id: 11, imageUrl: '/usecases/case2.2.png', description: 'What is the step-by-step breakdown of how each investment position contributed to the change in portfolio value?', legend: 'This chart helps visualize how each position contributed to the overall portfolio performance, with positive contributors (tech stocks) in light blue and negative contributors (mainly Asian stocks and REITs) in dark red.', categoryId: 2, query: `
 WITH 
    a AS (
        SELECT 
            identifier, 
            COALESCE("31_dec_2023_profit", 0) AS y, 
            current_profit 
        FROM 
            portfolio.asset_mgmt.client_x 
        WHERE 
            name IS NOT NULL
    ),
    b AS (
        SELECT 
            COALESCE(identifier, '31 dec 2023 profit') AS x, 
            SUM(CAST(y AS INT)) AS y 
        FROM 
            a 
        GROUP BY 
            ROLLUP(identifier)
    ),
    c AS (
        SELECT 
            COALESCE(identifier, 'Current profit') AS x, 
            SUM(CAST(current_profit AS INT)) AS y 
        FROM 
            portfolio.asset_mgmt.client_x 
        WHERE 
            name IS NOT NULL 
        GROUP BY 
            ROLLUP(identifier)
    ),
    d AS (
        SELECT 
            identifier AS x, 
            CAST(current_profit AS INT) - CAST(y AS INT) AS y 
        FROM 
            a
    ),
    e AS (
        SELECT x, y 
        FROM b 
        WHERE x = '31 dec 2023 profit'
        
        UNION ALL
        
        SELECT x, y 
        FROM d
        
        UNION ALL
        
        SELECT x, y 
        FROM c 
        WHERE x = 'Current profit'
    )

SELECT 
    x, 
    y, 
    CASE 
        WHEN x = '31 dec 2023 profit' THEN 'absolute' 
        WHEN x = 'Current profit' THEN 'total' 
        ELSE 'relative' 
    END AS measure,
    CASE 
        WHEN x = '31 dec 2023 profit' THEN '1' 
        WHEN x = 'Current profit' THEN '3' 
        ELSE '2' 
    END AS "order" 
FROM 
    e 
    ORDER BY 
      "order"
    `
  },
  {
    id: 12,
    imageUrl: '/usecases/case2.3.png',
    description: 'What is the total current value for each asset category from a portfolio?',
    legend: 'This donut chart displays portfolio allocation across major asset categories, excluding cash positions.',
    categoryId: 2,
    query: `
   SELECT 
    asset_category, 
    SUM(current_value_usd) AS "current value"
    FROM 
        portfolio.asset_mgmt.client_x 
    WHERE 
        asset_category != '' 
        AND asset_category != 'Cash' 
    GROUP BY 
        asset_category
    `
  },
  {
    id: 13,
    imageUrl: '/usecases/case2.4.png',
    description: 'What is the percentage profit or loss for each investment? Sort them from highest profit to lowest profit.',
    legend: 'This chart displays the percentage profit or loss for each investment in a portfolio, excluding cash positions. Investments are sorted from highest profit to lowest profit.',
    categoryId: 2,
    query: `
    SELECT 
      identifier, 
      profit__*100 AS "profit in %" 
    FROM 
        portfolio.asset_mgmt.client_x 
    WHERE 
        identifier IS NOT NULL 
    ORDER BY 
        "profit in %" DESC
    `
  },
  {
    id: 17,
    imageUrl: '/usecases/case3.2.png',
    description: 'How has each stock\'s value changed from its initial investment value?',
    legend: 'This chart displays the percentage change in value for each stock from its initial investment value.',
    categoryId: 3,
    query: `
    SELECT 
      name,
      CAST(REPLACE(pcost, ',', '') AS DOUBLE) AS initial_investment,
      CAST(REPLACE(cvalue, ',', '') AS DOUBLE) AS current_value,
      ROUND(
          (CAST(REPLACE(cvalue, ',', '') AS DOUBLE) - CAST(REPLACE(pcost, ',', '') AS DOUBLE)) / 
          CAST(REPLACE(pcost, ',', '') AS DOUBLE) * 100, 
          2
      ) AS value_change_pct,
      position AS shares_held,
      cprice AS current_price
    FROM 
        gsheets.ustech.pflat
    WHERE 
        name != 'cash'
    ORDER BY 
        value_change_pct DESC
    `
  },
  {
    id: 15,
    imageUrl: '/usecases/case3.3.png',
    description: 'Compare all risk measures for each stock in the portfolio, and rank them from most volatile to least volatile.',
    legend: 'The chart compares risk metrics (VaR 95%, VaR 99%, and tail risk) across stocks, ordered by highest to lowest volatility, showing Tesla and AMD as riskiest positions and EA and TMO as safest.',
    categoryId: 3,
    query: `
    SELECT 
        name,
        rvolatility___ as volatility,
        CAST(REPLACE(rvar95_, ',', '') AS decimal) as var_95,
        CAST(REPLACE(rvar99_, ',', '') AS decimal) as var_99,
        CAST(REPLACE(rvar99_, ',', '') AS decimal) - CAST(REPLACE(rvar95_, ',', '') AS decimal) as tail_risk
    FROM gsheets.ustech.pflat
    WHERE name != 'cash'
    ORDER BY CAST(rvolatility___ AS decimal) DESC;
    `
  },
  {
    id: 16,
    imageUrl: '/usecases/case3.4.png',
    description: 'What is each position\'s percentage of total portfolio, and running total percentage, ordered from largest to smallest position?',
    legend: 'In this chart, the lower area (darker blue) shows individual position weights, while the filled area above (lighter blue) shows how the cumulative percentage grows as we add each position, ultimately reaching nearly 100% of the portfolio.',
    categoryId: 3,
    query: `
    SELECT 
        name,
        rvolatility___ as volatility,
        CAST(REPLACE(rvar95_, ',', '') AS decimal) as var_95,
        CAST(REPLACE(rvar99_, ',', '') AS decimal) as var_99,
        CAST(REPLACE(rvar99_, ',', '') AS decimal) - CAST(REPLACE(rvar95_, ',', '') AS decimal) as tail_risk
    FROM gsheets.ustech.pflat
    WHERE name != 'cash'
    ORDER BY CAST(rvolatility___ AS decimal) DESC;
    `
  }
];

const tabs = [
  {
    text: 'Sales and Geographic Analytics',
    category: 'Sales and Geographic Analytics',
    id: 1,
    dashboardImage: '/usecases/dash2.png'
  },
  {
    text: 'Portfolio Contribution Analysis',
    category: 'Portfolio Contribution Analysis',
    id: 2,
    dashboardImage: '/usecases/dash5.png'
  },
  {
    text: 'Risk-Return Analysis',
    category: 'Risk-Return Analysis',
    id: 3,
    dashboardImage: '/usecases/dash6.png'
  },
  {
    text: 'Financial Planning and Analysis',
    category: 'Financial Planning and Analysis',
    id: 4,
    dashboardImage: '/usecases/dash1.png'
  },
];

// Add this type for the clickable areas
interface MapArea {
  coords: string;
  shape: "rect" | "circle" | "poly";
  title: string;
  categoryId: number;
  itemId: number;
}

// Add the map areas data (you'll need to determine the actual coordinates)
const dashboardAreas: MapArea[] = [
  {
    coords: "5,123,397,275", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Revenue vs Enrollment",
    categoryId: 1,
    itemId: 1
  },
  {
    coords: "5,280,398,452", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Operating Cycle",
    categoryId: 1,
    itemId: 2
  },
  {
    coords: "5,460,794,612", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Review Scores",
    categoryId: 1,
    itemId: 3
  },
  {
    coords: "402,280,798,452", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Revenue vs Enrollment",
    categoryId: 1,
    itemId: 4
  },
  {
    coords: "270,220,530,412", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Profit by Industry Group",
    categoryId: 2,
    itemId: 10
  },
  {
    coords: "270,420,530,612", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Profit by Industry Group",
    categoryId: 2,
    itemId: 11
  },
  {
    coords: "538,25,798,212", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 2,
    itemId: 12
  },
  {
    coords: "538,420,798,612", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 2,
    itemId: 13
  },
  {
    coords: "268,198,530,434", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 4,
    itemId: 5
  },
  {
    coords: "4,198,264,434", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 4,
    itemId: 6
  },
  {
    coords: "538,200,798,432", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 4,
    itemId: 7
  },
  {
    coords: "268,22,530,194", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 4,
    itemId: 14
  },
  {
    coords: "5,220,400,414", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 3,
    itemId: 15
  },
  {
    coords: "400,220,798,414", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 3,
    itemId: 16
  },
  {
    coords: "400,20,798,214", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 3,
    itemId: 17
  },
  {
    coords: "5,22,398,215", // Example coordinates, you'll need to adjust these
    shape: "rect",
    title: "Portfolio Allocation",
    categoryId: 3,
    itemId: 8
  }
  // Add more areas as needed
];

// Add this custom hook at the top of your file
const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [activeImageTab, setActiveImageTab] = useState('Result');
  const [isWorkflowImageOpen, setIsWorkflowImageOpen] = useState(false);
  const [hoveredArea, setHoveredArea] = useState<MapArea | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [imageLoading, setImageLoading] = useState(true);

  const debouncedHoveredArea = useDebounce(hoveredArea, 33);
  const debouncedHoveredItemId = useDebounce(hoveredItemId, 33);

  const openLightbox = (item: Item) => {
    setImageLoading(true);
    setSelectedItem(item);
    setIsClosing(false);
  };

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setIsClosing(false);
    }, 300); // Match this with the animation duration
  };

  const closeWorkflowLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsWorkflowImageOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        closeLightbox();
      }
      if (e.key === 'Escape' && isWorkflowImageOpen) {
        closeWorkflowLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedItem, isWorkflowImageOpen]);

  // Convert absolute coordinates to relative position based on current image size
  const getCoordsObject = (coords: string) => {
    if (!imageRef.current) return {};

    const [x1, y1, x2, y2] = coords.split(',').map(Number);

    console.log('imageDimensions', imageDimensions);
    const scaleX = imageDimensions.width / 800;
    const scaleY = imageDimensions.height / 610;

    // Padding offset (p-3 = 0.75rem = 12px)
    const padding = 12;

    // Apply scaling to coordinates and add padding offset
    const scaledX1 = Math.round(x1 * scaleX) + padding;
    const scaledY1 = Math.round(y1 * scaleY) + padding;
    const scaledX2 = Math.round(x2 * scaleX) + padding;
    const scaledY2 = Math.round(y2 * scaleY) + padding;

    return {
      left: `${scaledX1}px`,
      top: `${scaledY1}px`,
      width: `${scaledX2 - scaledX1}px`,
      height: `${scaledY2 - scaledY1}px`
    };
  };

  const getArea = (itemId: number | null, categoryId: number | null) => {
    return dashboardAreas.find(area => area.itemId === itemId && area.categoryId === categoryId) || null;
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current) {
        setImageDimensions({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className="relative py-14 md:pb-24 bg-neutral-100">
      <div className="max-w-[1490px] mx-auto grid grid-cols-12">
        <div className="col-start-2 col-span-10 grid [grid-template-columns:subgrid]">
          {/* <div className="flex justify-between items-center py-10 col-span-full">
            <h2 className={`text-2xl font-bold ${DINish.className} xl:text-3xl text-primary`}>Use Cases</h2>
          </div> */}
          <div className='grid [grid-template-columns:subgrid] col-span-full'>
            <div className='col-span-full col-start-1 text-center'>
              <div className='flex items-center gap-2 w-full justify-center'>
                <svg className="max-w-[24px] xl:max-w-[32px] text-primary mx-1" fill="currentColor" viewBox="0 0 32 28">
                  <path d="M10 14v8h-4v-8h4zM16 6v16h-4v-16h4zM32 24v2h-32v-24h2v22h30zM22 10v12h-4v-12h4zM28 4v18h-4v-18h4z"></path>
                </svg>
                <h2 className={`text-2xl text-primary font-bold ${DINish.className} xl:text-3xl text-gray-600 col-start-1 col-span-full`}>Dashboard and Analytics</h2>
              </div>
              <div className='py-10 col-span-full'>
                <p className={`text-lg md:text-xl ${DINish.className} w-full pr-8 text-center max-w-3xl m-auto`}>
                  Build custom dashboards to analyze and optimize your business performance with comprehensive data insights.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-2 md:my-6 flex space-x-4 col-span-full justify-start overflow-x-auto pb-4 px-0 min-[1227px]:justify-center min-[1227px]:overflow-visible min-[1227px]:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.category}
                className={`px-4 py-2 text-base ${DINish.className} rounded-lg whitespace-nowrap flex-shrink-0 min-[1227px]:whitespace-normal min-[1227px]:flex-shrink ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-white text-primary'
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.text}
              </button>
            ))}
          </div>
        </div>
        <div className="col-start-2 col-span-10 mt-4 md:mt-2 min-[1227px]:mt-6">
          <div className='col-span-full flex flex-col-reverse rounded-md justify-center min-[1227px]:flex-row'>
            <div className='flex flex-col basis-full px-0 min-[1227px]:basis-[360px] min-[1227px]:px-2'>
              <div
                className="my-5 min-[1227px]:my-0 w-full h-full bg-transparent p-0 rounded-t-md overflow-auto border-none shadow-none min-[1227px]:bg-white min-[1227px]:p-4 min-[1227px]:border min-[1227px]:border-slate-200 min-[1227px]:shadow-sm"
              >
                <div className={`text-base ${DINish.className} pb-4 font-semibold text-gray-500 hidden min-[1227px]:block`}>
                  Queries
                </div>
                <div className="flex overflow-x-auto gap-2 py-4 items-stretch min-[1227px]:block min-[1227px]:overflow-visible min-[1227px]:gap-0 min-[1227px]:py-0">
                  {items
                    .filter(item => item.categoryId === activeTab)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="w-full bg-white rounded-md overflow-hidden shadow-sm border border-slate-200 mb-0 max-w-[220px] md:max-w-[300px] flex-shrink-0 group hover:shadow-md transition-all duration-300 min-[1227px]:mb-1 min-[1227px]:max-w-none min-[1227px]:flex-shrink"
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                      >
                        <div className="p-4">
                          <div className={`text-base ${DINish.className}`}>
                            {item.description}
                          </div>
                          <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 flex items-center justify-end">
                            <button
                              onClick={() => openLightbox(item)}
                              className="text-primary hover:text-primary-dark font-semibold text-sm mt-2 transition-colors duration-300"
                            >
                              View Result →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='basis-full bg-slate-200 rounded-md relative p-3 min-[1227px]:basis-[800px]'>
              <Image
                ref={imageRef}
                src={tabs.find(tab => tab.id === activeTab)?.dashboardImage || '/usecases/dash1.png'}
                alt={`Dashboard for ${tabs.find(tab => tab.id === activeTab)?.category}`}
                width={800}
                height={610}
                className='w-full h-auto object-contain rounded-md border-slate-300'
                useMap="#dashboard-map"
                onLoad={() => {
                  if (imageRef.current) {
                    setImageDimensions({
                      width: imageRef.current.offsetWidth,
                      height: imageRef.current.offsetHeight
                    });
                  }
                }}
              />
              {(debouncedHoveredArea || (debouncedHoveredItemId && getArea(debouncedHoveredItemId, activeTab))) && (
                <div
                  className="absolute pointer-events-none transition-all duration-200 order border-2 border-dashed border-borderLight bg-[#215f74]/10 animate-highlight-pulse"
                  style={getCoordsObject((debouncedHoveredArea || (debouncedHoveredItemId && getArea(debouncedHoveredItemId, activeTab)) as MapArea)?.coords || '')}
                />
              )}
              <map name="dashboard-map">
                {dashboardAreas.filter(area => area.categoryId === activeTab).map((area, index) => (
                  <area
                    key={index}
                    shape={area.shape}
                    coords={imageRef.current ? area.coords.split(',')
                      .map((coord, i) => {
                        const scale = i % 2 === 0
                          ? imageRef.current!.offsetWidth / 800
                          : imageRef.current!.offsetHeight / 610;
                        return Math.round(Number(coord) * scale);
                      })
                      .join(',') : area.coords}
                    onClick={() => openLightbox(items.find(item => item.id === area.itemId)!)}
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                    style={{ cursor: 'pointer' }}
                    alt={area.title}
                  />
                ))}
              </map>
            </div>
          </div>
        </div>
      </div>

      {
        selectedItem && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
            onClick={closeLightbox}
          >
            <div
              className={`bg-white rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto ${isClosing ? 'animate-fade-out' : 'animate-slide-up'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className={`text-sm font-bold ${DINish.className} text-primary p-4`}>{tabs.find(tab => tab.id === selectedItem.categoryId)?.category}</h2>
              <p className={`text-lg px-4 pb-4 ${DINish.className}`}>{selectedItem.description}</p>

              <div className="flex border-b px-4">
                <button
                  className={`px-4 py-2 text-sm font-semibold ${DINish.className} ${activeImageTab === 'Result' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                  onClick={() => setActiveImageTab('Result')}
                >
                  Result
                </button>
                <button
                  className={`px-4 py-2 text-sm font-semibold ${DINish.className}  ${activeImageTab === 'Query' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 font-normal'}`}
                  onClick={() => setActiveImageTab('Query')}
                >
                  Query
                </button>
              </div>

              {activeImageTab === 'Result' && (
                <div className='px-4 bg-slate-50 py-6 flex items-center justify-center h-auto md:h-[560px]'>
                  {imageLoading && (
                    <div className="flex items-center justify-center min-h-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-auto rounded-md animate-pulse">
                      <svg className="w-8 h-8 text-primary animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>)}
                  <Image src={selectedItem.imageUrl} alt={`Item ${selectedItem.id}`} width={600} height={400} className={`w-full h-auto object-cover ${DINish.className}`} onLoad={() => setImageLoading(false)} />
                </div>
              )}

              {activeImageTab === 'Query' && (
                <div className='px-4 bg-slate-50 py-6 h-[560px] overflow-y-auto'>
                  <pre className={`text-xs monospace`}>{selectedItem.query}</pre>
                </div>
              )}

              <p className={`text-sm px-4 py-6 ${DINish.className}`}>{
                activeImageTab === 'Result' ? selectedItem.legend : ''}</p>
            </div>
          </div>
        )
      }


    </section >
  );
}
