import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, total, currency, selections, customRequirements } = body;

    console.log("Lead Capture POST received:", { name, contact, total });

    if (!name || !contact) {
      return NextResponse.json({ error: "Name and contact required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("inquiries")
      .insert([
        { 
          name, 
          contact, 
          project_total: total, 
          currency, 
          selections, 
          custom_requirements: customRequirements 
        }
      ])
      .select();

    if (error) {
      console.error("Supabase Error during Lead Injection:", error);
      return NextResponse.json({ error: error.message, details: error.details }, { status: 500 });
    }

    console.log("Lead successfully stored in Supabase:", data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Fatal API Error in /api/leads:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
