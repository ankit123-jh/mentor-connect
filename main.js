<<<<<<< HEAD
// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})



// show/hie faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})




//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})



// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)




// cart open close
let cartIcon = document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
=======
// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})



// show/hie faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})




//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})



// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)




// cart open close
let cartIcon = document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
>>>>>>> bd5ec25 (hfghff)
}   