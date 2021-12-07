import { fetchAndPopulateMoviesSliderImages } from '../views/views.js';
import { fetchAndPopulateResults } from '../views/views.js';
import { apiUrl } from '../constants.js';

export function fetchAndPopulationTrigger() {
  fetchAndPopulateMoviesSliderImages(apiUrl);
  fetchAndPopulateResults(apiUrl);
}
