export async function GET() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.CAFES_NOTION_URL}`,
    { next: { revalidate: 1 } }
  ).then((res) => res.json());

  return Response.json(data);
}
