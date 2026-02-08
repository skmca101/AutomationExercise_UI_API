import { request } from '@playwright/test';

export async function apiContext() 
{
  return await request.newContext({
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });
}