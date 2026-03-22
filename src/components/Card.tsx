import './css/card.css'
import { BuyNow } from './Buttons'
export function CardFree() {
    return <span className='card' id='basic'>
        <span className='card-header' >
            <h1>Básico</h1>
            <p>Poder e gerenciamento da sua vida, direto da palma da sua mão</p>
            <h1>R$12,99<span className='h1-h2'>/mês</span></h1>
            <p className='above-price'>por usuário, assinando o plano mensalmente </p>
            <BuyNow/>
        </span>
        <ul>
            <li><svg className='x' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="1.64"> <g id="layer1"> <path d="M 2.9296875 2.2226562 L 2.2226562 2.9296875 L 9.2929688 10 L 2.2226562 17.070312 L 2.9296875 17.777344 L 10 10.707031 L 17.070312 17.777344 L 17.777344 17.070312 L 10.707031 10 L 17.777344 2.9296875 L 17.070312 2.2226562 L 10 9.2929688 L 2.9296875 2.2226562 z " ></path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="layer1"> <path d="M 2.9296875 2.2226562 L 2.2226562 2.9296875 L 9.2929688 10 L 2.2226562 17.070312 L 2.9296875 17.777344 L 10 10.707031 L 17.070312 17.777344 L 17.777344 17.070312 L 10.707031 10 L 17.777344 2.9296875 L 17.070312 2.2226562 L 10 9.2929688 L 2.9296875 2.2226562 z " ></path> </g> </g></svg>atividades infinitas</li>
            <li><svg className='x' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="1.64"> <g id="layer1"> <path d="M 2.9296875 2.2226562 L 2.2226562 2.9296875 L 9.2929688 10 L 2.2226562 17.070312 L 2.9296875 17.777344 L 10 10.707031 L 17.070312 17.777344 L 17.777344 17.070312 L 10.707031 10 L 17.777344 2.9296875 L 17.070312 2.2226562 L 10 9.2929688 L 2.9296875 2.2226562 z " ></path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="layer1"> <path d="M 2.9296875 2.2226562 L 2.2226562 2.9296875 L 9.2929688 10 L 2.2226562 17.070312 L 2.9296875 17.777344 L 10 10.707031 L 17.070312 17.777344 L 17.777344 17.070312 L 10.707031 10 L 17.777344 2.9296875 L 17.070312 2.2226562 L 10 9.2929688 L 2.9296875 2.2226562 z " ></path> </g> </g></svg>Lista de Tarefas</li>
            <li><svg className='x' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="1.64"> <g id="layer1"> <path d="M 2.9296875 2.2226562 L 2.2226562 2.9296875 L 9.2929688 10 L 2.2226562 17.070312 L 2.9296875 17.777344 L 10 10.707031 L 17.070312 17.777344 L 17.777344 17.070312 L 10.707031 10 L 17.777344 2.9296875 L 17.070312 2.2226562 L 10 9.2929688 L 2.9296875 2.2226562 z " ></path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="layer1"> <path d="M 2.9296875 2.2226562 L 2.2226562 2.9296875 L 9.2929688 10 L 2.2226562 17.070312 L 2.9296875 17.777344 L 10 10.707031 L 17.070312 17.777344 L 17.777344 17.070312 L 10.707031 10 L 17.777344 2.9296875 L 17.070312 2.2226562 L 10 9.2929688 L 2.9296875 2.2226562 z " ></path> </g> </g></svg>Gerenciamente de lucro secundario</li>
            <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z" fill="#ffffff"></path> </g></svg>Vida financeira melhor.</li>
        </ul>

    </span>
}
export function CardBuy() {
    return <span className='card'>
        <span className='card-header'>
            <h1>Pro</h1>
            <p>Poder profissional do seu dinheiro, tudo isso no celular</p>
            <h1 className="marked">R$56,99/mês</h1>
            <h1>R$24,99<span className='h1-h2'>/mês</span></h1>
            <p className='above-price'>por usuário, assinando o plano mensalmente </p>
            <BuyNow/>
        </span>
        <ul>
            <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z" fill="#ffffff"></path> </g></svg>atividades infinitas</li>
            <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z" fill="#ffffff"></path> </g></svg>Lista de Tarefas</li>
            <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z" fill="#ffffff"></path> </g></svg>Gerenciamente de lucro secundario</li>
            <li><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z" fill="#ffffff"></path> </g></svg>Vida financeira melhor.</li>
        </ul>

    </span>
}