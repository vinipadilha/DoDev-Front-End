function menuShow() {
    let mobileMenu = document.querySelector('.menu-content')

    if(mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');

    } else {
        mobileMenu.classList.add('open')
    }

}