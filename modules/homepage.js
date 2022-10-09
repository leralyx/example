let url = 'http://localhost:3000/'

// axios
axios.get(url + 'about_song')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            songs(res.data)
        }
    })
    .catch(err => console.log(err))

// 
let random_songs = document.querySelector('.random_songs')
let random = []
let like_song = []

for (let i = 0; i < 10; i++) {
    let le = Math.random() * 47
    le = Math.ceil(le)
    random.push(le)
}



function songs(arr) {

    // random_songs.innerHTML = ''

    for (let item of arr) {
        for (let item2 of random) {
            if (+item.id == item2) {

                let itemm = document.createElement('div')
                let naming = document.createElement('div')
                let id = document.createElement('span')
                let name_of_song = document.createElement('span')
                let name = document.createElement('span')
                let love_ = document.createElement('p')
                let face = document.createElement('img')
                let duration = document.createElement('span')
                let add_ = document.createElement('img')
                let span_love_ = document.createElement('span')
                let span_add_ = document.createElement('span')

                // class

                itemm.classList.add('item')
                id.classList.add('id')
                naming.classList.add('namimg')
                name_of_song.classList.add('name_of_song')
                name.classList.add('name')
                love_.classList.add('love_')
                add_.classList.add('add_')
                duration.classList.add('duration')


                id.innerHTML = '1'
                face.src = `../uplaod/${item.face}`
                name_of_song.innerHTML = item.name_of_song
                name.innerHTML = item.name
                love_.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16.702" height="14.567" viewBox="0 0 16.702 14.567">
                <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M17.737,5.785a4.395,4.395,0,0,0-6.216,0l-.847.847-.847-.847A4.4,4.4,0,1,0,3.611,12l.847.847,6.216,6.216,6.216-6.216L17.737,12a4.395,4.395,0,0,0,0-6.216Z" transform="translate(-2.323 -4.497)" fill="#fff"/>
              </svg>
              `
                duration.innerHTML = item.duration
                add_.src = `../uplaod/add.png`


                random_songs.append(itemm)
                itemm.append(id, face, naming, span_love_, duration, span_add_)
                naming.append(name_of_song, name)
                span_love_.append(love_)
                span_add_.append(add_)


                //////////////////////////////////////////////////////////////////////
                love_.onclick = () => {

                    love_.classList.toggle('love_black')

                    if (love_.classList == 'love_') {
                        let spli = item.id
                        like_song.find(item => like_song.splice(item.id == spli, 1))
                    } else {
                        like_song.push(item)
                    }

                    localStorage.setItem('like_song', JSON.stringify(like_song))

                }
                add_.onclick = () => {
                    let dad_block_add = document.createElement("div")
                    
                }
            }
        }

    }


}

let likes = JSON.parse(localStorage.getItem("like_song"))
let like_songs = document.querySelector('.liked_tracks')

let navige = document.querySelector('.navige')
let child_navige = navige.children












