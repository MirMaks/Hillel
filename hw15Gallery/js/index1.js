// Интерфейс разделен на две части.В левой части пользователь видит список альбомов.
// его берем из https://jsonplaceholder.typicode.com/albums
// Когда пользователь нажмет на какой - то альбом в правой части он увидит фотографии из этого альбома.
// Их берем из https://jsonplaceholder.typicode.com/photos?albumId=ID где вместо ID подставляем id нужного альбома.
// Сразу при загрузке приложения и получения списка альбомов, в правой части нужно показать фотографии из первого альбома в списке


const albumDiv = document.querySelector('.album-js');
const gallery = document.querySelector('.gallery-js');
const albumUl = document.querySelector('.ul-album-js');


function sendAlbumRequest() {

    return fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json());
}

function renderAlbums(responseAlbum) {

    responseAlbum.then((response) => {
        for (key in response) {
            albumUl.innerHTML += (`<li class="li-album-js"  id=${response[key].id}>${response[key].id}. ${response[key].title} </li >`);
        }
    });
}

function addAlbumClickEventListener() {

    albumUl.addEventListener('click', (event) => {
        const albumItem = event.target.closest('.album-js');
        const albumId = event.target.id;

        getPhotos(albumId);
    })
}

function getPhotos(albumId) {

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then((response) => {
            clearGallery();
            response.map(item => {
                renderPhoto(item);
            })

        })
};

function renderPhoto(item) {

    const photo = document.createElement('img');
    photo.src = item.url;
    photo.id = item.id;
    photo.width = 300;
    photo.height = 74;
    gallery.append(photo);
}

function clearGallery() {
    gallery.innerHTML = '';
}

function init() {

    addAlbumClickEventListener();
    const responseAlbum = sendAlbumRequest();
    renderAlbums(responseAlbum);
    getPhotos(1);
}
init();