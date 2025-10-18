'use client';

import React, { useEffect, useRef } from "react";
import { DINish } from "./fonts";

export default function EntityMatching () {
  return (
    <section id="container" className="z-[1]">
      <div className="grid grid-cols-12 py-8 max-w-[1490px] mx-auto">
        <div className="col-start-2 col-span-10 grid [grid-template-columns:subgrid]">
          <div className="flex w-full justify-start col-span-full py-5">
            <svg className="w-8 h-8 xl:w-10 xl:h-10 mx-1 text-primary" role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
            <h2 className={`text-2xl font-bold text-primary ${DINish.className} pl-2 xl:text-3xl`}>Embedded AI</h2>
          </div>
          <div className="col-span-full xl:flex xl:flex-row-reverse xl:justify-between">
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: '30em'}}>
              <style>{`
              table.spreadsheet {
                text-align: center;
                width: 100%;
              }

              table.spreadsheet th, table.spreadsheet td {
                border: 1px solid rgb(33, 95, 116);
                padding-left: 1ex;
                padding-right: 1ex;
              }
              table.spreadsheet th {
                border-top: none;
              }
              table.spreadsheet th:first-child, table.spreadsheet td:first-child {
                border-left: none;
              }
              table.spreadsheet td {
                border-bottom: none;
              }
              table.spreadsheet th:last-child, table.spreadsheet td:last-child {
                border-right: none;
              }
              `}</style>
              <div className="rounded-lg border border-primary">
                <table className="spreadsheet">
                  <thead>
                    <tr>
                      <th className="text-primary">Company</th>
                      <th className="text-primary">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AMD</td>
                      <td>USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{backgroundImage: 'linear-gradient(to right, transparent 49.5%, #92cd90 49.5%, #92cd90 50.5%, transparent 50.5%)'}}>
                <svg style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '1ex', marginBottom: '1ex'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#5CB559" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div className="rounded-lg border border-primary">
                <table className="spreadsheet">
                  <thead>
                    <tr>
                      <th className="text-primary">Company Name</th>
                      <th className="text-primary">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advanced Micro Devices</td>
                      <td>United States</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-full xl:max-w-lg">
              <p className={`${DINish.className} pt-5 text-lg`}>Intelligently match names and addresses spelled differently using <span className="font-semibold text-highlight">built-in Large Language Models (LLMs)</span>. Data&nbsp;deduplication and entity matching can be performed with a simple function call.</p>
              <p className={`${DINish.className} pt-5 text-lg`}>Since EdgeSet&apos;s LLMs are directly embedded <span className="font-semibold text-highlight">your data stays private</span> and you don&apos;t have configure API keys or pay per-token fees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
