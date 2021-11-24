const menuClicked = (curEl) => {
    const menuItems = document.getElementsByClassName('menu-item')

    for (i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active')
    }
    curEl.classList.add('active');
}