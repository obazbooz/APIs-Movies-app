import { fetchAndPopulationTrigger } from '../listeners/moviesListeners.js';

// Function to call the sections functions creators and to trigger the fetching and manipulating functions in views file
const initializeApp = () => {
  DomLandingCreator();
  DomUserPanelCreator();
  DomFooterCreator();
  fetchAndPopulationTrigger();
};

// Function to create the DOM elements for landing section
export const DomLandingCreator = () => {
  //------------------Landing create --------------------
  const landing = document.createElement('section');
  const logoSection = document.createElement('section');
  const movieSliderSection = document.createElement('section');
  landing.setAttribute('class', 'landingBanner');
  logoSection.setAttribute('class', 'logoSection');
  movieSliderSection.setAttribute('class', 'sliderSection');
  document.body.appendChild(landing);

  //----------landing-image ------------
  const landingImgBanner = document.createElement('div');
  landingImgBanner.setAttribute('class', 'imageBanner');
  const landingImgShadowElement = document.createElement('div');
  landingImgShadowElement.setAttribute('class', 'landingImageShadow');
  landing.appendChild(landingImgBanner);
  landing.appendChild(landingImgShadowElement);
  landing.appendChild(logoSection);
  landing.appendChild(movieSliderSection);

  //--------------------Logo-----------
  const logoContainer = document.createElement('div');
  logoContainer.setAttribute('class', 'logoContainer');
  const logoImage = document.createElement('img');
  const searchButton = document.createElement('button');
  const buttonAnchor = document.createElement('a');
  logoImage.src = './public/imgs/NETFOX.png';
  searchButton.setAttribute('class', 'btn btn-danger');
  searchButton.setAttribute('type', 'button');
  searchButton.innerText = 'Search';
  buttonAnchor.href = '#SEARCH_USER_INPUT_ID';
  searchButton.href = '#SEARCH_USER_INPUT_ID';
  buttonAnchor.appendChild(searchButton);
  logoContainer.appendChild(logoImage);
  logoContainer.appendChild(buttonAnchor);
  logoSection.appendChild(logoContainer);

  //-------------------Movies Slider---------------------
  const sliderContainer = document.createElement('div');
  const sliderTitle = document.createElement('h3');
  sliderTitle.setAttribute('class', 'sliderTitle');
  sliderTitle.textContent = 'Exclusive on NETFOX';
  sliderContainer.setAttribute('class', 'slider');
  const slidesContainer = document.createElement('div');
  slidesContainer.setAttribute('class', 'slides');
  movieSliderSection.appendChild(sliderTitle);
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

  //--------------manualNavigation ------------------
  const manualNaviContainer = document.createElement('div');
  manualNaviContainer.setAttribute('class', 'naviManual');
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

// Function to create the DOM elements for User panel section
export const DomUserPanelCreator = () => {
  // *********User Panel and container *******************/
  const userPanelSection = document.createElement('section');
  userPanelSection.setAttribute('class', 'userPanelSection');
  const searchContainer = document.createElement('div');
  searchContainer.setAttribute('class', 'searchContainer');
  const resultsContainer = document.createElement('div');
  resultsContainer.setAttribute('class', 'resultsContainer');

  userPanelSection.appendChild(searchContainer);
  userPanelSection.appendChild(resultsContainer);
  document.body.appendChild(userPanelSection);

  //**************Search Title********************* */
  const searchTitle = document.createElement('div');
  searchTitle.setAttribute('class', 'searchTitle');
  const searchTitleHeader = document.createElement('h1');
  searchTitleHeader.setAttribute('class', 'searchHeader');
  searchTitleHeader.innerText =
    'Unlimited movies, series and games to know about';
  const searchTitleSubHeader = document.createElement('h2');
  searchTitleSubHeader.setAttribute('class', 'searchSubHeader');
  searchTitleSubHeader.innerText = 'Search your passion now';

  searchTitle.appendChild(searchTitleHeader);
  searchTitle.appendChild(searchTitleSubHeader);
  searchContainer.appendChild(searchTitle);

  //****************Search Input***************** */
  const searchUserInput = document.createElement('div');
  searchUserInput.setAttribute('class', 'searchUserInput');
  searchUserInput.setAttribute('id', 'SEARCH_USER_INPUT_ID');
  const inputElement = document.createElement('input');
  inputElement.setAttribute('class', 'inputElement');
  inputElement.setAttribute('id', 'INPUT_ID');
  inputElement.placeholder = 'Type your search here';

  searchUserInput.appendChild(inputElement);
  searchContainer.appendChild(searchUserInput);
};

// Function to create the DOM elements for User footer section
const DomFooterCreator = () => {
  //****************************** */
  const footerSection = document.createElement('section');
  footerSection.setAttribute('class', 'footerSection');
  const footerContent = document.createElement('div');
  footerContent.setAttribute('class', 'footerContent');

  footerSection.appendChild(footerContent);
  document.body.appendChild(footerSection);

  //******************************* */
  const footerTop = document.createElement('p');
  footerTop.setAttribute('class', 'footerTop');
  footerTop.innerText = 'Questions? Call';
  const footerTopPhoneNum = document.createElement('a');
  footerTopPhoneNum.setAttribute('class', 'footerPhoneNum');
  footerTopPhoneNum.href = '0630677733';
  footerTopPhoneNum.innerText = ' 06306777**';
  footerTop.appendChild(footerTopPhoneNum);
  //******************************************* */
  const footerLinksContainer = document.createElement('ul');
  footerLinksContainer.setAttribute('class', 'footerLinksContainer');
  for (let i = 0; i < 6; i++) {
    const footerLink = document.createElement('li');
    footerLink.setAttribute('class', 'footerLink');
    const linkAnchor = document.createElement('a');
    linkAnchor.setAttribute('class', 'linkAnchor');
    footerLink.appendChild(linkAnchor);
    footerLinksContainer.appendChild(footerLink);
    switch (i) {
      case 0:
        linkAnchor.href = '#';
        linkAnchor.innerText = 'FAQ';
        break;
      case 1:
        linkAnchor.href = '#';
        linkAnchor.innerText = 'Only on MOVIES APP';
        break;
      case 2:
        linkAnchor.href = '#';
        linkAnchor.innerText = 'Help Centre';
        break;
      case 3:
        linkAnchor.href = '#';
        linkAnchor.innerText = 'Terms of Use';
        break;
      case 4:
        linkAnchor.href = '#';
        linkAnchor.innerText = 'FAQ';
        break;
      case 5:
        linkAnchor.href = '#';
        linkAnchor.innerText = 'Contact Us';
        break;
    }
  }

  //******************************************************* */
  const languageSelectionContainer = document.createElement('div');
  languageSelectionContainer.setAttribute(
    'class',
    'languageSelectionContainer',
  );
  //*************************************************** */
  const footerCountry = document.createElement('p');
  footerCountry.setAttribute('class', 'footerCountry');
  footerCountry.innerText = 'NITFOX Netherlands';
  //************************************************* */
  footerContent.appendChild(footerTop);
  footerContent.appendChild(footerLinksContainer);
  footerContent.appendChild(languageSelectionContainer);
  footerContent.appendChild(footerCountry);
};

window.addEventListener('load', initializeApp);
