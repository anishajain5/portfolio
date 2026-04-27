// Run with: node scripts/seed-case-studies.mjs

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envFile = readFileSync(resolve(__dirname, '../.env'), 'utf-8')
const env = Object.fromEntries(
  envFile.split('\n')
    .filter(line => line.includes('='))
    .map(line => {
      const [key, ...rest] = line.split('=')
      return [key.trim(), rest.join('=').trim()]
    })
)

const supabase = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY)

const rows = [
  {
    title: 'AWS: Scaling Security Remediation for Enterprise Teams',
    company: 'AWS',
    role: 'Product Manager Technical Intern, Amazon Web Services',
    summary: 'Proposed a prescriptive remediation layer for IAM Access Analyzer to help enterprise security teams move from identifying vulnerabilities to actually resolving them, shifting the product from a monitoring tool to an actionable security partner.',
    problem: 'Security teams using IAM Access Analyzer could answer \'who has access to what\' but had no scalable path to act on what they found. With backlogs reaching 60,000+ findings, remediation was manual, slow, and fragmented. Engineers often lacked the context or permissions to resolve findings independently, and without a clear delegation workflow, issues sat unresolved for months. The tool was surfacing real risks. The gap was that it stopped there.',
    approach: 'Through 20+ customer interviews, usage data analysis, and competitive research, I identified the root cause: remediation did not scale. Using Amazon\'s Working Backwards methodology, I authored a PRFAQ proposing an intelligence layer with four capabilities:\n\n- Bulk remediation: Group similar findings by vulnerability type so teams could resolve entire categories in one action instead of one finding at a time\n- Automated policy updates: Auto-generate and apply IAM policy changes via APIs, removing manual policy writing from the remediation workflow\n- Delegation workflows: Identify resource owners and route findings to the right engineer, eliminating the bottleneck of centralized security teams doing everything\n- Auto-remediation rules: Allow rule-based resolution for common, low-risk findings so teams could focus attention where it actually mattered\n\nI validated feasibility with engineers, built Figma prototypes to pressure-test the experience, and aligned stakeholders around a long-term vision that reframed Access Analyzer as a shift-left security tool, analyzing access risks before deployment, not just after.',
    outcome: 'Delivered a full PRFAQ, Figma mockups, and a recommended roadmap to the IAM Access Analyzer team. The internship scope ended at proposal, not implementation. The proposed framework showed how hours of manual remediation could compress into a single workflow, and laid the foundation for a future proactive security posture model.',
    learned: 'Fast solutions and right solutions are not always the same thing. Knowing which one you are choosing and being able to defend it is the job.',
    persona: ['all'],
    order_index: 1,
  },
  {
    title: 'ION Group: Building a Scalable Customer Satisfaction Program',
    company: 'ION Group',
    role: 'Data Systems Consultant, ION Group',
    summary: 'Owned and scaled an end-to-end Customer Satisfaction program across customer success, support, and account management teams, transforming CSAT from a reporting exercise into an operational driver.',
    problem: 'Feedback collection at ION was fragmented and manual. Insights were delayed, there was no structured accountability across teams, and leadership had no real-time visibility into customer sentiment. CSAT data existed but it was not driving behavior. It was just being reported.',
    approach: '- Defined clear OKRs and success metrics so every team knew what they were being held to and why\n- Automated feedback collection workflows to eliminate manual effort and reduce insight lag\n- Built SQL queries and Power BI dashboards to give leadership real-time visibility into customer sentiment across teams\n- Partnered cross-functionally with customer success, support, and account management to drive accountability and close the loop on high-priority cases',
    outcome: 'Achieved a 4.8/5 CSAT score and 15% response rate. Improved high-priority case resolution by 50%. Metrics only matter when they drive behavior, and this program was built around that principle from day one.',
    learned: 'Building feedback loops is as important as collecting feedback. A number without a workflow attached to it changes nothing.',
    persona: ['all'],
    order_index: 2,
  },
  {
    title: 'ION Group: Designing a Customer Health Ecosystem',
    company: 'ION Group',
    role: 'Data Systems Consultant, ION Group',
    summary: 'Built a unified customer health framework to predict churn and enable proactive engagement, consolidating fragmented account data into a single operational system.',
    problem: 'Customer data at ION existed across demographics, financial metrics, and operational signals but there was no consolidated view of account health. Without a unified picture, teams were reacting to churn after it happened rather than preventing it. At-risk accounts were invisible until it was too late.',
    approach: '- Integrated financial, usage, and support data into a single Power BI based health ecosystem\n- Designed health scoring models to surface at-risk accounts early and consistently\n- Created visibility into accounts most likely to churn and most likely to expand\n- Enabled targeted retention and upsell strategies by giving customer-facing teams a clear, actionable signal instead of raw data',
    outcome: 'The ecosystem saved 600 hours of manual work weekly, protected $10M in churn revenue, and supported $500K in upsell growth. Teams moved from reactive firefighting to strategic account management.',
    learned: 'Proactive systems create leverage. When you centralize signals into one clear health metric, the entire team operates differently.',
    persona: ['all'],
    order_index: 3,
  },
  {
    title: 'Biome: A Health App for Women Who Are Tired of Feeling Guilty',
    company: 'Independent Concept',
    role: 'Product Designer and PM, Independent Concept',
    summary: 'Designed an AI-powered health companion for women managing energy fluctuations across their cycle, developed as part of a competitive PM program. Biome\'s core insight: the problem is not low energy. The problem is the guilt loop that follows.',
    problem: 'Women managing hormonal health have no shortage of tracking apps. What they lack is a product that meets them on hard days without judgment. Most health apps are built around consistency and streaks, which works great until your body does not cooperate. A missed workout becomes a failed day. A low-energy afternoon becomes a pattern to fix. The product experience was creating a guilt loop that made users feel worse, not better.',
    approach: '- Conducted user research to understand how women experience energy fluctuations and what existing tools were getting wrong\n- Identified the guilt loop as the core UX problem: apps were optimizing for streaks when they should have been optimizing for self-compassion on hard days\n- Designed Biome around a soft landing feature: on low-energy days, the app adapts expectations rather than marking the day as a failure\n- Built an AI-powered mockup using Claude Code to prototype the core experience\n- Wrote a full product proposal including problem framing, user research synthesis, solution design, and go-to-market thinking\n- Defended the women-only user focus as a deliberate product decision, not a limitation: narrow user focus produces stronger product thinking',
    outcome: 'Delivered a full product proposal and AI-powered prototype. Advanced through multiple rounds of the program. The narrow user focus and guilt loop insight were the most defensible and differentiated parts of the pitch.',
    learned: 'The best product insight is often hiding inside the thing users feel but cannot name. Nobody said I have a guilt loop. But once you name it, the entire product direction becomes obvious.',
    persona: ['all'],
    order_index: 4,
  },
  {
    title: 'CAE: Understanding Barriers to AI Adoption in Education',
    company: 'Council for Aid to Education',
    role: 'Strategy Consultant, Johns Hopkins Capstone Project',
    summary: 'Led research for the Council for Aid to Education to map why educational institutions are slow to adopt generative AI, and built a strategic framework to help them navigate adoption responsibly.',
    problem: 'Generative AI tools were proving useful for educators and students, but institutional adoption was lagging significantly behind other sectors. The barriers were unclear and fragmented. Schools were not anti-AI, they were stuck: no policies, no training, no proof points from peer institutions, and real fears around bias, data privacy, student cheating, and the risk of being a first mover that gets burned.',
    approach: '- Led 10+ interviews across educators, instructional designers, subject matter experts, and ed-tech consultants at institutions including Johns Hopkins University, K-12 schools, and AI education consultancies\n- Designed and ran a survey of Johns Hopkins master\'s students to ground findings in real student behavior (76% used AI tools multiple times a day; 80% faced restrictions from professors)\n- Performed market research and literature review to contextualize findings across student, teacher, and public perspectives\n- Identified four core barriers: lack of direction and training, fear of first-mover disadvantage, bias and data privacy concerns, and risk of an AI loop where humans are removed from the learning process entirely\n- Co-designed a four-step strategic framework for institutions: internal AI readiness assessment, identify acceptable comfort level, develop a risk management framework, implement policies and best practices',
    outcome: 'Delivered a full research report and strategic framework to CAE leadership. The framework gave institutions a structured way to evaluate their own readiness rather than reacting to AI adoption pressures without context.',
    learned: 'The barrier to AI adoption in education is not skepticism about the technology. It is the absence of a decision-making structure. Institutions do not need more proof that AI works. They need a framework for deciding how much of it they are ready for.',
    persona: ['all'],
    order_index: 5,
  },
  {
    title: 'Redesigning Outlook for High-Volume, Multi-Role Users',
    company: 'Johns Hopkins University',
    role: 'UX Researcher and Product Designer, Johns Hopkins HCI Project',
    summary: 'Redesigned Microsoft Outlook to support task management and intuitive organization for users juggling multiple roles and high email volume, using a full iterative user-centered design process.',
    problem: 'Outlook was built for email, not for the way people actually work. Students, teaching assistants, and workplace professionals were all doing the same workarounds: manually scanning subject lines, copying deadlines into separate calendars, pinning emails as reminders, and missing important messages buried under noise. The tool surfaced communication but gave users no help acting on it.',
    approach: '- Conducted 3 contextual inquiries across a workplace professional, university student, and teaching assistant to map real workflows and pain points\n- Built 3 user personas and scenarios grounded in observed behavior, not assumptions\n- Designed a lo-fi prototype introducing 4 features: Smart View filters, Task Tracker, Scout AI assistant, and automated email prioritization\n- Ran usability testing with 3 participants, identifying friction points including confusing labels, unclear empty states, and Scout discoverability issues\n- Conducted a participatory design session with Jean, a real workplace coordinator, co-sketching an improved inbox and surfacing needs around automatic task extraction and 48-hour follow-up reminders\n- Iterated to a hi-fi prototype incorporating cleaner navigation, a Morning Briefing feature, Scout onboarding with a privacy panel, and a unified Task Tracker linked to source emails',
    outcome: 'Delivered a fully tested hi-fi prototype across 4 design iterations. Each round of research directly changed the product. View As became Filter. Scout got onboarding. The Task Tracker went from an empty table to a guided, linked system. View the full Figma prototype here: https://www.figma.com/proto/QBQHbCrpIAIcBJ1q4f0Aj6/HCI-Outlook-HiFi-Design?node-id=2058-876&p=f&t=XtM880Q45nxxtLl3-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2057%3A629',
    learned: 'Users do not struggle because they are disorganized. They struggle because the tools are not designed around how they actually work. Good UX research surfaces that gap before you build the wrong thing.',
    persona: ['all'],
    order_index: 6,
  },
  {
    title: 'TacMed: Digitizing the Military Patient Care Pathway',
    company: 'Johns Hopkins University',
    role: 'Product Designer and Strategist, Johns Hopkins Capstone Project',
    summary: 'Designed an AI-powered digital TCCC card to replace paper-based battlefield documentation, giving combat medics a hands-free, offline-first tool that keeps critical patient data intact from injury to recovery.',
    problem: 'The Tactical Combat Casualty Care card is the first record of a soldier\'s injuries on the battlefield. In 2025 it is still paper. Paper gets lost, damaged, and cannot transfer data reliably across care phases. Medics are slowed by manual documentation. There is no searchability, no standardization, and no integration with digital health records. Legacy systems dominate field setups and digital alternatives fail without connectivity. The result: critical medical information disappears exactly when it matters most.',
    approach: '- Conducted stakeholder interviews with military officers and TCCC medical experts to validate technical feasibility, mission fit, and pricing model before building\n- Designed an AI-powered application with hands-free voice-to-text documentation using Whisper so medics can document without stopping treatment\n- Built an interactive anatomical diagram for precise injury logging with photo and body-point tagging\n- Designed offline-first architecture with RFID and NFC-enabled patient tracking so data travels with the soldier even without connectivity\n- Integrated satellite communication for real-time updates to receiving hospitals\n- Validated the pricing model with U.S. Army 1st Lt. Adeniran Ebenezar, who confirmed two iPads per company with licenses and RFID is realistic and scalable across battalions and brigades\n- Built a coded MVP using Lovable and Whisper',
    outcome: 'Delivered a coded MVP validated by active military officers and defense AI experts. The product is currently in active development with the goal of going to market.',
    learned: 'Constraints in the field are not edge cases, they are the core design requirement. Building for chaos first means the product works everywhere else by default.',
    persona: ['all'],
    order_index: 7,
  },
  {
    title: 'Ethiack: Go-to-Market Strategy for UK, Ireland, and Spain',
    company: 'Ethiack',
    role: 'Strategy Consultant, Johns Hopkins Immersion Program',
    summary: 'Developed a phased go-to-market strategy for Ethiack, a Portuguese autonomous ethical hacking startup, to expand into the UK, Ireland, and Spain, covering market analysis, competitive landscape, MSSP partnerships, and regional pricing.',
    problem: 'Ethiack had proven its AI-driven penetration testing product in Portugal but had no structured plan for international expansion. Each target market had a different regulatory environment, competitive density, and buyer behavior. The UK is saturated with advanced AI security players like Darktrace. Ireland is smaller but FDI-friendly with multinational headquarters. Spain is price-sensitive with fewer advanced AI competitors. A single GTM approach would not work across all three.',
    approach: '- Analyzed each region across nine parameters including market demand, regulatory environment, ease of doing business, competitive landscape, and pricing potential\n- Applied BCG Growth Matrix and Ansoff Matrix to classify each region by impact and effort, then combined them into an Impact-Effort framework to sequence market entry\n- Recommended Phase 1 entry into Spain and Ireland simultaneously: Spain for high impact at lower effort, Ireland for quick wins in an FDI-friendly environment\n- Recommended Phase 2 entry into UK with references from Phase 1 markets\n- Identified and profiled 15 MSSP partners across the three regions with specific partnership rationale for each\n- Developed a regional pricing model using ethical hacker and SaaS developer salary ratios, regional multipliers, and market orientation factors to set tiered pricing across Launch, Pro, and Premium plans\n- Proposed three GTM strategies: freemium model for SME acquisition, ethical hacking events for brand awareness, and industry reports for thought leadership',
    outcome: 'Delivered a full GTM report to Ethiack founders Jorge and Tiago covering phased market entry sequencing, 15 MSSP partnership targets with outreach templates, and a complete regional pricing model across six markets.',
    learned: 'Market entry sequencing is a product decision. Going everywhere at once dilutes everything. The right order of markets is as important as the right markets themselves.',
    persona: ['all'],
    order_index: 8,
  },
  {
    title: 'Planzy: AI-Powered Group Trip Planning',
    company: 'Johns Hopkins University',
    role: 'Product Manager, Johns Hopkins Fundamentals of PM Course',
    summary: 'Designed an AI-powered trip planning app that solves the hardest part of group travel: getting everyone to agree on anything.',
    problem: 'Planning a trip alone is manageable. Planning one with a group is a coordination nightmare. Preferences conflict, decision-making stalls, someone always feels overruled, and the person who volunteers to organize ends up doing all the work while absorbing all the blame when something goes wrong. Existing travel apps are built for individual users. None of them are built for the social dynamics of group decision-making.',
    approach: '- Identified the core problem as a coordination and fairness problem, not an information problem. Most travel apps give you more options. Planzy needed to give groups a way to decide.\n- Designed a preference input flow where each group member independently inputs their priorities, travel style, budget range, and must-haves before seeing anyone else\'s input, removing anchoring bias from group discussions\n- Built an AI recommendation layer that synthesizes group preferences and surfaces itineraries optimized for collective satisfaction, not just the loudest voice\n- Designed a voting and negotiation layer so groups could debate options within the app rather than across five different chat threads\n- Validated the concept through personal experience planning a group trip to Portugal, which directly inspired the product',
    outcome: 'Delivered a full product concept including problem framing, user research, feature prioritization, and go-to-market thinking as part of the Fundamentals of PM coursework at Johns Hopkins. Built a mockup to bring the concept to life.',
    learned: 'The best product insight often comes from a problem you have lived. The Portugal trip did not just inspire Planzy. It stress-tested every assumption about what makes group coordination hard.',
    persona: ['all'],
    order_index: 9,
  },
  {
    title: 'Johns Hopkins Hospital: Reducing Nurse Burnout in a Psychiatric Ward',
    company: 'Johns Hopkins Hospital',
    role: 'Strategy Consultant, Johns Hopkins Patient Safety Collaborative',
    summary: 'Conducted a six-week operational study of the Meyer 4 psychiatric ward at Johns Hopkins Hospital to identify staffing inefficiencies and workflow bottlenecks driving nurse burnout and overtime, and delivered a set of data-driven recommendations to fix them.',
    problem: 'Meyer 4 was running mandated overtime at more than 8 instances per month, well above the target of 2. Nurses were being utilized at 90%+ throughout their shifts with no slack for emergencies. Charting alone was consuming up to 45 minutes per patient per shift. Day patients with eating disorders were not counted in the staffing metric, making the ward appear adequately staffed when it was not. The result: nurses at the edge of burnout, patient care suffering, and no clear framework for how to fix it.',
    approach: '- Conducted interviews and surveys with 7 nurses on the ward to map real workflows, identify the most time-consuming tasks, and understand root causes of burnout\n- Observed ward operations across multiple shifts to identify staffing patterns and breakdown of nurse roles (charge, rounds, floor)\n- Interviewed the manager of Meyer 3, a comparable ward, to benchmark against a working model and identify transferable practices\n- Built an impact matrix to prioritize recommendations by effort and impact, separating quick wins from structural fixes\n- Recommended 4 interventions: speech-to-text documentation using Dragon Medical One (already in Epic, zero cost, 3x faster than typing), visible workstations on the ward floor (validated by Meyer 3), inclusion of day patients in the staffing metric, and a patient acuity classification tool for smarter nurse-to-patient assignment',
    outcome: 'Delivered a full consulting report to Ms. Sarah Frank, RN III, with short-term and long-term implementation roadmaps and cost-benefit analysis for each recommendation. Speech-to-text and visible workstations were identified as immediate no-cost or low-cost interventions with measurable impact on documentation time and patient satisfaction.',
    learned: 'Operational problems in high-stakes environments rarely have one root cause. The staffing metric was broken, the shift structure was broken, and the charting workflow was broken simultaneously. Fixing one without the others would not have moved the needle.',
    persona: ['all'],
    order_index: 10,
  },
  {
    title: 'Medicare Hospice: Visualizing Care Quality Across 2021 to 2024',
    company: 'Johns Hopkins University',
    role: 'Data Analyst and Visualization Designer, Johns Hopkins Data Informed Strategy Course',
    summary: 'Built a dashboard-style data visualization analyzing Medicare hospice utilization, spending, and provider quality across the US from 2021 to 2024, designed to help policymakers and healthcare administrators make data-driven decisions about end-of-life care.',
    problem: 'Hospice care plays a critical role in end-of-life outcomes but its delivery is deeply uneven across providers and regions. Policymakers and administrators lacked a clear visual understanding of recent hospice utilization patterns and how they intersected with provider quality indicators. The data existed across multiple CMS datasets but had never been synthesized into a single coherent picture. Without that picture, data-driven policy decisions were nearly impossible.',
    approach: '- Integrated three CMS datasets: Medicare Hospice Use and Spending by Provider (2021 to 2024), Medicare Hospice Use and Spending by State (2021 to 2024), and CMS Provider Quality and Survey Ratings (2024)\n- Applied visualization theory principles including design for communication, dashboard thinking, and graph selection based on message type to structure the analysis around insights rather than raw data\n- Built a layered dashboard-style infographic in Tableau showing hospice care trends across states including spending per beneficiary and average days of care\n- Designed drill-down capability to provider level performance, highlighting correlations between hospice utilization and CMS quality ratings\n- Used color-coded maps, bar charts, and trend lines to surface geographic disparities and provider performance gaps clearly',
    outcome: 'Delivered a fully designed Tableau infographic and analysis report targeting CMS policymakers, regional healthcare administrators, hospice care managers, and public health researchers. The visualization made a complex four-year multi-dataset story scannable and actionable for a non-technical policy audience.',
    learned: 'Data without design is just noise. The hardest part of this project was not the analysis. It was deciding what not to show.',
    persona: ['all'],
    order_index: 11,
  },
]

