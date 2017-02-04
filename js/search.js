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
searchNames();


