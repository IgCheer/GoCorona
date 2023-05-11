const menuIcon = document.querySelector('.icon__menu')

const menuBody = document.querySelector('.menu__body')


menuIcon.addEventListener ("click", function(event){
    if (event.target.closest('.icon__menu')){
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
    }
})
