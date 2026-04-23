
export const consolidatedStatmentOfFinanicalPosition = {
  headings: ["", "Notes", "31 December 2025", "31 December 2024"],
  rows: [
    { bold: true, cells: ["Assets", null, null, null] },

    { cells: ["Goodwill", 7, 1138694626, 1090669302] },
    { cells: ["Property, plant and equipment", 9, 820277260, 682102483] },
    { cells: ["Right-of-use assets", 10, 288097198, 299543613] },
    { cells: ["Intangible assets", "11.1", 11108663, 9162686] },
    { cells: ["Margins against letter of guarantees - restricted", 35, 2232315, 2561809] },
    { cells: ["Derivative financial instrument", 12, "--", 7727210] },

    { bold: true, cells: ["Non-current assets", null, 2260410062, 2091767103] },

    { cells: ["Derivative financial instrument", 12, 7928860, 19422922] },
    { cells: ["Inventories", 13.1, 162899736, 161698540] },
    { cells: ["Trade receivables", 14.1, 40319907, 18562782] },
    { cells: ["Prepayments and other current assets", 15, 34070975, 11535531] },
    { cells: ["Cash and cash equivalents", 16, 93307099, 192540441] },

    { bold: true, cells: ["Current assets", null, 338526577, 403760216] },

    { bold: true, cells: ["Total assets", null, 2598936639, 2495527319] },

    { bold: true, cells: ["Equity and liabilities", null, null, null] },
    { bold: true, cells: ["Equity", null, null, null] },

    { cells: ["Share capital", 17, 555000000, 555000000] },
    { cells: ["Treasury shares", 19.5, -25318388, -25318388] },
    { cells: ["Shareholders’ contribution", 18, 6751214, 6751214] },
    { cells: ["Reserves", 19, 97954514, 75406576] },
    { cells: ["Retained earnings", null, 433311387, 333209421] },

    { bold: true, cells: ["Equity attributable to owners of the Company", null, 1067698727, 945048823] },
    { cells: ["Non-controlling interests", null, 3613921, "--"] },

    { bold: true, cells: ["Total equity", null, 1071312648, 945048823] },

    { bold: true, cells: ["Liabilities", null, null, null] },

    { cells: ["Long-term loans", 22, 778488902, 848270768] },
    { cells: ["Lease liabilities", 21, 301824368, 309265433] },
    { cells: ["Long-term payables", 23, 42148019, 23596226] },
    { cells: ["Employees’ defined benefit obligations", 24, 7989291, 8674000] },

    { bold: true, cells: ["Non-current liabilities", null, 1130450580, 1189806427] },

    { cells: ["Trade and other payables", null, 73372341, 60133757] },
    { cells: ["Accrued expenses and other current liabilities", 26, 92614094, 67460513] },
    { cells: ["Current portion of long-term loans", 22, 122262474, 162367151] },
    { cells: ["Current portion of lease liabilities", 21, 25047877, 30925951] },
    { cells: ["Current portion of long-term payables", 23, 16413077, 9536174] },
    { cells: ["Short-term loan", 25, 40000000, "--"] },
    { cells: ["Advances from customers", 27, 20443714, 24308746] },
    { cells: ["Due to related parties", 37, 85868, 3134] },
    { cells: ["Zakat payable", "34.2", 6933966, 5936643] },

    { bold: true, cells: ["Current liabilities", null, 397173411, 360672069] },

    { bold: true, cells: ["Total liabilities", null, 1527623991, 1550478496] },
    { bold: true, cells: ["Total equity and liabilities", null, 2598936639, 2495527319] }
  ]
};

export const consolidatedIncomeStatementOfProfitAndLoss = {
  headings: ["", "Notes", "2025", "2024"],
  rows: [
    { cells: ["Revenue from contracts with customers", 28, 1146373588, 1048854922] },
    { cells: ["Cost of revenue", 29, -664170563, -591767124] },

    { bold: true, cells: ["Gross profit", null, 482203025, 457087798] },

    { cells: ["General and administrative expenses", 30, -74969451, -81875909] },
    { cells: ["Selling and distribution expenses", 31, -67822759, -55565102] },
    { cells: ["Expected credit reversal/(loss) on trade receivables", 14.2, 306187, -314586] },
    { cells: ["Gain on disposals of property, plant and equipment", "--", "--", -855570] },

    { bold: true, cells: ["Operating profit", null, 339717002, 318476631] },

    { cells: ["Finance costs", 32, -81544823, -96321172] },
    { cells: ["Interest income", 33, 24816236, 34754226] },
    { cells: ["Other income", null, 1756775, 136306] },

    { bold: true, cells: ["Profit before zakat", null, 284745190, 257045991] },

    { cells: ["Zakat expense", 34.2, -6978402, -6144269] },

    { bold: true, cells: ["Profit for the year", null, 277766788, 250901722] },

    { bold: true, cells: ["Other comprehensive (loss)/income", null, null, null] },

    { cells: ["Items that will not be reclassified to profit or loss:", null, null, null] },
    { cells: ["Remeasurements of defined benefit liability", 24, 652869, 951201] },

    { cells: ["Items that are or may be reclassified subsequently to profit or loss:", null, null, null] },
    { cells: ["Cash flow hedge and cost of hedging reserve", 12, -14441323, -12799977] },

    { bold: true, cells: ["Other comprehensive loss for the year", null, -13788454, -11848776] },

    { bold: true, cells: ["Total comprehensive income for the year", null, 263978334, 239052946] },

    { cells: ["Profit attributable to:", null, null, null] },
    { cells: ["Owners of the Company", null, 277443269, 250901722] },
    { cells: ["Non-controlling interests", null, 323519, "--"] },
    { bold: true, cells: ["", null, 277766788, 250901722] },

    { cells: ["Total comprehensive income attributable to:", null, null, null] },
    { cells: ["Owners of the Company", null, 263654815, 239052946] },
    { cells: ["Non-controlling interests", null, 323519, "--"] },
    { bold: true, cells: ["", null, 263978334, 239052946] },

    { bold: true, cells: ["Earnings per share for the year attributable to shareholders of the Parent Company (<i class='riyal-icon'></i>):", null, null, null] },
    { cells: ["Basic", 36.1, 4.99, 4.53] },
    { cells: ["Diluted", "36.2", 4.97, 4.50] }
  ]
};

