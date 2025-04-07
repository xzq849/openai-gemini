/**
 * Utility to inject Vercel Speed Insights into HTML responses
 * 
 * This module provides functions to inject the Vercel Speed Insights script
 * into HTML responses for performance monitoring.
 */

import { inject } from '@vercel/speed-insights';

/**
 * Injects the Vercel Speed Insights script into an HTML string
 * 
 * @param {string} html - The HTML content to inject the script into
 * @returns {string} - The HTML content with the Speed Insights script injected
 */
export function injectSpeedInsightsToHtml(html) {
  return inject(html);
}

/**
 * Modifies a Response object to include the Speed Insights script in its HTML content
 * 
 * @param {Response} response - The Response object to modify
 * @returns {Promise<Response>} - A new Response with Speed Insights injected
 */
export async function injectSpeedInsightsToResponse(response) {
  // Only process HTML responses
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    return response;
  }

  // Clone the response to avoid consuming the original
  const clonedResponse = response.clone();
  const html = await clonedResponse.text();
  const injectedHtml = injectSpeedInsightsToHtml(html);

  // Create a new response with the injected HTML
  return new Response(injectedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}