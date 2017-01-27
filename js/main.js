

function selectPages(){
    $('ul li').addClass('paginate');
    let pages = $('.paginate');
    let numPages = pages.length;
    let itemsPerPage = 10;
    pages.slice(itemsPerPage).hide();
}
selectPages();
