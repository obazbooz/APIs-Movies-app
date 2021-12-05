import { DomCreator } from '../init/AppInit.js';
import { DomUserPanelCreator } from '../init/AppInit.js';

function randomNumberGenerator(resultsSize) {
  return Math.floor(Math.random() * resultsSize);
}

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
          movieRander(Search);
        } else {
          console.log('Too many results Type more');
        }
      }, 400);
    });
  } catch (error) {
    console.log(error);
  }
}

function movieRander(Search) {
  const resultContainer = document.querySelector('.resultsContainer');
  resultContainer.innerHTML = '';
  Search.forEach((element) => {
    const resultMovieContainer = document.createElement('div');
    resultMovieContainer.setAttribute('class', 'resultMovieContainer');
    const moviePoster = document.createElement('img');
    moviePoster.setAttribute('class', 'moviePoster');
    moviePoster.src = element.Poster;
    resultMovieContainer.appendChild(moviePoster);
    const posterOverlay = document.createElement('div');
    posterOverlay.setAttribute('class', 'posterOverlay');
    resultMovieContainer.appendChild(posterOverlay);
    const playIcon = document.createElement('i');
    playIcon.setAttribute('class', 'fa fa-play-circle-o');
    playIcon.setAttribute('style', 'font-size:36px;');
    const movieName = document.createElement('h4');
    movieName.setAttribute('class', 'movieName');
    movieName.innerText = element.Title;
    const movieYear = document.createElement('p');
    movieYear.setAttribute('class', 'movieYear');
    movieYear.innerText = element.Year;
    posterOverlay.appendChild(playIcon);
    posterOverlay.appendChild(movieName);
    posterOverlay.appendChild(movieYear);
    resultContainer.appendChild(resultMovieContainer);
  });
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
    const urlApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=5f44eebe';
    const url = `${urlApi}&s=boys`;
    const { Search } = await fetchMoviesData(url);
    populateMoviesSliderImages(Search);
    fetchAndPopulateResults(urlApi);
  } catch (error) {
    console.log(error);
  }
}
