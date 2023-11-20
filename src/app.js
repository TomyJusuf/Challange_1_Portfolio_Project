const layoutInsideCard = document.querySelector('.layoutInsideCard');
const arrowLeft = document.querySelector('.fa-angles-left');
const arrowRight = document.querySelector('.fa-angles-right');

import {
  personalData,
  contactData,
  education,
  carrier,
  languagesSkill,
} from './renderData.js';

const dataArray = [
  personalData,
  contactData,
  education,
  carrier,
  languagesSkill,
];

let currentIndex = 0;

// Function to display data at the current index
function displayData() {
  layoutInsideCard.innerHTML = dataArray[currentIndex];
}
displayData();

// Event listener for the "Previous" button
arrowLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayData();
  }
});

// Event listener for the "Next" button
arrowRight.addEventListener('click', () => {
  if (currentIndex < dataArray.length - 1) {
    currentIndex++;
    displayData();
  }
});
