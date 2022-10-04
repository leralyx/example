let url = 'http://localhost:3001/'
axios.get(url + 'about_song')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            songs(res.data)
        }
    })
    .catch(err => console.log(err))

let random_songs = document.querySelector('.random_songs')
let random = []
for (let i = 0; i < 10; i++) {
    let le = Math.random() * 47
    le = Math.ceil(le)
    random.push(le)
}



function songs(arr) {
    random_songs.innerHTML = ''
    for (let item of arr) {
        for (let item2 of random) {
            if (+item.id == item2) {
      
                let itemm = document.createElement('div')
                let naming = document.createElement('div')
                let id = document.createElement('span')
                let name_of_song = document.createElement('span')
                let name = document.createElement('span')
                let love_ = document.createElement('img')
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
                love_.src = `../uplaod/love.svg`
                duration.innerHTML = item.duration
                add_.src = `../uplaod/add.png`


                random_songs.append(itemm)
                itemm.append(id, face, naming, span_love_, duration, span_add_)
                naming.append(name_of_song, name)
                span_love_.append(love_)
                span_add_.append(add_)



                
            }
        }


    }

}





