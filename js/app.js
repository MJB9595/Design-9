const body = document.querySelector('body');
const header = document.querySelector('header');
const fixedArrow = document.querySelector('.fixed-arrow');
const mobNavBtn = document.querySelector('.mob-nav-btn');
const navList = document.querySelectorAll('.nav-list li');

var swiper = new Swiper(".gallery", {
    pagination: {
        el: ".gallery .swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop:true,
    autoplay:true
    }); 

navList.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(`#sec-${i + 1}`);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

mobNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('mob-nav-open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        body.classList.add('scroll');
    } else {
        body.classList.remove('scroll');
    }
});

fixedArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const tabMenus = document.querySelectorAll(".sec-5 .menu li");
const tabContents = document.querySelectorAll(".sec-5 .content");

if (tabMenus.length > 0 && tabContents.length > 0) {
    
    function activateTab(index) {
        for (let j = 0; j < tabMenus.length; j++) {
            tabMenus[j].classList.remove("active");
            if (tabContents[j]) {
                tabContents[j].classList.remove("on");
            }
        }

        tabMenus[index].classList.add("active");
        if (tabContents[index]) {
            tabContents[index].classList.add("on");
        }
    }

    tabMenus.forEach((menu, index) => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            activateTab(index);
        });
    });

    activateTab(0);
}