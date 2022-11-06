let url = 'http://localhost:3000/'


    let aside = document.querySelector('aside')

        aside.innerHTML = `
        <div class="logo">
        <img src="../uplaod/logo.svg">
        </div>
        <div class="navigation">
        <span>NAVIGATION</span>
        <ul class="navige">
            <li>Homepage</li>
            <li>Playlist</li>
            <li>Settings</li>
        </ul>
        </div>
        <div class="playlists">
        <span>PLAYISTS</span>
        <ul>
            <li></li>
        </ul>
        </div>
        <div class="liked-songs">
        <span>LIKED SONGS</span>
        <ul>
            <li>
                <div class="song_name ">
                    <span>DJAJA</span>
                </div>
                <div class="song_duration">
                    <span>3:11</span>
                </div>
            </li>
        
        </ul>
        </div>
        `



let navige = document.querySelector('.navige').children
let name_user = document.querySelector('.name_user')
let is_premium = false

let name_person = 'No one'

let isPremium;

if (!localStorage.isPremium || localStorage.isPremium == 'undefined') localStorage.isPremium = false
else isPremium = JSON.parse(localStorage.isPremium)

if (!localStorage.name) localStorage.name = "Alex"
else name_person = localStorage.name

navige[2].onclick = () => window.location.href = '../pages/seting.html'
navige[1].onclick = () => window.location.href = '../pages/playlist.html'
navige[0].onclick = () => window.location.href = '../pages/homepage.html'


let main = document.querySelector('main')

if (isPremium) main.style.background = ' linear-gradient(var(--premium_account_backgound_color), black)'
else main.style.background = ' linear-gradient(var(--normal_account_backgound_color), black)'



let search_side = document.querySelector('.search_and_music')

search_side.innerHTML = `
                    <div class="input_account">
                        <div class="input">
                            <img src="../uplaod/search.svg">
                            <input type="text" class="search_" placeholder="Search by name or artist">
                        </div>

                        <div class="about_accout">
                            <span class="name_user">${name_person}</span>
                            <span class="version_account">Free user</span>
                        </div>
                    </div>
`

let input_type = document.querySelector('.search_')

input_type.onkeyup = () => {
    console.log(event.target.value);
}

let playlist_db = []  || JSON.parse(localStorage.playlist)
let track = JSON.parse(localStorage.track)

axios.get(url + 'playlist')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            playlist_db = res.data
            create(playlist_db)
        }
    })
    .catch(err => console.log(err))

let create_form = document.forms.create

create_form.onsubmit = () => {
    event.preventDefault()

    let obj = {
        id: Math.random().toString().slice(3),
        arr: []
    }

    let fm = new FormData(create_form)

    fm.forEach((val, key) => {
        obj[key] = val
    })


    playlist_db.push(obj)
    axios.post(url + 'playlist', obj)
    localStorage.playlist = JSON.stringify(playlist_db)
    create(playlist_db)
}
const create = (arr) => {

    
    let list = document.querySelector('.list')
    list.innerHTML = ''

    for (let item of arr) {
        let div = document.createElement('div')

        div.classList.add('item')
        div.innerHTML = `<div class="name">${item.name}</div><div class="num_of_song">${item.arr.length}</div>`
        div.onclick = () => {
            let track = JSON.parse(localStorage.track)
            item.arr.push(track)    
            playlist_db = arr
            localStorage.playlist = JSON.stringify(arr)
        }
        
        list.append(div)
    
    }
}




let footer = document.querySelector('footer')

footer.innerHTML = `
<footer>
<div class="the_week">
    <span class="week">The Weekend</span>
    <span class="nom">Starboy</span>
</div>
<div class="player">
    <div class="instrument">
        <img src="../uplaod/repeat.svg" class="repeat">
        <img src="../uplaod/track-next.svg" class="track-next">
        <img src="../uplaod/play.svg" class="play">
        <img src="../uplaod/track-prev.svg" class="track-prev">
        <img src="../uplaod/random.svg" class="randomimg">
    </div>
    <div class="time_and_other">
        <div class="dada_time">
            <div class="time"></div>
        </div>
    </div>
</div>
</footer>`









//    love_.onclick = () => {
//     item.like = !item.like
//     if (item.like) like_song.append(itemm)
//     localStorage.arr = JSON.stringify(arr)
//     songs(arr)
// }