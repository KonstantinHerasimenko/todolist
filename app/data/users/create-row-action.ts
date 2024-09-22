import { sql } from '@vercel/postgres'

type ValidFormData = {
	name: string
	email: string
	password: string
}

export const createRow = async (data: ValidFormData) => {
	try {
		await sql`INSERT INTO "users" (name, email, password) VALUES (${data.name}, ${data.email}, ${data.password});`
		console.log('Successfully added row in messages table')
		return
	} catch (error) {
		throw new Error(`Yikes! We ran into an error: ${error}`)
	}
}
