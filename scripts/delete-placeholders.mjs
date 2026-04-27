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

const titlesToDelete = [
  'Enterprise Identity Platform',
  'Financial Data Platform',
  'Biome',
  'Graduate Research Projects',
]

async function run() {
  const { error } = await supabase
    .from('case_studies')
    .delete()
    .in('title', titlesToDelete)

  if (error) {
    console.error('Delete failed:', error.message)
    process.exit(1)
  }

  const { data, error: confirmError } = await supabase
    .from('case_studies')
    .select('order_index, title, company')
    .order('order_index')

  if (confirmError) {
    console.error('Confirmation query failed:', confirmError.message)
    process.exit(1)
  }

  console.log(`Rows remaining: ${data.length}\n`)
  data.forEach(r => console.log(`  [${r.order_index}] ${r.title} -- ${r.company}`))
}

run()
