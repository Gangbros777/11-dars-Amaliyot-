// // 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring

// let num1 = 5;
// let num2 = 10;
// console.log(num1 + num2);

// // 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// // bering. Yani bu hozir string typeda siz number tyga o'zgartiring

// let a = '12';
// let b = Number(a);
// console.log(b);

// // 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

// let randomNum = Math.floor(Math.random() * 100);
// if (randomNum % 2 === 0) {
//   console.log("juft");
// } else {
//   console.log("toq");
// }

// // 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
// //  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

// let word = prompt("Enter a word:");
// if (word === "Mars") {
//   console.log(word);
// } else {
//   console.log("Mars IT School");
// }


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring


// let words = ["Uzum", "banana", "cherry", "date", "shaftoli"];


// let shortWords = [];
// let longWords = [];


// for (let i = 0; i < words.length; i++) {
//   if (words[i].length < 5) {
//     shortWords.push(words[i]);
//   } else {
//     longWords.push(words[i]);
//   }
// }


// console.log( shortWords);
// console.log( longWords);



// // 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring
// // Juft va toq sonlarni ajratamiz
// let evenNumbers = [];
// let oddNumbers = [];

// // For orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratamiz
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenNumbers.push(i);
//   } else {
//     oddNumbers.push(i);
//   }
// }

// // Natijalarni chiqaramiz
// console.log( evenNumbers);
// console.log( oddNumbers);