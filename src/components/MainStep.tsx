import Images from '../Images'
import Wrapper from '../layout/Wrapper'

function MainStep() {
	return (
		<>
			<Wrapper>
				<div className='absolute flex flex-col lg:flex-row justify-between items-center lg:text-left bg-[#EFEEEE] border border-white p-[40px] md:top-[510px] rounded-[24px] lg:top-[795px] z-[1] lg:max-w-[1120px] xl:max-w-[1100px] 2xl:max-w-[1264px] w-full mx-auto font-Inter'>
					<div className='flex items-start gap-[30px] mb-6 lg:mb-0'>
						<img
							src={Images.step1_icon}
							alt='Step 1'
							className='mb-4 lg:mb-0'
						/>
						<div className='w-[200px] flex flex-col items-start'>
							<p className='text-lg lg:text-[28px] font-bold'>Шаг 1</p>
							<p className='text-sm lg:text-base mt-[5px]'>
								Поиск и фильтрация
							</p>
						</div>
					</div>
					<div className='flex items-start gap-[30px] mb-6 lg:mb-0'>
						<img
							src={Images.step2_icon}
							alt='Step 2'
							className='mb-4 lg:mb-0'
						/>
						<div className='w-[200px] flex flex-col items-start'>
							<p className='text-lg lg:text-[28px] font-bold'>Шаг 2</p>
							<p className='text-sm lg:text-base mt-[5px]'>
								Просмотр профилей животных и приметы
							</p>
						</div>
					</div>
					<div className='flex items-start gap-[30px]'>
						<img
							src={Images.step3_icon}
							alt='Step 3'
							className='mb-4 lg:mb-0'
						/>
						<div className='w-[200px] flex flex-col items-start'>
							<p className='text-lg lg:text-[28px] font-bold'>Шаг 3</p>
							<p className='text-sm lg:text-base mt-[5px]'>
								Запрос на встречу и уход за животными
							</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default MainStep
