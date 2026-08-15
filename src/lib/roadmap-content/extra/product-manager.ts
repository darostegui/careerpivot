import type { RoadmapContent } from "../types";

export const productManagerContent: RoadmapContent = {
  roleSlug: "product-manager",
  roleTitle: "Product Manager",
  topics: [
    {
      id: "customer-discovery",
      title: "Customer discovery and problem framing",
      outcome: "Turn customer evidence into a narrowly defined problem worth solving and a testable product hypothesis.",
      studyPlan: [
        "Choose a target segment and write the decision, assumptions, and risk behind the discovery work.",
        "Conduct five problem interviews focused on recent behavior, workarounds, triggers, and consequences.",
        "Synthesize evidence into a job statement, opportunity-solution tree, and ranked assumptions.",
        "Design one low-cost experiment that could falsify the riskiest assumption.",
      ],
      project: "Investigate a small-business invoicing problem and publish a discovery brief with interview guide, anonymized evidence, opportunity tree, and experiment plan.",
      resources: [
        { title: "Continuous discovery habits", provider: "Product Talk", url: "https://www.producttalk.org/continuous-discovery-habits/", access: "Free", format: "Documentation", note: "Use the habits to keep discovery tied to decisions and outcomes." },
        { title: "Jobs to be Done guide", provider: "Strategyn", url: "https://strategyn.com/jobs-to-be-done/", access: "Free", format: "Documentation", note: "Practice describing progress customers are trying to make instead of feature requests." },
        { title: "Lean UX canvas", provider: "Google Ventures", url: "https://www.gv.com/sprint/", access: "Free", format: "Practice", note: "Use the sprint framing to make assumptions and tests explicit." },
      ],
      checkpoint: "To prove mastery, your portfolio project must show a clear, unbroken link between the raw customer evidence you gathered and the specific product experiment you designed. A hiring manager should be able to read your brief and clearly see the exact metric that would prove your assumption wrong, preventing the team from building the wrong feature.",
    },
    {
      id: "product-strategy-and-positioning",
      title: "Product strategy and positioning",
      outcome: "Connect a customer problem to a differentiated product direction, target segment, and measurable strategic bet.",
      studyPlan: [
        "Map customer alternatives, business model, capabilities, constraints, and competitive substitutes.",
        "Select a target segment and write a positioning statement with a differentiated value proposition.",
        "Define three strategic bets, their leading indicators, dependencies, and explicit non-goals.",
        "Stress-test the strategy against competitor moves, adoption barriers, and a plausible failure scenario.",
      ],
      project: "Create a one-page strategy for a privacy-first team collaboration product, including segmentation, alternatives, positioning, bets, metrics, and risks.",
      resources: [
        { title: "Strategy+Business insights", provider: "Strategy+Business", url: "https://www.strategy-business.com/", access: "Free", format: "Documentation", note: "Use diagnosis, guiding policy, and coherent actions to avoid a feature list." },
        { title: "Value proposition canvas", provider: "Strategyzer", url: "https://www.strategyzer.com/library/the-value-proposition-canvas", access: "Free", format: "Practice", note: "Connect customer jobs and pains to a specific product promise." },
        { title: "Competitive analysis framework", provider: "Atlassian", url: "https://www.atlassian.com/software/confluence/templates/competitive-analysis", access: "Free", format: "Practice", note: "Structure evidence about alternatives and meaningful differentiation." },
      ],
      checkpoint: "To prove mastery, your strategy document must make hard trade-offs visible. A hiring manager should see exactly who you are targeting (one primary segment), exactly how you are better than alternatives, and at least two explicit features or markets you are consciously choosing NOT to pursue in order to win.",
    },
    {
      id: "roadmapping-and-prioritization",
      title: "Outcome-based roadmapping and prioritization",
      outcome: "Sequence product work around customer and business outcomes while making trade-offs visible to stakeholders.",
      studyPlan: [
        "Define the outcome, baseline, target, time horizon, and owner for each proposed initiative.",
        "Score opportunities with a transparent method such as impact-confidence-effort and document uncertainty.",
        "Build a now-next-later roadmap that shows themes, dependencies, discovery, and non-commitments.",
        "Facilitate a trade-off review and revise the roadmap when capacity or evidence changes.",
      ],
      project: "Build a two-quarter roadmap for a self-serve analytics product with an opportunity backlog, scoring sheet, dependency map, outcome metrics, and stakeholder narrative.",
      resources: [
        { title: "Product roadmap guide", provider: "ProductPlan", url: "https://www.productplan.com/learn/what-is-a-product-roadmap/", access: "Free", format: "Documentation", note: "Compare roadmap formats and keep dates from implying false certainty." },
        { title: "RICE prioritization framework", provider: "Intercom", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/", access: "Free", format: "Documentation", note: "Use scoring as a conversation aid, not an automatic answer." },
        { title: "Product management resources", provider: "Melissa Perri", url: "https://melissaperri.com/", access: "Free", format: "Documentation", note: "Practice communicating direction without promising a fixed feature list." },
      ],
      checkpoint: "Every roadmap item has an outcome and evidence level, and you can explain why the top item outranks the next two alternatives.",
    },
    {
      id: "requirements-and-acceptance-criteria",
      title: "Requirements, user stories, and acceptance criteria",
      outcome: "Give a delivery team enough context to solve the right problem without prescribing unnecessary implementation details.",
      studyPlan: [
        "Write a problem statement and map actors, trigger, desired behavior, constraints, and edge cases.",
        "Break the experience into thin vertical slices that produce user value and can be validated independently.",
        "Use examples and Given-When-Then acceptance criteria for happy, boundary, and failure paths.",
        "Review the specification with design and engineering, then remove ambiguity before planning begins.",
      ],
      project: "Specify a role-based export feature for a SaaS product with stories, flow diagram, permissions matrix, acceptance examples, analytics events, and unresolved questions.",
      resources: [
        { title: "User stories explained", provider: "Atlassian", url: "https://www.atlassian.com/agile/project-management/user-stories", access: "Free", format: "Documentation", note: "Use stories to capture value and context rather than task-shaped implementation." },
        { title: "Cucumber Gherkin reference", provider: "Cucumber", url: "https://cucumber.io/docs/gherkin/reference/", access: "Free", format: "Documentation", note: "Write readable examples that clarify behavior and test boundaries." },
        { title: "Product requirements templates", provider: "Notion", url: "https://www.notion.so/templates", access: "Free", format: "Practice", note: "Adapt the structure while keeping outcomes and decisions prominent." },
      ],
      checkpoint: "Two engineers and one designer independently describe the same intended behavior, including permissions and failure handling.",
    },
    {
      id: "experimentation-and-product-analytics",
      title: "Experimentation and product analytics",
      outcome: "Use reliable behavioral evidence to decide whether a product change should ship, iterate, or stop.",
      studyPlan: [
        "Define the decision, target population, primary outcome, guardrails, and minimum evidence before launching a test.",
        "Instrument the event names, properties, identity rules, and data-quality checks needed to interpret behavior.",
        "Choose an experiment or quasi-experiment design and identify sources of bias or novelty effects.",
        "Review results by segment, quantify uncertainty, and write a decision memo with next action.",
      ],
      project: "Design and analyze a fictional onboarding experiment: create an event taxonomy, sample dataset, analysis notebook or spreadsheet, and one-page ship/iterate/stop memo.",
      resources: [
        { title: "Experimentation guide", provider: "Optimizely", url: "https://www.optimizely.com/optimization-glossary/ab-testing/", access: "Free", format: "Documentation", note: "Review hypotheses, control groups, metrics, and common interpretation errors." },
        { title: "Product analytics taxonomy", provider: "Amplitude", url: "https://amplitude.com/blog/event-tracking-plan", access: "Free", format: "Documentation", note: "Create an event plan that is useful for decisions, not exhaustive for its own sake." },
        { title: "Google Analytics demo account", provider: "Google", url: "https://support.google.com/analytics/answer/6367342", access: "Free", format: "Practice", note: "Explore real-style reports and practice forming questions before looking at charts." },
      ],
      checkpoint: "To prove mastery, your final decision memo must read like an executive summary, not a data dump. A hiring manager should see a clear, binary recommendation (ship, iterate, or stop) backed by one primary outcome metric, one guardrail metric that ensures you didn't break anything else, and an honest admission of where the data might be biased.",
    },
    {
      id: "stakeholder-and-launch-management",
      title: "Stakeholder alignment and launch management",
      outcome: "Coordinate a cross-functional release with clear ownership, risk handling, communication, and post-launch learning.",
      studyPlan: [
        "Map stakeholders by influence, impact, decision rights, and information needs.",
        "Create a launch plan with milestones, readiness criteria, dependencies, support content, and rollback triggers.",
        "Run a concise decision meeting that records options, recommendation, owner, and due date.",
        "Complete a post-launch review using adoption, quality, customer feedback, and operational signals.",
      ],
      project: "Plan a staged launch of a billing-portal redesign with RACI, dependency timeline, risk register, internal FAQ, customer announcement, and post-launch scorecard.",
      resources: [
        { title: "DACI decision framework", provider: "Atlassian", url: "https://www.atlassian.com/team-playbook/plays/daci", access: "Free", format: "Practice", note: "Use explicit decision roles to prevent silent consensus and unclear ownership." },
        { title: "Product management resources", provider: "Product School", url: "https://productschool.com/resources", access: "Free", format: "Documentation", note: "Adapt launch and discovery guidance to your product risk rather than treating it as a ritual." },
        { title: "Project management resources", provider: "TeamGantt", url: "https://www.teamgantt.com/blog", access: "Free", format: "Documentation", note: "Clarify who executes, approves, contributes, and needs updates." },
      ],
      checkpoint: "Every launch risk has an owner and trigger, and a teammate can find the latest decision, readiness status, and rollback path in under two minutes.",
    },
  ],
};
