import roasters from "@/data/roasters.json";

export async function GET() {
  return Response.json(roasters);
}
