// api.js

let spotifyAccessToken = "";

// Function to get Spotify access token
export async function getSpotifyAccessToken(clientId, clientSecret) {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      throw new Error("Failed to retrieve Spotify access token");
    }

    const data = await response.json();
    spotifyAccessToken = data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    // Handle error gracefully, e.g., show an error message to the user
  }
}

export async function searchReleases(artistName) {
  const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(
    artistName
  )}&type=artist&token=WLcpnOmTSaBoBiayxBXjDTDLPQNeaJlSOFxlzLMG`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "YourAppName/1.0 +http://yourappurl.com",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Discogs data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error gracefully, e.g., show an error message to the user
  }
}

export async function searchSpotifyArtist(artistName) {
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    artistName
  )}&type=artist&limit=1`;

  try {
    const response = await fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Spotify artist data");
    }

    const searchData = await response.json();
    if (searchData.artists.items.length > 0) {
      return searchData.artists.items[0].id;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching Spotify artist data:", error);
    // Handle error gracefully, e.g., show an error message to the user
  }
}

export async function fetchSpotifyAlbums(artistId) {
  const albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;

  try {
    const response = await fetch(albumsUrl, {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Spotify albums");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Spotify albums:", error);
    // Handle error gracefully, e.g., show an error message to the user
  }
}
