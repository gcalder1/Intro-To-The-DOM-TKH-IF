//getElementByID
const title = document.getElementById("title");

console.log(title);


//querySelector
const header2 = document.querySelector("#good");
const p1 = document.querySelector("#neat");
const p2 = document.querySelector("#whoa");


console.log(header2);
console.log(p1);
console.log(p2);


//querySelectorAll
const ptags = document.querySelectorAll ("p"); //yields node list (≈ array)

console.log(ptags);


//innerText
const h3Boom = document.querySelector(".lebomby");

console.log(h3Boom.innerText);//before changes made

h3Boom.innerText = "no more boom ):"; //single element target means can use innerText to solely target that element

console.log(h3Boom.innerText);//after changes made

const h3Tags = document.querySelectorAll(".kaboom");

h3Tags.forEach(h3Tags => {
    console.log(h3Tags.innerText); //saying to show what h3Tags= in terms of it's innerText
    h3Tags.innerText = "Le Bombino!";
    console.log(h3Tags.innerText);
}); //need .forEach because node list ≈ array, need to look innerText through each to change since can't target all with querySelectorAll


//changing stuff with css via JS

const modifyTextParagraph = document.querySelector("p#modifyTextParagraph");

modifyTextParagraph.style.fontSize = "30px"; //use camelCase for css props
modifyTextParagraph.style.color = "blue";

const img = document.querySelector("#shrek"); //define variable for img

img.setAttribute("src", "https://static.wikia.nocookie.net/universalstudios/images/f/f2/Shrek2-disneyscreencaps.com-4369.jpg/");
//this targets the src and inserts that link / this needs two arguments because one is the name of the attribute you want to change while the other is a new value for that argument
//ALWAYS needs both to work / both need to be strings because html is text based, therefore making JS required to use strings for both arguments since thats the only thing setAttribute will recognize to change within the html


//creating elements using JS via DOM
const paragraphCreated = document.createElement("p"); //p was created thanks to .createElement but exists in the literal void

document.body.append(paragraphCreated); //append is how it appears within the DOM (check dev elements)

paragraphCreated.innerText = "it's that shrimple"; //fills the text, and then we can see it within the html output on live server


//appending elements to other elements
const div = document.createElement("div");

document.body.append(div);

div.innerText = "Hello World";

const p = document.createElement("p");

p.innerText = "I am the text of the p tag!"

div.append(p);

//DO THESE EXERCISES BEFORE MOVING ON!

//Removing elements from the DOM

//DO THESE EXERCISES BEFORE MOVING ON!