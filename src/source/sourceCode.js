import { DomCreator } from '../init/AppInit.js';
import { DomUserPanelCreator } from '../init/AppInit.js';
import axios from 'https://cdn.skypack.dev/axios';

function randomNumberGenerator(resultsSize) {
  return Math.floor(Math.random() * resultsSize);
}

// async function getUser() {
//   try {
//     const { data } = await axios.get(
//       'http://www.omdbapi.com/?apikey=5f44eebe&s=friends',
//     );
//     console.log(data.Search);
//   } catch (error) {
//     console.error(error);
//   }
// }

async function fetchMoviesData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request field!');
  } catch (error) {
    console.log(error);
  }
}

async function populateMoviesSliderImages(results) {
  // const randomMovieId = randomNumberGenerator(results.length);

  const img1 = document.getElementById('imageOneId');
  const img2 = document.getElementById('imageTwoId');
  const img3 = document.getElementById('imageThreeId');
  const img4 = document.getElementById('imageFourId');
  const img5 = document.getElementById('imageFiveId');

  img1.src = results[1].Poster;
  img2.src = results[2].Poster;
  img3.src = results[3].Poster;
  img4.src = results[4].Poster;
  img5.src = results[5].Poster;
  autoSliderFunc();
}

async function fetchAndPopulateResults(url) {
  try {
    const inputElement = document.querySelector('.inputElement');
    let searchTimeoutToken = 0;
    inputElement.addEventListener('keyup', async (event) => {
      clearTimeout(searchTimeoutToken);
      searchTimeoutToken = setTimeout(async () => {
        const inputURL = `${url}&s=${inputElement.value}`;
        const responseData = await fetchMoviesData(inputURL);
        if (responseData.Response === 'True') {
          const { Search } = responseData;
          moviesRander(Search, url);
        } else {
          searchNotFound();
          console.log('No response from API');
        }
      }, 400);
    });
  } catch (error) {
    console.log(error);
  }
}

function moviesRander(Search, url) {
  const resultContainer = document.querySelector('.resultsContainer');
  resultContainer.innerHTML = '';
  Search.forEach((element) => {
    const posterContainer = document.createElement('div');
    posterContainer.setAttribute('class', 'posterContainer');
    posterContainer.setAttribute('id', `${element.imdbID}`);
    const moviePoster = document.createElement('img');
    moviePoster.setAttribute('class', 'moviePoster');
    if (element.Poster !== 'N/A') {
      moviePoster.src = element.Poster;
    } else {
      moviePoster.src = '../public/imgs/keep-calm-poster-not-found.png';
    }
    posterContainer.appendChild(moviePoster);
    const posterOverlay = document.createElement('div');
    posterOverlay.setAttribute('class', 'posterOverlay');
    posterContainer.appendChild(posterOverlay);
    const playIcon = document.createElement('i');
    playIcon.setAttribute('class', 'fa fa-play-circle-o');
    playIcon.setAttribute('style', 'font-size:36px;');
    const movieName = document.createElement('h4');
    movieName.setAttribute('class', 'movieName');
    movieName.innerText = element.Title;
    const viewDetails = document.createElement('p');
    viewDetails.setAttribute('class', 'movieYear');
    viewDetails.innerText = 'Click for details';
    posterOverlay.appendChild(playIcon);
    posterOverlay.appendChild(movieName);
    posterOverlay.appendChild(viewDetails);
    resultContainer.appendChild(posterContainer);
    posterContainer.addEventListener('click', () => {
      movieRender(element, url);
    });
  });
}

