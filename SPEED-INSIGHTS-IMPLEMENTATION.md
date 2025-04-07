# Vercel Speed Insights Implementation

## Overview

Vercel Speed Insights has been integrated into this OpenAI-Gemini API wrapper application. This document explains how the integration works and how it can be used.

## Implementation Details

### 1. Package Installation

The `@vercel/speed-insights` package has been added to the project dependencies in `package.json`.

### 2. Integration Files

Two main files handle the Speed Insights integration:

- **`src/speed-insights.mjs`**: Exports the `SpeedInsights` component for use in frontend applications and provides an initialization function.

- **`src/inject-speed-insights.mjs`**: Contains utility functions to inject the Speed Insights script into HTML responses:
  - `injectSpeedInsightsToHtml()`: Injects the script into an HTML string
  - `injectSpeedInsightsToResponse()`: Processes Response objects to inject the script

### 3. Worker Integration

The main worker (`src/worker.mjs`) has been updated to:

- Import the Speed Insights injection utilities
- Add a `processResponse()` helper function that checks for HTML responses and injects Speed Insights
- Apply this processing to all API responses
- Serve a basic HTML page at the root path with Speed Insights automatically injected

## How It Works

1. When a request is received, the worker processes it normally
2. Before sending the response, it checks if the response is HTML
3. If it is HTML, the Speed Insights script is injected into the HTML
4. The modified response is then sent to the client

## Usage in Different Scenarios

### API-Only Usage

For the current API-only implementation, Speed Insights is automatically injected into the basic HTML page served at the root path. This provides performance monitoring for this page.

### Future Frontend Integration

If a frontend application is added to this project in the future:

- **For React/Vue/Next.js**: Use the exported `SpeedInsights` component from `src/speed-insights.mjs`
- **For SvelteKit**: Use the `injectSpeedInsights()` function from `@vercel/speed-insights/sveltekit`
- **For other frameworks**: Use the injection utilities in `src/inject-speed-insights.mjs`

## Deployment

No additional configuration is needed. When deployed to Vercel, Speed Insights will automatically collect and display performance data in your Vercel dashboard.

## Documentation

For more information about Vercel Speed Insights, visit the [official documentation](https://vercel.com/docs/speed-insights).