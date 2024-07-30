type ButtonPropsType = {
	title: string
	callBack?: () => void
}

export const Button = (props: ButtonPropsType) => {
	return (
		<button onClick={props.callBack}>{props.title}</button>
	)
}
