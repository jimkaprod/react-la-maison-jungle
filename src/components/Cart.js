import '../styles/Cart.css';
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart, categorie }) {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    useEffect(() => {
        // alert(`J'aurai ${total}€ à payer 💸`)
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    useEffect(() => {
        // alert(`Vous avez sélectionné ${categorie}`)
    }, [categorie])

    function removePlant(name) {
        const plantToKeep = cart.filter((plant) => plant.name !== name)

        if(plantToKeep) {
            updateCart([
                ...plantToKeep,
            ])
        }
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                    <button onClick={() => removePlant(name)}>Supprimer cette plante</button>
                </div>
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le Panier</button>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
}

export default Cart