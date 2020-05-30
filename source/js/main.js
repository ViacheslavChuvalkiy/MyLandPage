
window.onload = (function() {

    var nav = document.querySelector('.nav');

    if (nav) {
        nav.addEventListener('click', function () {

            var target = e.target;

            if (target.tagName.toLowerCase() !== 'nav__link') {
                return;
            }

            e.preventDefault();

            myProject.navigations.toggleToActiveLink(target);

        })
    }

    /*List */

    CreateListItems();

    hideElements('.menu--options');

    var main__list = document.querySelectorAll('.main__list'),
        index, button;

    for (index = 0; index < main__list.length; index++) {
        item = main__list[index];
        item.addEventListener('mouseover', slideUpLi)
        item.addEventListener('mouseout', slideDownLi)
    }


    /*for (var i = 0; i< main__list.length; i++) {

        var item = main__list[i];

        if (item.nodeType != 1) {
            continue;
        }

        item.addEventListener("click",function(){
                slideUpLi(item,'none')
            }
        )
    };*/

function slideUpLi(event){

    var list_item = this.childNodes;

    for (var c = 0; c < list_item.length; c++) {

        var temp = list_item[c];

        if (temp.nodeType != 1){continue};

            temp.style.display = 'block'

             /*temp.style.display= "block";*/
            }
         /*
             alert(jQuery.fn.jquery);
             temp.style.display = "none";
             temp.toggle();
         */

}

function slideDownLi(event){

        var list_item = this.childNodes;

        for (var c = 0; c < list_item.length; c++) {

            var temp = list_item[c];

            if (temp.nodeType != 1){continue};

            temp.style.display = 'none'
            /*temp.style.display= "block";*/
        }
        /*
            alert(jQuery.fn.jquery);
            temp.style.display = "none";
            temp.toggle();
        */

}

function CreateListItems() {

    var main__list = document.getElementsByClassName('menu--options');
    var list = ['Блузы', 'Рубашки', 'Платья', 'Юбки', 'Брюки', 'Джемперы', 'Свитеры', 'Кардиганы', 'Кофты', 'Пиджаки', 'Костюмы'];

    for (var i = 0; i< main__list.length; i++) {

        var item = main__list[i];

        if (item.classList.contains('list-stocks') === true) {
            continue;
        }

        for (var c =0; c < list.length; c++) {

            var child = document.createElement("li");
            child.classList.add('list--options');

            var text = document.createTextNode(list[c]);

            child.appendChild(text);

            item.appendChild(child);
        };
    };

}

function hideElements(classname) {

    var list_item = document.querySelectorAll(classname);

    for (var index = 0; index< list_item.length; index++) {

        list_item[index].style.display = "none";
    }

}

});

