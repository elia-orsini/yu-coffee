import cafes from "@/data/cafes.json";

export async function GET() {
  return Response.json(cafes);
}
