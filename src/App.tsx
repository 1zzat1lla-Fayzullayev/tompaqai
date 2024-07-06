import { useState, useEffect } from 'react'
import Charity from './components/Charity'
import InformationProject from './components/InformationProject'
import Main from './components/Main'
import MainStep from './components/MainStep'
import Navbar from './components/Navbar'
import Images from './Images'

function App() {
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<img src={Images.loading} alt='loading' className='w-[400px] flex justify-center items-center' />
			</div>
		)
	}

	return (
		<>
			<Navbar />
			<Main />
			<MainStep />
			<InformationProject />
			<Charity />
		</>
	)
}

export default App
