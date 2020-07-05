
function CreateListItems() {

    var main__list = $('.sidebar-menu');
    var list = ['Блузы', 'Рубашки', 'Платья', 'Юбки', 'Брюки', 'Джемперы', 'Свитеры', 'Кардиганы', 'Кофты', 'Пиджаки', 'Костюмы'];

    for (var i = 0; i< main__list.length; i++) {

        var item = main__list[i];

        if (item.classList.contains('list-stocks') === true) {
            continue;
        }

        for (var c =0; c < list.length; c++) {

            var child = document.createElement("li");
            child.classList.add('sidebar-menu');
            child.classList.add('list--choice');
            child.href = '#';
            var text = document.createTextNode(list[c]);

            child.appendChild(text);

            item.appendChild(child);
        };
    };

}

function change_photo(event) {

    var herosection = $('.hero-img');

    var count_img = herosection.length;

    for (var i = 0; i < count_img; i++) {

        var img_veiw = $(herosection[i]).css('display');

        if (img_veiw != "none") {
            $(herosection[i]).hide();
            if(i + 1 == count_img){
                $(herosection[0]).show();
            }
            else {
                $(herosection[i + 1]).show();
            }
            break;
        }
        else if(i + 1 == count_img) {
            $(herosection[0]).show();
        }
        else {
            continue;
        }
    }

}

function showFirstPhotoHero() {
    var herosection = $('.hero-img');
    $(herosection[0]).show();
}
