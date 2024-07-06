import Images from '../../Images'

interface MobileNavbarProps {
	closeNav: () => void
}

function MobileNavbar({ closeNav }: MobileNavbarProps) {
	return (
		<>
			<div className='fixed top-0 left-0 w-screen h-screen bg-white z-[999]'>
				<img
					src={Images.close}
					alt='close'
					onClick={closeNav}
					className='w-[50px] absolute right-3 top-3'
				/>

				<ul className='flex flex-col justify-center h-full items-center gap-[24px]'>
					<li>
						<a
							href='#'
							className='text-black transition-all ease-in-out hover:text-[#FF4F24]'
						>
							Главная
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-black transition-all ease-in-out hover:text-[#FF4F24]'
						>
							Информация
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-black transition-all ease-in-out hover:text-[#FF4F24]'
						>
							Приюты
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-black transition-all ease-in-out hover:text-[#FF4F24]'
						>
							Волонтерство
						</a>
					</li>
					<li>
						<button className='border text-black rounded-[100px] items-center justify-center py-[10px] px-[32px] transition-all ease-in-out hover:text-[#FF4F24] hover:bg-white hover:border-[#FF4F24]'>
							FAQ
						</button>
					</li>
					<li>
						<button className='bg-white border rounded-[100px] py-[10px] px-[32px] text-[#FF4F24] transition-all ease-in-out hover:border hover:bg-inherit hover:text-[#FF4F24]'>
							Поиск животных
						</button>
					</li>
				</ul>
			</div>
		</>
	)
}

export default MobileNavbar
