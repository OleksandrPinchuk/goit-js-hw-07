import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(`.gallery`);

const galleryMarkup = createGallery(galleryItems);

function createGallery(item) {
return item.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    }).join('');
};

galleryEl.insertAdjacentHTML(`beforeend`, galleryMarkup);

galleryEl.addEventListener(`click`, onGalleryItemClick);


function onGalleryItemClick(event) {
    event.preventDefault();
    const currentItem = event.target;

    const instance = basicLightbox.create(
        `<div class="modal-image">
            <img class="gallery__link" src="${currentItem.dataset.source}" alt="${currentItem.alt}" width="800" height="600">
        </div>`);
    
    if (currentItem.nodeName !== `IMG`) {
        return
    };
    instance.show();

    window.addEventListener(`keydown`, handleModalClose);

    function handleModalClose(event) {
        if (event.code === "Escape")
        {
            instance.close();
            window.removeEventListener('keydown', handleModalClose);
        };
    };
};

