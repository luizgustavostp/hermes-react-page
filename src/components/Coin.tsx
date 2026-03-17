import coinimg from '../assets/imgs/coins.png'
import './css/coin.css'

export function CoinMobile() {
    return <img src={coinimg} alt="" />
}

export function CoinPc() {
    return <img id='coinPC' src={coinimg} alt="" draggable="false" />
}

