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
    phase: 'Days 1 to 30',
    title: 'Listen and Map',
    description: 'I am not shipping anything in the first 30 days. I am in rooms, on calls, reading documentation, and asking questions that feel too basic to ask. I am talking to customers, sitting with the team, and mapping what is actually broken versus what just looks broken from the outside. The goal is not to have answers. The goal is to ask better questions than anyone expects from someone who just started.',
    order_index: 1,
  },
  {
    phase: 'Days 31 to 60',
    title: 'Focus and Align',
    description: 'By day 31 I have enough signal to make a bet. I pick one problem. Not the most visible one, not the one with the loudest stakeholder behind it, but the one with the highest leverage given what I learned in month one. I go deep on it, I get alignment across the people who need to be behind it, and I start moving. This is where I build roadmap, not before.',
    order_index: 2,
  },
  {
    phase: 'Days 61 to 90',
    title: 'Ship and Learn',
    description: 'I ship something in the first 90 days. Not because it is the most important thing on the roadmap. Because shipping builds trust, and trust is what lets you do the bigger things later. The deliverable is real but scoped deliberately. The point is to demonstrate that I can take something from alignment to execution, and to start the feedback loop that will shape everything that comes after it.',
    order_index: 3,
  },
]

async function run() {
  console.log('Checking for existing rows...')
  const { data: existing, error: fetchError } = await supabase
    .from('plan_template')
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
    const { error } = await supabase.from('plan_template').insert(row)
    if (error) {
      console.error(`Failed to insert "${row.title}":`, error.message)
      process.exit(1)
    }
    console.log(`  Inserted [${row.order_index}] ${row.title}`)
  }

  console.log('\nQuerying all rows to confirm...\n')
  const { data, error: confirmError } = await supabase
    .from('plan_template')
    .select('order_index, phase, title, description')
    .order('order_index')

  if (confirmError) {
    console.error('Confirmation query failed:', confirmError.message)
    process.exit(1)
  }

  console.log(`Total rows in plan_template: ${data.length}\n`)
  data.forEach(r => {
    console.log(`  [${r.order_index}] ${r.phase} -- ${r.title}`)
    console.log(`       ${r.description.slice(0, 80)}...`)
  })
}

run()
