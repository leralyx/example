let seting = document.forms.seting
let name_user = document.querySelector('.name_user')
let black_ball = document.querySelector('.black_ball')


seting.onsubmit = (event) => {

    event.preventDefault()

    let name_of_setting = {
    }

    let fm = new FormData(seting)

    fm.forEach((value, key) => {
        name_of_setting[key] = value
    })

    JSON.stringify(localStorage.setItem('naming', name_of_setting.name))
    name_user.innerHTML = localStorage.getItem('naming')
}

black_ball.onclick = () =>{
    black_ball.style.margin = 
}