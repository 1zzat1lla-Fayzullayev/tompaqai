import Images from '../Images'
import Wrapper from '../layout/Wrapper'

function Form() {
	return (
		<div className='bg-[#FF6842] font-Inter h-full w-full mt-[120px] relative'>
			<Wrapper>
				<div className='flex flex-col xl:flex-row items-center pt-[93px] pb-[94px] mx-[20px] xl:mx-0'>
					<div className='bg-[#FFA68E] xl:rounded-tl-[24px] xl:rounded-bl-[24px] xl:rounded-none rounded-[24px] xl:w-[572px] flex flex-col gap-[47px] p-[20px] lg:p-[40px] w-full '>
						<h1 className='text-[#56423D] text-[24px] lg:text-[48px] tracking-[-0.96px] leading-[32px] lg:leading-[64px] font-semibold'>
							Нужна помощь или дополнительная информация? Свяжитесь с нами по
							адресу ниже.
						</h1>
						<div className='flex items-center gap-[12px] lg:gap-[24px] cursor-pointer'>
							<p className='text-[#56423D] text-[16px] lg:text-[32px] font-semibold'>
								tompaqai@gmail.com
							</p>
							<img src={Images.form_arrow} alt='form arrow' />
						</div>
					</div>
					<div className='bg-[#fff] rounded-[24px] xl:w-[556px] mt-[20px] lg:mt-[20px] xl:mt-0 xl:ml-[-20px] flex justify-center items-center w-full '>
						<form className='flex flex-col p-[20px] lg:p-[40px] gap-[40px] lg:gap-[136px]'>
							<div>
								<input
									type='text'
									placeholder='Ваше имя'
									className='border-b border-[#FF8263] w-full mb-[20px] text-[#56423D] text-[16px] lg:text-[24px] p-2 outline-none'
								/>
								<input
									type='number'
									placeholder='Ваш номер'
									className='border-b border-[#FF8263] w-full mb-[20px] text-[#56423D] text-[16px] lg:text-[24px] p-2 outline-none'
								/>
								<input
									type='text'
									placeholder='Ваша цель'
									className='border-b border-[#FF8263] w-full mb-[20px] text-[#56423D] text-[16px] lg:text-[24px] p-2 outline-none'
								/>
							</div>
							<button className='flex items-center justify-between border rounded-[20px] border-[#FF8263] gap-[12px] pl-[25px] px-1 mt-[20px] w-full sm:w-[180px] h-[40px] py-[4px]'>
								<p className='font-semibold text-[#FF8263] text-[16px] lg:text-[20px]'>
									Отправить
								</p>
								<img src={Images.form_arrow2} alt='404' className='w-[32px]' />
							</button>
						</form>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Form
