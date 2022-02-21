import Coterie from './Coterie'
import { lstCoteries } from '../donnees/lstCoteries'
import '../styles/Coteries.css';

function Coteries(props) {

    return <div>
        <h3>Liste des coteries</h3>
        <ul className='lstCoteries_ul'>
                {lstCoteries.map((coterie, index) => (
                    <li key={index} className='lstCoteries_li'>
                        <img key={index} src={coterie.img} alt={coterie.titre} className='lstCoteries_img'/>
                        <h4>{coterie.titre}</h4>
                    </li>
                ))}
            </ul>
    </div>
}

export default Coteries