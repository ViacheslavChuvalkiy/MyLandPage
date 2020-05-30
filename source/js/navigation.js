(function() {

    var me = {};

    me.toggleToActiveLink = function(target){

        var links = document.querySelectorAll('.nav__link');

        for (var i = 0; i< links.length; i ++){
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active');
                break;
            }
        }

        target.classList.add('nav__link--active');

    };

    myProject.navigations = me;

});



