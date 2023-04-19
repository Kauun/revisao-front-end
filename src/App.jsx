import { Header } from './components/Header'
import { Lista } from './components/Lista'
import { Tabela } from './components/Tabela'
import './App.css'

export function App(){
  return(
    <>
    <header>
        <Header/>
    </header>

    <main>
        <Lista/>
        <Tabela/>
    </main>


    </>
  )
}