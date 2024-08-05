import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./Todolist.module.css";

type InputProps = {
    taskId: string;
    type: string;
    checked: boolean;
    checkedChange: (id: string, checked: boolean) => void;
    addTask: (title: string) => void;
}

export const Input = (props: InputProps) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.checkedChange(props.taskId, e.currentTarget.checked);
    }

    return (
        <input type={props.type} checked={props.checked} onChange={onChangeInputHandler} />
    );
};

