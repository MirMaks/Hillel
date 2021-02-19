// Интерфейс разделен на две части.В левой части пользователь видит список альбомов.
// его берем из https://jsonplaceholder.typicode.com/albums
// Когда пользователь нажмет на какой - то альбом в правой части он увидит фотографии из этого альбома.
// Их берем из https://jsonplaceholder.typicode.com/photos?albumId=ID где вместо ID подставляем id нужного альбома.
// Сразу при загрузке приложения и получения списка альбомов, в правой части нужно показать фотографии из первого альбома в списке
const requestAlbumUrl = 'https://jsonplaceholder.typicode.com/albums';
const requesPhotoUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=ID';
const albumDiv = document.querySelector('.album-js');
const gallery = document.querySelector('.gallery-js');
const albumUl = albumDiv.innerHTML = (`<ul class="ul-album-js"></ul>`);

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
}
function sendAlbumRequest() {
    sendRequest('GET', requestAlbumUrl)
        .then(albums => albums.map(item => {
            const albums = (item);
            console.log(albums);
        }));

}

sendAlbumRequest();
