import Carros from '../assets/carros.jpg'
import "./Header.css"

export function Header(){
    return(
        <div>
           <h1>Carros Mais Usados</h1>

           <img src={Carros} alt="Varios carros juntos" />
        </div>
    )
}