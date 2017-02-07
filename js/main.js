const listElements = document.getElementsByTagName('li');
const listLength = listElements.length;
let pageClass;
const pages = [];

//Adds a class that delineates pages and saves the number of pages to the array 'pages'.

function addPageClass(numPerPage) {
    let currentPage = 1;
    let pageElements = numPerPage-1;

    for (let i = 0 ; i < listLength ; i++){
        if(i <= pageElements) {
            $(listElements[i]).addClass('page'+currentPage);
        }else {
            pages.push(currentPage);
            currentPage += 1;
            pageElements += 10;
            i -= 1;
        }
    }
}
addPageClass(10);


//Ths function displays only the page class selected.

function displayPages(page) {
    $('ul#list li:not(page)').hide();
    $(page).show();
}

//Dynamically creates buttons that correlate to specific page classes.
function createNavButton() {
    let list = document.createElement('Div');
    let ulList = document.createElement('Ul');
    list.appendChild(ulList);
    $(list).addClass('pagination');
    document.body.appendChild(list);
}
createNavButton();

function createButtonList(element,page){
    let $listElement = $('<li><a id="' + page + '">'+ page +'</a>'+'</li>');
    $listElement.appendTo($(element));
}

for(let i = 1 ; i <= pages.length + 1  ; i++) {
    createButtonList('.pagination ul', i);
}

/*When the document loads it will set the opening page to page one by executing the displayPages function and
assigning the 'active' class to the page 1 button just once.
 */

function pageInitialize(){
    pageInitialize = function(){}; // kill it as soon as it was called
    pageClass = '.page1';
    displayPages(pageClass);
    document.getElementById('1').className = 'active';
}
pageInitialize();


//When an 'a' element is clicked the displayPages function is called to display the page that correlates to the element clicked.

$("a").click(function(){
    $('a').removeClass('active');
    $(this).addClass('active');
    let buttonId = this.id;
    pageClass = '.page'+ buttonId;
    displayPages(pageClass);
});
