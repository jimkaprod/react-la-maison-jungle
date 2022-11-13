import { plantList } from '../datas/plantList'
import  PlantItem  from './PlantItem'
import  Categories  from './Categories'
import '../styles/ShoppingList.css';

function ShoppingList({ cart, updateCart, categorie, updateCategorie }) {


    const plantsFiltered = categorie === 'all' ? plantList : plantList.filter((plant) => (plant.category === categorie))
    const plants = plantsFiltered.map((plant) => (
        <div key={plant.id}>
            <PlantItem key={plant.id} props={plant} />
            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
        </div>
    ))

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <div className='lmj-categories-select'>
                <Categories updateCategorie={updateCategorie} />
            </div>
            <ul className='lmj-plant-list'>
                {plants}
            </ul>
        </div>
    )
}

export default ShoppingList