---
title: Where are Elite Olympians Born?
subtitle: A data-driven look at the world’s best athletes using EdgeSet’s LLM-powered entity matching
description: A data-driven look at the world’s best athletes using EdgeSet’s LLM-powered entity matching
date: 2025-09-29
author: Marick Torres
---

![Word cloud of most common birth regions of elite olympians](where-are-elite-olympians-born/locations-word-cloud.png)

The Olympic Games showcase the world’s best athletes that would push the limits and capabilities of humans to the highest level. But what makes these elite athletes? Are they born in specific places, or during a certain era? I decided to find out by analyzing every athlete who has won 10 or more medals in EdgeSet. It turns out that a disproportionate number of these elite Olympians come from a small number of countries and regions.

## TLDR - the main takeaways

![](where-are-elite-olympians-born/dashboard-1.png)![](where-are-elite-olympians-born/dashboard-2.png)

* **Geographic Hotspot (Birthplace):** The United States is the top birth country of elite Olympians. Drilling down further, a specific region \- California, has produced more elite Olympians than most entire countries.
* **Golden Generation:** There was a “golden era” for producing elite talent. More elite Olympians were born in the 20-year span from 1961-1980 than any other period.
* **Sports of the Elites:** Most elite Olympians were from certain sports, particularly Gymnastics and Swimming.
* **Lifespan of the Elites:** On average, elite athletes live up to 76 years of age.
* **The Best of the Best:** The most dominant olympian, Michael Phelps, has 248% more gold medals than the average elite athlete.

## Joining datasets with EdgeSet’s embedded LLM

Performing this analysis required joining together two distinct datasets:

* **Olympic Events Data**: A massive table containing every event, athlete, and medal awarded from 1896 to 2016[^1]
* **Olympic Biographical Data**: A table containing personal details of Olympic athletes such as birth dates, birthplaces, and death dates (if applicable)[^2]

There was no reliable common column to perform the join on. The athlete id in one table was meaningless in the other, and the names contain variations.

To link the two tables:

* **I created a “shortlist” of likely matches.** Instead of comparing every athlete to every other, I performed an inner join to find pairs with a birth year difference of 0 or 1\. This drastically reduced the number of pairs to check.

  ```sql
entities_match('anymatch-gpt2',
  cast(row(a.name, b.born_year, a.country) as JSON), -- entity 1
  cast(row(b.name, b.born_year, b.country) as JSON) -- entity 2
) as identity_match_probability
  ```

* **I used an EdgeSet AI function (entities\_match) to compare the pairs.** The AI compared the attributes of each pair (name, birth year, and country) and produced a confidence score on how likely they were to be the same person.

![](where-are-elite-olympians-born/matches.png)

The initial results were highly successful, with most correct matches scoring above 92% confidence level. Though it’s not perfect, as it required a human-in-the-loop review:

* I identified and removed one **false positive** where the AI was 95% confident about a match that was actually two different people ("Viktor Ivanovych Chukarin" vs. "Leonid Ivanov").
* I identified and kept one **false negative** where a correct match had a low score of 88% ("Vitaly Venediktovich Shcherbo" vs. "Vitali Shcherba").

## Limitations of this analysis

* **“Elite” Definition:** I define an “Elite Olympian” as someone who has won 10 or more medals, however it is just an arbitrary amount I used to simplify the analysis
* **Events Data Incompleteness:** The events data I used is from 1896-2016 only. More athletes might have reached the 10+ medal count as of today.

[^1]:  Data is sourced from [https://www.kaggle.com/datasets/heesoo37/120-years-of-olympic-history-athletes-and-results](https://www.kaggle.com/datasets/heesoo37/120-years-of-olympic-history-athletes-and-results)

[^2]:  Data is sourced from [https://www.kaggle.com/datasets/vaibhav1056/olympics-athletes-born-data](https://www.kaggle.com/datasets/vaibhav1056/olympics-athletes-born-data)