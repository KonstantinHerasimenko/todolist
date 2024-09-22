import usersAction, { getConfig } from "@/app/data/users/server-action"
import Form from "@/app/data/users/form"

export default async function SignUp(){
	const config = await getConfig()

  return (
		<div className="p-20">
			<h1 className="capitalize text-6xl text-center mb-16">sign up</h1>
			<Form action={usersAction} config={config}/>
		</div>
	)
}