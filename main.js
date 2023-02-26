// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentElement);
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);


// //Create Element
// var newDiv = document.createElement('div');

// //Adding Class
// newDiv.className='Hello';

// //Adding ID
// newDiv.id='idHello';

// //Adding Attributes
// newDiv.setAttribute('title', 'Hello Div');

// //Create Text Node
// var newDivText = document.createTextNode('Welcome');

// //Adding Text To The Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1)

// newDiv.style.fontSize = '40px'

// console.log(newDiv)


// Sharpener Assignment 1
 var newDiv = document.createElement('div');
 var newDivText  = document.createTextNode('Hello');
 newDiv.appendChild(newDivText)
 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');
 container.insertBefore(newDiv,h1);

 // Sharpener Assignment 2
 var newLi = document.createElement('li');
 newLi.className = 'list-group-item';
 var newLiText  = document.createTextNode('New Item');
 newLi.appendChild(newLiText)

 var items = document.querySelector('#items');
 var firstLISt = items.firstElementChild;

 items.insertBefore(newLi,firstLISt)


















