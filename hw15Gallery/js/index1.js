// Интерфейс разделен на две части.В левой части пользователь видит список альбомов.
// его берем из https://jsonplaceholder.typicode.com/albums
// Когда пользователь нажмет на какой - то альбом в правой части он увидит фотографии из этого альбома.
// Их берем из https://jsonplaceholder.typicode.com/photos?albumId=ID где вместо ID подставляем id нужного альбома.
// Сразу при загрузке приложения и получения списка альбомов, в правой части нужно показать фотографии из первого альбома в списке


const albumDiv = document.querySelector('.album-js');
const gallery = document.querySelector('.gallery-js');
const albumUl = document.querySelector('.ul-album-js');


function getAlbumRequest() {

    return fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json());
}

function renderAlbums(albums) {

    albums.then((album) => {

        for (key in album) {
            albumUl.innerHTML += (`<li class="li-album-js"  id=${album[key].id}>${album[key].id}. ${album[key].title} </li >`);
        }
    });

}

function addAlbumClickEventListener() {

    albumUl.addEventListener('click', (event) => {

        const albumItem = event.target.closest('.album-js');
        const albumId = event.target.id;
        if (albumId !== '') {
            getPhotos(albumId);
        }
    })
}

function getPhotos(albumId) {

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then((response) => {
            clearGallery();
            response.map(photo => {
                renderPhoto(photo);
            })

        })
};


function renderPhoto(photo) {

    const img = document.createElement('img');
    img.src = photo.url;
    img.id = photo.id;
    img.width = 300;
    img.height = 74;
    gallery.append(img);
}

function clearGallery() {
    gallery.innerHTML = '';
}

function GetTheFirstAlbum(albums) {
    albums.then((response) => {
        const firstAlbum = response[0].id;
        getPhotos(firstAlbum);
    });
}

function init() {

    addAlbumClickEventListener();
    const albums = getAlbumRequest();
    renderAlbums(albums);
    GetTheFirstAlbum(albums);
}

init();
