import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import  ShoppingList from './ShoppingList'
import  Footer from './Footer'
import '../styles/Layout.css'
import logo from '../assets/logo.png'


function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  	const [categorie, updateCategorie] = useState('all')
	return (
			<div>
				<Banner>
					<img src={logo} alt='La maison jungle' className='lmj-logo' />
					<h1 className='lmj-title'>La maison jungle</h1>
				</Banner>
				<div className='lmj-layout-inner'>
			<Cart cart={cart} updateCart={updateCart} categorie={categorie} />
			<ShoppingList cart={cart} updateCart={updateCart} categorie={categorie} updateCategorie={updateCategorie} />
				</div>
				<Footer />
			</div>
	)
}

export default App;
