
window.onload = (function() {

    var nav_item = $('.nav__link');

    for (var index = 0; index < nav_item.length; index++ ) {

        var temp = nav_item[index];
        temp.addEventListener('click', toggleToActiveLink);

    }

    /*List */

    CreateListItems();
    showFirstPhotoHero();
    setInterval(change_photo,20000);
});

