import type { RoadmapContent } from "../types";

export const technicalWriterContent: RoadmapContent = {
  roleSlug: "technical-writer",
  roleTitle: "Technical Writer",
  topics: [
    {
      id: "audience-and-information-modeling",
      title: "Audience analysis and information architecture",
      outcome: "Structure technical information so the right reader can find, understand, and apply it at the moment of need.",
      studyPlan: [
        "Interview support, product, and engineering partners to identify reader tasks, vocabulary, constraints, and failure costs.",
        "Inventory existing content, mark duplication and gaps, and define a content hierarchy by task.",
        "Create a documentation information model with content types, metadata, navigation, and ownership.",
        "Test findability with five realistic search tasks and revise labels or page structure.",
      ],
      project: "Restructure documentation for a fictional developer platform: publish a content inventory, audience matrix, sitemap, navigation labels, and task-based usability findings.",
      resources: [
        { title: "Documentation system guide", provider: "Diátaxis", url: "https://diataxis.fr/", access: "Free", format: "Documentation", note: "Use tutorials, how-to guides, explanation, and reference as distinct user needs." },
        { title: "Content strategy basics", provider: "Google Technical Writing", url: "https://developers.google.com/tech-writing/one", access: "Free", format: "Course", note: "Practice audience-focused structure, clarity, and revision." },
        { title: "Web accessibility resources", provider: "W3C WAI", url: "https://www.w3.org/WAI/", access: "Free", format: "Documentation", note: "Apply inclusive structure and navigation to documentation sites." },
      ],
      checkpoint: "At least 4 of 5 readers find the correct guide for each task, and every major content area has an owner and review trigger.",
    },
    {
      id: "api-and-developer-documentation",
      title: "API and developer documentation",
      outcome: "Help a developer successfully authenticate, make a valid request, handle errors, and integrate an API without hand-holding.",
      studyPlan: [
        "Read an API specification and map authentication, resources, parameters, responses, limits, and error contracts.",
        "Run every example against a sandbox or mocked endpoint and record prerequisites and expected output.",
        "Write a quickstart, task guide, reference explanation, and troubleshooting section for one user journey.",
        "Ask a developer unfamiliar with the API to follow the docs and fix every blocker they encounter.",
      ],
      project: "Document a small REST API with an OpenAPI reference, curl and JavaScript quickstarts, authentication guidance, error examples, and a tested troubleshooting guide.",
      resources: [
        { title: "OpenAPI Specification", provider: "OpenAPI Initiative", url: "https://spec.openapis.org/oas/latest.html", access: "Free", format: "Documentation", note: "Use the specification to understand and validate API contracts." },
        { title: "Write the Docs guide", provider: "Write the Docs", url: "https://www.writethedocs.org/guide/", access: "Free", format: "Documentation", note: "Review practical guidance on planning, writing, and maintaining docs." },
        { title: "MDN HTTP documentation", provider: "MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP", access: "Free", format: "Documentation", note: "Verify HTTP semantics, status codes, headers, and caching language." },
      ],
      checkpoint: "A new developer completes the quickstart from a clean environment, receives the expected response, and resolves one intentional error using only the docs.",
    },
    {
      id: "procedures-and-task-writing",
      title: "Task-oriented procedures and troubleshooting",
      outcome: "Write operational guidance that lets a reader complete a high-stakes task safely and recover from common failures.",
      studyPlan: [
        "Observe the task and identify prerequisites, decision points, irreversible actions, and expected verification.",
        "Separate conceptual explanation from numbered action steps and use exact UI labels or commands.",
        "Add warnings, permissions, rollback, known errors, and a verification step for each procedure.",
        "Have a first-time operator execute the procedure while you record ambiguity and missing context.",
      ],
      project: "Create a production-safe database backup and restore runbook with prerequisites, commands, verification queries, failure branches, rollback notes, and escalation contacts.",
      resources: [
        { title: "Google technical writing course", provider: "Google", url: "https://developers.google.com/tech-writing", access: "Free", format: "Course", note: "Practice concise sentences, active voice, lists, and task clarity." },
        { title: "SRE workbook", provider: "Google", url: "https://sre.google/workbook/table-of-contents/", access: "Free", format: "Documentation", note: "Study operational readiness, incident response, and safe runbook patterns." },
        { title: "Microsoft style guide", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/style-guide/welcome/", access: "Free", format: "Documentation", note: "Use the terminology and voice guidance for consistent product language." },
      ],
      checkpoint: "A qualified reader completes the runbook without author intervention and confirms the final state using the documented verification step.",
    },
    {
      id: "docs-as-code",
      title: "Docs-as-code workflow",
      outcome: "Maintain versioned, reviewable documentation alongside software with repeatable quality checks.",
      studyPlan: [
        "Learn Git branching, pull requests, Markdown conventions, front matter, and the repository's build command.",
        "Create a documentation contribution workflow covering issue intake, ownership, review, and release notes.",
        "Add link, spelling, style, and sample-code checks that catch realistic documentation defects.",
        "Make a change through a pull request, respond to review, and publish a concise change summary.",
      ],
      project: "Set up a small versioned documentation site for a CLI tool with contribution guide, content templates, CI checks, preview instructions, and two reviewed changes.",
      resources: [
        { title: "The Missing Semester: Git", provider: "MIT", url: "https://missing.csail.mit.edu/2020/version-control/", access: "Free", format: "Course", note: "Practice the Git workflow needed for collaborative docs maintenance." },
        { title: "Vale prose linter", provider: "Vale", url: "https://vale.sh/docs/", access: "Free", format: "Documentation", note: "Use style rules to catch recurring language problems automatically." },
        { title: "GitHub Docs contribution guide", provider: "GitHub", url: "https://docs.github.com/en/get-started/learning-about-github", access: "Free", format: "Documentation", note: "Study a mature docs-as-code workflow and adapt its review practices." },
      ],
      checkpoint: "A pull request preview builds successfully, automated checks catch a broken link and style violation, and reviewers can identify the owner and release impact.",
    },
    {
      id: "content-quality-and-accessibility",
      title: "Content quality, accessibility, and localization readiness",
      outcome: "Produce clear, inclusive content that works for screen readers, translation, search, and readers with limited context.",
      studyPlan: [
        "Audit headings, link text, tables, alt text, terminology, sentence length, and reading order in a representative set.",
        "Rewrite jargon, idioms, ambiguous pronouns, and culturally specific examples for plain-language clarity.",
        "Create a terminology list and content rules for variables, UI strings, dates, units, and translatable content.",
        "Review with accessibility tools and a second reader, then measure improvements against the original sample.",
      ],
      project: "Remediate a product help center sample: deliver before/after pages, terminology glossary, accessibility findings, localization notes, and a measurable quality rubric.",
      resources: [
        { title: "Plain language guidelines", provider: "U.S. Government", url: "https://www.plainlanguage.gov/guidelines/", access: "Free", format: "Documentation", note: "Apply direct, reader-centered language to complex instructions." },
        { title: "Web accessibility tutorials", provider: "W3C WAI", url: "https://www.w3.org/WAI/tutorials/", access: "Free", format: "Documentation", note: "Check semantic structure, images, tables, and forms in documentation." },
        { title: "Localization fundamentals", provider: "Mozilla", url: "https://mozilla-l10n.github.io/localizer-documentation/", access: "Free", format: "Documentation", note: "Understand string extraction, context, and translation-friendly writing." },
      ],
      checkpoint: "The revised sample passes a keyboard and heading-structure review, removes all flagged idioms, and reduces average task-reading time in a small reader test.",
    },
    {
      id: "content-operations-and-measurement",
      title: "Content operations and documentation measurement",
      outcome: "Run a sustainable documentation program with accountable reviews, useful feedback loops, and evidence of reader success.",
      studyPlan: [
        "Define content owners, review cadence, freshness rules, deprecation states, and escalation paths.",
        "Choose task-success measures such as search exits, support deflection, completion, feedback, and broken links.",
        "Create a dashboard or review sheet that segments signals by page type, audience, and release.",
        "Use one quarter of sample data to prioritize updates and write a decision memo explaining trade-offs.",
      ],
      project: "Design a documentation operations playbook for an open-source project with ownership matrix, lifecycle states, issue intake, quality scorecard, and quarterly improvement plan.",
      resources: [
        { title: "Documentation maturity model", provider: "Write the Docs", url: "https://www.writethedocs.org/guide/docs-as-code/#documentation-maturity-model", access: "Free", format: "Documentation", note: "Use maturity thinking to sequence process improvements realistically." },
        { title: "Google Search Console", provider: "Google", url: "https://search.google.com/search-console/about", access: "Free", format: "Practice", note: "Use search queries and page performance as one input, not the sole definition of success." },
        { title: "Content design principles", provider: "GOV.UK", url: "https://www.gov.uk/guidance/content-design", access: "Free", format: "Documentation", note: "Study evidence-led content iteration and service ownership." },
      ],
      checkpoint: "Your operating model assigns an owner and review date to every critical page, and your scorecard identifies three updates justified by reader evidence.",
    },
  ],
};
