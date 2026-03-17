import './css/byfooter.css'
import Counter from './Counting.tsx'
export function ByFooter() {
    return <section className='section-2'>
        <h1>O que mais você está esperando?</h1>
        <h2>Seja o melhor que o mundo já viu.</h2>
    <Counter/>
    <h1 id='about-hermes'>
        Sobre Hermes
    </h1>
    <h2 id='about-hermes-h2'>
        A revolução do gerenciamento financeiro, <br />
        Saiba controlar a sua vida como os melhores <span className="marker-italic">fazem</span>
    </h2>
        <div className="light3"></div>
        <div className="light4"></div>
    </section>
}