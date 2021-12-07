import { fetchAndPopulateMoviesSliderImages } from '../views/views.js';
import { fetchAndPopulateResults } from '../views/views.js';
import { apiUrl } from '../constants.js';

// Function to trigger the fetching and populating functions
export function fetchAndPopulationTrigger() {
  fetchAndPopulateMoviesSliderImages(apiUrl);
  fetchAndPopulateResults(apiUrl);
}
