import { useState } from 'react';
import './styles.scss';

export default function Inicio() {
    const [compras, setCompras] = useState([
        {
            Titulo: 'Bolinho',
            Seccao: 'Doces',
            Comprado: 's',
        },
        {
            Titulo: 'Arroz',
            Seccao: 'Grãos',
            Comprado: 'n',
        },
        {
            Titulo: 'Feijão',
            Seccao: 'Grãos',
            Comprado: 'n',
        }
    ]);
    
    let comprado = 's';

    return (
        <div className='pagina-inicio'>
            <h1>Inicio</h1>

            <input className='campo' placeholder='Informe o titulo' />
            <input className='campo' placeholder='Informe o periodo' />
            <input className='campo' placeholder='Informe o status' />
            <button>Adicionar a fazer</button>

            <div className='card-container'>
                <div className='card'>
                    <div 
                        className='line' 
                        style={{ backgroundColor: comprado == 's' ? '#a3b18a' : '#e63946' }} 
                    />
                    <div>
                        <h3>Doces</h3>
                        <h2>Bolinho</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
