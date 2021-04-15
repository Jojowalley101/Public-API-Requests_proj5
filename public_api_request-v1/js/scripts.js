"use strict"

const randomUserApi = 'https://randomuser.me/api/?results=12&nat=us';
const galleryContents = document.querySelector("#gallery");


// FETCH API //
fetch(randomUserApi)
    .then(response => response.json())
    .then(data => generateDataList(data))
    .then(index => generateModalDataList(index))

function generateDataList(data) {
    const employeesData = data.results;
    console.log(employeesData);
    for (let i = 0; i < employeesData.length; i++) {
        const employeeIndexerItem = `<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${employeesData[i].picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${employeesData[i].name.first} ${employeesData[i].name.last}</h3>
                        <p class="card-text">${employeesData[i].email}</p>
                        <p class="card-text cap">${employeesData[i].location.city}, ${employeesData[i].location.state}</p>
                    </div>
                </div>`;
        galleryContents.insertAdjacentHTML('beforeend', employeeIndexerItem);
    }
}


function generateModalDataList(index) {
    const employeesData2 = index;
    console.log(employeesData2);
    for (let i = 0; i < employeesData2; i++) {
        const employeeIndexerItem2 = `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${employeesData2[i].picture.large} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${employeesData2[i].name.first} ${employeesData2[i].name.last}</h3>
                        <p class="modal-text">${employeesData2[i].email}</p>
                        <p class="modal-text cap">${employeesData2[i].location.city}, ${employeesData2[i].location.state}</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>`;
        galleryContents.insertAdjacentHTML('afterend', employeeIndexerItem2);
    }
}

galleryContents.addEventListener('click', generateModalDataList);


//PHONE FORMAT // @source https://medium.com/@asimmittal/building-a-phone-input-field-in-javascript-from-scratch-a85bb2a3b3d3
// function formatPhoneText(value) {
//     value = this.replaceAll(value.trim(), "-", "");

//     if (value.length > 3 && value.length <= 6)
//         value = value.slice(0, 3) + "-" + value.slice(3);
//     else if (value.length > 6)
//         value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);

//     return value;
// }

// BDAY FORMAT // @source https://www.codeproject.com/Questions/695000/Date-format-in-dd-MM-yyyy-format-but-javascript-ta
// bdate = GetDateObject(elt.value);
// var GetDateObject = function (dateString) {

//     var array = dateString.split('/');

//     var day = parseInt(array[0]);
//     var month = parseInt(array[1]);
//     var year = parseInt(array[2]);
//     var dateObject = new Date(year, month - 1, day);
//     return dateObject;
// }


// function showPage(list, page) {
//     // create two variables which will represent the index for the first and last student on the page
//     let startIndex = ((page * studentsPerPage) - studentsPerPage);
//     let endIndex = page * studentsPerPage;
//     // select the element with a class of `student-list` and assign it to a variable
//     const studentList = document.querySelector('.student-list');

//     // set the innerHTML property of the variable you just created to an empty string
//     studentList.innerHTML = " ";

//     // loop over the length of the `list` parameter
//     for (let i = 0; i < list.length; i++) {
//         if (i >= startIndex && i < endIndex) {
//             //temperate literal = `string text ${expression} string text
//             let studentListIndexer = list[i];
//             // create the elements needed to display the student information
//             let studentItem = `<li class="student-item cf">
//     <div class="student-details">
//       <img class="avatar" src="${studentListIndexer.picture.large}" alt="Profile Picture">
//       <h3>${studentListIndexer.name.first} ${studentListIndexer.name.last}</h3>
//       <span class="email">${studentListIndexer.email}</span>
//     </div>
//     <div class="joined-details">
//       <span class="date"> ${studentListIndexer.registered.date}</span>
//     </div>
//   </li>`;
//             // console.log(studentListIndexer);
//             // insert the above elements = stored in studentItem 
//             studentList.insertAdjacentHTML('beforeend', studentItem);

//         }
//     }
// }

// /*
// Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons
// */

// function addPagination(list) {
//     // create a variable to calculate the number of pages needed
//     let numOfPages = Math.ceil(list.length / studentsPerPage);
//     // select the element with a class of `link-list` and assign it to a variable
//     const linkList = document.querySelector('.link-list');
//     // set the innerHTML property of the variable you just created to an empty string
//     linkList.innerHTML = '';
//     // loop over the number of pages needed
//     for (let i = 1; i <= numOfPages; i++) {
//         let button = `<li>
//       <button type="button">${i}</button>
//       </li >`;
//         linkList.insertAdjacentHTML('beforeend', button);
//     }
//     let btn1 = document.querySelector('.link-list').firstChild;
//     //btn1.className = 'active';
//     function goToPage(event) {
//         if (event.target.tagName == "BUTTON") {
//             let classNameActive = document.querySelector('.active');
//             //classNameActive.className = '';
//             event.target.classNameActive = 'active';
//             //console.log(event.target);
//             showPage(list, event.target.textContent);

//             //console.log(classNameActive);
//         }
//     }
//     //Insert the elements you have created to the link-list variable you created earlier. 
//     linkList.addEventListener('click', goToPage);
// }

// /**
//  * searchbar function adapted from simple search warmup from project. 
//  * This function allows the user to search for students throughout the data.
//  */

// const header = document.querySelector('.header');
// header.innerHTML += `<label for="search" class="student-search">
//             <span>Search by name</span>
//             <input id="search" placeholder="Search by name...">
//             <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
//           </label>`;
// const searchInput = document.querySelector('#search');
// const submitButton = document.querySelector('button');

// function searchBarFunc(list) {
//     const filtered = searchInput.value.toLowerCase();
//     const searchFiltered = [];

//     if (filtered.length !== 0) {
//         for (let i = 0; i < list.length; i++) {
//             const fullName = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;
//             if (fullName.includes(filtered)) {
//                 searchFiltered.push(list[i]);
//             }
//         }

//         showPage(searchFiltered, 1);
//         addPagination(searchFiltered);

//         const noSearchFound = document.createElement('span');
//         document.querySelector('.student-list').appendChild(noSearchFound);

//         if (searchFiltered.length === 0) {
//             noSearchFound.textContent = `No results found for ${searchInput.value}`;
//         } else {
//             noSearchFound.textContent = '';
//         }
//     } else {
//         showPage(list, 1);
//         addPagination(list);
//     }
// }

// /**
//  * Event listeners for buttons - 
//  * Invoke your search function in the body of the callbacks 
//  * in the event listeners below
//  */

// /* submit listener */
// submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     searchBarFunc(data);
//     console.log('Submit button is functional!');
// });

// /* submit listener */
// searchInput.addEventListener('keyup', () => {
//     searchBarFunc(data);
//     console.log('Keyup event on the Search input is functional!');
// });

// // Call functions

// showPage(data, 1);
// addPagination(data);
