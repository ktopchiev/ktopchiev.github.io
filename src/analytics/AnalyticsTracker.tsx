import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendPageView } from '../analytics/analytics';

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;
    sendPageView(fullPath);
  }, [location]);

  return null;
};