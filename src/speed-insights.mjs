// @vercel/speed-insights integration
import { SpeedInsights } from '@vercel/speed-insights';

// Export the SpeedInsights component for use in frontend applications
export { SpeedInsights };

// Initialize Speed Insights for server-side monitoring
export const initSpeedInsights = () => {
  // This function can be called from server entry points
  console.log('Vercel Speed Insights initialized');
  // Speed Insights is primarily client-side, but this function
  // can be used for any server-side initialization if needed
};