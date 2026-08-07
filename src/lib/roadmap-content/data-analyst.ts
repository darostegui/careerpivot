import type { RoadmapContent } from "./types";

export const dataAnalystContent: RoadmapContent = {
  roleSlug: "data-analyst",
  roleTitle: "Data Analyst",
  topics: [
    {
      id: "sql",
      title: "SQL for trustworthy operational analysis",
      outcome:
        "Answer stakeholder questions with readable SQL that joins the right tables, checks data quality, and produces numbers you can defend.",
      studyPlan: [
        "Translate a business question into dimensions, measures, date grain, entities, and the exact denominator needed for the decision.",
        "Practice filtering, grouping, joins, CASE logic, window functions, and common table expressions on data that looks like real business systems.",
        "Validate every query with spot checks for NULLs, duplicates, dropped rows, and definition drift before trusting the result.",
        "Rewrite at least one complex query for clarity so another analyst can maintain it without you narrating each step.",
      ],
      project:
        "Analyze orders, refunds, and customer behavior for a fictional marketplace using a set of reusable SQL queries, then publish three defensible findings and one follow-up question the data cannot answer yet.",
      resources: [
        {
          title: "SQLBolt",
          provider: "SQLBolt",
          url: "https://sqlbolt.com/",
          access: "Free",
          format: "Practice",
          note: "Fast interactive drills for the core syntax before you move into messy analytical queries.",
        },
        {
          title: "Mode SQL tutorial",
          provider: "Mode",
          url: "https://mode.com/sql-tutorial/",
          access: "Free",
          format: "Course",
          note: "Good bridge from syntax basics to realistic analysis patterns and business-style examples.",
        },
        {
          title: "PostgreSQL documentation",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/index.html",
          access: "Free",
          format: "Documentation",
          note: "Use it as your source of truth for functions, date logic, joins, and performance concepts once you start building real queries.",
        },
      ],
      checkpoint:
        "A reviewer can run your SQL, reproduce the headline numbers, and see where you checked for data-quality issues before making a recommendation.",
    },
    {
      id: "spreadsheets",
      title: "Spreadsheets for audited business models",
      outcome:
        "Turn CSV exports into reliable models that are easy to inspect, easy to update, and difficult to break accidentally.",
      studyPlan: [
        "Structure workbooks with clear input, calculation, output, and assumptions areas so a stakeholder can follow the logic.",
        "Use lookup functions, conditional formulas, pivots, named ranges, and validation rules to reduce manual cleanup and hidden logic.",
        "Add control totals, exception checks, and simple documentation so refreshes expose bad source data quickly.",
        "Practice presenting one workbook to a teammate and note where your layout or formulas create confusion.",
      ],
      project:
        "Build a monthly operating dashboard workbook for a small service business with cleaned source tabs, assumptions, KPIs, a pivot-driven management summary, and visible QA checks.",
      resources: [
        {
          title: "Excel help & learning",
          provider: "Microsoft",
          url: "https://support.microsoft.com/en-us/excel",
          access: "Free",
          format: "Documentation",
          note: "Use Microsoft’s official guides for formulas, tables, pivots, charts, and validation workflows.",
        },
        {
          title: "Google Sheets learning center",
          provider: "Google",
          url: "https://support.google.com/a/users/answer/9282720",
          access: "Free",
          format: "Course",
          note: "Helpful when you need collaborative spreadsheet habits and formula patterns that transfer to business work.",
        },
        {
          title: "Excel video training",
          provider: "Microsoft",
          url: "https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb",
          access: "Free",
          format: "Practice",
          note: "Short guided exercises for tables, pivots, formulas, and charting you can recreate in your own workbook.",
        },
      ],
      checkpoint:
        "Someone else can refresh your workbook, inspect the checks, and understand which cells are inputs, formulas, outputs, and assumptions.",
    },
    {
      id: "statistics",
      title: "Statistics for decision quality",
      outcome:
        "Use descriptive statistics, comparisons, and uncertainty honestly so your analysis supports decisions without overclaiming certainty.",
      studyPlan: [
        "Review averages, medians, percentiles, spread, sampling, and distributions using business examples rather than abstract formulas alone.",
        "Visualize the data before summarizing it so outliers, skew, and segmentation issues are visible.",
        "Practice confidence intervals, significance tests, and effect size as tools for decision support—not automatic proof.",
        "Write conclusions that state population, timeframe, metric definition, uncertainty, and at least one important limitation.",
      ],
      project:
        "Compare support-ticket resolution times before and after a process change, showing the distribution, uncertainty, likely confounders, and whether the change appears operationally meaningful.",
      resources: [
        {
          title: "Statistics and probability",
          provider: "Khan Academy",
          url: "https://www.khanacademy.org/math/statistics-probability",
          access: "Free",
          format: "Course",
          note: "Strong free path from descriptive statistics through inference without assuming a recent math background.",
        },
        {
          title: "Seeing Theory",
          provider: "Brown University",
          url: "https://seeing-theory.brown.edu/",
          access: "Free",
          format: "Practice",
          note: "Interactive visual explanations help you build intuition for probability and inference concepts.",
        },
        {
          title: "OpenIntro Statistics",
          provider: "OpenIntro",
          url: "https://www.openintro.org/book/os/",
          access: "Free",
          format: "Documentation",
          note: "Use the free textbook examples and exercises when you want a more structured written reference.",
        },
      ],
      checkpoint:
        "Your write-up includes a distribution view, a clear comparison, an uncertainty statement, and a limitation that could change the decision if new evidence appeared.",
    },
    {
      id: "data-visualization",
      title: "Data visualization for stakeholder action",
      outcome:
        "Choose charts and dashboards that make the next decision obvious instead of overwhelming the audience with every available metric.",
      studyPlan: [
        "Match common business questions—trend, ranking, share, distribution, relationship—to chart types with a reason for each choice.",
        "Use titles, annotations, labels, sorting, and restrained color to make the intended message scannable in seconds.",
        "Design a dashboard around a single audience and workflow, including what they need to notice first and what detail can stay secondary.",
        "Practice presenting the same result to an analyst peer and to a non-technical manager; note what needs to change.",
      ],
      project:
        "Publish a transit, ecommerce, or workforce dashboard with a headline KPI, segment view, trend view, and written recommendation for a specific manager or operations team.",
      resources: [
        {
          title: "From Data to Viz",
          provider: "From Data to Viz",
          url: "https://www.data-to-viz.com/",
          access: "Free",
          format: "Documentation",
          note: "Start with the analytical question and use the guide to avoid mismatched chart choices.",
        },
        {
          title: "Tableau Public",
          provider: "Tableau",
          url: "https://public.tableau.com/",
          access: "Free",
          format: "Practice",
          note: "Useful for portfolio dashboards and quick experiments with visual hierarchy and interaction.",
        },
        {
          title: "Looker Studio help",
          provider: "Google",
          url: "https://support.google.com/looker-studio/",
          access: "Free",
          format: "Documentation",
          note: "Helpful for lightweight dashboard publishing and stakeholder-friendly reporting workflows.",
        },
      ],
      checkpoint:
        "A stakeholder can look at your dashboard, tell you the key finding, and name the action they would take next without hearing your full presentation first.",
    },
    {
      id: "business-communication",
      title: "Business communication for analytical recommendations",
      outcome:
        "Convert analysis into concise recommendations that describe the decision, evidence, caveats, and next step in language the audience can act on.",
      studyPlan: [
        "Rewrite open-ended requests into a decision statement, audience, timeframe, success measure, and explicit business question.",
        "Lead with the answer, then the evidence, then the caveats; trim background detail that does not change the decision.",
        "Practice chart titles and memo language that separate observed facts from interpretation or recommendation.",
        "Document metric definitions, data sources, refresh cadence, and ownership so others can trust and reuse your work.",
      ],
      project:
        "Prepare a short decision memo and two-slide executive readout for a nonprofit or small business choosing where to focus outreach, staffing, or inventory effort next month.",
      resources: [
        {
          title: "Plain language guidelines",
          provider: "PlainLanguage.gov",
          url: "https://www.plainlanguage.gov/guidelines/",
          access: "Free",
          format: "Documentation",
          note: "Use it to tighten sentences, structure, headings, and calls to action in stakeholder-facing analysis.",
        },
        {
          title: "Storytelling with Data resources",
          provider: "Storytelling with Data",
          url: "https://www.storytellingwithdata.com/resources",
          access: "Free",
          format: "Documentation",
          note: "Free examples and exercises for turning charts into persuasive, trustworthy communication.",
        },
        {
          title: "Google Data Analytics certificate overview",
          provider: "Google",
          url: "https://www.coursera.org/professional-certificates/google-data-analytics",
          access: "Free audit",
          format: "Course",
          note: "Audit the communication and case-study portions if you want structured practice packaging analysis for employers.",
        },
      ],
      checkpoint:
        "Your memo states one recommendation, the evidence behind it, the biggest caveat, and the precise decision or action you want from the audience.",
    },
    {
      id: "python-basics",
      title: "Python basics for repeatable analysis",
      outcome:
        "Automate cleaning, reshaping, and exploratory work that would be slow or fragile in a spreadsheet, while keeping the logic understandable to others.",
      studyPlan: [
        "Practice variables, loops, functions, files, and notebooks only insofar as they help you clean and analyze tabular data reproducibly.",
        "Load CSV data with pandas, inspect dtypes and missing values, standardize categories, parse dates, and document each cleaning choice.",
        "Use groupby, merge, pivot, and plotting operations to reproduce a spreadsheet analysis and verify both results agree.",
        "Package the work in a notebook or script with markdown, comments, and run order that a hiring manager or teammate can follow easily.",
      ],
      project:
        "Clean and analyze a job-applications, customer-support, or ecommerce dataset in pandas, then publish a notebook with data validation, reusable transforms, visual summaries, and a final recommendation.",
      resources: [
        {
          title: "Python tutorial",
          provider: "Python Software Foundation",
          url: "https://docs.python.org/3/tutorial/",
          access: "Free",
          format: "Documentation",
          note: "Use it as the dependable reference for the language basics behind your analysis scripts.",
        },
        {
          title: "pandas getting started tutorials",
          provider: "pandas",
          url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/",
          access: "Free",
          format: "Practice",
          note: "Task-based official tutorials for loading, cleaning, filtering, grouping, and plotting data.",
        },
        {
          title: "Python course",
          provider: "Kaggle",
          url: "https://www.kaggle.com/learn/python",
          access: "Free",
          format: "Course",
          note: "Short hands-on lessons that map well to the kind of coding data analysts need first.",
        },
      ],
      checkpoint:
        "A reviewer can rerun your notebook or script from raw data, inspect the cleaning logic, and reproduce the final tables and charts without manual intervention.",
    },
  ],
};
