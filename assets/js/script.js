
// Unspalsh API

const count = 10;
const apiKey = 'tV04UgOfs-dy1B6_Drt6E9rwNKWqtDOgbB3eGRF2nYg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// random & count elements of url address taken from Unsplash > photos > get a random photo 

// Get Photos from Unsplash API

async function getPhotos() {
    try {
      const response = await fetch(apiUrl);   
      const data = await response.json();
      console.log(data);
    } catch (error) {
      // Catch Error     
    }
}

// On Load
getPhotos();