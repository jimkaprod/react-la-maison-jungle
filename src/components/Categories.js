import { plantList } from '../datas/plantList'

function Categories({categorie, updateCategorie}) {
    function updateCategories(e) {
        updateCategorie(e.target.value)
        console.log("vous avez choisi: :: ", e.target.value);
    }
    
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )


    
    const categoriesList = categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
    ))


    return (
        
        <select onChange={updateCategories}>
            <option key='all' value="all">Toutes les catégories</option>
            {categoriesList}
        </select>
    )
}



export default Categories