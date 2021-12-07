// Function to change the poster slider automatically
export function autoSliderFunc() {
  let counter = 1;
  setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
      counter = 1;
    }
  }, 3000);
}
