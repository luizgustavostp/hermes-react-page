import './css/card.css'
import { TestNow, BuyNow } from './Buttons'
export function CardFree() {
    return <span className='card'>
        <h1>Grátis</h1>
        <ul>
            <li className='unselected'>Atividades infinitas</li>
            <li className='unselected'>Lista de Tarefas</li>
            <li className='unselected'>Gerenciamente de lucro secundario</li>
            <li>Vida financeira melhor.</li>
        </ul>
    <TestNow/>
    </span>
}
export function CardBuy() {
    return <span className='card'>
        <h1>Pago</h1>
        <ul>
            <li>Atividades infinitas</li>
            <li>Lista de Tarefas</li>
            <li>Gerenciamente de lucro secundario</li>
            <li>Vida financeira melhor.</li>
        </ul>
    <BuyNow/>
    </span>
}