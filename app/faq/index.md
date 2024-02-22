---
title: 'FAQ'
---

# Business Questions

**What is EdgeSet?**

EdgeSet is a data integration software product that joins up disparate cloud and on-premise data sources to a single access point, within minutes. It is an alternative to and complement to traditional data warehouses and data lakes.

**Is EdgeSet a cloud solution?**

EdgeSet can be deployed on desktop, as self-hosted/ on-premise, or managed hosting.

**I don’t want to reveal my data to anyone outside my company. How does EdgeSet enable this?**

Since EdgeSet is not a SaaS, Tetmon has no access to the data you add to EdgeSet. Only users you create and grant access to can view your data.

**What kind of cyber security protection measures are in place?**

EdgeSet is protected by a firewall. All network traffic is encrypted. All Edgeset software dependencies are tracked and verified against trusted SHA256 hashes to mitigate third-party vulnerability injections. We regularly review and incorporate upstream security fixes. How will my system information be stored? All data source credentials are stored encrypted (256-bit key, symmetric encryption). They are decrypted and held in memory only when in use and are automatically scrubbed when they go out of scope. They are never written to disk unencrypted and they are never shared with Tetmon.

**What kind of visualizations are possible on EdgeSet?**

There are many types of visualizations built into EdgeSet including but not limited to: Charts (Line, Bar, Pie, Area, Scatter plot, Box, Heatmap, etc), Maps (Choropleth, Markers), Pivot Tables, Word Cloud, etc.

Technical Questions
===================

**Do I need to learn a new SQL dialect to be able to use EdgeSet? How do I write queries for different databases with different SQL dialects?**

EdgeSet, through its embedded Trino engine, understands standard ANSI SQL. The Trino engine will translate ANSI SQL into the native language of the data sources it’s connected to.

**Can EdgeSet connect to live data?**

Yes, as long as the data is in a tabular format, in a currently supported data source. CSV/flat files are also supported. The table below shows some of the supported sources EdgeSet can ingest.

<div class="table-wrapper">

**Supported Data Source Versions**

| Data Source       | Versions             | Notes                                  |
|-------------------|----------------------|----------------------------------------|
| Alibaba OSS       | N/A                  | requires an API key                    |
| Amazon Redshift   | any                  |                                        |
| Amazon S3         | N/A                  | requires an API key                    |
| Apache Kafka      | 0.10.0 or higher     | unauthenticated only                   |
| Google BigQuery   | N/A                  | requires a Google Cloud service account|
| Elasticsearch     | 6.0.0 or higher      | unauthenticated only                   |
| MongoDB           | 4.0 or higher        |                                        |
| MySQL             | 5.7 or higher        |                                        |
| PostgresSQL       | 10.0 or higher       |                                        |
| SQL Server        | 2012 or higher or Azure SQL |                                    |

</div>


**How does EdgeSet create a virtual data warehouse?**

Once the user has added their data sources to EdgeSet, EdgeSet will then use its auto inference feature to build the structure of the virtual data warehouse. With the structure built, users can now query the data warehouse with SQL queries.

**What happens to the information/data once the desired reports have been generated? Is it stored? If so, where is it stored?**

Only query results used by visualizations are cached in EdgeSet. The age of the results are displayed and they can be refreshed from the dashboards that they appear in. The underlying data is not stored.

**Does EdgeSet support Common Table Expressions (CTEs)?**

Yes.
