import './css/byfooter.css'
import Counter from './Counting.tsx'
import Avaliation from './Avaliation.tsx'

export default function Main() {
    return <section className='section-2'>
    <h1>Por que usar o hermes?</h1>
    <h2 id='fds'>Você está realmente pronto para dar o primeiro passo e mudar sua realidade financeira?</h2>
    <section id='avaliation-section'>
        <Avaliation name='Matheus' text="Desde que comecei a usar o hermes, minha vida deixou de ser uma bagunça, é bobeira dizer que eu consegui fazer oque eu mais queria fazer?"/>
        <Avaliation name='Lucas' text="Minha vida tem se tornado mais facil, sem duvidas é a melhor forma de organizar a mente pra ganhjar mais dinhheiro"/>
        <Avaliation name='Maria' text="Eu custumo usar casas de aposta, e esse aplicativo tem tornado muito mais facil gerenciar meus ganhos"/>
    </section>
        <h1 id='what-more'>O que mais você está esperando?</h1>
        <h2>Seja o melhor que o as Pessoas esperam de você</h2>
    <Counter/>
        <div className="light3"></div>
        <div className="light4"></div>
    </section>
}