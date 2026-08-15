import type { RoadmapContent } from "./types";

export const qaAutomationEngineerContent: RoadmapContent = {
  roleSlug: "qa-automation-engineer",
  roleTitle: "QA Automation Engineer",
  topics: [
    {
      id: "testing-fundamentals",
      title: "Testing fundamentals and release risk",
      outcome:
        "Model quality as release risk: choose the right test level, report issues clearly, and explain why a failure matters to users or operations.",
      studyPlan: [
        "Turn user stories into risks, acceptance criteria, smoke coverage, regression checks, and explicit non-goals for testing.",
        "Compare unit, integration, API, end-to-end, exploratory, accessibility, and performance testing by the signal each provides and the maintenance it costs.",
        "Practice writing bug reports that include evidence, impact, environment, suspected scope, and the quickest reproduction path for engineers.",
        "Review a small release plan and identify which checks belong before merge, before deployment, and after deployment.",
      ],
      project:
        "Test a demo scheduling or checkout app manually and produce a release-readiness pack with a one-page strategy, risk matrix, smoke checklist, regression scope, and at least five developer-ready defects.",
      resources: [
        {
          title: "Certified Tester Foundation Level syllabus",
          provider: "ISTQB",
          url: "https://www.istqb.org/certifications/certified-tester-foundation-level",
          access: "Free",
          format: "Documentation",
          note: "Use the syllabus as a vocabulary and coverage checklist even if you never sit the exam.",
        },
        {
          title: "Software testing glossary",
          provider: "Ministry of Testing",
          url: "https://www.ministryoftesting.com/software-testing-glossary",
          access: "Free",
          format: "Documentation",
          note: "Keep it open while you practice concise, shared language for defects, risks, and coverage decisions.",
        },
        {
          title: "Explore It! excerpts and resources",
          provider: "James Bach Institute",
          url: "https://www.satisfice.com/explore-it",
          access: "Free",
          format: "Practice",
          note: "Useful when you want your manual exploration to produce focused observations instead of random clicking.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A reviewer can understand what you tested, what you intentionally did not test, what failed, and whether shipping would be responsible based on your evidence. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "javascript-or-python",
      title: "JavaScript or Python for maintainable test code",
      outcome:
        "Write automation code that is readable, reusable, and diagnosable instead of a pile of brittle scripts.",
      studyPlan: [
        "Choose JavaScript/TypeScript or Python and practice functions, modules, classes or objects, collections, files, environment variables, and error handling in the context of tests.",
        "Learn package management, dependency pinning, formatting, linting, and project structure so your test repo feels professional from the start.",
        "Write helper libraries for data factories, auth setup, cleanup, and assertions while avoiding hidden coupling between tests.",
        "Add unit tests for your own utilities so the code supporting automation is as trustworthy as the product checks themselves.",
      ],
      project:
        "Build a reusable test-data toolkit that creates realistic valid and invalid user records, supports deterministic seeds, exports JSON or CSV fixtures, and includes a tested CLI.",
      resources: [
        {
          title: "The Modern JavaScript Tutorial",
          provider: "javascript.info",
          url: "https://javascript.info/",
          access: "Free",
          format: "Course",
          note: "Strong path for language fundamentals, async behavior, modules, and classes used in browser automation stacks.",
        },
        {
          title: "Python tutorial",
          provider: "Python Software Foundation",
          url: "https://docs.python.org/3/tutorial/",
          access: "Free",
          format: "Course",
          note: "Reliable reference for functions, modules, files, exceptions, and package structure when building test tooling.",
        },
        {
          title: "pytest documentation",
          provider: "pytest",
          url: "https://docs.pytest.org/en/stable/",
          access: "Free",
          format: "Documentation",
          note: "Use fixtures, parametrization, and markers to keep suites expressive as they grow.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your automation repository has clear setup instructions, reusable utilities, tests for the helpers themselves, and naming that makes intent obvious to a teammate. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "api-testing",
      title: "API testing and contract verification",
      outcome:
        "Validate service behavior at the API boundary by checking schemas, auth, state transitions, integrations, and failure handling with production-like realism.",
      studyPlan: [
        "Read an OpenAPI document and identify required fields, auth flows, status codes, idempotency rules, pagination, and cross-entity relationships.",
        "Design positive, negative, boundary, and permission tests that prove the API contract rather than just the happy path.",
        "Automate schema checks, auth setup, request correlation, environment configuration, and data cleanup so the suite stays repeatable.",
        "Add assertions for downstream side effects such as queues, database state, or audit records whenever the API behavior depends on them.",
      ],
      project:
        "Create an API quality pack for a demo service with authenticated flows, schema validation, data seeding, negative cases, and a test report that groups failures by contract, data, and auth issues.",
      resources: [
        {
          title: "Postman learning center",
          provider: "Postman",
          url: "https://learning.postman.com/docs/getting-started/introduction/",
          access: "Free",
          format: "Course",
          note: "Use it for fast manual exploration before you automate the same scenarios in code.",
        },
        {
          title: "MDN HTTP",
          provider: "MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
          access: "Free",
          format: "Documentation",
          note: "Reference methods, status codes, auth headers, caching, and request semantics while designing tests.",
        },
        {
          title: "OpenAPI specification",
          provider: "OpenAPI Initiative",
          url: "https://spec.openapis.org/oas/latest.html",
          access: "Free",
          format: "Documentation",
          note: "Use the spec as the source of truth for schemas and behavior that your automation should verify.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A reviewer can run your suite, inspect the generated report, and see that it verifies contract correctness, authorization, and data behavior—not just response codes. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "browser-automation",
      title: "Browser automation for critical workflows",
      outcome:
        "Automate user journeys in a way that survives UI change, captures diagnostics, and highlights customer-impacting failures rather than cosmetic noise.",
      studyPlan: [
        "Use accessibility-oriented locators, explicit assertions, fixtures, and test isolation to make end-to-end checks stable and readable.",
        "Separate smoke coverage from deeper regression flows so you can trade confidence against runtime deliberately.",
        "Capture screenshots, traces, videos, console logs, and network details only where they help failure diagnosis.",
        "Practice debugging flaky tests by identifying whether the problem is data setup, timing, environment instability, or a real product bug.",
      ],
      project:
        "Automate three revenue- or trust-critical journeys in a public demo app, including login, validation failure handling, and one CRUD or checkout path, with traces saved for intentional failures.",
      resources: [
        {
          title: "Playwright documentation",
          provider: "Microsoft",
          url: "https://playwright.dev/docs/intro",
          access: "Free",
          format: "Documentation",
          note: "Follow the guides for locators, assertions, fixtures, projects, retries, and trace viewer.",
        },
        {
          title: "Cypress app testing guides",
          provider: "Cypress",
          url: "https://docs.cypress.io/app/get-started/why-cypress",
          access: "Free",
          format: "Documentation",
          note: "Useful as a second perspective on browser automation design decisions and debugging practices.",
        },
        {
          title: "ARIA Authoring Practices Guide",
          provider: "W3C",
          url: "https://www.w3.org/WAI/ARIA/apg/",
          access: "Free",
          format: "Documentation",
          note: "Helps you design locators and assertions around accessible behavior, not fragile DOM structure.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your suite runs headlessly, produces useful failure artifacts, and demonstrates that your selectors and assertions are tied to user behavior rather than page layout. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "ci-cd",
      title: "CI/CD quality gates and diagnostics",
      outcome:
        "Run automation where teams actually need it—inside pull requests and deployment flows—with fast signal, trustworthy artifacts, and clear failure ownership.",
      studyPlan: [
        "Break the pipeline into unit, API, browser, and packaging stages with sensible timeouts, caches, and parallel execution.",
        "Store artifacts such as reports, traces, screenshots, and logs so failed builds are diagnosable without rerunning everything locally.",
        "Use secrets, environment variables, concurrency, and protected environments safely while keeping the pipeline reproducible.",
        "Practice triaging a red pipeline: identify whether the cause is test code, environment drift, flaky dependencies, or a true product regression.",
      ],
      project:
        "Add a GitHub Actions workflow to your automation suite that runs fast checks on pull requests, deeper browser coverage on demand or nightly, and uploads diagnostics for every failed job.",
      resources: [
        {
          title: "GitHub Actions documentation",
          provider: "GitHub",
          url: "https://docs.github.com/en/actions",
          access: "Free",
          format: "Documentation",
          note: "Reference reusable workflows, matrices, artifacts, environments, secrets, and concurrency controls.",
        },
        {
          title: "Test with GitHub Actions",
          provider: "GitHub Skills",
          url: "https://github.com/skills/test-with-actions",
          access: "Free",
          format: "Practice",
          note: "Use the exercise to ground your first workflow before adapting it to a multi-layer quality pipeline.",
        },
        {
          title: "Continuous integration guide",
          provider: "Playwright",
          url: "https://playwright.dev/docs/ci",
          access: "Free",
          format: "Documentation",
          note: "Helpful for browser test timeouts, reporters, worker settings, and CI environment expectations.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A pull request shows passing status checks when healthy and enough uploaded diagnostics to debug at least one intentionally broken run. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "test-design",
      title: "Test design for lean regression suites",
      outcome:
        "Pick the smallest set of tests that meaningfully reduces release risk by modeling boundaries, states, combinations, and likely failure paths.",
      studyPlan: [
        "Translate features into a coverage map using risk, impact, change frequency, and customer workflow importance.",
        "Practice equivalence partitioning, boundary values, decision tables, state transitions, and pairwise combinations on real requirements.",
        "Review existing tests and identify duplication, implementation-detail assertions, and missing high-value scenarios.",
        "Write a recommendation for what belongs in smoke, regression, contract, and exploratory coverage for one product area.",
      ],
      project:
        "Design a compact regression strategy for an appointment-booking flow with a risk matrix, state model, decision table, and a reduced high-value suite that you can defend to engineering and product.",
      resources: [
        {
          title: "Certified Tester Foundation Level syllabus",
          provider: "ISTQB",
          url: "https://www.istqb.org/certifications/certified-tester-foundation-level",
          access: "Free",
          format: "Documentation",
          note: "Focus on test techniques and use the examples to justify why one scenario matters more than another.",
        },
        {
          title: "Google testing blog",
          provider: "Google",
          url: "https://testing.googleblog.com/",
          access: "Free",
          format: "Documentation",
          note: "Read about test sizes, maintainability, and the cost of over-testing from a large engineering organization.",
        },
        {
          title: "Combinatorial testing tools and resources",
          provider: "NIST",
          url: "https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software",
          access: "Free",
          format: "Practice",
          note: "Useful when pairwise or higher-order combinations help reduce a huge scenario space intelligently.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your proposed regression suite is smaller than the raw scenario list, yet you can explain exactly which risks each retained test is covering. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
  ],
};
