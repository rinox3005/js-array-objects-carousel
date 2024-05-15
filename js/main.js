'use strict';

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
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

const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const div = document.querySelector('.item');

images.forEach((_, i) => {
    const game = images[i];

    const div = document.createElement('div');
    const img = document.createElement('img');

    img.src = game.image;

    items.append(div);
    div.append(img);
    div.classList.add('item');
});

prev.addEventListener('click', () => {

    div.classList.add('active');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    images.forEach((_, i) => {
        h3.innerText = images[i].title;
        p.innerText = images[i].text;
        div.append(h3);
        div.append(p);
    })

});
