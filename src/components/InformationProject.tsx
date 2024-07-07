import { motion } from 'framer-motion'
import Wrapper from '../layout/Wrapper'

function InformationProject() {
	return (
		<Wrapper>
			<div className='mt-[450px] md:mt-[200px] xl:mt-[150px] font-Inter mx-[20px] xl:mx-0'>
				<div className='text-center w-full lg:text-start'>
					<h2 className='text-[24px] sm:text-[40px] md:text-[52px] xl:text-[72px] text-[#1E1E1E] font-black'>
						Информация о проекте
					</h2>
					<p className='text-[#1E1E1E] opacity-[0.5] text-[16px] lg:text-[24px] leading-[150%] mx-auto lg:mx-0 w-full sm:w-[50%] lg:w-[755px]'>
						tompaqai – это инициатива, основанная на вере в благородную миссию
						помощи животным.
					</p>
				</div>
				<div className='flex flex-col lg:flex-row mt-[70px] lg:mt-[105px] gap-[52px] items-start justify-center mx-auto'>
					<motion.div
						className='w-full flex justify-center lg:justify-start'
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<div className='bg-[#EEE] rounded-[10px] w-full max-w-[610px]'>
							<h3 className='text-[24px] md:text-[30px] xl:text-[40px] font-black px-[24px] pt-[24px]'>
								Нынешняя проблема
							</h3>
							<p className='text-[#1E1E1E] opacity-[0.5] text-[16px] md:text-[20px] xl:text-[24px] leading-normal px-[24px] pt-[12px] pb-[24px]'>
								В настоящее время приюты переполнены, и им не хватает помощи.
								Многие животные нуждаются в новых домах и заботе.
							</p>
						</div>
					</motion.div>
					<motion.div
						className='w-full flex justify-center lg:justify-start'
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<div className='bg-[#EEE] rounded-[10px] w-full max-w-[610px]'>
							<h3 className='text-[24px] md:text-[30px] xl:text-[40px] font-black px-[24px] pt-[24px] tracking-[-1.6px] leading-[45px]'>
								Как мы решаем эту проблему?
							</h3>
							<p className='text-[#1E1E1E] opacity-[0.5] text-[16px] md:text-[20px] xl:text-[24px] leading-normal px-[24px] pt-[12px] pb-[24px] tracking-[-0.96px] w-full'>
								Наш проект собирает информацию о животных из разных приютов и
								объединяет её в одном месте. Мы создаем удобную систему поиска и
								усыновления животных, чтобы больше людей могли легко находить и
								брать питомцев из приютов.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</Wrapper>
	)
}

export default InformationProject
