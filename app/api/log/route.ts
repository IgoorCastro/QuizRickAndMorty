// app/api/log/route.ts
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // Pega IP do header x-forwarded-for ou x-real-ip, fallback para "desconhecido"
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim()
        || req.headers.get("x-real-ip")
        || "desconhecido";


    const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
    const geoData = await geoRes.json();
    console.log({
        ip,
        city: geoData.city,
        region: geoData.regionName,
        country: geoData.country
    });

    return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
    });
}
