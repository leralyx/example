let seting = document.forms.seting
let name_user = document.querySelector('.name_user')
let black_ball = document.querySelector('.black_ball')
let button_change = document.querySelector('.button_change')

seting.onsubmit = (e) => {

    e.preventDefault()

    let name_of_setting = {
    }

    let fm = new FormData(seting)

    fm.forEach((value, key) => {
        name_of_setting[key] = value
    })

    JSON.stringify(localStorage.setItem('naming', name_of_setting.name))
    name_user.innerHTML = localStorage.getItem('naming')
}


black_ball.onclick = () => {

    if (button_change.style.justifyContent == 'start') {
        button_change.style.justifyContent = 'end'
        main.style.background = ' linear-gradient(var(--premium_account_backgound_color), black)'
        
    } else {
        button_change.style.justifyContent = 'start'
        main.style.background = ' linear-gradient(var(--normal_account_backgound_color), black)'
    } 
}

// .button_change_two

let main = document.querySelector('main')
export {main}