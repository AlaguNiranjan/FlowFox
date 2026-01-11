import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
    const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })

    if (error) {
        return NextResponse.json({ status: "error", error: error.message }, { status: 500 })
    }

    return NextResponse.json({ status: "connected", count })
}
