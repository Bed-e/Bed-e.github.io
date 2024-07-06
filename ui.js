// ui.js

export function displayArtists(artists, resultsElement, displayAlbums) {
  resultsElement.innerHTML = "";
  artists.forEach((artist) => {
    const artistDiv = document.createElement("div");
    artistDiv.classList.add("release");
    artistDiv.innerHTML = `
        <img src="${artist.cover_image}" alt="${artist.title}">
        <h3>${artist.title}</h3>
      `;
    artistDiv.addEventListener("click", () => displayAlbums(artist));
    resultsElement.appendChild(artistDiv);
  });
}

export function displayAlbumsData(albums, artistName, resultsElement) {
  // Create and append the header text element
  const headerText = document.createElement("h2");
  headerText.textContent = `Albums by ${artistName}`;
  headerText.classList.add("albums-header");
  resultsElement.appendChild(headerText);

  // Create and append the albums container element
  const albumsContainer = document.createElement("div");
  albumsContainer.classList.add("albums-container");
  resultsElement.appendChild(albumsContainer);

  albums.forEach((album) => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("release");
    albumDiv.innerHTML = `
        <img src="${album.images[0]?.url || ""}" alt="${album.name}">
        <h3>${album.name}</h3>
        <p>Released: ${album.release_date}</p>
      `;
    albumsContainer.appendChild(albumDiv);
  });
}
