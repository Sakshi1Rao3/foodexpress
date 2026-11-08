'use client'

import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const SUPABASE_NOT_CONFIGURED_MESSAGE =
  'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local and restart the server.'

// Returns null instead of throwing when env vars are missing, so pages still render.
// In the browser createBrowserClient returns a shared singleton.
export function createClient() {
  if (!isSupabaseConfigured) {
    return null
  }
  return createBrowserClient(supabaseUrl!, supabaseAnonKey!)
}
