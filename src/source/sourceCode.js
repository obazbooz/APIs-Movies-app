import { DomCreator } from '../init/AppInit.js';
const urlApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=5f44eebe';

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
    const url = `${urlApi}&s=boys`;
    const { Search } = await fetchMoviesData(url);
    populateMoviesSliderImages(Search);
  } catch (error) {
    console.log(error);
  }
}
