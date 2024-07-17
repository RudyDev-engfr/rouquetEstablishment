export const GA_TRACKING_ID = "G-HYG8WM4QC6";

// Méthode pour suivre une page vue
export const pageview = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Méthode pour suivre des événements
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
