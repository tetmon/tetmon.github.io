'use client'

import React, { useEffect, useRef } from 'react';

interface RadarChartProps {
  currentIndex: number;
  visibleCategory?: number;
}

const RadarChart = ({ currentIndex, visibleCategory }: RadarChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(currentIndex);
    hideLabels('.axis0-label, .axis1-label, .axis2-label');
    animateLabels(`.axis${currentIndex}-label`);
  }, [currentIndex]);

  useEffect(() => {
    if (visibleCategory === undefined) {
      document.querySelectorAll('polygon').forEach((polygon) => {
        polygon.style.visibility = 'visible';
      });
      return;
    }
    document.querySelectorAll('polygon').forEach((polygon, index) => {
      polygon.style.visibility = index === visibleCategory ? 'visible' : 'hidden';
    });
  }, [visibleCategory])

  useEffect(() => {
    const axes = ['Volume', 'Variety', 'Velocity'];
    const numAxes = 3;
    const chartSize: number = 300;
    const centerX = chartSize / 2;
    const centerY = chartSize / 2;
    const maxValue = 100;
    const gridLevels = 4;
    const padding = 30;

    // Sample data for 5 polygons
    const dataSet = [
      [10, 25, 25],
      [25, 25, 100],
      [50, 60, 50],
      [100, 75, 65],
      [75, 100, 75]
    ];

    // Colors for the polygons
    const polygonColors = [
      { f: '#5dff9c', s: '#167940' },
      { f: '#ffd7e5a3', s: '#d790a9' },
      { f: '#ffecc375', s: '#a78e5975' },
      { f: '#e7cbf357', s: '#b77cd1c4' },
      { f: '#abd8e796', s: '#6ea5b796' },
    ];

    const labelPadding = 30;

    // Categories for all axes
    const categoriesAxis1 = ['gigabytes', 'terabytes', 'petabyte', 'exabyte'];
    const categoriesAxis2 = ['single source', 'multi source', 'mixed source', 'mixed format'];
    const categoriesAxis3 = ['adhoc', 'batch', 'on demand', 'streaming'];

    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgSize = chartSize + 2 * padding + 2 * labelPadding;
    svg.setAttribute('width', '' + svgSize);
    svg.setAttribute('height', '' + svgSize);
    svg.setAttribute('viewBox', `0 0 ${svgSize} ${svgSize}`);

    if (chartRef.current) {
      chartRef.current.appendChild(svg);
    }

    // Create pattern for striped fill
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    pattern.setAttribute('id', 'stripePattern');
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('width', '4');
    pattern.setAttribute('height', '4');
    pattern.setAttribute('patternTransform', 'rotate(45)');

    const patternRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    patternRect.setAttribute('width', '2');
    patternRect.setAttribute('height', '4');
    patternRect.setAttribute('fill', 'rgba(255, 0, 0, 0.5)');

    pattern.appendChild(patternRect);
    svg.appendChild(pattern);

    // Add CSS animation for fade-in effect
    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .category-label {
        opacity: 0;
        display: none;
      }
      @keyframes polygonGrow {
        from { transform: scale(0); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `;
    svg.appendChild(style);

    // Create a group for the chart content and center it
    const chartGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    chartGroup.setAttribute('transform', `translate(${padding + labelPadding}, ${padding + labelPadding})`);
    svg.appendChild(chartGroup);

    // Create a group for the grid and axis lines
    const gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    chartGroup.appendChild(gridGroup);

    // Draw concentric circles for grid
    for (let level = 1; level <= gridLevels; level++) {
      const radius = (level / gridLevels) * (chartSize / 2);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '' + centerX);
      circle.setAttribute('cy', '' + centerY);
      circle.setAttribute('r', '' + radius);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', '#eee');
      gridGroup.appendChild(circle);
    }

    // Draw axis lines
    for (let i = 0; i < numAxes; i++) {
      const angle = (i / numAxes) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + Math.cos(angle) * (chartSize / 2);
      const y = centerY + Math.sin(angle) * (chartSize / 2);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', '' + centerX);
      line.setAttribute('y1', '' + centerY);
      line.setAttribute('x2', '' + x);
      line.setAttribute('y2', '' + y);
      line.setAttribute('stroke', '#ccc');
      gridGroup.appendChild(line);
    }

    // Create and add the data polygons
    dataSet.forEach((data, index) => {
      const points = [];
      for (let i = 0; i < numAxes; i++) {
        const angle = (i / numAxes) * 2 * Math.PI - Math.PI / 2;
        const value = data[i];
        const distance = (value / maxValue) * (chartSize / 2);
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        points.push(`${x},${y}`);
      }

      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', points.join(' '));
      polygon.setAttribute('fill', polygonColors[index].f);
      // polygon.setAttribute('stroke', index === 1 ? 'rgba(255, 0, 0, 1)' : polygonColors[index].replace('0.2', '1').replace('0.5', '1'));
      polygon.setAttribute('stroke', polygonColors[index].s);
      polygon.setAttribute('stroke-width', index === 0 ? '2' : '1');
      polygon.style.transformOrigin = `${centerX}px ${centerY}px`;
      polygon.style.opacity = '0';
      polygon.style.animation = `polygonGrow 1s forwards ${index * 0.2}s`;
      chartGroup.appendChild(polygon);
    });

    // Create a group for the labels
    const labelGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    chartGroup.appendChild(labelGroup);

    // Add category labels for all axes
    for (let level = 1; level <= gridLevels; level++) {
      const radius = (level / gridLevels) * (chartSize / 2);
      for (let i = 0; i < numAxes; i++) {
        const angle = (i / numAxes) * 2 * Math.PI - Math.PI / 2;
        const labelX = centerX + Math.cos(angle) * radius;
        const labelY = centerY + Math.sin(angle) * radius;
        const categoryLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        categoryLabel.textContent = [categoriesAxis1, categoriesAxis2, categoriesAxis3][i][level - 1];
        categoryLabel.setAttribute('x', '' + labelX);
        categoryLabel.setAttribute('y', '' + labelY);
        categoryLabel.setAttribute('text-anchor', i === 0 ? 'middle' : i === 1 ? 'start' : 'end');
        categoryLabel.setAttribute('dominant-baseline', i === 0 ? 'baseline' : 'middle');
        categoryLabel.setAttribute('font-size', '12px');
        categoryLabel.setAttribute('fill', '#333');
        categoryLabel.classList.add('category-label', `axis${i}-label`);
        labelGroup.appendChild(categoryLabel);
      }
    }

    // Add axis labels
    for (let i = 0; i < numAxes; i++) {
      const angle = (i / numAxes) * 2 * Math.PI - Math.PI / 2;
      let labelX = centerX + Math.cos(angle) * (chartSize / 2 + labelPadding);
      let labelY = centerY + Math.sin(angle) * (chartSize / 2 + labelPadding);
      if (i === 1) { // Variety (bottom-right)
        labelX += labelPadding * 0.5;
        labelY += labelPadding * 0.5;
      } else if (i === 2) { // Velocity (bottom-left)
        labelX -= labelPadding * 0.5;
        labelY += labelPadding * 0.5;
      }
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.textContent = axes[i];
      console.log(axes[i])
      text.setAttribute('x', '' + labelX);
      text.setAttribute('y', '' + labelY);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('font-size', '16px');
      text.setAttribute('font-weight', 'bold');
      labelGroup.appendChild(text);
    }

  }, []);

  const animateLabels = (selector: string) => {
    const labels = document.querySelectorAll(selector);
    labels.forEach((label, index) => {
      if (label instanceof SVGTextElement) {
        label.style.display = 'block';
        label.style.animation = 'none';
        // label.offsetHeight; // Trigger reflow
        label.style.animation = `fadeIn 1s forwards ${index * 0.5}s`;
      }
    });
  };

  const hideLabels = (selector: string) => {
    const labels = document.querySelectorAll(selector);
    labels.forEach(label => {
      if (label instanceof SVGTextElement)
        label.style.display = 'none';
    });
  };

  const handleAxisClick = (axis: number) => {
    hideLabels('.axis0-label, .axis1-label, .axis2-label');
    animateLabels(`.axis${axis}-label`);
  };

  return (
    <div>
      <div ref={chartRef}></div>
      {/* <div>
        {
          axes.map((axis, index) => (
            <button key={index} onClick={() => handleAxisClick(index + 1)}>{axis}</button>
          ))
        }
      </div> */}
    </div>
  );
};

export default RadarChart;