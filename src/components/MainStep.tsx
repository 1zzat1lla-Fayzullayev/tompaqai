import { motion } from 'framer-motion'
import Images from '../Images'
import Wrapper from '../layout/Wrapper'

const stepVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
}

function MainStep() {
	return (
		<>
			<Wrapper>
				<motion.div
					className='absolute flex flex-col lg:flex-row justify-between items-center lg:text-left bg-[#EFEEEE] border border-white p-[40px] md:top-[610px] rounded-[24px] lg:top-[750px] xl:top-[790px] z-[1] lg:max-w-[1120px] xl:max-w-[1100px] 2xl:max-w-[1264px] w-full mx-auto font-Inter mt-[10px] xl:mt-0'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}
					transition={{ staggerChildren: 0.3 }}
				>
					<motion.div
						className='flex items-center lg:items-start gap-[30px] mb-6 lg:mb-0'
						variants={stepVariants}
					>
						<img
							src={Images.step1_icon}
							alt='Step 1'
							className='mb-4 lg:mb-0'
						/>
						<div className='w-[200px] flex flex-col items-start'>
							<p className='text-[24px] xl:text-[28px] font-bold'>Шаг 1</p>
							<p className='text-[17px] xl:text-base mt-[5px]'>
								Поиск и фильтрация
							</p>
						</div>
					</motion.div>
					<motion.div
						className='flex items-center lg:items-start gap-[30px] mb-6 lg:mb-0'
						variants={stepVariants}
					>
						<img
							src={Images.step2_icon}
							alt='Step 2'
							className='mb-4 lg:mb-0'
						/>
						<div className='w-[200px] flex flex-col items-start'>
							<p className='text-[24px] xl:text-[28px] font-bold'>Шаг 2</p>
							<p className='text-[17px] xl:text-base mt-[5px]'>
								Просмотр профилей животных и приметы
							</p>
						</div>
					</motion.div>
					<motion.div
						className='flex items-center lg:items-start gap-[30px]'
						variants={stepVariants}
					>
						<img
							src={Images.step3_icon}
							alt='Step 3'
							className='mb-4 lg:mb-0'
						/>
						<div className='w-[200px] flex flex-col items-start'>
							<p className='text-[24px] xl:text-[28px] font-bold'>Шаг 3</p>
							<p className='text-[17px] xl:text-base mt-[5px]'>
								Запрос на встречу и уход за животными
							</p>
						</div>
					</motion.div>
				</motion.div>
			</Wrapper>
		</>
	)
}

export default MainStep
