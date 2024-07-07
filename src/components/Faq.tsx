import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Images from '../Images'
import Wrapper from '../layout/Wrapper'
import faqData from '../data/faqData'

interface FaqItem {
	question: string
	answer: string
}

const Faq: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean[]>(
		Array(faqData.length).fill(false)
	)

	const toggleOpen = (index: number) => {
		const updatedOpenState = isOpen.map((item, i) =>
			i === index ? !item : item
		)
		setIsOpen(updatedOpenState)
	}

	return (
		<>
			<Wrapper>
				<div className='font-Inter mt-[120px] mx-[20px] xl:mx-0'>
					<h2 className='text-[45px] lg:text-[72px] text-[#191919] font-black'>FAQ</h2>
					<div className='flex flex-col gap-[20px] mt-[48px]'>
						{faqData.map((item: FaqItem, index: number) => (
							<div key={index}>
								<div
									className='flex items-center justify-between bg-[#F8F8F8] p-[32px] rounded-t-[20px] cursor-pointer'
									onClick={() => toggleOpen(index)}
								>
									<h3 className='text-[18px] md:text-[23px] lg:text-[33px] font-black tracking-[-1.52px]'>
										{`${item.question}`}
									</h3>
									<img
										src={Images.icon_faqplus}
										alt='plus icon'
										className='cursor-pointer w-[48px] lg:w-[64px]'
										style={{
											transform: isOpen[index]
												? 'rotate(45deg)'
												: 'rotate(0deg)',
											transition: 'transform 0.2s',
										}}
									/>
								</div>
								<AnimatePresence>
									{isOpen[index] && (
										<motion.div
											key={`faq${index}`}
											animate={{ height: 'auto', opacity: 1 }}
											transition={{ duration: 0.5 }}
											className='border-[2px] border-[#F8F8F8] p-[32px] rounded-b-[20px]'
										>
											<p className='text-[16px] md:text-[17px] lg:text-[18px]'>{item.answer}</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default Faq
