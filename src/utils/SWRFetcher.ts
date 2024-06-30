export default function SWRFetcher() {
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

  return fetcher;
}
