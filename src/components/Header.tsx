import '../globals.css'
import './css/header.css'
import { ButtonSaiba } from './Buttons.tsx'
import { CoinPc } from './Coin.tsx'
function Header() {
    return <header>
        <span className='titles'>
            <h1>Dê um passo a frente</h1>
            <h1>na sua <span className='mark'>vida financeira</span></h1>
            <ButtonSaiba />
        </span>
        <CoinPc />
    </header>
}

export default Header;