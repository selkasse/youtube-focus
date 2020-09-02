// * Hide the element
const hideIt = function(evt){
    evt.target.innerHTML = '';
    evt.target.style['pointer-events'] = 'none';
    run();
}

// * Add event listener to a list of renderers
const addListeners = function(list){
    for (var i=0, item; item = list[i]; i++){
        item.addEventListener('mouseenter', hideIt);
        item.addEventListener('mouseover', hideIt);
        item.href = '#';
    }
}

// * Main logic
const run = function(evt){
    
    // * divs
    const homePage = document.getElementsByClassName('style-scope ytd-rich-grid-video-renderer');
    const searchResults = document.getElementsByClassName('style-scope ytd-video-renderer');
    const playlistDetails = document.getElementsByClassName('style-scope ytd-playlist-renderer');
    const playlistImages = document.getElementsByClassName('style-scope ytd-playlist-thumbnail');
    const relatedVideos = document.getElementsByClassName('style-scope ytd-compact-video-renderer');
    const relatedPlaylists = document.getElementsByClassName('style-scope ytd-compact-radio-renderer');

    // * Convert HTMLCollections to Arrays
    const playlistDetailsArray = Array.from(playlistDetails);
    const playlistImagesArray = Array.from(playlistImages);
    const homePageArray = Array.from(homePage);
    const searchResultsArray = Array.from(searchResults);
    const relatedVideosArray = Array.from(relatedVideos);
    const relatedPlaylistsArrray = Array.from(relatedPlaylists)

    // * Concatenate arrays together to be looped through
    const allElements = playlistDetailsArray.concat(playlistImagesArray, homePageArray, searchResultsArray, relatedVideosArray, relatedPlaylistsArrray);

    // * Renderers
    const renderers = document.getElementsByTagName('ytd-playlist-renderer');
    const radioRenderers = document.getElementsByTagName('ytd-radio-renderer');
    const movieRenderers = document.getElementsByTagName('ytd-movie-renderer');
    const richMovieRenderers = document.getElementsByTagName('ytd-rich-movie-renderer');
    const promotedRenderers = document.getElementsByTagName('ytd-promoted-video-renderer');
    const channelRenderers = document.getElementsByTagName('ytd-grid-video-renderer');
    const channelPlaylistRenderers = document.getElementsByTagName('ytd-grid-playlist-renderer');
    const relatedMovieRenderers = document.getElementsByTagName('ytd-compact-movie-renderer');
    const featuredVideoRenderers = document.getElementsByTagName('ytd-channel-video-player-renderer');

    addListeners(renderers);
    addListeners(radioRenderers);
    addListeners(movieRenderers);
    addListeners(richMovieRenderers);
    addListeners(promotedRenderers);
    addListeners(channelRenderers);
    addListeners(channelPlaylistRenderers);
    addListeners(relatedMovieRenderers);
    addListeners(featuredVideoRenderers);
    
    // * Loop through concatenated arrays
    for (var i=0, item; item = allElements[i]; i++) {
    
        if(item.id == 'dismissable'){
            // * Check for 'Live Now' badge
            if(!item.innerHTML.includes('badge badge-style-type-live-now style-scope ytd-badge-supported-renderer')){
                item.addEventListener('mouseenter', hideIt);
                item.addEventListener('mouseover', hideIt);
                item.href = "#";
            }
        }

        if(item.class == 'style-scope ytd-item-section-renderer'){
            item.addEventListener('mouseenter', hideIt);
            item.addEventListener('mouseover', hideIt);
            item.href = "#";
        }

        // * Check for 'Live Now' badge
        if(item.class == 'style-scope ytd-playlist-thumbnail' && !item.innerHTML.includes('badge badge-style-type-live-now style-scope ytd-badge-supported-renderer')){
            item.addEventListener('mouseenter', hideIt);
            item.addEventListener('mouseover', hideIt);
            item.href = "#";

        }
    }
   
}



// * Initial run
run();

// * Run on scroll
window.addEventListener("scroll", run);
document.addEventListener("scroll", run);

// * Run on load
window.addEventListener("load", run);
document.addEventListener("load", run);

// * Run on move movement
window.addEventListener("mousemove", run);
document.addEventListener("mousemove", run);





    





