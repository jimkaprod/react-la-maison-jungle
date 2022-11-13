import CareScale from './CareScale';
import '../styles/PlanItem.css';

function PlantItem(plant) {
    const {name, cover, water, light, isBestSale} = plant.props
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            {isBestSale && <span>🔥</span>}
            <div>
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
        </li>
    );
}

function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

export default PlantItem;