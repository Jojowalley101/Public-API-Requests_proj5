"use strict"

/**
 * HTML dynamically creating DOM elements 
 * @source https://dev.to/devamaz/using-fetch-api-to-get-and-post--1g7d 
 * element.insertAdjacentHTML('beforeend', 'HTML string');
 * @source https://stackoverflow.com/questions/5536596/dynamically-creating-html-elements-using-javascript
 */

//Search markup
const searchDiv = document.getElementsByClassName('search-container');
const newForm = document.createElement('form');   //create a form
document.body.appendChild(newForm);
//console.log(document.body.appendChild(newForm));
const searchString = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>`;                    //add an element
searchDiv.classList = searchString;                 //append to the doc.body
newForm.insertAdjacentHTML('beforeend', searchString);
//console.log(searchDiv);


//  Gallery markup

const galleryHTML = document.getElementsByClassName('gallery');
const newDivGallery = document.createElement('div');
document.body.appendChild(newDivGallery);
const gallString = `<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>`;
galleryHTML.classList = gallString;
newDivGallery.insertAdjacentHTML('beforeend', gallString);

console.log(document.galleryHTML.appendChild(newDivGallery));


// Modal markup

const modalMarkUp = ` <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>`;
const modalMakExceeds = `<div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`;






/**
 * Get and display 12 random users
 * 
 * 
 */


/**
 * @source https://medium.com/cleverprogrammer/using-the-javascript-fetch-method-to-get-data-from-an-api-mini-project-10c0d602dae5
 * This is the function that’s gonna fetch the data from the API.
 */
const displayUserData = (randomUser) => {
    document.getElementById('name').innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`;
    document.getElementById('email').innerText = `${randomUser.results[0].email}`;
    document.getElementById('phone').innerText = `${randomUser.results[0].phone}`;
    document.getElementById('location').innerText = `${randomUser.results[0].location}`;

}
const randomUserGen = () => {
    fetch('https://randomuser.me/api/?results=12')
    .then((Response) => {
        return Response.json()
    }).then((data) => {
        console.log(data);
        displayUserData(data);

    });
}

window.onload = () => {
    randomUserGen();
}




 /**
  * Create a modal window
  * 
  * When any part of an employee item in the directory is clicked, a modal window should pop up with the following details displayed:
  * Image
  * Name
  * Email
  * City or location
  * Cell Number
  * Detailed Address, including street name and number, state or country, and post code.
  * Birthday
  * 
  * Make sure there’s a way to close the modal window
  * Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.
  * NOTE: The formatting of the Cell Number should be (XXX) XXX-XXXX 
  * and the formatting of the Birthday should be MM/DD/YYYY.
  * @source https://www.w3schools.com/howto/howto_css_modals.asp
  */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





  /**
   * "Exceeds" 
   * Search
   * Add a way to filter the directory by name. 
   * To do this, you’ll need to adjust your API request to retrieve a 
   * user nationality that will only return data in the English alphabet.
   * Example markup for this feature is included in the HTML comments.
   * Note: Your search feature should filters results that are already on the page. 
   * So don't request new info from the API for your search.
   */



   /**
    * "Exceeds"
    * Modal toggle
    * Add a way to toggle back and forth between 
    * employees when the modal window is open.
    * There should be no errors once the end or 
    * beginning of the list is reached.
    * Example markup for this feature is included in the HTML comments.
    */





    /**
     * "Exceeds"
     * Structure, style and CSS
     * Add or change at least one of the following:
     * color
     * background color
     * font
     * box or text shadows
     * Document your style changes in your readme file and the project submission notes.
     * Do not alter the layout or position of the important elements on the page.
     */



$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            randomUserGen();
            displayUserData(data);
        }
    });
});