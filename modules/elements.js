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
    <li>La vie</li>
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

console.log(navige);

navige[2].onclick = () => {
    window.location.href = '../pages/seting.html'
}
navige[0].onclick = () => {
    window.location.href = '../pages/homepage.html'
}