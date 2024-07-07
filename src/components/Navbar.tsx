import { useState } from 'react'
import Images from '../Images'
import Wrapper from '../layout/Wrapper'
import MobileNavbar from '../shared/header/MobileNavbar'

function Navbar() {
	const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

	const handleShowMobileNav = () => {
		setShowMobileNav(!showMobileNav)
	}

	return (
		<>
			<div className='bg-[#FF8263] p-3 fixed w-full z-[999]'>
				<Wrapper>
					<div className='flex justify-between items-center font-Inter'>
						<div className='flex gap-[32px]'>
							<h2 className='text-[32px] font-bold text-[#fff]'>tompaqai.</h2>
							<ul className='lg:flex items-center gap-[24px] hidden'>
								<li>
									<a
										href='#'
										className='text-black transition-all ease-in-out hover:text-white'
									>
										Главная
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-black transition-all ease-in-out hover:text-white'
									>
										Информация
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-black transition-all ease-in-out hover:text-white'
									>
										Приюты
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-black transition-all ease-in-out hover:text-white'
									>
										Волонтерство
									</a>
								</li>
							</ul>
						</div>

						<div className='flex gap-[16px] items-center'>
							<div className='relative inline-block'>
								<select
									defaultValue='ru'
									className='custom-select appearance-none bg-[#6B4343] text-white py-[10px] pr-6 pl-3 rounded-full focus:outline-none'
								>
									<option value='ru'>RU</option>
									<option value='en'>EN</option>
									<option value='uz'>UZ</option>
								</select>
								<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
									<img src={Images.bottom_arrow} alt='bottom arrow' />
								</div>
							</div>
							<button className='border text-white rounded-[100px] items-center justify-center py-[10px] px-[32px] transition-all ease-in-out hover:text-[#FF4F24] hover:bg-white hidden lg:flex'>
								FAQ
							</button>
							<button className='bg-white border rounded-[100px] py-[10px] px-[20px] xl:px-[32px] text-[#FF4F24] transition-all ease-in-out hover:border hover:bg-inherit hover:text-white hidden lg:flex'>
								Поиск животных
							</button>
							<img
								src={Images.hamburger}
								alt='hamburger'
								className='w-[50px] lg:hidden flex'
								onClick={handleShowMobileNav}
							/>
						</div>
					</div>
				</Wrapper>
			</div>
			{showMobileNav && <MobileNavbar closeNav={handleShowMobileNav} />}
		</>
	)
}

export default Navbar
