import type { RoadmapContent } from "../types";

export const financialAnalystContent: RoadmapContent = {
  roleSlug: "financial-analyst",
  roleTitle: "Financial Analyst",
  topics: [
    {
      id: "financial-modeling",
      title: "Financial modeling",
      outcome:
        "Build an auditable three-statement model that links operating assumptions to cash flow, valuation, and decision-ready scenarios.",
      studyPlan: [
        "Map revenue, cost, working-capital, and fixed-asset drivers before entering formulas; keep assumptions separate from calculations.",
        "Construct income statement, balance sheet, and cash-flow schedules with checks that confirm the statements balance.",
        "Add base, downside, and upside cases using clearly labeled switches, sensitivity tables, and consistent sign conventions.",
        "Review the model as a user: trace key outputs, test extreme inputs, document sources, and lock only cells that should not be edited.",
      ],
      project:
        "Model a fictional subscription software company for five years, including customer cohorts, hiring plan, deferred revenue, capex, cash runway, and a scenario-based valuation summary.",
      resources: [
        {
          title: "Financial Modeling Guidelines",
          provider: "Financial Modeling Institute",
          url: "https://pages.stern.nyu.edu/~adamodar/",
          access: "Free",
          format: "Documentation",
          note: "Practical conventions for model structure, formatting, assumptions, and auditability.",
        },
        {
          title: "Financial Markets",
          provider: "Coursera / Yale University",
          url: "https://www.coursera.org/learn/financial-markets-global",
          access: "Free audit",
          format: "Course",
          note: "Optional context for capital markets, valuation, risk, and financial instruments.",
        },
        {
          title: "Excel Help & Learning",
          provider: "Microsoft",
          url: "https://support.microsoft.com/en-us/excel",
          access: "Free",
          format: "Documentation",
          note: "Reference for tables, formulas, scenarios, charts, and error-checking features.",
        },
      ],
      checkpoint:
        "A five-year workbook with a balance check, three scenarios, sensitivity table, source notes, and a one-page summary that another analyst can reproduce.",
    },
    {
      id: "management-reporting",
      title: "Management reporting",
      outcome:
        "Turn monthly actuals and budget data into a concise variance narrative that explains drivers, risks, and recommended actions.",
      studyPlan: [
        "Define the reporting calendar, ownership, chart of accounts mapping, materiality thresholds, and close-status labels.",
        "Reconcile actuals to the general ledger, budget, and prior period; preserve a source-data snapshot and adjustment log.",
        "Calculate price, volume, mix, headcount, and timing variances, separating controllable drivers from accounting timing.",
        "Write an executive pack with trend visuals, commentary, forecast changes, owners, and dated follow-up actions.",
      ],
      project:
        "Produce a monthly management pack for a regional services business: P&L bridge, working-capital dashboard, budget variance workbook, close checklist, and CFO-ready commentary.",
      resources: [
        {
          title: "Financial Accounting Fundamentals",
          provider: "OpenLearn",
          url: "https://www.open.edu/openlearn/money-business/financial-accounting/content-section-overview",
          access: "Free",
          format: "Course",
          note: "Free modules for understanding statements, transactions, and accounting terminology.",
        },
        {
          title: "Management Accounting",
          provider: "AccountingCoach",
          url: "https://www.accountingcoach.com/managerial-accounting/explanation",
          access: "Free",
          format: "Documentation",
          note: "Plain-language explanations of cost behavior, budgets, and variance analysis.",
        },
        {
          title: "FP&A Guide",
          provider: "Association for Financial Professionals",
          url: "https://www.afponline.org/",
          access: "Free",
          format: "Documentation",
          note: "Optional professional reference for planning, forecasting, and performance management.",
        },
      ],
      checkpoint:
        "A reporting pack with reconciled source totals, three quantified variance drivers, materiality-based commentary, and an action log with accountable owners.",
    },
    {
      id: "valuation-and-investment-analysis",
      title: "Valuation and investment analysis",
      outcome:
        "Evaluate an investment using defensible cash-flow assumptions, comparable evidence, risk adjustments, and a transparent recommendation.",
      studyPlan: [
        "Practice discounted cash flow mechanics: free cash flow, WACC inputs, terminal value, and sensitivity to key assumptions.",
        "Collect comparable-company and precedent-transaction data, normalize definitions, and record date and source for every multiple.",
        "Build an investment case with operating thesis, catalysts, downside cases, liquidity needs, and explicit risks.",
        "Present a recommendation that distinguishes facts, estimates, judgment, and the conditions that would change the decision.",
      ],
      project:
        "Prepare an investment committee memo on a fictional acquisition target, combining DCF, trading comparables, synergy assumptions, accretion/dilution, and a downside case.",
      resources: [
        {
          title: "Investment Valuation",
          provider: "NYU Stern / Aswath Damodaran",
          url: "https://pages.stern.nyu.edu/~adamodar/",
          access: "Free",
          format: "Documentation",
          note: "Open valuation lectures, spreadsheets, datasets, and reference material from a recognized finance professor.",
        },
        {
          title: "Corporate Finance",
          provider: "Coursera / University of Pennsylvania",
          url: "https://www.coursera.org/browse/business/finance",
          access: "Free audit",
          format: "Course",
          note: "Structured practice for NPV, risk, capital budgeting, and financing decisions.",
        },
        {
          title: "SEC EDGAR Company Search",
          provider: "U.S. Securities and Exchange Commission",
          url: "https://www.sec.gov/edgar/searchedgar/companysearch",
          access: "Free",
          format: "Practice",
          note: "Primary-source filings for building a documented comparable-company dataset.",
        },
      ],
      checkpoint:
        "A dated investment memo with linked assumptions, at least two valuation methods, downside sensitivity, source citations, and a recommendation with a clear hurdle.",
    },
    {
      id: "forecasting-and-scenarios",
      title: "Forecasting and scenarios",
      outcome:
        "Create a rolling forecast that uses operational drivers, forecast-error tracking, and scenarios to support timely resource decisions.",
      studyPlan: [
        "Translate business activity into drivers such as units, conversion, utilization, headcount, churn, price, and payment timing.",
        "Compare run-rate, trend, seasonal, and driver-based methods; choose the simplest method that fits the decision.",
        "Maintain a forecast-versus-actual log, quantify bias and error, and investigate structural changes rather than tweaking blindly.",
        "Run a monthly scenario review with triggers, probability ranges, cash implications, and pre-agreed management actions.",
      ],
      project:
        "Build a rolling 12-month cash forecast for a manufacturer with seasonal demand, supplier deposits, payroll, debt service, and three liquidity scenarios.",
      resources: [
        {
          title: "Forecasting: Principles and Practice",
          provider: "Rob J. Hyndman and George Athanasopoulos",
          url: "https://otexts.com/fpp3/",
          access: "Free",
          format: "Documentation",
          note: "Free, rigorous text covering time series, accuracy, regression, and hierarchical forecasts.",
        },
        {
          title: "Business Forecasting",
          provider: "Coursera / Macquarie University",
          url: "https://www.coursera.org/browse/data-science",
          access: "Free audit",
          format: "Course",
          note: "Optional guided exercises for selecting and evaluating forecasting approaches.",
        },
        {
          title: "Cash Flow Forecasting",
          provider: "Sage Advice",
          url: "https://www.sage.com/en-us/",
          access: "Free",
          format: "Documentation",
          note: "Accessible reference for building and using a practical cash forecast.",
        },
      ],
      checkpoint:
        "A rolling forecast file with 12 months, driver definitions, forecast-error metrics for at least three periods, scenario triggers, and documented actions.",
    },
    {
      id: "controls-and-compliance",
      title: "Controls and compliance",
      outcome:
        "Protect financial reporting quality by documenting control ownership, evidence, review trails, and appropriate handling of sensitive data.",
      studyPlan: [
        "Learn the purpose of reconciliations, segregation of duties, approval limits, access reviews, and evidence retention.",
        "Create a risk-and-control matrix linking financial assertions to preventive or detective controls and accountable owners.",
        "Test a sample of transactions for authorization, completeness, cutoff, duplicate payment, and supporting documentation.",
        "Write exceptions clearly, rate severity, assign remediation, and preserve an evidence index without exposing unnecessary personal data.",
      ],
      project:
        "Design a procure-to-pay control pack for a fictional nonprofit: process map, risk-control matrix, vendor master checklist, sample test sheet, exception log, and remediation tracker.",
      resources: [
        {
          title: "Internal Control—Integrated Framework",
          provider: "COSO",
          url: "https://www.coso.org/guidance-on-ic",
          access: "Free",
          format: "Documentation",
          note: "Authoritative framework for thinking about control environment, risk, activities, information, and monitoring.",
        },
        {
          title: "Sarbanes-Oxley Act",
          provider: "U.S. Securities and Exchange Commission",
          url: "https://www.sec.gov/spotlight/sarbanes-oxley.htm",
          access: "Free",
          format: "Documentation",
          note: "Primary-source overview of public-company reporting and internal-control requirements.",
        },
        {
          title: "Accounting Data Analytics",
          provider: "AICPA & CIMA",
          url: "https://www.aicpa-cima.com/resources/landing/accounting-data-analytics",
          access: "Free",
          format: "Documentation",
          note: "Optional reference for applying analytics to audit, controls, and accounting evidence.",
        },
      ],
      checkpoint:
        "A control matrix and test workbook covering at least 20 sampled transactions, with evidence links, exception ratings, owners, and remediation dates.",
    },
  ],
};
