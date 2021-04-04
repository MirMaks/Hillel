
const $albumDiv = $('.album-js');
const $gallery = $('.gallery-js');
const $albumUl = $('.ul-album-js');

function init() {

    addAlbumClickEventListener();
    const $albums = getAlbumRequest();
    renderAlbums($albums);
    getTheFirstAlbum($albums);
}

function getAlbumRequest() {

    return fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json());
}

function getPhotos($albumId) {

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${$albumId}`)
        .then((response) => response.json())
        .then((response) => {
            clearGallery();
            response.map(photo => {
                renderPhoto(photo);
            })

        })
};

function renderAlbums($albums) {

    $albums.then((album) => {

        for (key in album) {
            $albumUl.append(`<li class="li-album-js"  id=${album[key].id}>${album[key].id}. ${album[key].title} </li >`);
        }
    });

}

function addAlbumClickEventListener() {

    $albumUl.on('click', (event) => {
        const $albumId = event.target.id;
        if ($albumId !== '') {
            getPhotos($albumId);
        }
    })
}

function renderPhoto(photo) {

    const $img = document.createElement('img');
    $img.src = photo.url;
    $img.id = photo.id;
    $img.width = 300;
    $img.height = 74;
    $gallery.append($img);
}

function clearGallery() {
    $gallery.empty();
}

function getTheFirstAlbum($albums) {
    $albums.then((response) => {
        const $firstAlbum = response[0].id;
        getPhotos($firstAlbum);
    });
}

init();
