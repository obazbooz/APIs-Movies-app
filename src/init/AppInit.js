const initializeApp = () => {
  DOMCreator();
  showMoviesAds();
};

const DOMCreator = () => {
  //------------------Sections create --------------------
  const logoSection = document.createElement('section');
  const moviesAdsSection = document.createElement('section');
  const userPanelSection = document.createElement('section');
  const footerSection = document.createElement('section');
  //-----------------
  logoSection.setAttribute('id', 'LOGO_SECTION_ID');
  moviesAdsSection.setAttribute('id', 'ADS_SECTION_ID');
  userPanelSection.setAttribute('id', 'USER_PANEL_SECTION_ID');
  footerSection.setAttribute('id', 'FOOTER_SECTION_ID');
  //--------------------logo-----------
  logoSection.innerText = 'Movies Application';
  //-------------------ADS---------------------
  const adsContainer = document.createElement('div');
  adsContainer.setAttribute('id', 'ADS_CONTAINER_ID');
  adsContainer.innerText = 'test';
  moviesAdsSection.appendChild(adsContainer);

  //-------------------Sections Append--------------------
  document.body.appendChild(logoSection);
  document.body.appendChild(moviesAdsSection);
  document.body.appendChild(userPanelSection);
  document.body.appendChild(footerSection);
};

window.addEventListener('load', initializeApp);
