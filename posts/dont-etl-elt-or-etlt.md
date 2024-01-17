---
title: 'Don’t ETL, ELT, or EtLT'
date: '2023-12-01'
author: 'Chris Forno'
---
<h2 style="margin-top:0;"> “ETL is dead, long live ELT!”</h2>
The industry has long known the problems of centralizing data via ETL (Extract Transform Load):

- **ETL destroys data lineage**: transforms happen before loads, discarding the original data. Transformed and aggregated data is difficult to understand and trust since it cannot be traced back to the source.
- **ETL introduces lag**: analysis and reports are based on data that is up to 24 hours stale.  And as data and reports grow, that often grows to 48 or 72 hours.
- **ETL breaks easily**: errors in the transforms or changes in the source data cascade through the process, at best resulting in missing data but more often leaving data in an inconsistent state and creating inaccurate reports.

ELT (Extract Load Transform) has been proposed as a solution. And while an improvement, it still has problems. ELT can maintain data lineage, but it doesn’t solve reporting lag.

The newer alternative EtLT (Extract transform Load Transform) is a step backwards, sneaking untraceable transforms back into the pipeline and leading to questions about integrity of the data, all without solving reporting lag or fragility.

## The solution is distributed queries

Fixing the problems with ETL requires a new approach. Distributed query engines are a new technology that don’t suffer any of the problems of ETL or E(t)LT (although they introduce some tradeoffs). EdgeSet integrates the Trino query engine, used by [some of the largest tech companies](https://trino.io/users.html). We’ve taken the query engine and extended it to work on more data sources and without the expert supervision of a dedicated data engineering department.

## How to manage the tradeoffs of distributed queries
The 2 tradeoffs you make when using distributed queries are:

- Distributed queries may be slower than queries against a single data warehouse
- Distributed queries may stress your data sources

The solution to both of these are materialized views. “Materialized views” are queries that save their results to a table, either on-demand or on a regular schedule. The important differences between materialized views and ETL pipelines are that they are:

- Inspectable: they are written in a language that analysts already understand (SQL), so there is no question of what the data means
- Granular: they can be refreshed independently, 
- Robust: if a materialized view breaks, it doesn’t impact access to raw data or other unrelated materialized views


## No up-front costs
It’s common to underestimate the cost of setting up an ETL (or E(t)LT) pipeline. **We have seen our customers invest hundreds of thousands of dollars and several months of effort, only to be dissatisfied with the results**. Distributed query engines eliminate that up-front work and get you to work analyzing your data immediately. You can then optimize later by creating materialized views if and when necessary.

EdgeSet makes all this easier through a simple web interface and automatic inference. There’s no need to learn a new language or manually map data. EdgeSet crawls your data sources (even spreadsheets and CSV files) and finds the data tables itself.
