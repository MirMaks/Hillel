// Интерфейс разделен на две части.В левой части пользователь видит список альбомов.
// его берем из https://jsonplaceholder.typicode.com/albums
// Когда пользователь нажмет на какой - то альбом в правой части он увидит фотографии из этого альбома.
// Их берем из https://jsonplaceholder.typicode.com/photos?albumId=ID где вместо ID подставляем id нужного альбома.
// Сразу при загрузке приложения и получения списка альбомов, в правой части нужно показать фотографии из первого альбома в списке


const albumDiv = document.querySelector('.album-js');
const gallery = document.querySelector('.gallery-js');
albumDiv.innerHTML = (`<ul class="ul-album-js"></ul>`);
const albumUl = document.querySelector('.ul-album-js');


function sendAlbumRequest() {
    return fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json());
}

const responseAlbum = sendAlbumRequest();

function renderAlbums() {
    responseAlbum.then((response) => {
        const albums = response.map(item => {
            return item;
        });
        for (key in albums) {
            albumUl.innerHTML += (`<li class="li-album-js"  id=${albums[key].id}>${albums[key].id}. ${albums[key].title} </li >`);
        }
    });
}

function onClickAlbumsItem() {
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
            response.map(item => {
                renderPhotos(item);
            })

        })
};
getPhotos(albumId = 1);

function renderPhotos(item) {
    const photos = document.createElement('img');
    photos.src = item.url
    photos.width = 300;
    photos.height = 74;
    gallery.append(photos);
}
function clearGallery() {
    gallery.innerHTML = '';
}

function init() {
    onClickAlbumsItem();
    renderAlbums();
}
init();