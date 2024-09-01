'use client'

import Image from 'next/image'
import { cn } from '@/utils/css'
import { ChevronDown, CircleUserRound} from 'lucide-react'
import { useState } from 'react'
import plus from "@/assets/plus.svg"
import pencil from "@/assets/pencil.svg"
import trash from "@/assets/trash-2.svg"
import logo from "@/assets/logo.svg"
import BaseIcon from '../ui/BaseIcon'

export default function Toolbar() {
	const [isToolsHidden, setIsToolsHidden] = useState(true)

	const toggleToolsMenu = () => {
		setIsToolsHidden(prev => !prev)
	}

	return (
		<div
			role="group"
			className="fixed w-full">
			<nav className={cn('bg-cotinga-purple w-full p-10', 'flex justify-between', 'relative z-10')}>
				<BaseIcon
					as={logo}
					className="h-16"
				/>
				<div
					role="group"
					className="flex gap-10">
					<button
						className={cn('bg-grim-purple px-4 py-3 rounded-md', 'flex items-center gap-4')}
						onClick={toggleToolsMenu}>
						<h3 className="text-body-1 capitalize">instruments</h3>
						<ChevronDown className={cn(!isToolsHidden && 'rotate-180', 'duration-300 ease-in-out')} />
					</button>
					<button className={cn('bg-grim-purple px-4 py-3 rounded-md', 'flex items-center gap-5')}>
						<CircleUserRound />
						<h3 className="text-body-1 capitalize">profile</h3>
					</button>
				</div>
			</nav>
			<section className={cn(!isToolsHidden ? 'top-0' : 'top-full', 'absolute', 'w-full px-10 py-5 bg-grim-purple', 'duration-300 ease-in-out', 'flex justify-between')}>
				<div
					role="group"
					className="flex gap-10">
					<button className="text-center flex flex-col justify-between items-center">
						<BaseIcon
							as={plus}
							className="h-7"
						/>
						<h4 className="text-body-2">add</h4>
					</button>
					<button className="text-center flex flex-col justify-between items-center">
						<BaseIcon
							as={pencil}
							className="h-7"
						/>
						<h4 className="text-body-2">edit</h4>
					</button>
				</div>
				<button className="text-center flex flex-col justify-between items-center">
					<BaseIcon
						as={trash}
						className="h-7"
					/>
					<h4 className="text-body-2">delete</h4>
				</button>
			</section>
		</div>
	)
}
