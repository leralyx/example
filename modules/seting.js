let seting = document.forms.seting
let name_user = document.querySelector('.name_user')
let black_ball = document.querySelector('.black_ball')
let button_change = document.querySelector('.button_change')

seting.onsubmit = (e) => {
    e.preventDefault()

    let name_of_setting = {}

    let fm = new FormData(seting)

    fm.forEach((value, key) => {
        name_of_setting[key] = value
    })

    localStorage.name = name_of_setting.name
    name_user.innerHTML = localStorage.getItem('name')
}

let main = document.querySelector('main')

let isPremium = false || JSON.parse(localStorage.isPremium)

black_ball.onclick = () => {
    isPremium = !isPremium
    localStorage.isPremium = isPremium
    
    check_changer()
}

const check_changer = () => {
    console.log(localStorage.isPremium);
    if (isPremium) {
        main.style.background = ' linear-gradient(var(--premium_account_backgound_color), black)'
        button_change.style.justifyContent = 'end'
    } else {
        button_change.style.justifyContent = 'start'
        main.style.background = ' linear-gradient(var(--normal_account_backgound_color), black)'
    }
}
check_changer()