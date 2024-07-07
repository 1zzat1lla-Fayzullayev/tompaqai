import Images from '../Images'
import Wrapper from '../layout/Wrapper'

function Footer() {
	return (
		<>
			<div className='bg-[#000000] font-Inter border-b-[5px] border-b-[#FF6842]'>
				<Wrapper>
					<div className='flex justify-center items-center flex-col pt-[80px] border-b-[2px] border-b-[#D9D9D9] mx-[20px]'>
						<h2 className='text-white text-[20px] md:text-[30px] xl:text-[48px] leading-[48px] xl:w-[912px] text-center'>
							Наша команда стремится спасти каждого пушистого друга и обеспечить
							им безопасность, заботу и любовь, которые они заслуживают.
							Присоединяйтесь к нам, если у вас такие же цели!
						</h2>
						<div className='mt-[50px] xl:mt-[200px] pb-[77px]'>
							<ul className='flex items-center gap-[24px] flex-col sm:flex-row'>
								<li>
									<a
										href='#'
										className='text-white transition-all ease-in-out hover:text-[#FF4F24]'
									>
										Главная
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-white transition-all ease-in-out hover:text-[#FF4F24]'
									>
										Информация
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-white transition-all ease-in-out hover:text-[#FF4F24]'
									>
										Приюты
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-white transition-all ease-in-out hover:text-[#FF4F24]'
									>
										Волонтерство
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='flex items-center justify-center gap-[16px] mt-[77px] pb-[10px]'>
						<img src={Images.telegram} alt='telegram' />
						<img src={Images.instagram} alt='instagram' />
						<img src={Images.linkedin} alt='linkedin' />
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Footer
