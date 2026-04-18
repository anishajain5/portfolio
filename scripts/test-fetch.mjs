// Run with: node scripts/test-fetch.mjs
// Requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envFile = readFileSync(resolve(__dirname, '../.env'), 'utf-8')
const env = Object.fromEntries(
  envFile.split('\n')
    .filter(line => line.includes('='))
    .map(line => line.split('=').map(s => s.trim()))
)

const supabase = createClient(
  env.VITE_SUPABASE_URL,
  env.VITE_SUPABASE_ANON_KEY
)

async function run() {
  console.log('Testing fetchCaseStudies...')
  const { data: caseStudies, error: csError } = await supabase
    .from('case_studies')
    .select('*')
    .order('order_index')

  if (csError) {
    console.error('case_studies error:', csError.message)
  } else {
    console.log(`case_studies: ${caseStudies.length} rows returned`)
    caseStudies.forEach(r => console.log(`  [${r.order_index}] ${r.title} -- ${r.company}`))
  }

  console.log('\nTesting fetchPlanTemplate...')
  const { data: plan, error: planError } = await supabase
    .from('plan_template')
    .select('*')
    .order('order_index')

  if (planError) {
    console.error('plan_template error:', planError.message)
  } else {
    console.log(`plan_template: ${plan.length} rows returned`)
    plan.forEach(r => console.log(`  [${r.order_index}] ${r.phase}`))
  }

  console.log('\nTesting contact_submissions read (should return 0 rows via RLS)...')
  const { data: submissions, error: subError } = await supabase
    .from('contact_submissions')
    .select('*')

  if (subError) {
    console.error('contact_submissions unexpected error:', subError.message)
  } else if (submissions.length === 0) {
    console.log('contact_submissions read blocked as expected: 0 rows visible to anon')
  } else {
    console.warn('WARNING: contact_submissions returned rows -- check RLS SELECT policy')
  }
}

run()
