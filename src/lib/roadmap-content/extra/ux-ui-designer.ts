import type { RoadmapContent } from "../types";

export const uxDesignerContent: RoadmapContent = {
  roleSlug: "ux-ui-designer",
  roleTitle: "UX/UI Designer",
  topics: [
    {
      id: "ux-research-and-interviews",
      title: "User research and interview synthesis",
      outcome: "Turn ambiguous product assumptions into evidence-backed user needs, behaviors, and opportunity statements.",
      studyPlan: [
        "Write a research brief with a decision to inform, target participants, recruiting criteria, and ethical boundaries.",
        "Practice five neutral interview questions, then conduct or analyze at least three interviews without pitching a solution.",
        "Code notes into behaviors, needs, and pain points; separate observed evidence from interpretation.",
        "Prioritize opportunities with an impact-versus-confidence matrix and state the evidence behind each choice.",
      ],
      project: "Research a booking or appointment flow with three participants and publish a concise research report containing the guide, anonymized quotes, themes, opportunity map, and product recommendation.",
      resources: [
        { title: "Design research journal", provider: "IDEO", url: "https://www.ideo.com/journal", access: "Free", format: "Documentation", note: "Use practical research framing and methods as a lightweight field guide." },
        { title: "Nielsen Norman Group research articles", provider: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", access: "Free", format: "Documentation", note: "Compare interview, observation, and usability methods before choosing one." },
        { title: "Design research methods", provider: "Usability.gov", url: "https://www.usability.gov/how-to-and-tools/methods/index.html", access: "Free", format: "Documentation", note: "Use the method library to match research technique to decision." },
      ],
      checkpoint: "A reviewer can identify the research question, trace three recommendations to evidence, and distinguish facts from assumptions.",
    },
    {
      id: "information-architecture",
      title: "Information architecture and navigation",
      outcome: "Create a findable content structure that helps users complete priority tasks with minimal hesitation.",
      studyPlan: [
        "Inventory the product content and group items by user intent rather than by internal department.",
        "Run a small card sort or tree-test exercise and record labels that users misunderstand.",
        "Model primary navigation, hierarchy, URL or screen relationships, and empty or error states.",
        "Test three critical tasks and revise labels or grouping based on observed failure points.",
      ],
      project: "Redesign the information architecture for a public-service portal, including a content inventory, sitemap, navigation rationale, and annotated task-flow test.",
      resources: [
        { title: "Information architecture basics", provider: "Usability.gov", url: "https://www.usability.gov/what-and-why/information-architecture.html", access: "Free", format: "Documentation", note: "Review organization, labeling, navigation, and search as connected systems." },
        { title: "Optimal Workshop learning library", provider: "Optimal Workshop", url: "https://www.optimalworkshop.com/learn/", access: "Free", format: "Documentation", note: "Use the learning library to design a small, defensible card-sort exercise." },
        { title: "WAI website navigation tutorial", provider: "W3C", url: "https://www.w3.org/WAI/tutorials/menus/", access: "Free", format: "Documentation", note: "Check keyboard and semantic requirements while designing menus." },
      ],
      checkpoint: "At least 4 of 5 test participants find the three priority destinations without facilitator hints.",
    },
    {
      id: "interaction-design-and-prototyping",
      title: "Interaction design and prototyping",
      outcome: "Communicate a complete interaction model before engineering work begins, including states, transitions, and recovery paths.",
      studyPlan: [
        "Define the user goal, entry points, system constraints, and success criteria for one workflow.",
        "Sketch the happy path, validation rules, loading, empty, permission, and failure states.",
        "Build a clickable medium-fidelity prototype with realistic copy and keyboard-reachable interactions.",
        "Run a five-person usability test, prioritize issues by severity, and iterate the prototype once.",
      ],
      project: "Prototype an expense-reimbursement flow from receipt upload through approval, including validation, save-and-resume, status tracking, and rejection recovery.",
      resources: [
        { title: "Figma for beginners", provider: "Figma", url: "https://help.figma.com/hc/en-us/categories/360002051613", access: "Free", format: "Documentation", note: "Use the official help center for components, prototyping, and collaboration." },
        { title: "Interaction design foundation", provider: "Usability.gov", url: "https://www.usability.gov/how-to-and-tools/methods/interaction-design.html", access: "Free", format: "Documentation", note: "Apply task, feedback, and control principles to each state." },
        { title: "Rocket Surgery Made Easy excerpts", provider: "Steve Krug", url: "https://sensible.com/rocket-surgery-made-easy/", access: "Free", format: "Practice", note: "Use the lightweight testing process to get fast feedback on a prototype." },
      ],
      checkpoint: "Five test users complete the happy path, and every high-severity issue has a documented design response.",
    },
    {
      id: "visual-design-and-design-systems",
      title: "Visual design and design systems",
      outcome: "Deliver a coherent, reusable interface that balances hierarchy, brand expression, responsive behavior, and implementation clarity.",
      studyPlan: [
        "Audit typography, color contrast, spacing, elevation, and component patterns in a reference product.",
        "Define design tokens and create variants for buttons, inputs, navigation, feedback, and data display.",
        "Apply the system to desktop, mobile, focus, disabled, error, and long-content scenarios.",
        "Document usage guidance and review the system with a developer for feasibility and naming clarity.",
      ],
      project: "Create a mini design system for a subscription dashboard with tokens, 10 reusable components, responsive screens, accessibility notes, and developer handoff annotations.",
      resources: [
        { title: "Material Design 3", provider: "Google", url: "https://m3.material.io/", access: "Free", format: "Documentation", note: "Study component behavior, tokens, and adaptive guidance without copying the visual style." },
        { title: "Design system documentation", provider: "zeroheight", url: "https://zeroheight.com/", access: "Free", format: "Documentation", note: "Use the documentation patterns to explain when and how components should be used." },
        { title: "Web Content Accessibility Guidelines", provider: "W3C", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", access: "Free", format: "Documentation", note: "Validate contrast, focus, input, and perceivable-content decisions." },
      ],
      checkpoint: "The same component behaves consistently across two breakpoints, passes contrast checks, and can be implemented from the handoff without a live walkthrough.",
    },
    {
      id: "accessibility-inclusive-design",
      title: "Accessibility and inclusive design",
      outcome: "Design flows that remain usable with keyboard navigation, assistive technology, varied abilities, and constrained contexts.",
      studyPlan: [
        "Learn WCAG principles and map them to focus order, names, roles, states, contrast, and error recovery.",
        "Audit one existing flow with keyboard-only navigation, zoom, reduced motion, and a screen reader.",
        "Redesign the highest-impact barriers and write accessible content for labels, instructions, and errors.",
        "Validate with automated checks plus at least one manual assistive-technology pass.",
      ],
      project: "Audit and remediate an online checkout or registration flow; deliver before/after screens, an accessibility issue log, and a verification recording or checklist.",
      resources: [
        { title: "WCAG 2.2 quick reference", provider: "W3C", url: "https://www.w3.org/WAI/WCAG22/quickref/", access: "Free", format: "Documentation", note: "Use success criteria as acceptance criteria, not as a late-stage checklist." },
        { title: "Web accessibility tutorials", provider: "W3C WAI", url: "https://www.w3.org/WAI/tutorials/", access: "Free", format: "Documentation", note: "Follow the patterns for forms, menus, tables, and images." },
        { title: "A11y Project checklist", provider: "The A11y Project", url: "https://www.a11yproject.com/checklist/", access: "Free", format: "Practice", note: "Use the checklist to structure a repeatable design review." },
      ],
      checkpoint: "The remediated flow has no keyboard-blocking defects, meets AA contrast targets, and includes a usable recovery message for each invalid field.",
    },
    {
      id: "design-handoff-and-collaboration",
      title: "Design handoff and product collaboration",
      outcome: "Move a validated design into delivery with shared scope, explicit decisions, and fewer avoidable implementation surprises.",
      studyPlan: [
        "Translate research findings into a problem statement, user story, acceptance criteria, and measurable success signal.",
        "Annotate responsive rules, component behavior, content requirements, analytics events, and unresolved questions.",
        "Run a structured critique with product and engineering, separating preference from evidence and constraint.",
        "Track decisions and review the implemented experience against the source design after release.",
      ],
      project: "Produce a delivery-ready feature packet for a notification-preferences screen: brief, flows, final UI, edge cases, analytics plan, acceptance criteria, and post-build review.",
      resources: [
        { title: "Design research articles", provider: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", access: "Free", format: "Documentation", note: "Use critique as collaborative problem-solving rather than subjective approval." },
        { title: "Storybook documentation", provider: "Storybook", url: "https://storybook.js.org/docs", access: "Free", format: "Documentation", note: "Understand how component states can be made visible to engineering teams." },
        { title: "Product discovery guide", provider: "Product Talk", url: "https://www.producttalk.org/", access: "Free", format: "Documentation", note: "Connect design decisions to continuous discovery and outcome thinking." },
      ],
      checkpoint: "Engineering can implement the feature packet with no unanswered blocking questions, and your post-build review logs at least three verified details.",
    },
  ],
};
