# Next.js SpeedInsights Integration

This directory demonstrates how to integrate the Vercel SpeedInsights component into a Next.js application using the App Router.

## Integration Details

The SpeedInsights component has been integrated into the Next.js application in the following way:

1. The `SpeedInsights` component is imported from `../src/speed-insights.mjs` in the root layout file (`layout.js`)
2. The component is added at the bottom of the `<body>` tag in the layout file

## Files Created

- `layout.js`: The root layout component that includes the SpeedInsights component
- `page.js`: A simple home page component
- `next.config.js`: Basic Next.js configuration file

## How It Works

The SpeedInsights component automatically collects performance metrics from your Next.js application and sends them to Vercel for analysis. This helps you understand and improve your application's performance.

## Usage

To use this integration in your Next.js application:

1. Make sure you have the `@vercel/speed-insights` package installed
2. Import the SpeedInsights component in your layout file
3. Add the component to your layout

That's it! The SpeedInsights component will automatically start collecting performance data.