axios.get(url + 'playlist')
    .then( res =>{
        if (res.status === 200 || res.status === 201) {
            playlists(res.data)
           }
    })
.catch (err => console.log(err))

function playlists (arr) {
    
}