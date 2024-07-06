# Music Search App

## 1. Use the fetch API or Axios to communicate with an external web API.

Met: I am using the fetch API to communicate with the Spotify and Discogs APIs in functions like getSpotifyAccessToken, searchReleases, and displayAlbums.

## 2. Use the data provided by this API to populate your application’s content and features.

Met: I am using the data from the Discogs API to populate the artist search results in the displayArtists function and the data from the Spotify API to display album information in the displayAlbums and displayAlbumsData functions.

## 3. Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.

Met: I have implemented a search feature in the form submission event listener that uses a GET request to the Discogs API to search for artists based on user input.

## 4. Make use of Promises and async/await syntax as appropriate.

Met: I am using Promises with the fetch API and handling asynchronous operations using the async/await syntax in functions like getSpotifyAccessToken, searchReleases, displayAlbums, and displayAlbumsData.

## 5. Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.

Met: My current implementation has all the JavaScript code separated into 3 files. With this structure, my code is now organized into separate module files, making it more modular and easier to maintain.

## 6. Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).

Met: There are no apparent issues with the JavaScript event loop, race conditions, or out-of-order API calls in my current implementation. My use of async/await ensures that API calls are handled in the correct order.

## 7. Create an engaging user experience through the use of HTML and CSS.

Met: I have a clean and simple user interface with styles applied through CSS, providing an engaging user experience. The layout is responsive, and the design is user-friendly.

## 8. Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

Met: My code runs without errors, and I have included error handling in the API calls to manage potential issues.

## 9. Commit frequently to the git repository.

Met: I committed several times to ensure I could revert to a previous functioning version.

## 10. Include a README file that contains a description of your application.

Met: Here it is!

## 11. Level of effort displayed in creativity, presentation, and user experience.

Met: I have shown effort in creating a functional and visually appealing application. The search feature and album display demonstrate creativity and attention to user experience.
