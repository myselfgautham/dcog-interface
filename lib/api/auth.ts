import { apiFetch } from '@/lib/api_client';

// function macro for fetching the login endpoint
export function login(input: { email: string; password: string }) {
  return apiFetch<string>('/api/auth/login/email/', {
    body: JSON.stringify(input),
  });
}
