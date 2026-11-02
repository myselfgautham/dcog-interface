// fetch the API_URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// throw an error if the environment is not configured
if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not configured');
}

// we will use native fetch rather than adding Axios
export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  // fetch the required API and store the response
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    method: 'POST',
    // preserve credentials sent by the server
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  // throw an API error if response is not ok
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  // resolve the data's content type
  const contentType = response.headers.get('content-type');

  // parse the data properly if it contains JSON
  if (contentType?.includes('application/json')) {
    return (await response.json()) as Promise<T>;
  }

  // return the response text as a fallback
  return (await response.text()) as unknown as Promise<T>;
}
