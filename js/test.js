'use strict';
const secCon = document.querySelector('.section-sec1');
const gallery = secCon.querySelector('.gallery');
const galleryLi = secCon.querySelectorAll('.gallery>ul>li');
const centerBtn = secCon.querySelector('.arrow');
const spanArrow = secCon.querySelectorAll('.arrow>span')
const overOut = secCon.querySelectorAll('.overOut')
const bcon = secCon.querySelector('.bcon');
const itemsUl = bcon.querySelector('ul');
const itemsLi = bcon.querySelectorAll('.items>ul>li');
const sideTxtLi = secCon.querySelectorAll('.sidetext>ul>li')

const bgArr = [];
for (let i = 0; i < galleryLi.length; i++) {
    bgArr.push('url(img/bg_' + i + '.jpg) no-repeat 50% /cover');
    galleryLi[i].style.background = bgArr[i];
}

const galleryGotoFunc = key => {
    let distance = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    let move = (-distance * key) + 'px';
    gallery.style.left = move;
    gallery.style.transition = 'all 0.7s';
};

const itemsLiOn = key => {
    itemsLi.forEach((el, idx) => {
        if (idx == key) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
};

const sideTxtOn = key => {
    sideTxtLi.forEach((el, idx) => {
        if (idx == key) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

let i = -1;

function autoGallery() {
    if (i >= galleryLi.length - 1) i = -1;
    i++;
    galleryGotoFunc(i);
    itemsLiOn(i);
    sideTxtOn(i);
    if (i >= galleryLi.length - 1) i = -1;
}
let galInt = setInterval(autoGallery, 4000);
(() => autoGallery())();

itemsUl.addEventListener('click', () => {
    let _target = event.target;
    itemsLi.forEach((el, idx) => {
        if (el == _target) {
            el.classList.add('on');
            galleryGotoFunc(idx);
            sideTxtOn(idx);
            i = idx;
        } else {
            el.classList.remove('on');
        }
    })
})

const arrowLeft = centerBtn.querySelector('span.arrowLeft')
const arrowRight = centerBtn.querySelector('span.arrowRight')
spanArrow.forEach((el) => {
    el.addEventListener('mouseover', () => el.style.opacity = '0.5')
    el.addEventListener('mouseout', () => el.style.opacity = '0.1')
    el.style.transition = 'all 0.5s'
});
arrowLeft.addEventListener('click', () => {
    i--;
    if (i < 0) i = galleryLi.length - 1;
    galleryGotoFunc(i);
    itemsLiOn(i);
    sideTxtOn(i);
})
arrowRight.addEventListener('click', () => {
    i++;
    if (i > galleryLi.length - 1) i = 0;
    galleryGotoFunc(i);
    itemsLiOn(i);
    sideTxtOn(i);
})

overOut.forEach((el, idx) => {
    el.addEventListener('mouseover', () => clearInterval(galInt))
    el.addEventListener('mouseout', () => galInt = setInterval(autoGallery, 4000))
});


const lightUl = $('.sec-con>ul')
const lightLi = $('.sec-con>ul>li')

const popup = $('.popup')
const lightSub = $('.lightBox-sub')
const subCon = $('.sub-con')
const closeBtn = $('span.close')
const subConImg = $('.sub-con>img')

lightUl.on('click', () => {
    let imgSrc = $(event.target).attr('src');
    let imgAlt = $(event.target).attr('alt');
    subConImg.attr({
        'src': imgSrc,
        'alt': imgAlt
    });
    //popup.addClass('popupOn');
    popup.fadeIn(500);
});

closeBtn.on('click', () => {
    popup.removeClass('popupOn')
    popup.fadeOut(500);
})