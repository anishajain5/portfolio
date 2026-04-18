-- Portfolio schema
-- Run this once in the Supabase SQL Editor to set up all tables, RLS, and seed data.

-- ============================================================
-- TABLES
-- ============================================================

create table if not exists case_studies (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  company      text,
  role         text,
  summary      text,
  problem      text,
  approach     text,
  outcome      text,
  persona      text[],
  order_index  integer,
  created_at   timestamptz default now()
);

create table if not exists plan_template (
  id           uuid primary key default gen_random_uuid(),
  phase        text,
  title        text,
  description  text,
  order_index  integer,
  created_at   timestamptz default now()
);

create table if not exists contact_submissions (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  message      text not null,
  created_at   timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table case_studies        enable row level security;
alter table plan_template       enable row level security;
alter table contact_submissions enable row level security;

-- case_studies: public read, no public write
create policy "case_studies_public_read"
  on case_studies for select
  to anon
  using (true);

-- plan_template: public read, no public write
create policy "plan_template_public_read"
  on plan_template for select
  to anon
  using (true);

-- contact_submissions: public insert only, no public read
create policy "contact_submissions_public_insert"
  on contact_submissions for insert
  to anon
  with check (true);

-- ============================================================
-- SEED: case_studies
-- ============================================================

insert into case_studies (title, company, role, summary, problem, approach, outcome, persona, order_index)
values
  (
    'Enterprise Identity Platform',
    'AWS',
    '[Role placeholder -- e.g. Senior Product Manager]',
    '[Summary placeholder -- one paragraph describing the project at a high level. Work details are abstracted.]',
    '[Problem placeholder -- what problem were you solving and for whom.]',
    '[Approach placeholder -- how you approached the problem, what frameworks or methods you used.]',
    '[Outcome placeholder -- what happened, what you shipped, what you learned.]',
    array['all'],
    1
  ),
  (
    'Financial Data Platform',
    'ION Group',
    '[Role placeholder]',
    '[Summary placeholder -- one paragraph describing the project at a high level. Work details are abstracted.]',
    '[Problem placeholder]',
    '[Approach placeholder]',
    '[Outcome placeholder]',
    array['all'],
    2
  ),
  (
    'Biome',
    'Tubi',
    '[Role placeholder -- e.g. PM Builder Program participant]',
    '[Summary placeholder -- one paragraph describing the Biome proposal.]',
    '[Problem placeholder]',
    '[Approach placeholder]',
    '[Outcome placeholder]',
    array['all'],
    3
  ),
  (
    'Graduate Research Projects',
    'Johns Hopkins',
    '[Role placeholder -- e.g. Graduate student]',
    '[Summary placeholder -- one paragraph describing the Hopkins grad school projects.]',
    '[Problem placeholder]',
    '[Approach placeholder]',
    '[Outcome placeholder]',
    array['all'],
    4
  );

-- ============================================================
-- SEED: plan_template
-- ============================================================

insert into plan_template (phase, title, description, order_index)
values
  (
    'Days 1 to 30',
    '[Phase 1 title placeholder -- e.g. Listen and Learn]',
    '[Phase 1 description placeholder -- what you would focus on in the first 30 days: who you would meet, what you would read, what you would observe before making any changes.]',
    1
  ),
  (
    'Days 31 to 60',
    '[Phase 2 title placeholder -- e.g. Diagnose and Plan]',
    '[Phase 2 description placeholder -- how you would synthesize what you learned, identify the biggest opportunities, and start shaping a point of view on priorities.]',
    2
  ),
  (
    'Days 61 to 90',
    '[Phase 3 title placeholder -- e.g. Move and Measure]',
    '[Phase 3 description placeholder -- what you would ship or drive in the final 30 days, and how you would measure whether it is working.]',
    3
  );
