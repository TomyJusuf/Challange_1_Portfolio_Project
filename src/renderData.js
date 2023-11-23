import { personalDataCV } from './data.js';

const {
  name,
  city,
  country,
  birthDate,
  countryOfBirth,
  sex,
  state,
  phone,
  email,
  grundSchule,
  ausbildung,
  matura,
  experience,
  languages,
} = personalDataCV;
console.log(name);

const personalData = `
<h1 class="w-full text-center  text-5xl   tabindex="4"">Personal Data</h1>
<div class="w-full h-2 text-center bg-orange-300 text-4xl font-bold mb-16"></div>
<h1 class="font-edu text-2xl text-start">Name: <span>${name}</span></h1>
<h1 class="font-edu text-2xl text-start">City: <span>${city}</span></h1>
<h1 class="font-edu text-2xl text-start">Living country: <span>${country}</span></h1>
<h1 class="font-edu text-2xl text-start">Date of birth: <span>${birthDate}</span></h1>
<h1 class="font-edu text-2xl text-start">Country of birth: <span>${countryOfBirth}</span></h1>
<h1 class="font-edu text-2xl text-start">Sex: <span>${sex}</span></h1>
<h1 class="font-edu text-2xl text-start">Status: <span>${state}</span></h1>
`;

const contactData = `
<h1 class="w-full text-center text-4xl font-bold "  tabindex="6">Contact</h1>
<div class="w-full h-2  bg-orange-300  mb-16"></div>
<h1 class="font-edu text-2xl text-start">Phone: <span>${phone}</span></h1>
<h1 class="font-edu text-2xl text-start">Email: <span>${email}</span></h1>
`;

const education = `
<h1 class="w-full text-center text-4xl font-bold "  tabindex="7">Education</h1>
<div class="w-full h-2  bg-orange-300  mb-16"></div>
<h1 class="font-edu text-2xl">Grundschule: <span>${grundSchule}</span></h1>
<h1 class="font-edu text-2xl">Ausbildung: <span>${ausbildung}</span></h1>
<h1 class="font-edu text-2xl">Matura: <span>${matura}</span></h1>
`;

const carrier = `
<h1 class="w-full text-center  text-4xl font-bold "  tabindex="8">Carrier</h1>
<div class="w-full h-2  bg-orange-300  mb-16"></div>
<h1 class="font-edu text-xl">${experience[0]}</h1>
<h1 class="font-edu text-xl">${experience[1]}</h1>
<h1 class="font-edu text-xl">${experience[2]}</h1>
<h1 class="font-edu text-xl">${experience[3]}</h1>
`;

const languagesSkill = `<h1 class="w-full text-center  text-4xl font-bold "  tabindex="9">Languages</h1>
<div class="w-full h-2  bg-orange-300  mb-16"></div>
<h1 class="font-edu text-xl">${languages[0]}</h1>
<h1 class="font-edu text-xl">${languages[1]}</h1>
<h1 class="font-edu text-xl">${languages[2]}</h1>
`;

export { personalData, contactData, education, carrier, languagesSkill };
