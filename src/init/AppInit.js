import { main } from '../source/sourceCode.js';

const initializeApp = () => {
  DOMCreator();
  main();
};

export const DOMCreator = () => {
  //------------------Sections create --------------------
  const logoSection = document.createElement('section');
  const movieSliderSection = document.createElement('section');
  const userPanelSection = document.createElement('section');
  const footerSection = document.createElement('section');
  //-----------------
  logoSection.setAttribute('id', 'LOGO_SECTION_ID');
  movieSliderSection.setAttribute('id', 'SLIDER_SECTION_ID');
  userPanelSection.setAttribute('id', 'USER_PANEL_SECTION_ID');
  footerSection.setAttribute('id', 'FOOTER_SECTION_ID');
  //-----------------
  document.body.appendChild(logoSection);
  document.body.appendChild(movieSliderSection);
  document.body.appendChild(userPanelSection);
  document.body.appendChild(footerSection);
  //--------------------Logo-----------
  const logoImage = document.createElement('img');
  logoImage.src = '../public/imgs/MoviesApp.png';
  logoSection.appendChild(logoImage);

  //-------------------Movies Slider---------------------
  const sliderContainer = document.createElement('div');
  const sliderTitle = document.createElement('h3');
  sliderTitle.setAttribute('id', 'sliderTitleId');
  sliderTitle.textContent = 'EXClUSIVE ON MOVIES APP';
  movieSliderSection.appendChild(sliderTitle);
  sliderContainer.setAttribute('class', 'slider');
  const slidesContainer = document.createElement('div');
  slidesContainer.setAttribute('class', 'slides');
  sliderContainer.appendChild(slidesContainer);
  movieSliderSection.appendChild(sliderContainer);

  const radioOneElement = document.createElement('input');
  radioOneElement.setAttribute('id', 'radio1');
  radioOneElement.name = 'radio-btn';
  radioOneElement.type = 'radio';

  const radioTwoElement = document.createElement('input');
  radioTwoElement.setAttribute('id', 'radio2');
  radioTwoElement.name = 'radio-btn';
  radioTwoElement.type = 'radio';

  const radioThreeElement = document.createElement('input');
  radioThreeElement.setAttribute('id', 'radio3');
  radioThreeElement.name = 'radio-btn';
  radioThreeElement.type = 'radio';

  const radioFourElement = document.createElement('input');
  radioFourElement.setAttribute('id', 'radio4');
  radioFourElement.name = 'radio-btn';
  radioFourElement.type = 'radio';

  const radioFiveElement = document.createElement('input');
  radioFiveElement.setAttribute('id', 'radio5');
  radioFiveElement.name = 'radio-btn';
  radioFiveElement.type = 'radio';

  slidesContainer.appendChild(radioOneElement);
  slidesContainer.appendChild(radioTwoElement);
  slidesContainer.appendChild(radioThreeElement);
  slidesContainer.appendChild(radioFourElement);
  slidesContainer.appendChild(radioFiveElement);

  const movieOneHolder = document.createElement('div');
  movieOneHolder.setAttribute('class', 'movieHolderClass');
  movieOneHolder.setAttribute('id', 'first');
  const movieOneImage = document.createElement('img');
  movieOneImage.setAttribute('id', 'imageOneId');

  const movieTwoHolder = document.createElement('div');
  movieTwoHolder.setAttribute('class', 'movieHolderClass');
  const movieTwoImage = document.createElement('img');
  movieTwoImage.setAttribute('id', 'imageTwoId');

  const movieThreeHolder = document.createElement('div');
  movieThreeHolder.setAttribute('class', 'movieHolderClass');
  const movieThreeImage = document.createElement('img');
  movieThreeImage.setAttribute('id', 'imageThreeId');

  const movieFourHolder = document.createElement('div');
  movieFourHolder.setAttribute('class', 'movieHolderClass');
  const movieFourImage = document.createElement('img');
  movieFourImage.setAttribute('id', 'imageFourId');

  const movieFiveHolder = document.createElement('div');
  movieFiveHolder.setAttribute('class', 'movieHolderClass');
  const movieFiveImage = document.createElement('img');
  movieFiveImage.setAttribute('id', 'imageFiveId');

  movieOneHolder.appendChild(movieOneImage);
  movieTwoHolder.appendChild(movieTwoImage);
  movieThreeHolder.appendChild(movieThreeImage);
  movieFourHolder.appendChild(movieFourImage);
  movieFiveHolder.appendChild(movieFiveImage);

  slidesContainer.appendChild(movieOneHolder);
  slidesContainer.appendChild(movieTwoHolder);
  slidesContainer.appendChild(movieThreeHolder);
  slidesContainer.appendChild(movieFourHolder);
  slidesContainer.appendChild(movieFiveHolder);
  //-------------------Auto Navigation--------------------

  const autoNaviContainer = document.createElement('div');
  autoNaviContainer.setAttribute('class', 'autoNavi');
  const autoNaviFirstDivElement = document.createElement('div');
  const autoNaviSecondDivElement = document.createElement('div');
  const autoNaviThirdDivElement = document.createElement('div');
  const autoNaviFourthDivElement = document.createElement('div');
  const autoNaviFifthDivElement = document.createElement('div');
  autoNaviFirstDivElement.setAttribute('class', 'autoNavibtnOne');
  autoNaviSecondDivElement.setAttribute('class', 'autoNavibtnTwo');
  autoNaviThirdDivElement.setAttribute('class', 'autoNavibtnThree');
  autoNaviFourthDivElement.setAttribute('class', 'autoNavibtnFour');
  autoNaviFifthDivElement.setAttribute('class', 'autoNavibtnFive');
  autoNaviContainer.appendChild(autoNaviFirstDivElement);
  autoNaviContainer.appendChild(autoNaviSecondDivElement);
  autoNaviContainer.appendChild(autoNaviThirdDivElement);
  autoNaviContainer.appendChild(autoNaviFourthDivElement);
  autoNaviContainer.appendChild(autoNaviFifthDivElement);
  sliderContainer.appendChild(autoNaviContainer);

  //-------manualnavigation ------------------
  const manualNaviContainer = document.createElement('div');
  manualNaviContainer.setAttribute('class', 'naviMmanual');
  sliderContainer.appendChild(manualNaviContainer);
  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  const label3 = document.createElement('label');
  const label4 = document.createElement('label');
  const label5 = document.createElement('label');
  label1.setAttribute('class', 'manualNaviBtn');
  label2.setAttribute('class', 'manualNaviBtn');
  label3.setAttribute('class', 'manualNaviBtn');
  label4.setAttribute('class', 'manualNaviBtn');
  label5.setAttribute('class', 'manualNaviBtn');

  label1.htmlFor = 'radio1';
  label2.htmlFor = 'radio2';
  label3.htmlFor = 'radio3';
  label4.htmlFor = 'radio4';
  label5.htmlFor = 'radio5';
  manualNaviContainer.appendChild(label1);
  manualNaviContainer.appendChild(label2);
  manualNaviContainer.appendChild(label3);
  manualNaviContainer.appendChild(label4);
  manualNaviContainer.appendChild(label5);
};

window.addEventListener('load', initializeApp);
