const createUrl = (path: string): string => `${process.env.API_URL}${path}`;

export async function client<T>(
  path: string,
  config?: RequestInit,
): Promise<T> {
  const res = await fetch(new Request(createUrl(path), config));
  if (res.ok) {
    return res.json() as Promise<T>;
  }
  throw new Error(res.statusText);
}
