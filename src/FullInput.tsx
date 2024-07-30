import React, {ChangeEvent, KeyboardEvent} from 'react';
import {TaskType} from "./App";

type PropsType = {
    addTask: (title: string) => void
    setTitle: (t: string) => void
    currentTitle: string
}

export const FullInput = (props: PropsType) => {

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask("titl");
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value);
    }

    return (
        <input onKeyDown={onKeyPressHandler} onChange={onChangeInputHandler} value={props.currentTitle} />
    );
};

