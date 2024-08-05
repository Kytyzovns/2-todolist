import {FilterType, TaskType} from "./App";
import {Button} from "./Button";
import {Input} from "./Input";
import {FullInput} from "./FullInput";
import {useState} from "react";
import s from "./Todolist.module.css";

type PropsType = {
    title: string
    tasks: TaskType[]
    isDoneCheck: (id: string, checked: boolean) => void
    addTask: (title: string) => void
    deleteTask: (id: string) => void
    changeFilter: (filt: FilterType) => void
    filter: FilterType;
}

export const Todolist = (props: PropsType) => {

    let [currentTitle, setCurrentTitle] = useState<string>('');
    let [error, setError] = useState<string | null>(null);
    const addTaskHandler = () => {
        if (!currentTitle.trim()) {
            setError("required field")
            return;
        } else {
            props.addTask(currentTitle.trim());
            setCurrentTitle("");
        }
    }

    const setTitleHandler = (title: string) => {
        setCurrentTitle(title);
    }

    const changeFilterHandler = (filter: FilterType) => {
        props.changeFilter(filter);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <FullInput error={error} addTask={addTaskHandler} setTitle={setTitleHandler} currentTitle={currentTitle}
                           errorChange={setError}/>
                <Button title={'+'} callBack={addTaskHandler}/>
                <div>
                    {error && <span className={s.errorText}>{error}</span>}
                </div>
            </div>
            {
                props.tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {props.tasks.map((task) => {
                            return <li key={task.id} className={task.isDone? s.completed : ""}>
                                <Input type="checkbox" checked={task.isDone} taskId={task.id}
                                       checkedChange={props.isDoneCheck} addTask={props.addTask}/>
                                <span>{task.title}</span>
                                <button onClick={() => props.deleteTask(task.id)}>x</button>
                            </li>
                        })}
                    </ul>
            }
            <div>
                <Button className={props.filter==="All"? s.activeFilter : ""} title={'All'} callBack={() => changeFilterHandler('All')}/>
                <Button className={props.filter===false? s.activeFilter : ""} title={'Active'} callBack={() => changeFilterHandler(false)}/>
                <Button className={props.filter===true? s.activeFilter : ""} title={'Completed'} callBack={() => changeFilterHandler(true)}/>
            </div>
        </div>
    )
}
