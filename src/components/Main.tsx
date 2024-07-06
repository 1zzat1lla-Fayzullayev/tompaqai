import Images from '../Images'
import Wrapper from '../layout/Wrapper'

function Main() {
	return (
		<>
			<div className='bg-[#FF6842] w-full relative overflow-hidden'>
				<Wrapper>
					<div className='pt-[200px] lg:pt-[150px] font-Inter flex flex-col lg:flex-row items-center relative mx-[20px] xl:mx-0'>
						<div className='flex flex-col z-10 items-center lg:items-start text-center lg:text-left pb-[200px]'>
							<h2 className='text-3xl lg:text-[80px] leading-tight lg:leading-[77px] font-bold w-full lg:w-[600px] text-white'>
								Добро пожаловать в tompaqai!
							</h2>
							<p className='text-[16px] lg:text-[24px] text-white leading-snug lg:leading-[32px] w-full lg:w-[520px] mt-4 lg:mt-[40px]'>
								Мы помогаем бездомным животным найти дом и заботливых
								владельцев. Наша миссия - спасти и обеспечить заботу для каждого
								животного в Астане.
							</p>
							<button className='bg-[#774C49] w-full lg:w-[360px] flex items-center justify-center lg:justify-start rounded-[40px] gap-4 lg:gap-[59px] py-3 lg:py-[20px] px-6 lg:px-[38px] mt-6 lg:mt-[70px]'>
								<p className='text-lg lg:text-[24px] text-white'>
									Найти питомца
								</p>
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
						/>
						<div className='relative mt-6 lg:mt-0 lg:ml-12 w-full'>
							<img
								src={Images.main_dog}
								alt='dog'
								className='absolute top-[-400px] right-[-140px] lg:w-[900px] w-full max-w-[900px] z-[10] hidden lg:flex'
							/>
							<img
								src={Images.main_cat}
								alt='cat'
								className='absolute bottom-[-92px] right-[-10px] md:bottom-[-66px] lg:bottom-[-424px] z-[20] lg:right-[-60px] lg:w-[600px] md:max-w-[600px] hidden md:flex'
							/>
							<img
								src={Images.dog_paw_1}
								alt=''
								className='absolute top-[-400px] right-[-240px] lg:right-[-100px] z-[1]'
							/>
							<img
								src={Images.dog_paw_2}
								alt=''
								className='absolute top-[-450px] left-[-200px] lg:top-[-60px] lg:left-[-450px]'
							/>
						</div>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Main
