'use client'

import { cn } from '@/utils/css'
import { useCallback } from 'react'
import { useFormState } from 'react-dom'
import { ZodIssue } from 'zod'

interface formProps {
	action: (_prevState: any, params: FormData) => Promise<{ errors: ZodIssue[] }>
	config: {
		message: {
			min: number
			max: number
		}
	}
}

export default function Form({ action, config }: formProps) {
	const [state, formAction] = useFormState(action, { errors: [] })

	console.log(state)

	const findErrors = useCallback(
		(fieldName: string) => {
			return state.errors
				.filter(item => {
					return item.path.includes(fieldName)
				})
				.map(item => item.message)
		},
		[state.errors]
	)

	const nameErrors = findErrors('name')
	const emailErrors = findErrors('email')
	const messageErrors = findErrors('message')

	return (
		<form
			className={cn("flex flex-col items-center gap-7", "w-full")}
			action={formAction}>
			<label className='w-1/3'>
        <h2 className='text-3xl mb-4'>Your name</h2>
				<input
					name="name"
					className="bg-grim-purple rounded-md py-5 px-7 w-full"
				/>
			</label>
			<label className='w-1/3'>
        <h2 className='text-3xl mb-4'>Your email</h2>
				<input
					name="email"
					className="bg-grim-purple rounded-md py-5 px-7 w-full"
				/>
			</label>
			<label className='w-1/3'>
        <h2 className='text-3xl mb-4'>Create password</h2>
				<input
					name="password"
					className="bg-grim-purple rounded-md py-5 px-7 w-full"
				/>
			</label>

			<button className='w-1/3 py-2 bg-grim-purple rounded-md'>submit</button>
		</form>
	)
}
