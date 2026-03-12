import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('prices')
      .select('key, value');

    if (error) throw error;

    const prices = data.reduce((acc: any, row: any) => {
      acc[row.key] = parseFloat(row.value);
      return acc;
    }, {});

    return NextResponse.json(prices);
  } catch (error: any) {
    console.error('Error fetching prices:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { prices, password } = await request.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updates = Object.entries(prices).map(([key, value]) => ({
      key,
      value
    }));

    const { error } = await supabase
      .from('prices')
      .upsert(updates, { onConflict: 'key' });

    if (error) throw error;

    return NextResponse.json({ message: 'Prices updated successfully' });
  } catch (error: any) {
    console.error('Error updating prices:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
