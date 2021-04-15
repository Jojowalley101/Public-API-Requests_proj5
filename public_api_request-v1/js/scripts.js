"use strict"


/**
 * Get and display 12 random users
 * Declare variables 
 * 
 */

let dataArray;
let jsondata = "";
const galleryHTML = document.getElementsByClassName('gallery')[0];
const divElemModal = document.createElement('div');
divElemModal.className = 'modal-container';
divElemModal.style.display = 'none';
let apiUrl = `https://randomuser.me/api/?results=12&nat=US`;
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    jsondata = await getJson(apiUrl);
    //console.log(jsondata);
    //const galleryHTML = document.getElementsByClassName('gallery')[0];
    for (let i = 0; i < 12; i++) {
        const gallString = `<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src=${jsondata.results[i].picture.large} alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${jsondata.results[i].name.first} ${jsondata.results[i].name.last}</h3>
                        <p class="card-text">${jsondata.results[i].email}</p>
                        <p class="card-text cap">${jsondata.results[i].location.city}, ${jsondata.results[i].location.state}</p>
                    </div>
                </div>`;
        divElemModal.style.display = 'flex';
        const modalHTML = `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src= ${jsondata.results[i].picture.large} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${jsondata.results[i].name.first} ${jsondata.results[i].name.last}</h3>
                        <p class="modal-text">${jsondata.results[i].email}</p>
                        <p class="modal-text cap">${jsondata.results[i].location.city}</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`;
        galleryHTML.insertAdjacentHTML('beforeend', gallString);
        divElemModal.innerHTML = modalHTML;
        galleryHTML.insertAdjacentHTML('afterend', divElemModal);
    }
}

main();

// //  /**
// //   * Create a modal window
// //   * 
// //   * When any part of an employee item in the directory is clicked, a modal window should pop up with the following details displayed:
// //   * Image
// //   * Name
// //   * Email
// //   * City or location
// //   * Cell Number
// //   * Detailed Address, including street name and number, state or country, and post code.
// //   * Birthday
// //   * 
// //   * Make sure there’s a way to close the modal window
// //   * Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.
// //   * NOTE: The formatting of the Cell Number should be (XXX) XXX-XXXX 
// //   * and the formatting of the Birthday should be MM/DD/YYYY.






// //    /**
// //     * "Exceeds"
// //     * Modal toggle
// //     * Add a way to toggle back and forth between 
// //     * employees when the modal window is open.
// //     * There should be no errors once the end or 
// //     * beginning of the list is reached.
// //     * Example markup for this feature is included in the HTML comments.
// //     */