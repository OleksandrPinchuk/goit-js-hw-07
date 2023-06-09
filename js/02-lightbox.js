import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(`.gallery`);

const galleryMarkup = createGallery(galleryItems);

function createGallery(item) {
return item.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    }).join('');
};
galleryEl.insertAdjacentHTML(`beforeend`, galleryMarkup);

galleryEl.addEventListener(`click`, onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
};
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    });

console.log(galleryItems);