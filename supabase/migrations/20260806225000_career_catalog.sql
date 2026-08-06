create table if not exists public.career_roles (
  slug text primary key,
  title text not null,
  category text not null,
  summary text not null,
  salary_range text not null,
  estimated_months integer not null check (estimated_months > 0),
  skills jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.career_milestones (
  id uuid primary key default gen_random_uuid(),
  role_slug text not null references public.career_roles(slug) on delete cascade,
  position integer not null,
  title text not null,
  description text not null,
  skills jsonb not null default '[]'::jsonb,
  unique (role_slug, position)
);

create table if not exists public.learning_resources (
  id uuid primary key default gen_random_uuid(),
  role_slug text references public.career_roles(slug) on delete cascade,
  skill text not null,
  title text not null,
  url text not null,
  is_free boolean not null default true,
  is_certification boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.career_roles enable row level security;
alter table public.career_milestones enable row level security;
alter table public.learning_resources enable row level security;

create policy "Anyone can read career roles"
  on public.career_roles for select using (true);

create policy "Anyone can read career milestones"
  on public.career_milestones for select using (true);

create policy "Anyone can read learning resources"
  on public.learning_resources for select using (true);

insert into public.career_roles (slug, title, category, summary, salary_range, estimated_months, skills)
values
  ('cloud-devops-engineer', 'Cloud DevOps Engineer', 'Cloud & infrastructure', 'Build reliable delivery pipelines and operate cloud services at scale.', '$95k–$145k', 5, '["Linux","Networking","Git","Cloud fundamentals","Containers","Infrastructure as code","CI/CD","Observability"]'),
  ('site-reliability-engineer', 'Site Reliability Engineer', 'Reliability engineering', 'Improve availability, performance, and developer velocity through engineering.', '$110k–$165k', 6, '["Linux","Programming","Distributed systems","Incident response","Observability","Automation","Cloud architecture"]'),
  ('security-analyst', 'Cybersecurity Analyst', 'Security', 'Detect, investigate, and reduce threats across applications and infrastructure.', '$75k–$125k', 5, '["Networking","Operating systems","Identity","Threat modeling","Log analysis","Incident response","Security controls"]'),
  ('qa-automation-engineer', 'QA Automation Engineer', 'Software quality', 'Design automated tests that make software releases safer and faster.', '$78k–$120k', 4, '["Testing fundamentals","JavaScript or Python","API testing","Browser automation","CI/CD","Test design"]'),
  ('data-analyst', 'Data Analyst', 'Data & decision support', 'Turn operational data into decisions, forecasts, and measurable outcomes.', '$65k–$105k', 4, '["SQL","Spreadsheets","Statistics","Data visualization","Business communication","Python basics"]'),
  ('technical-project-manager', 'Technical Project Manager', 'Product delivery', 'Coordinate complex technical work from planning through measurable delivery.', '$85k–$135k', 4, '["Planning","Risk management","Stakeholder communication","Agile delivery","Technical literacy","Metrics"]')
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category,
  summary = excluded.summary,
  salary_range = excluded.salary_range,
  estimated_months = excluded.estimated_months,
  skills = excluded.skills;

insert into public.learning_resources (role_slug, skill, title, url, is_free, is_certification)
values
  ('cloud-devops-engineer', 'Cloud fundamentals', 'Cloud foundations study plan', 'https://cloud.google.com/learn/training', true, false),
  ('cloud-devops-engineer', 'Infrastructure as code', 'Infrastructure automation study plan', 'https://developer.hashicorp.com/terraform/tutorials', true, false),
  ('cloud-devops-engineer', 'Cloud certification', 'Cloud engineer certification path', 'https://cloud.google.com/learn/certification', false, true),
  ('site-reliability-engineer', 'Observability', 'Reliability and observability study plan', 'https://sre.google/resources/', true, false),
  ('security-analyst', 'Security controls', 'Cybersecurity fundamentals study plan', 'https://www.nist.gov/cyberframework', true, false),
  ('security-analyst', 'Security certification', 'Security analyst certification path', 'https://www.comptia.org/certifications/security', false, true),
  ('qa-automation-engineer', 'Browser automation', 'Browser testing study plan', 'https://playwright.dev/docs/intro', true, false),
  ('data-analyst', 'SQL', 'SQL practice study plan', 'https://sqlbolt.com/', true, false),
  ('technical-project-manager', 'Planning', 'Project management study plan', 'https://www.pmi.org/certifications/project-management-pmp', false, true)
on conflict do nothing;
