import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { parse } from 'csv-parse/sync'

function admin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

export async function POST(req: Request) {
  try {
    const text = await req.text();
    const rows = parse(text, { columns: true, skip_empty_lines: true }).map((r: any) => ({
      airline_id: r.airline_id || null,
      scope: String(r.scope || '').toLowerCase(),
      origin: r.origin || null,
      destination: r.destination || null,
      region: r.region || null,
      country: r.country || null,
      price_per_kg: Number(r.price_per_kg),
      currency: String(r.currency || 'AED').toUpperCase(),
      effective_from: r.effective_from, // YYYY-MM-DD
      effective_to: (r.effective_to?.toUpperCase?.() === 'NULL' || r.effective_to === '') ? null : r.effective_to,
      is_active: String(r.is_active ?? 'true').toLowerCase() !== 'false',
      notes: r.notes || null
    }));

    const supa = admin();
    const { error } = await supa.from('rates_excess').insert(rows);
    if (error) return NextResponse.json({ ok:false, error: error.message }, { status: 400 });
    return NextResponse.json({ ok:true, count: rows.length });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e.message || 'parse-failed' }, { status: 400 });
  }
}