async function movieRender(element, url) {
  const moreInfoUrl = `${url}&i=${element.imdbID}`;
  try {
    const detailedResponse = await fetchMoviesData(moreInfoUrl);
    const resultContainer = document.querySelector('.resultsContainer');
    resultContainer.innerHTML = '';
    const chosenPosterContainer = document.createElement('div');
    chosenPosterContainer.setAttribute('class', 'chosenPosterContainer');
    const chosenMoviePoster = document.createElement('img');
    chosenMoviePoster.setAttribute('class', 'moviePoster');
    chosenMoviePoster.src = detailedResponse.Poster;
    chosenMoviePoster.alt = 'Image not found!';
    chosenPosterContainer.appendChild(chosenMoviePoster);
    resultContainer.appendChild(chosenPosterContainer);
    // Movie information
    const movieInfoContainer = document.createElement('div');
    movieInfoContainer.setAttribute('id', 'movieInfoContainer');
    resultContainer.appendChild(movieInfoContainer);
    //********movie info container content */

    const movieTitleHolder = document.createElement('div');
    movieTitleHolder.setAttribute('class', 'movieTitle');
    const movieTitle = document.createElement('h3');
    movieTitle.innerText = `${detailedResponse.Title}`;
    movieTitleHolder.appendChild(movieTitle);
    movieInfoContainer.appendChild(movieTitleHolder);

    const movieYearHolder = document.createElement('div');
    movieYearHolder.setAttribute('class', 'movieYear');
    const movieYearLabel = document.createElement('label');
    const movieYear = document.createElement('h4');
    movieYearLabel.innerText = `Release year: `;
    movieYear.innerText = `${detailedResponse.Year}`;
    movieYearHolder.appendChild(movieYearLabel);
    movieYearHolder.appendChild(movieYear);
    movieInfoContainer.appendChild(movieYearHolder);

    const movieTypeHolder = document.createElement('div');
    movieTypeHolder.setAttribute('class', 'movieType');
    const movieTypeLabel = document.createElement('label');
    const movieType = document.createElement('p');
    movieTypeLabel.innerText = `Movie type: `;
    movieType.innerText = `${detailedResponse.Genre}`;
    movieTypeHolder.appendChild(movieTypeLabel);
    movieTypeHolder.appendChild(movieType);
    movieInfoContainer.appendChild(movieTypeHolder);

    const movieWriterHolder = document.createElement('div');
    movieWriterHolder.setAttribute('class', 'movieWriter');
    const movieWriterLabel = document.createElement('label');
    const movieWriter = document.createElement('p');
    movieWriterLabel.innerText = 'Writer: ';
    movieWriter.innerText = `${detailedResponse.Writer}`;
    movieWriterHolder.appendChild(movieWriterLabel);
    movieWriterHolder.appendChild(movieWriter);
    movieInfoContainer.appendChild(movieWriterHolder);

    const movieActorsHolder = document.createElement('div');
    movieActorsHolder.setAttribute('class', 'movieActors');
    const movieActorLabel = document.createElement('label');
    const movieActors = document.createElement('p');
    movieActorLabel.innerText = 'Actors: ';
    movieActors.innerText = `${detailedResponse.Actors}`;
    movieActorsHolder.appendChild(movieActorLabel);
    movieActorsHolder.appendChild(movieActors);
    movieInfoContainer.appendChild(movieActorsHolder);

    const movieStoryHolder = document.createElement('div');
    movieStoryHolder.setAttribute('class', 'movieStory');
    const movieStoryLabel = document.createElement('label');
    const movieStory = document.createElement('p');
    movieStoryLabel.innerText = 'Movie Story: ';
    movieStory.innerText = `${detailedResponse.Plot}`;
    movieStoryHolder.appendChild(movieStoryLabel);
    movieStoryHolder.appendChild(movieStory);
    movieInfoContainer.appendChild(movieStoryHolder);

    const movieLanguageHolder = document.createElement('div');
    movieLanguageHolder.setAttribute('class', 'movieLanguage');
    const movieLanguageLabel = document.createElement('label');
    const movieLanguage = document.createElement('p');
    movieLanguageLabel.innerText = 'Audio language: ';
    movieLanguage.innerText = `${detailedResponse.Language}`;
    movieLanguageHolder.appendChild(movieLanguageLabel);
    movieLanguageHolder.appendChild(movieLanguage);
    movieInfoContainer.appendChild(movieLanguageHolder);

    const movieCountryHolder = document.createElement('div');
    movieCountryHolder.setAttribute('class', 'movieCountry');
    const movieCountryLabel = document.createElement('label');
    const movieCountry = document.createElement('p');
    movieCountryLabel.innerText = 'Country of production: ';
    movieCountry.innerText = `${detailedResponse.Country}`;
    movieCountryHolder.appendChild(movieCountryLabel);
    movieCountryHolder.appendChild(movieCountry);
    movieInfoContainer.appendChild(movieCountryHolder);

    const movieAwardsHolder = document.createElement('div');
    movieAwardsHolder.setAttribute('class', 'movieAwards');
    const movieAwardLabel = document.createElement('label');
    const movieAwards = document.createElement('p');
    movieAwardLabel.innerText = 'Awards: ';
    movieAwards.innerText = `${detailedResponse.Awards}`;
    movieAwardsHolder.appendChild(movieAwardLabel);
    movieAwardsHolder.appendChild(movieAwards);
    movieInfoContainer.appendChild(movieAwardsHolder);

    const movieRatingsHolder = document.createElement('div');
    movieRatingsHolder.setAttribute('class', 'movieRating');
    const movieRatingLabel = document.createElement('label');
    const movieRatings = document.createElement('p');
    movieRatingLabel.innerText = 'Movie rating: ';
    movieRatings.innerText = `${detailedResponse.Rating}`;
    movieRatingsHolder.appendChild(movieRatingLabel);
    movieRatingsHolder.appendChild(movieRatings);
    movieInfoContainer.appendChild(movieRatingsHolder);
  } catch (error) {
    console.log(error);
  }
}

function searchNotFound() {
  const resultContainer = document.querySelector('.resultsContainer');
  const notFoundContainer = document.createElement('div');
  notFoundContainer.setAttribute('class', 'notFoundContainer');
  resultContainer.innerHTML = '';
  const searchNotFoundImage = document.createElement('img');
  const searchNotFoundTitle = document.createElement('h3');
  searchNotFoundTitle.setAttribute('class', 'searchNotFoundTitle');
  searchNotFoundImage.setAttribute('class', 'searchNotFoundImage');
  searchNotFoundTitle.innerText = 'Try again, no match found!';
  searchNotFoundImage.src = '../public/imgs/attention-icon.png';
  notFoundContainer.appendChild(searchNotFoundImage);
  notFoundContainer.appendChild(searchNotFoundTitle);
  resultContainer.appendChild(notFoundContainer);
}

function autoSliderFunc() {
  let counter = 1;
  setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
      counter = 1;
    }
  }, 3000);
}

export async function DomManipulater() {
  try {
    const urlApi = 'http://www.omdbapi.com/?apikey=5f44eebe';
    const url = `${urlApi}&s=boys`;
    const { Search } = await fetchMoviesData(url);
    populateMoviesSliderImages(Search);
    fetchAndPopulateResults(urlApi);
    // getUser();
  } catch (error) {
    console.log(error);
  }
}
