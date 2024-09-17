import { useState } from 'react';
import './styles.scss';
import Card from '../../componentes/card';

export default function Inicio() {
    const [compras, setCompras] = useState([

        {
            Titulo: 'Bolinho',
            Seccao: 'Doces',
            Comprado: 's'
        },
        {
            Titulo: 'Arroz',
            Seccao: 'Grãos',
            Comprado: 'n'
        },
        {
            Titulo: 'Feijão',
            Seccao: 'Grãos',
            Comprado: 'n'
        }
    ]);

    const [titulo, setTitulo] = useState('');
    const [seccao, setSeccao] = useState('');
    const [comprado, setComprado] = useState('');

    const adicionarCompra = () => {
        let item = 
        {
            Titulo: titulo,
            Seccao: seccao,
            Comprado: comprado
        }

        setCompras([...compras, item]);
        setTitulo('');
        setSeccao('');
        setComprado('');
    };

    return (
        <div className='pagina-inicio'>
            <h1>Inicio</h1>

            <input
                className='campo'
                placeholder='Informe o titulo'
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <input
                className='campo'
                placeholder='Informe a seccao'
                value={seccao}
                onChange={(e) => setSeccao(e.target.value)}
            />
            <input
                className='campo'
                placeholder='Informe o status'
                value={comprado}
                onChange={(e) => setComprado(e.target.value)}
            />
            <button onClick={adicionarCompra}>Adicionar a fazer</button>

            <div className='card-container'>
                {compras.map((item, pos) => (
                    <Card
                        key={pos}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
}