export const consolidatedEquityStatement = {
  headings: [
    "",
    "Notes",
    "Share capital",
    "Treasury shares",
    "Shareholders’ contribution",
    "Statutory reserve",
    "General reserve",
    "Share based payments reserve",
    "Merger reserve",
    "Cashflow hedge reserve",
    "Total reserves",
    "Retained earnings",
    "Total",
    "Non-controlling interests",
    "Total equity"
  ],
  rows: [
    {
      bold: true,
      cells: [
        "As at 1 January 2025",
        null,
        555000000, -25318388, 6751214, 82823399, "--", 10165117,
        -37554503, 19972563, 75406576, 333209421, 945048823, "--", 945048823
      ]
    },

    { bold: true, cells: ["Total comprehensive income for the year", null, ...Array(13).fill(null)] },

    { cells: ["Profit for the year", null, "--","--","--","--","--","--","--","--","--",277443269,277443269,323519,277766788] },

    { cells: ["Other comprehensive loss for the year", null, "--","--","--","--","--","--","--",-14441323,-14441323,652869,-13788454,"--",-13788454] },

    {
      bold: true,
      cells: ["Total comprehensive income for the year", null, "--","--","--","--","--","--","--",-14441323,-14441323,278096138,263654815,323519,263978334]
    },

    { bold: true, cells: ["Transactions with owners of the Company", null, ...Array(13).fill(null)] },
    { bold: true, cells: ["Contributions and distributions", null, ...Array(13).fill(null)] },

    { cells: ["Dividends", 20, "--","--","--","--","--","--","--","--","--",-152904000,-152904000,"--",-152904000] },

    { cells: ["Equity-settled share-based payment", "19.4", "--","--","--","--","--",11899089,"--","--",11899089,"--",11899089,"--",11899089] },

    {
      bold: true,
      cells: ["Total contributions and distributions", null, "--","--","--","--","--",11899089,"--","--",11899089,-152904000,-141004911,"--",-141004911]
    },

    { bold: true, cells: ["Changes in ownership interests", null, ...Array(13).fill(null)] },

    { cells: ["Acquisition of subsidiary with NCI", null, "--","--","--","--","--","--","--","--","--","--","--",3290402,3290402] },

    {
      bold: true,
      cells: ["Total changes in ownership interests", null, "--","--","--","--","--","--","--","--","--","--","--",3290402,3290402]
    },

    {
      bold: true,
      cells: ["Total transactions with owners of the Company", null, "--","--","--","--","--",11899089,"--",11899089,-152904000,-141004911,3290402,-137714509]
    },

    { cells: ["Transfer to general reserves", null, "--","--","--","--",25090172,"--","--","--",25090172,-25090172,"--","--","--"] },

    {
      bold: true,
      cells: [
        "As at 31 December 2025",
        null,
        555000000, -25318388, 6751214, 82823399, 25090172, 22064206,
        -37554503, 5531240, 97954514, 433311387, 1067698727, 3613921, 1071312648
      ]
    },

    {
      bold: true,
      cells: [
        "As at 1 January 2024",
        null,
        555000000, "--", 6751214, 82823399, "--", 7313714,
        -37554503, 32772540, 85355150, 245030498, 892136862, "--", 892136862
      ]
    },

    { bold: true, cells: ["Total comprehensive income for the year", null, ...Array(13).fill(null)] },

    { cells: ["Profit for the year", null, "--","--","--","--","--","--","--","--","--",250901722,250901722,"--",250901722] },

    { cells: ["Other comprehensive loss for the year", null, "--","--","--","--","--","--","--",-12799977,-12799977,951201,-11848776,"--",-11848776] },

    {
      bold: true,
      cells: ["Total comprehensive income for the year", null, "--","--","--","--","--","--","--",-12799977,-12799977,251852923,239052946,"--",239052946]
    },

    { bold: true, cells: ["Transactions with owners of the Company", null, ...Array(13).fill(null)] },
    { bold: true, cells: ["Contributions and distributions", null, ...Array(13).fill(null)] },

    { cells: ["Dividends", 20, "--","--","--","--","--","--","--","--","--",-163674000,-163674000,"--",-163674000] },

    { cells: ["Purchase of treasury shares", "19.5", "--",-25318388,"--","--","--","--","--","--","--","--",-25318388,"--",-25318388] },

    { cells: ["Equity-settled share-based payment", null, "--","--","--","--",2851403,"--","--",2851403,"--",2851403,"--",2851403] },

    {
      bold: true,
      cells: ["Total transactions with owners of the Company", null, "--",-25318388,"--","--","--",2851403,"--","--",2851403,-163674000,-186140985,"--",-186140985]
    },

    {
      bold: true,
      cells: [
        "As at 31 December 2024",
        null,
        555000000, -25318388, 6751214, 82823399, "--", 10165117,
        -37554503, 19972563, 75406576, 333209421, 945048823, "--", 945048823
      ]
    }
  ]
};