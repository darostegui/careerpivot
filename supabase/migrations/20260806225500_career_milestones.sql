insert into public.career_milestones (role_slug, position, title, description, skills)
values
  ('cloud-devops-engineer', 1, 'Cloud foundations', 'Understand identity, networking, compute, storage, and cost controls.', '["Cloud fundamentals","Networking"]'),
  ('cloud-devops-engineer', 2, 'Automation layer', 'Provision repeatable environments and document the operational contract.', '["Infrastructure as code","Git"]'),
  ('cloud-devops-engineer', 3, 'Delivery systems', 'Ship a tested service through a secure, observable deployment pipeline.', '["CI/CD","Containers","Observability"]'),
  ('site-reliability-engineer', 1, 'Reliability fundamentals', 'Learn service level objectives, error budgets, and incident practice.', '["Incident response","Observability"]'),
  ('site-reliability-engineer', 2, 'Systems engineering', 'Model failure modes and automate repetitive operational work.', '["Distributed systems","Automation"]'),
  ('site-reliability-engineer', 3, 'Production ownership', 'Design and operate a resilient service with measurable reliability.', '["Cloud architecture","Programming"]'),
  ('security-analyst', 1, 'Security baseline', 'Build fluency in identity, protocols, common attack paths, and controls.', '["Networking","Identity","Operating systems"]'),
  ('security-analyst', 2, 'Detection practice', 'Turn signals into useful detections and investigate suspicious activity.', '["Log analysis","Threat modeling"]'),
  ('security-analyst', 3, 'Response readiness', 'Coordinate containment, recovery, and clear post-incident improvements.', '["Incident response","Security controls"]'),
  ('qa-automation-engineer', 1, 'Test strategy', 'Translate product risks into focused, maintainable test coverage.', '["Testing fundamentals","Test design"]'),
  ('qa-automation-engineer', 2, 'Automation systems', 'Build stable browser and API checks with useful diagnostics.', '["Browser automation","API testing","JavaScript or Python"]'),
  ('qa-automation-engineer', 3, 'Release confidence', 'Run quality gates in CI and communicate risk clearly.', '["CI/CD"]'),
  ('data-analyst', 1, 'Data fluency', 'Query, clean, and validate data from common business systems.', '["SQL","Spreadsheets"]'),
  ('data-analyst', 2, 'Decision models', 'Use statistics and clear visual narratives to explain what changed.', '["Statistics","Data visualization"]'),
  ('data-analyst', 3, 'Analytical delivery', 'Automate recurring analysis and recommend measurable actions.', '["Python basics","Business communication"]'),
  ('technical-project-manager', 1, 'Delivery mechanics', 'Plan milestones, dependencies, ownership, and decision points.', '["Planning","Agile delivery"]'),
  ('technical-project-manager', 2, 'Risk leadership', 'Make uncertainty visible and move blockers toward decisions.', '["Risk management","Stakeholder communication"]'),
  ('technical-project-manager', 3, 'Technical confidence', 'Connect architecture, trade-offs, and outcomes without losing the team.', '["Technical literacy","Metrics"]')
on conflict (role_slug, position) do update set
  title = excluded.title,
  description = excluded.description,
  skills = excluded.skills;
