import './css/button.css'

export function ButtonSaiba() {
    return  <a href="#prices"><button  id='saiba-mais'>Saiba mais<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button></a>
}

export function TestNow() {
    return <button className='button-card'>Testar agora!</button>
}

export function BuyNow() {
    return <button className='button-card'>Comprar agora</button>
}