async function run() {
  console.log('Checking for existing titles...')
  const { data: existing, error: fetchError } = await supabase
    .from('case_studies')
    .select('title')

  if (fetchError) {
    console.error('Failed to fetch existing rows:', fetchError.message)
    process.exit(1)
  }

  const existingTitles = new Set(existing.map(r => r.title))
  const toInsert = rows.filter(r => !existingTitles.has(r.title))
  const skipped = rows.filter(r => existingTitles.has(r.title))

  if (skipped.length > 0) {
    console.log(`Skipping ${skipped.length} existing rows:`)
    skipped.forEach(r => console.log(`  - ${r.title}`))
  }

  console.log(`\nInserting ${toInsert.length} rows...`)

  for (const row of toInsert) {
    const { error } = await supabase.from('case_studies').insert(row)
    if (error) {
      console.error(`Failed to insert "${row.title}":`, error.message)
      process.exit(1)
    }
    console.log(`  Inserted [${row.order_index}] ${row.title}`)
  }

  console.log('\nQuerying all rows to confirm...\n')
  const { data: all, error: confirmError } = await supabase
    .from('case_studies')
    .select('order_index, title, company, role')
    .order('order_index')

  if (confirmError) {
    console.error('Confirmation query failed:', confirmError.message)
    process.exit(1)
  }

  console.log(`Total rows in case_studies: ${all.length}\n`)
  all.forEach(r => {
    console.log(`  [${r.order_index}] ${r.title}`)
    console.log(`       ${r.company} -- ${r.role}`)
  })
}

run()
