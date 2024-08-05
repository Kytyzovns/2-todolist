import {ButtonHTMLAttributes} from "react";

type ButtonPropsType = {
	title: string
	callBack?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonPropsType) => {
	return (
		<button className={props.className} onClick={props.callBack}>{props.title}</button>
	)
}
