export const SITE_URL = "https://kokikai.de";
export const SITE_NAME = "Aikido Kokikai Berlin";

export const EXTERNAL_URLS = {
  meetup: "https://www.meetup.com/aikido-kokikai-berlin/",
  syndicate: "https://syndicate-berlin.de",
  syndicateMaps: "https://maps.app.goo.gl/UuD9JHbNXj72",
  nycAikido: "https://www.nycaikido.com/",
  asiaSport: "https://www.asiasport.de/",
  teespring: "https://teespring.com/aikido-kokikai-berlin",
} as const;

export const DOJO_ADDRESS = {
  name: "Syndicate Martial Arts Berlin",
  street: "Chausseestraße 102",
  city: "Berlin",
  postcode: "10115",
  country: "Germany",
  full: "Chausseestraße 102, 10115 Berlin",
} as const;

export const CLASS_SCHEDULE = [
  { day: "Monday", time: "19:45", duration: "90 min" },
  { day: "Wednesday", time: "20:00", duration: "90 min" },
] as const;

export const CONTACT_EMAIL = "info@kokikai.de";
