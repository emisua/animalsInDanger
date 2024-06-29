import { supabase } from '../../../../lib/supabaseClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: number } }
) {
  const { path } = params
  const { data, error } = await supabase
    .from('animals')
    .select('*')
    .eq('path', path)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ animals: data }, { status: 200 })
}
