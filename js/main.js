'use strict';

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let currentImageId = 0;
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


images.forEach((_, i) => {
    const game = images[i];

    const div = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    img.src = game.image;
    div.setAttribute('id', `img-${i}`)

    items.append(div);
    div.append(img);

    div.classList.add('item');

    if (i === 0) {
        document.getElementById(`img-${currentImageId}`).classList.add('active')
    }

    if (document.getElementById(`img-${currentImageId}`).classList.contains('active')) {
        h3.innerText = game.title;
        p.innerText = game.text;
        div.append(h3);
        div.append(p);
    }

});


const itemList = document.querySelectorAll('.item');

prev.addEventListener('click', () => {

    if (currentImageId > 0) {
        itemList[currentImageId].classList.remove('active')
        currentImageId--;
        itemList[currentImageId].classList.add('active')

    } else {
        itemList[currentImageId].classList.remove('active')
        currentImageId = itemList.length - 1;
        itemList[currentImageId].classList.add('active')
    }
});

next.addEventListener('click', () => {

    if (currentImageId < itemList.length - 1) {
        itemList[currentImageId].classList.remove('active')
        currentImageId++;
        itemList[currentImageId].classList.add('active')

    } else {
        itemList[currentImageId].classList.remove('active')
        currentImageId = 0;
        itemList[currentImageId].classList.add('active')
    }
});


