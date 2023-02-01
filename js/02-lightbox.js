import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
return items.map((item) => `<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                    </a>
                    </div>`
)
.join("")
};

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionData: "alt"
 });