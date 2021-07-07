const {
  REACT_APP_API_URL,
  REACT_APP_BASE_API_TOKEN,
} = process.env;

export const credentials = {
  API_TOKEN: REACT_APP_BASE_API_TOKEN
}

export const urls = {
  REACT_API_URL: REACT_APP_API_URL
}

export const TIMERS = {
  FETCH_MESSAGES: 5000
}