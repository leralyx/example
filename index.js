let itemi = document.querySelector('.itemi')
let daddy = document.querySelector('.daddy')


itemi.onclick = () => {
    itemi.style.display = 'none'
    daddy.innerHTML += `
    <div class="item">
    <div class="cite">
        <img src="https://static.opensea.io/logos/fortmatic-alternative.png">
        <span>Fortmatic</span>
    </div>
</div>
     <div class="item">
     <div class="cite">
         <img src="https://static.opensea.io/logos/trust-alternative.png">
         <span>Trust</span>
     </div>
     </div>
     <div class="item">
     <div class="cite">
         <img src="https://static.opensea.io/logos/bitski-alternative.png">
         <span>Bitski</span>
     </div>
     </div>
     <div class="item">
     <div class="cite">
         <img src="https://opensea.io/static/images/logos/opera-touch-alternative.svg">
         <span>OperaTouch</span>
     </div>
     </div>
     <div class="item">
     <div class="cite">
         <img src="https://opensea.io/static/images/logos/venly.svg">
         <span>Venly</span>
     </div>
     </div>
     <div class="item">
     <div class="cite">
         <img src="https://static.opensea.io/logos/authereum-alternative.png">
         <span>Authereum</span>
     </div>
     </div>
     <div class="item">
     <div class="cite">
         <img src="https://static.opensea.io/logos/torus-alternative.png">
         <span>Torus</span>
     </div>
     </div>
     <div class="item" style="border-radius: 12px; ">
     <div class="cite">
         <img src="https://static.opensea.io/logos/portis-alternative.svg">
         <span>Portis</span>
     </div>
     </div>`

}