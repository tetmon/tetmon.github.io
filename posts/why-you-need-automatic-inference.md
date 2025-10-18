---
title: Why You Need Automatic Inference
description: Learn about EdgeSet support for inferring data on spreadsheets and CSV files.
date: 2024-01-15
author: Chris Forno
---

No matter what your data and reporting goals are now, you will eventually want to analyze data outside of a SQL database.

## The world runs on spreadsheets and CSVs

Comma-Separated Values (CSV) is a 50-year-old file format that predates personal computers, yet it’s still the dominant format for data interchange. Its success owes to its simplicity: it’s just a text file with commas. The rest is left up to the sender to specify or (more commonly) the receiver to figure out:


* Does the file have a header line?
* What kind of data is in each column?
* Are empty values missing or intentionally blank?
* How are commas in values represented, to distinguish them from separators?
* Are values even separated by commas, or is an entirely different separator used?
* If there are multiple files, are they [partitions](dont-ditch-spreadsheets-partition-them) of the same table or different tables altogether?


Without inference, someone has to answer these questions for every CSV file. This is a large part of why [Data Engineering is expensive drudgery](data-engineering-as-a-product).

The situation is not much better for spreadsheets. The only ambiguity that spreadsheet formats remove is the separators.

## EdgeSet ingests spreadsheets and CSV files without assistance

There’s [no need to abandon spreadsheets](dont-ditch-spreadsheets-partition-them), to stop consuming CSV files, or to spend time and money on manually mapping and transforming them. With the computing power available to us now, we can infer answers to all the above questions using context. In EdgeSet, we use lattices to search for the most correct solution, similar to how a chess engine explores all possible future board states to find the best next move.


Unlike CSVs, spreadsheets are often not clean tables, and a single spreadsheet might contain multiple (sometimes nested) tables of data. EdgeSet infers the location of tables in spreadsheets as well.
