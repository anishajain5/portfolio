import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY environment variables')
}

// Fall back to placeholders so a missing env var doesn't crash the whole app at import time
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
)

export async function fetchWorkSamples() {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('order_index')

  if (error) throw error
  return data
}

export async function fetchWorkSample(id) {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function fetchPlanTemplate() {
  const { data, error } = await supabase
    .from('plan_template')
    .select('*')
    .order('order_index')

  if (error) throw error
  return data
}
