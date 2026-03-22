import './css/main.css'
import { CardFree, CardBuy } from './Card.tsx'

export default function ByFooter() {
    return <main className='main-body'>
        
        <section className='prices' id='prices'>
            <h1 className='h1-bold'>Seja um dos grandes.</h1>
            <h2 className='h2-bold'>Use o dinheiro, como ele deve ser <span className="marker-italic">usado</span></h2>
            <aside className='flex-aside'>
                <CardFree />
                <CardBuy />
            </aside>
            <div className="light1"></div>
            <div className="light2"></div>
        </section>
        <section className='family'>
            <h1 className="h1-bold">Venha fazer parte da nossa familia</h1>
            <h2 className='h2-bold'>Feito de pessoas, para pessoas que simplesmente querem atingir outro nivel financeiro.</h2>
            <div className="attenpt">Enquanto você tenta tomar uma decisão, os outros estão mudando a sua propria realidade com as ferramentas corretas, a oportunidade que nenhum couch vai te vender.</div>
                    </section>
    </main>
}