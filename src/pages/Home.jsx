import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Horarios from '../components/Horarios'

const Home = () => {
	return (
		<>
			<Header />
			<main className='pt-20'>
				<Hero />
				<div>
					<Horarios />
				</div>
			</main>
		</>
	)
}

export default Home
