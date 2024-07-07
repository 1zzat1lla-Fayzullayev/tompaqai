import Images from '../Images'
import Wrapper from '../layout/Wrapper'

function Main() {
	return (
		<div className='bg-[#FF6842] w-full relative overflow-hidden'>
			<Wrapper>
				<div className='pt-[200px] md:pb-[100px] lg:pb-0 lg:pt-[150px] font-Inter flex flex-col lg:flex-row items-center relative mx-[20px] xl:mx-0'>
					<div className='flex flex-col z-10 items-center lg:items-start text-center lg:text-left pb-[200px]'>
						<h2
							className='text-3xl lg:text-[80px] leading-tight lg:leading-[77px] font-bold w-full lg:w-[600px] text-white'
							data-aos='fade-up'
						>
							Добро пожаловать в tompaqai!
						</h2>
						<p
							className='text-[16px] lg:text-[24px] text-white leading-snug lg:leading-[32px] w-full lg:w-[520px] mt-4 lg:mt-[40px]'
							data-aos='fade-up'
							data-aos-delay='300'
						>
							Мы помогаем бездомным животным найти дом и заботливых владельцев.
							Наша миссия - спасти и обеспечить заботу для каждого животного в
							Астане.
						</p>
						<button
							className='bg-[#774C49] w-full lg:w-[360px] flex items-center justify-center lg:justify-start rounded-[40px] gap-4 lg:gap-[59px] py-3 lg:py-[20px] px-6 lg:px-[38px] mt-6 lg:mt-[70px]'
							data-aos='fade-up'
							data-aos-delay='600'
						>
							<p className='text-lg lg:text-[24px] text-white'>Найти питомца</p>
							<img
								src={Images.main_arrow}
								alt='main arrow'
								className='w-6 lg:w-[40px]'
							/>
						</button>
					</div>
					<img
						src={Images.main_text}
						alt='text'
						className='absolute left-[520px] top-[300px] z-[30] w-[280px] hidden lg:flex'
						data-aos='fade-right'
						data-aos-delay='900'
					/>
					<div className='relative mt-6 lg:mt-0 lg:ml-12 w-full'>
						<img
							src={Images.main_dog}
							alt='dog'
							className='absolute top-[-400px] right-[-140px] lg:w-[900px] w-full max-w-[900px] z-[10] hidden lg:flex'
							data-aos='fade-left'
							data-aos-delay='1200'
						/>
						<img
							src={Images.main_cat}
							alt='cat'
							className='absolute bottom-[-92px] right-[200px] md:right-[430px] md:bottom-[-140px] lg:bottom-[-400px] z-[20] lg:right-[-60px] lg:w-[600px] md:max-w-[500px] hidden md:flex'
							data-aos='fade-up'
							data-aos-delay='1500'
						/>
						<img
							src={Images.dog_paw_1}
							alt=''
							className='absolute top-[-400px] right-[-240px] lg:right-[-100px] z-[1]'
							data-aos='fade-in'
							data-aos-delay='1800'
						/>
						<img
							src={Images.dog_paw_2}
							alt=''
							className='absolute top-[-450px] left-[-200px] lg:top-[-60px] lg:left-[-450px]'
							data-aos='fade-in'
							data-aos-delay='2100'
						/>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Main
