import { supabase } from '../../../lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('animals').select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ animals: data }, { status: 200 })
}
