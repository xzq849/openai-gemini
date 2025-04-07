// Next.js App Router layout component
import { SpeedInsights } from '../src/speed-insights.mjs';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>OpenAI-Gemini API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        {/* Add the SpeedInsights component here */}
        <SpeedInsights />
      </body>
    </html>
  );
}