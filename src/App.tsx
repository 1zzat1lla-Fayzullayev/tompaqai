import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Charity from './components/Charity'
import InformationProject from './components/InformationProject'
import Main from './components/Main'
import MainStep from './components/MainStep'
import Navbar from './components/Navbar'
import Images from './Images'
import Faq from './components/Faq'
import Form from './components/Form'

function App() {
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			startEvent: 'DOMContentLoaded',
		})
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
			AOS.refresh()
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<img
					src={Images.loading}
					alt='loading'
					className='w-[400px] flex justify-center items-center'
				/>
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
			<Faq />
			<Form />
		</>
	)
}

export default App
