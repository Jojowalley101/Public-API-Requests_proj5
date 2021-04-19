"use strict"

const randomUserApi = 'https://randomuser.me/api/?results=12&nat=us';
const galleryContents = document.querySelector("#gallery");


// FETCH API //
fetch(randomUserApi)
    .then(response => response.json())
    .then(data => generateDataList(data))
    .then(() => generateModalDataList())

let employeesData;
/**
 * generates each card
 * @param data 
 * With information provided from The Random User Generator API, 
 * send a single request to the API, 
 * and use the response data to display 12 users, 
 * along with some basic information for each.
 */
function generateDataList(data) {
    employeesData = data.results;
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
/**
 * When any part of an employee item in the directory is clicked, 
 * a modal window pops up with the following details displayed
 * Make sure there’s a way to close the modal window
 * The formatting of the Cell Number should be (XXX) XXX-XXXX 
 * and the formatting of the Birthday should be MM/DD/YYYY.
 */
function generateModalDataList() {
    console.log(employeesData);
    for (let i = 0; i < employeesData.length; i++) {
        document.getElementsByClassName('card')[i].addEventListener('click', (e) => {
            const employeeIndexerItem2 = `<div class="modal-container">
                <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                    <img class="modal-img" src="${employeesData[i].picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${employeesData[i].name.first} ${employeesData[i].name.last}</h3>
                        <p class="modal-text">${employeesData[i].email}</p>
                        <p class="modal-text cap">${employeesData[i].location.city}, ${employeesData[i].location.state}</p>
                        <hr>
                        <p class="modal-text">${formatPhoneText(employeesData[i].cell)}</p>
                        <p class="modal-text">${employeesData[i].location.street.number} ${employeesData[i].location.street.name}, ${employeesData[i].location.city}, ${employeesData[i].location.state} ${employeesData[i].location.postcode} </p>
                        <p class="modal-text">Birthday: ${GetDateObject(employeesData[i].dob.date)}</p>
                    </div>
                </div>`;
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', employeeIndexerItem2);
            const modalCloseBtn = document.querySelector('.modal-close-btn');
            console.log(document.getElementsByClassName('modal-container'));
            modalCloseBtn.addEventListener('click', e => {
                document.querySelector('.modal-container').remove();
                
            });
            }
        )}
    }

//PHONE FORMAT // @source https://medium.com/@asimmittal/building-a-phone-input-field-in-javascript-from-scratch-a85bb2a3b3d3
function formatPhoneText(value) {
    const numbRep = value.replace(/D/g, '');
    const check = numbRep.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (check) {
        return '(' + check[1] + ')' + check[2] + '-' + check[3]
    };
    return numbRep;
}


// BDAY FORMAT // @source https://www.codeproject.com/Questions/695000/Date-format-in-dd-MM-yyyy-format-but-javascript-ta
function GetDateObject(dofbirth) {
    const numbRep = dofbirth.replace(/\D/g, '');
    const check = numbRep.match(/^(\d{4})(\d{2})(\d{2})/);

    if (check) {
        return check[2] + '/' + check[3] + '/' + check[1]
    };
    return null; 
}

//searchBar function, but no exceeds now :/

function searchBar() {
    const searchBarContainer = document.querySelector('.search-container');
    const searchingMarkUp = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>`;
    searchBarContainer.insertAdjacentHTML('beforeend', searchingMarkUp);
}
