
import { data } from "@/app/diagnose/data";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { symptoms } = body;
    console.log("[GET_DISORDERS_POST]", symptoms);

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return new NextResponse("Symptoms are required", { status: 400 });
    }

    let bestMatch = { disorder: null, matchCount: 0 }; // Initialize bestMatch here

    for (const disorderData of data) {
      const matchCount = disorderData.symptoms.filter((symptom) =>
        symptoms.includes(symptom)
      ).length;

      if (matchCount > bestMatch.matchCount) {
        bestMatch = {
          disorder: disorderData.disorder,
          matchCount: matchCount,
        };
      }
    }

    return NextResponse.json({ disorder: bestMatch.disorder });
  } catch (error) {
    console.log("[GET_DISORDERS_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}