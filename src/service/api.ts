const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Falha na requisição: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
