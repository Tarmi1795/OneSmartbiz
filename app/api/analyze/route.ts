import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { metrics, industry } = await request.json();
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const prompt = `As a high-end strategic business advisor for the Qatar market (One SmartBiz Qatar), analyze the following business venture parameters:
    Industry: ${industry}
    ${Object.entries(metrics).map(([k, v]) => `${k}: ${v}`).join('\n')}
    
    Provide a detailed, professional, and slightly futuristic analysis in JSON format with these exact keys:
    - monthlyProfit: number (estimated)
    - annualProfit: number (estimated)
    - roi: string (e.g. "25.4%")
    - breakEven: number (months)
    - margin: string (e.g. "18.5%")
    - viable: boolean
    - deepInsight: string (A concise strategic recommendation or observation about the Qatar market for this sector)
    
    Only return raw JSON.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    const jsonStr = text.replace(/```json|```/g, "").trim();
    const result = JSON.parse(jsonStr);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
