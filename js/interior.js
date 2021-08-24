'use strict';

const nightBtn = document.querySelector('.top-con>button');
const interiorImg = document.querySelector('.sec-con>ul>li>img');
const interiorImgArr = [];
const interiorLi = document.querySelectorAll('.sec-con>ul>li');
const imgNight = document.querySelectorAll('img.night');
const imgDay = document.querySelectorAll('img.day');
const wrap = document.querySelector('#wrap');

let i = 0;
nightBtn.addEventListener('click', () => {
    if (i == 0) {
        imgNight.forEach((el) => {
            el.style.opacity = '1';
        })
        imgDay.forEach((el) => {
            el.style.opacity = '0';
        })
        i = 1;
        nightBtn.style.background='#aaa';
        nightBtn.style.color='#333';
        nightBtn.innerText="DAY VERSION"
        wrap.style.transition='all 0.3s'
        wrap.style.background='#1a1a1a';
    }else{
        imgNight.forEach((el) => {
            el.style.opacity = '0';
        })
        imgDay.forEach((el) => {
            el.style.opacity = '1';
        })
        i = 0;
        nightBtn.style.background='#333';
        nightBtn.style.color='#aaa';
        nightBtn.innerText="NIGHT VERSION"
        wrap.style.transition='all 0.3s'
        wrap.style.background='#333';
    }
})
