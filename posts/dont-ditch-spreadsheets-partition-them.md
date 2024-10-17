---
title: Don’t Ditch Spreadsheets. Partition Them.
date: '2024-01-15'
author: 'Chris Forno'
---

We often hear customers say that they want to move away from spreadsheets and start using a “real” system backed by a database (whether that be an ERP, CRM, etc.). And they’re sometimes shocked when we advise them to keep using spreadsheets. After all, it’s common knowledge that spreadsheets are not “scalable”. What will they do when they hit the hard limits (10 million cells for Google Sheets, 1 million rows for Microsoft Excel)?

## The biggest organizations partition their data

Tech companies have several strategies to slice their big data into partitions, whether it’s database table partitioning, database cluster sharding, log file rotating, or flat file splitting. Partitioning is not a question of “if” but “when”: no computer is large enough nor database index performant enough to store all data indefinitely. So why should we expect spreadsheets to be different?

By partitioning your spreadsheets (such as by starting a new spreadsheet each year or even each month), there is no limit on how much data you can manage. And when it comes to reporting, EdgeSet can [crawl all your spreadsheets](why-you-need-automatic-inference) and represent them as if they were a single continuous database. In fact, queries against partitioned spreadsheets are even faster than unpartitioned spreadsheets, because the query engine can process multiple sheets in parallel.

## Partitioning can enhance security

If your spreadsheet contains personally identifiable information (PII) or other sensitive data, you take a risk every time you share it. It’s not possible to hide certain columns or rows for certain users. However, you can achieve the same effect with partitioning.

The simplest case is row-based partitioning. For example, if you maintain your customer list in a spreadsheet, you can partition the sheet by region so that sales and customer support only have access to data for their region(s). A less commonly used technique is column-based partitioning. An example of this is storing customer national ID numbers in a separate sheet from their contact details. You can achieve this by linking 2 sheets with a data validation rule.

If you want to share a sensitive spreadsheet for viewing only, you can create a restricted view of the spreadsheet using EdgeSet’s fine-grained permission controls and share that instead.

## Migrating data is expensive and often disappointing

Organizations tend to underestimate the rigidness of new software systems they are adopting and how migrating to them will disrupt their people and processes. Sometimes this disruption is necessary (such as when the system is required due to regulatory controls), but more often it is an unexpected expense that was hidden from the customer and only grudgingly tolerated due to the sunk cost fallacy.

Migrations also degrade data quality just like making a photocopy of a photocopy (this is known formally as “generation loss”).

## Spreadsheets are the oldest and most successful "no-code" platform

Like [CSVs](our-obsession-with-security), spreadsheets predate personal computers. No custom application can match their flexibility. They don’t require as much training as specialized systems because their operation is more transparent and inspectable by their users. (For these reasons, we modeled EdgeSet’s query interface on spreadsheets.)

For systems where data is collected and managed by machines (such as e-commerce and IoT devices) a database is the best choice. But when humans are the ones managing the data, the benefits of spreadsheets will usually outweigh any perceived benefits of specialized systems.
