let playlist = JSON.parse(localStorage.playlist)

let dada = document.querySelector('.dada')
console.log(dada);

function playlists(arr) {
    console.log(arr);
    for (let item of arr) {
        let itemm = document.createElement('div')
        let title = document.createElement('span')
        let songs = document.createElement('div')
        let song = document.createElement('div')
        let index = document.createElement('span')
        let img = document.createElement('img')
        let naming = document.createElement('div')
        let name_of_song = document.createElement('span')
        let name_of_famous = document.createElement('span')
        let duration = document.createElement('span')
        
        itemm.classList.add('item')
        title.classList.add('title')
        songs.classList.add('songs')
        song.classList.add('song')
        index.classList.add('index')
        
        naming.classList.add('naming')
        name_of_song.classList.add('name_of_song')
        name_of_famous.classList.add('name_of_famous')
        duration.classList.add('duration')
        
        for (const item2 of item.arr) {
            img.innerHTML = `<img scr='../upload/${item2.face}'`
            index.innerHTML = `${item2.id}`
            name_of_song.innerHTML = `${item2.name_of_song}`
            name_of_famous.innerHTML = `${item2.name}`
            duration.innerHTML = `${item2.duration}`
           
        }
        title.innerHTML = `${item.name}`
      
        
        
        itemm.append(title, songs)
        songs.append(song)
        song.append(index, img, naming, duration)
        naming.append(name_of_song, name_of_famous)
        dada.append(itemm)
    }




}
playlists(playlist)



// dada.innerHTML += `
// <div class="item">
//     <span class="title">${item.name}</span>
//     <div class="songs">
        
//         <div class="song">
//             <span class="index">${item.id}</span>
//             <img src="../image/${item2.face}">
//             <div class="naming">
//                 <span class="name_of_song">${item2.name_of_song}</span>
//                 <span class="name_of_famous">${item2.name}</span>
//             </div>
//             <span class="duration">${item2.duration}</span>

//         </div>
//     </div>
// </div>
// `