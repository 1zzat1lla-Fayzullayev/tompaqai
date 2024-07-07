import volunteerRoles from '../data/volunteerRoles'
import Images from '../Images'
import Wrapper from '../layout/Wrapper'

function Charity() {
	return (
		<>
			<div className='mt-[104px] bg-[#FF6842] pb-[120px]'>
				<Wrapper>
					<div className='font-Inter pt-[134px] mx-[20px] xl:mx-0'>
						<div>
							<h2 className='text-[22px] md:text-[52px] xl:text-[72px] font-black text-white text-center md:text-start md:leading-[60px] lg:w-[697px] lg:leading-[65px]'>
								Мы сотрудничаем с несколькими приютами
							</h2>
							<p className='text-white text-[16px] md:text-[24px] leading-[23px] md:leading-[32px] mt-[20px] lg:mt-[40px] lg:w-[628px] text-center md:text-start'>
								Узнайте больше о наших партнерах и их работе, и выберите своего
								будущего друга.
							</p>
						</div>
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-[24px] lg:mt-[40px] '>
							<div className='flex items-center justify-between bg-inherit py-[28px] px-[40px] rounded-[16px]'>
								<h4 className='text-[#56423D] text-[18px] leading-[24px] font-bold hidden'>
									Happy Smile Foundation
								</h4>
								<img
									src={Images.majesticons}
									alt='majesticons'
									className='w-[40px] md:w-[50px] lg:w-[60px] hidden'
								/>
							</div>
							<div className='flex items-center justify-between bg-[#FFA68E] py-[28px] px-[40px] rounded-[16px]'>
								<h4 className='text-[#56423D] text-[18px] leading-[24px] font-bold'>
									Happy Smile Foundation
								</h4>
								<img
									src={Images.majesticons}
									alt='majesticons'
									className='w-[40px] md:w-[50px] lg:w-[60px]'
								/>
							</div>
							<div className='flex items-center justify-between bg-[#FFA68E] py-[28px] px-[40px] rounded-[16px]'>
								<h4 className='text-[#56423D] text-[18px] leading-[24px] font-bold'>
									Happy Smile Foundation
								</h4>
								<img
									src={Images.majesticons}
									alt='majesticons'
									className='w-[40px] md:w-[50px] lg:w-[60px]'
								/>
							</div>
							<div className='flex items-center justify-between bg-[#FFA68E] py-[28px] px-[40px] rounded-[16px]'>
								<h4 className='text-[leading-[24px] font-bold text-[#56423D] text-[18px]'>
									Happy Smile Foundation
								</h4>
								<img
									src={Images.majesticons}
									alt='majesticons'
									className='w-[40px] md:w-[50px] lg:w-[60px]'
								/>
							</div>
							<div className='flex items-center justify-between bg-[#FFA68E] py-[28px] px-[40px] rounded-[16px]'>
								<h4 className='text-[leading-[24px] font-bold text-[#56423D] text-[18px]'>
									Happy Smile Foundation
								</h4>
								<img
									src={Images.majesticons}
									alt='majesticons'
									className='w-[40px] md:w-[50px] lg:w-[60px]'
								/>
							</div>
							<div className='flex items-center justify-between bg-transparent border border-white py-[24px] px-[24px] rounded-[16px]'>
								<h4 className='text-[#fff] text-[17px] lg:text-[23px] leading-[32px]'>
									Свяжитесь с нами для сотрудничества
								</h4>
								<img
									src={Images.charityarrow}
									alt='arrowRight'
									className='w-[40px] md:w-[50px] lg:w-[60px]'
								/>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center lg:gap-[70px] xl:gap-[150px] w-full mt-[50px] flex-col lg:flex-row'>
						<img src={Images.cat1} alt='cat' className='w-[295px]' />
						<img src={Images.dog} alt='dog' className='w-[295px]' />
						<img src={Images.cat2} alt='cat' className='w-[295px]' />
					</div>

					<div className='mt-[120px]'>
						<div className='mt-[120px] mx-[20px] lg:mx-0'>
							<h2 className='text-[30px] md:text-[52px] xl:text-[72px] font-black tracking-[-2.88px] text-white text-center'>
								Волонтерство
							</h2>
							<p className='text-[17px] md:text-[24px] leading-[28px] lg:leading-[32px] text-white text-center lg:w-[628px] mx-auto mt-[30px] xl:mt-[45px] w-[90%]'>
								Присоединяйтесь к нашей дружной команде волонтеров и вместе мы
								сможем сделать больше для животных в нужде.
							</p>

							<div className='flex flex-col md:flex-row items-center gap-[13px] mt-[45px]'>
								{volunteerRoles.map((role, index) => (
									<div
										key={index}
										className='relative w-full md:w-[416px] h-[435px] bg-[#FFA68E] rounded-[10px]'
									>
										<h3 className='text-[#56423D] text-[24px] sm:text-[30px] md:text-[30px] xl:text-[40px] font-black tracking-[-1.6px] pl-[24px] pt-[71px] lg:leading-[45px] z-[2] relative lg:w-[330px] leading-[30px]'>
											{role.title}
										</h3>
										<p className='text-[#56423D] relative text-[19px] md:text-[20px] xl:text-[24px] tracking-[-0.96px] pl-[24px] mt-[32px] z-[2]'>
											{role.description}
										</p>
										<img
											src={role.imageUrl}
											alt='paw'
											className='absolute right-0 bottom-2 z-[1]'
										/>
									</div>
								))}
							</div>

							<div className='mx-[20px] xl:mx-0'>
								<button className='flex items-center justify-center bg-[#774C49] gap-[13px] rounded-[40px] py-[10px] md:py-[20px] px-[20px] md:px-[38px] mx-auto mt-[76px] w-full md:w-[344px] h-[80px]'>
									<p className='text-white text-[17px] md:text-[24px] font-medium '>
										Свяжитесь с нами
									</p>
									<img src={Images.main_arrow} alt='arrow' />
								</button>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Charity
