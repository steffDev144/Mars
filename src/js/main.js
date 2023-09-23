window.onload = function() {
    const form = document.querySelector('.popup__form'),
          items = document.querySelectorAll('.popup__form_item input'),
          popup = document.querySelector('.popup'),
          closePopup = document.querySelector('.popup__close'),
          openPopup = document.querySelector('.header__block_btn'),
          closeMobileNav = document.querySelector('.mobile-nav__close'),
          openMobileNav = document.querySelector('.hamburger'),
          mobileNav = document.querySelector('.mobile-nav'),
          mobileNavWrapper = document.querySelector('.mobile-nav__wrapper');

    // Отправка popup формы 

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '127.0.0.1');
        xhr.send();
        items.forEach((item, i) => {
            if(i < 2) {
                item.value = '';
                item.type='text';
            } else {
                item.value = '';
            }
        });
    });

    // Функционал открывания popup формы

    openPopup.addEventListener('click', () => {
        popup.classList.add('popup-active');
    })
    closePopup.addEventListener('click', () => {
        popup.classList.remove('popup-active');
    })

    
    // Функционал открывания меню под мобилки

    openMobileNav.addEventListener('click', () => {
        mobileNav.classList.add('mobile-nav_active');
        mobileNavWrapper.classList.add('mobile-nav__wrapper_active');
    })
    closeMobileNav.addEventListener('click', () => {
        mobileNav.classList.remove('mobile-nav_active');
        mobileNavWrapper.classList.remove('mobile-nav__wrapper_active'); 
    })
    mobileNavWrapper.addEventListener('click', () => {
        mobileNav.classList.remove('mobile-nav_active');
        mobileNavWrapper.classList.remove('mobile-nav__wrapper_active'); 
    })
};

// Паралакс (есть баг с текстом он немного дергается если присмотреться)

let videoBg = document.querySelector('.main__video_bg'),
    videoText = document.querySelector('.main__video_subtitle'),
    video = document.querySelector('.main__video video');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    if(window.innerWidth > 786) {
        if(x <= 0.38) {
            videoBg.style.left = 0;
            videoText.style.left = '46%';
            videoText.style.transform = 'translate(calc(-51% - 5px))';
            video.style.left = '49%';
            video.style.transform = 'translateX(-50%, -50%)';
        } else if (x >= 0.62) {
            videoBg.style.left = '-10%';
            videoText.style.left = '54%';
            videoText.style.transform = 'translate(calc(-49% - 5px))';
            video.style.left = '50%';
            video.style.transform = 'translateX(-50%, -50%)';
        } else {
            videoBg.style.left = 'calc(-5% - 5px)';
            videoText.style.left = '50%';
            videoText.style.transform = 'translate(calc(-52% + 24px))';
            video.style.left = '51%';
            video.style.transform = 'translateX(-50%, -50%)';
        }
    }
});