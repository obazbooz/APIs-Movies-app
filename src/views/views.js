import { autoSliderFunc } from '../util/support.js';

// Function to fetch API response
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

// Function using "fetchMoviesData" to fetch and populate movie slider elements
export async function fetchAndPopulateMoviesSliderImages(apiUrl) {
  try {
    const url = `${apiUrl}&s=friends`;
    const { Search } = await fetchMoviesData(url);

    const img1 = document.getElementById('imageOneId');
    const img2 = document.getElementById('imageTwoId');
    const img3 = document.getElementById('imageThreeId');
    const img4 = document.getElementById('imageFourId');
    const img5 = document.getElementById('imageFiveId');

    img1.src = Search[1].Poster;
    img2.src = Search[2].Poster;
    img3.src = Search[3].Poster;
    img4.src = Search[4].Poster;
    img5.src = Search[5].Poster;
    autoSliderFunc();
  } catch (error) {}
}

// Function using "fetchMoviesData" to fetch API according to user input
//and populate user search results elements by calling "moviesRender" function
export async function fetchAndPopulateResults(url) {
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
          moviesRender(Search, url);
        } else {
          notFoundRender();
          console.log('No response from API');
        }
      }, 400);
    });
  } catch (error) {
    console.log(error);
  }
}

// Function tp populate and manipulate the DOM user search elements
function moviesRender(Search, url) {
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
    const movieName = document.createElement('h4');
    movieName.setAttribute('class', 'movieName');
    movieName.innerText = element.Title;
    const viewDetails = document.createElement('p');
    viewDetails.setAttribute('class', 'viewDetails');
    viewDetails.innerText = 'Click for details';

    posterOverlay.appendChild(movieName);
    posterOverlay.appendChild(viewDetails);
    resultContainer.appendChild(posterContainer);
    posterContainer.addEventListener('click', () => {
      movieRender(element, url);
    });
  });
}

// Function to populate and manipulate the DOM selected result element
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
    if (element.Poster !== 'N/A') {
      chosenMoviePoster.src = element.Poster;
    } else {
      chosenMoviePoster.src = '../public/imgs/keep-calm-poster-not-found.png';
    }
    chosenMoviePoster.alt = 'Image not found!';
    chosenPosterContainer.appendChild(chosenMoviePoster);
    resultContainer.appendChild(chosenPosterContainer);

    //********movie info container content ***************/
    const movieInfoContainer = document.createElement('div');
    movieInfoContainer.setAttribute('id', 'movieInfoContainer');
    resultContainer.appendChild(movieInfoContainer);

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

// Function to populate not found DOM elements
function notFoundRender() {
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
