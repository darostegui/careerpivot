import type { RoadmapContent } from "../types";

export const frontendEngineerContent: RoadmapContent = {
  roleSlug: "frontend-engineer",
  roleTitle: "Frontend Engineer",
  topics: [
    {
      id: "web-platform",
      title: "Web platform fundamentals",
      outcome:
        "Build browser interfaces that use semantic HTML, resilient CSS, and JavaScript that respects the platform instead of fighting it.",
      studyPlan: [
        "Create pages with semantic landmarks, accessible forms, responsive images, and meaningful document structure.",
        "Practice layout with normal flow, Flexbox, Grid, responsive units, and container-aware breakpoints.",
        "Learn DOM events, modules, fetch, URL state, and progressive enhancement through small browser exercises.",
        "Test keyboard, reduced-motion, zoom, slow-network, and no-JavaScript behavior before calling a page finished.",
      ],
      project:
        "Build an accessible public-service finder that works as a fast, responsive page, filters locations in the browser, and provides a useful non-JavaScript fallback.",
      resources: [
        {
          title: "MDN Web Docs",
          provider: "Mozilla",
          url: "https://developer.mozilla.org/en-US/docs/Learn",
          access: "Free",
          format: "Documentation",
          note: "Practical learning path for HTML, CSS, JavaScript, accessibility, and browser APIs.",
        },
        {
          title: "Web.dev Learn",
          provider: "Google",
          url: "https://web.dev/learn",
          access: "Free",
          format: "Course",
          note: "Focused courses on responsive design, accessibility, performance, and modern CSS.",
        },
        {
          title: "Web Platform Tests",
          provider: "W3C",
          url: "https://web-platform-tests.org/",
          access: "Free",
          format: "Practice",
          note: "Optional way to understand browser interoperability and write focused platform tests.",
        },
      ],
      checkpoint:
        "A deployed page passes keyboard and responsive checks, has valid landmarks and labels, and includes a short note documenting its progressive-enhancement behavior.",
    },
    {
      id: "typescript",
      title: "TypeScript application design",
      outcome:
        "Model UI state and external data with types that prevent common runtime mistakes without turning every component into ceremony.",
      studyPlan: [
        "Learn inference, unions, narrowing, generics, utility types, and strict compiler settings through small domain models.",
        "Type API responses at the boundary and validate untrusted JSON instead of treating type assertions as runtime checks.",
        "Separate view models, server data, form state, and transient UI state so each has an honest shape.",
        "Refactor a feature after a deliberate API change and use compiler errors to drive the migration.",
      ],
      project:
        "Create a typed event-planning dashboard with validated API data, filterable views, optimistic edits, and an error state that remains useful when the server response changes.",
      resources: [
        {
          title: "TypeScript Handbook",
          provider: "TypeScript",
          url: "https://www.typescriptlang.org/docs/handbook/intro.html",
          access: "Free",
          format: "Documentation",
          note: "Official reference for the type system, narrowing, generics, and module design.",
        },
        {
          title: "TypeScript Exercises",
          provider: "TypeScript Exercises",
          url: "https://typescript-exercises.github.io/",
          access: "Free",
          format: "Practice",
          note: "Incremental debugging exercises that build intuition for real compiler errors.",
        },
        {
          title: "Zod Documentation",
          provider: "Zod",
          url: "https://zod.dev/",
          access: "Free",
          format: "Documentation",
          note: "Optional reference for runtime validation at API, form, and configuration boundaries.",
        },
      ],
      checkpoint:
        "The project builds with strict TypeScript, validates one external payload at runtime, and includes a test proving an invalid response becomes a recoverable UI error.",
    },
    {
      id: "component-architecture",
      title: "Component architecture",
      outcome:
        "Design reusable interface pieces with clear responsibilities, predictable states, and APIs that remain understandable as a product grows.",
      studyPlan: [
        "Extract repeated visual and behavioral patterns only after comparing their real variations and accessibility needs.",
        "Define component contracts for loading, empty, error, disabled, focus, and responsive states before polishing the happy path.",
        "Use composition, slots, and controlled versus uncontrolled patterns to avoid giant components with hidden behavior.",
        "Document decisions with examples and refactor one feature to demonstrate reuse without flattening meaningful differences.",
      ],
      project:
        "Build a small design system and an accompanying inventory-management screen using it, including form controls, data display, navigation, and documented edge states.",
      resources: [
        {
          title: "React Documentation",
          provider: "React",
          url: "https://react.dev/learn",
          access: "Free",
          format: "Course",
          note: "Official guidance for component thinking, state, effects, and sharing logic.",
        },
        {
          title: "Patterns.dev",
          provider: "Patterns.dev",
          url: "https://www.patterns.dev/",
          access: "Free",
          format: "Documentation",
          note: "Accessible discussion of component patterns, rendering choices, and performance trade-offs.",
        },
        {
          title: "Storybook Learn",
          provider: "Storybook",
          url: "https://storybook.js.org/tutorials/",
          access: "Free",
          format: "Practice",
          note: "Hands-on way to build, test, and communicate components in isolation.",
        },
      ],
      checkpoint:
        "A reviewer can browse component examples, trigger documented edge states, and identify each component's data contract without reading implementation details.",
    },
    {
      id: "frontend-testing",
      title: "Frontend testing",
      outcome:
        "Choose tests that protect user-visible behavior and catch regressions without making routine refactoring painful.",
      studyPlan: [
        "Test pure transformations first, then component behavior, form flows, routing, and network boundaries.",
        "Write assertions from the user's perspective: accessible names, visible feedback, submitted values, and navigation outcomes.",
        "Use realistic fixtures and controlled network responses for loading, empty, failure, and retry paths.",
        "Run a browser-level smoke suite in CI and investigate flaky tests by removing timing assumptions rather than adding sleeps.",
      ],
      project:
        "Add a test strategy to the public-service finder: unit-test filtering, component-test the search and error states, and run an end-to-end accessibility-aware booking flow.",
      resources: [
        {
          title: "Testing Library Documentation",
          provider: "Testing Library",
          url: "https://testing-library.com/docs/",
          access: "Free",
          format: "Documentation",
          note: "User-centered guidance for DOM and component testing.",
        },
        {
          title: "Playwright Documentation",
          provider: "Microsoft",
          url: "https://playwright.dev/docs/intro",
          access: "Free",
          format: "Practice",
          note: "Official browser automation guide covering fixtures, assertions, traces, and CI.",
        },
        {
          title: "Web Accessibility Evaluation Tools",
          provider: "W3C",
          url: "https://www.w3.org/WAI/test-evaluate/",
          access: "Free",
          format: "Documentation",
          note: "Reference for combining automated checks with manual accessibility evaluation.",
        },
      ],
      checkpoint:
        "CI runs a focused test suite covering one pure function, three user-visible states, and one browser flow, with no arbitrary wait calls.",
    },
    {
      id: "performance-accessibility",
      title: "Performance and accessibility",
      outcome:
        "Ship interfaces that remain usable for people, devices, and networks unlike your development machine.",
      studyPlan: [
        "Measure loading, interaction, layout stability, and accessibility with repeatable mobile-oriented audits.",
        "Optimize the largest content, JavaScript cost, images, fonts, caching, and rendering path in that order of evidence.",
        "Apply semantic interaction patterns, visible focus, contrast, announcements, and reduced-motion preferences.",
        "Compare before-and-after traces and write a performance budget that future changes can be checked against.",
      ],
      project:
        "Turn a media-heavy community-news homepage into a fast reading experience with responsive images, keyboard navigation, reduced motion, and a documented performance budget.",
      resources: [
        {
          title: "Web Vitals",
          provider: "Google",
          url: "https://web.dev/articles/vitals",
          access: "Free",
          format: "Documentation",
          note: "Reference for user-centered loading, responsiveness, and visual stability metrics.",
        },
        {
          title: "WCAG 2.2",
          provider: "W3C",
          url: "https://www.w3.org/TR/WCAG22/",
          access: "Free",
          format: "Documentation",
          note: "Normative accessibility criteria to use alongside manual testing and user feedback.",
        },
        {
          title: "Lighthouse Documentation",
          provider: "Chrome Developers",
          url: "https://developer.chrome.com/docs/lighthouse/overview",
          access: "Free",
          format: "Practice",
          note: "Practical audit and diagnostics reference for performance, accessibility, and SEO.",
        },
      ],
      checkpoint:
        "A before-and-after report shows mobile audit results, at least three measured improvements, and a manual keyboard review with no critical accessibility blocker.",
    },
  ],
};
