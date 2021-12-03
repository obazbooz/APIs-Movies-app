import { DOMCreator } from '../init/AppInit.js';
const urlApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=5f44eebe';

function randomWordGenerator() {
  var things = ['friends', 'Paper', 'Scissor'];
  var thing = things[Math.floor(Math.random() * things.length)];
}

async function fetchMovies(url) {
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

async function populateAdsMovieImages(results) {
  const randomMovieId = randomNumberGenerator(results.length);

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
export async function main() {
  try {
    const url = `${urlApi}&s=boys`;
    const { Search } = await fetchMovies(url);
    console.log(Search);
    populateAdsMovieImages(Search);
    autoSliderFunc();
  } catch (error) {
    console.log(error);
  }
}
