import React, {ChangeEvent, KeyboardEvent} from 'react';
import {TaskType} from "./App";
import s from "./Todolist.module.css";

type PropsType = {
    addTask: (title: string) => void
    setTitle: (t: string) => void
    currentTitle: string
    error: null | string
    errorChange: (err: null | string) => void
}

export const FullInput = (props: PropsType) => {

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask("titl");
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value);
        props.errorChange(null);
    }

    return (
        <input className={props.error? s.errorInput : ""} onKeyDown={onKeyPressHandler} onChange={onChangeInputHandler} value={props.currentTitle} />
    );
};

