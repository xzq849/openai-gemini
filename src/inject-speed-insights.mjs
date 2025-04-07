/**
 * Utility to inject Vercel Speed Insights into HTML responses
 * 
 * This module provides functions to inject the Vercel Speed Insights script
 * into HTML responses for performance monitoring.
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

// Use the injectSpeedInsights function from the package

/**
 * Injects the Vercel Speed Insights script into an HTML string
 * 
 * @param {string} html - The HTML content to inject the script into
 * @returns {string} - The HTML content with the Speed Insights script injected
 */
export function injectSpeedInsightsToHtml(html) {
  try {
    // Use the injectSpeedInsights function directly
    return injectSpeedInsights(html);
  } catch (error) {
    console.error('Error injecting Speed Insights:', error);
    // Return the original HTML if there's an error
    return html;
  }
}

/**
 * Modifies a Response object to include the Speed Insights script in its HTML content
 * 
 * @param {Response} response - The Response object to modify
 * @returns {Promise<Response>} - A new Response with Speed Insights injected
 */
export async function injectSpeedInsightsToResponse(response) {
  try {
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
  } catch (error) {
    console.error('Error processing response for Speed Insights:', error);
    // Return the original response if there's an error
    return response;
  }
}