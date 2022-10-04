let url = 'http://localhost:3001/user'
let data

function get() {
    axios.get(url)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                data = res.data
                reload(data)
            }
        })
        .catch(err => console.log(err))
}

get()

let mini_auto = document.querySelector('.mini_auto')
let big_auto = document.querySelector('.big_auto')
let bigi_auto = document.querySelector('.bigi_auto')

let mini = []
let big = []
let bigi = []
function reload(arr) {
    for (let item of arr) {

        let year = 2022 - +item.year

        if (year <= 3) {
       mini.push(item)
       let div = document.createElement('div')
       let h3 = document.createElement('h3')
       let br = document.createElement('br')
       let br_two = document.createElement('br')
       let button = document.createElement('button')
       let span = document.createElement('span')
       let span_two = document.createElement('span')
       
       
       div.classList.add('baby')
       
       h3.innerHTML = item.manufacturer
       span.innerHTML = item.vin
       span_two.innerHTML = item.year
       button.innerHTML = 'Подробнее'
       
       div.append(h3,span,br,span_two,br_two,button)
       mini_auto.append(div)

        }

        if (year <= 10) {
            big.push(item)
            let div = document.createElement('div')
            let h3 = document.createElement('h3')
            let br = document.createElement('br')
            let br_two = document.createElement('br')
            let button = document.createElement('button')
            let span = document.createElement('span')
            let span_two = document.createElement('span')
            
            
            div.classList.add('baby')
            
            h3.innerHTML = item.manufacturer
            span.innerHTML = item.vin
            span_two.innerHTML = item.year
            button.innerHTML = 'Подробнее'
            
            div.append(h3,span,br,span_two,br_two,button)
            big_auto.append(div)
     

    }
    
    if ( 11 < year) {
        bigi.push(item)
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let br = document.createElement('br')
        let br_two = document.createElement('br')
        let button = document.createElement('button')
        let span = document.createElement('span')
        let span_two = document.createElement('span')
        
        
        div.classList.add('baby')
        
        h3.innerHTML = item.manufacturer
        span.innerHTML = item.vin
        span_two.innerHTML = item.year
        button.innerHTML = 'Подробнее'
        
        div.append(h3,span,br,span_two,br_two,button)
        bigi_auto.append(div)
  

}

}
}
console.log(mini,big,bigi);



        //     mini_auto.innerHTML = `
        //  <div class="baby">
        //  <h3>${item.manufacturer}</h3>
        //  <span>${item.vin}</span>
        //  <br>
        //  <span>${item.year}</span>
        //  <br>
        //  <button>Подробнее</button>
        //  </div> 
        //  `
