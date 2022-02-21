import Coterie from './Coterie'
import { lstCoteries } from '../donnees/lstCoteries'
import '../styles/Coteries.css';

function Coteries(props) {

    return <div>
        <h3>Liste des coteries</h3>
        <ul className='lstCoteries_ul'>
                {lstCoteries.map(({ titre, img, description }) => (
					<Coterie
						key={titre}
						titre={titre}
						img={img}
						description={description}
					/>
                ))}
            </ul>
    </div>
}

export default Coteries