export async function GET() {
  const data = await fetch(
    `https://notion-cloudflare-worker.elia-orsini.workers.dev/v1/table/${process.env.ROASTERS_NOTION_URL}`,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  return Response.json(data);
}
