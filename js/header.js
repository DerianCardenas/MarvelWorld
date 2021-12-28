const header = ()=>{
    const  menuBtn = document.querySelector('.btn_menu'),
    menu = document.querySelector('.menu_items');
    menuBtn.addEventListener('click',()=>{
        menu.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded',header);