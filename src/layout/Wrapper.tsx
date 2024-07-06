import { ReactNode } from 'react'

interface WrapperProps {
	children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
	return <div className='max-w-[1120px] mx-auto'>{children}</div>
}

export default Wrapper
