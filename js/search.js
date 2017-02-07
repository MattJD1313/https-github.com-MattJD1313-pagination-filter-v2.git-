function createSearchField() {
//Creating A Div to Hold the Search Elements
    let searchDiv = document.createElement('Div');

//Creating an Input Element
    let inputElement = document.createElement('Input');
    inputElement.id = 'listNames';

//Creating Button Element
    let buttonElement = document.createElement('Button');
    let buttonText = document.createTextNode('Search');
    buttonElement.appendChild(buttonText);
    buttonElement.id = 'btn';

//Appending Input and Button Elements to the Search Div and adding the 'Student-search' class to that DIV.
    searchDiv.appendChild(inputElement);
    searchDiv.appendChild(buttonElement);
    searchDiv.className = 'student-search';

//Appending the Search Div to the 'page-header'
    document.getElementById('ph').appendChild(searchDiv);

}
createSearchField();

document.getElementById('btn').addEventListener('click',searchNames);
document.getElementById('listNames').placeholder = 'Search for students...';

function searchNames(enteredSearch) {
    $('li').removeClass('selected');
    $('h3').addClass('names');
    let studentNames = $('.names');
    enteredSearch = (document.getElementById("listNames").value);
    let thisSearch = 0;
    if(enteredSearch === ''){
        displayPages(pageClass);
    }else{
        for(let i = 0 ; i < listLength ; i++){
            let currentName = studentNames[i].textContent;
            if(currentName.search(enteredSearch) !== -1) {
                $(studentNames[i].parentNode.parentNode).addClass('selected');
                displayPages('.selected');
                thisSearch += 1;
            }
        }
        if(thisSearch === 0) {
            alert('No results for your search. Please enter another search.')
        }
    }
}