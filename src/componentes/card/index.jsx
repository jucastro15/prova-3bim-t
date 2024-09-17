import './index.scss';

export default function Card(props) {
    return (
        <div className='card'>
            <div 
                className='line' 
                style={{ backgroundColor: props.item.Comprado === 's' ? '#7bff82' : '#e63946' }} 
            />
            <div>
                <h3>{props.item.Seccao}</h3>
                <h2>{props.item.Titulo}</h2>
            </div>
        </div>
    );
}

