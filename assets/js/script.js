const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API

const count = 10;
const apiKey = 'tV04UgOfs-dy1B6_Drt6E9rwNKWqtDOgbB3eGRF2nYg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// random & count elements of url address taken from Unsplash > photos > get a random photo 

// Helper Function - Refactoring the items previously held in displayPhotos function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
// Note - item.setAttribute DOM method has been commented out in favour of the helper function - see above

function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> anchor element to link to UnSplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
           href: photo.links.html,
           target: '_blank',
        });
        // Create <img> tag for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get Photos from Unsplash API

async function getPhotos() {
    try {
      const response = await fetch(apiUrl);   
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      // Catch Error     
    }
}

// Upon scrolling to near bottom of page to trigger load of more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
        console.log('load more');
    }
});

// On Load
getPhotos();