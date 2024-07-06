// main.js

import {
  getSpotifyAccessToken,
  searchReleases,
  searchSpotifyArtist,
  fetchSpotifyAlbums,
} from "./api.js";
import { displayArtists, displayAlbumsData } from "./ui.js";

const form = document.getElementById("search-form");
const results = document.getElementById("results");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const artistName = document.getElementById("artist-name").value;
  const data = await searchReleases(artistName);
  displayArtists(data.results, results, displayAlbums);
});

// Function to get Spotify access token
const clientId = "37eb412b506948bebc7a4ad19c242308"; // Replace with your Spotify client ID
const clientSecret = "93704f0a6e754b3e92c02fb36e1f6a5b"; // Replace with your Spotify client secret
getSpotifyAccessToken(clientId, clientSecret);

async function displayAlbums(artist) {
  results.innerHTML = ""; // Clear previous content

  const spotifyArtistId = await searchSpotifyArtist(artist.title);
  if (spotifyArtistId) {
    const albumsData = await fetchSpotifyAlbums(spotifyArtistId);
    displayAlbumsData(albumsData.items, artist.title, results);
  } else {
    results.innerHTML = "<p>No Spotify artist found.</p>";
  }
}
