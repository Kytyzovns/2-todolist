import {TaskType} from "./App";
import {Button} from "./Button";
import {Input} from "./Input";
import {FullInput} from "./FullInput";
import {useState} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    isDoneCheck: (id: string, checked: boolean) => void
    addTask: (title: string) => void
    deleteTask: (id: string) => void
    activeTasksChecked: () => void
    completedTasksChecked: () => void
    allTasksChecked: () => void
}

export const Todolist = (props: PropsType) => {

    let [currentTitle, setCurrentTitle] = useState<string>('');

    const addTaskHandler = () => {
        props.addTask(currentTitle);
        setCurrentTitle("");
    }

    const setTitleHandler = (title: string) => {
        setCurrentTitle(title);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <FullInput addTask={addTaskHandler} setTitle={setTitleHandler} currentTitle={currentTitle}/>
                <Button title={'+'} callBack={addTaskHandler}/>
            </div>
            {
                props.tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {props.tasks.map((task) => {
                            return <li key={task.id}>
                                <Input type="checkbox" checked={task.isDone} taskId={task.id}
                                       checkedChange={props.isDoneCheck} addTask={props.addTask}/>
                                <span>{task.title}</span>
                                <button onClick={() => props.deleteTask(task.id)}>x</button>
                            </li>
                        })}
                    </ul>
            }
            <div>
                <Button title={'All'} callBack={props.allTasksChecked}/>
                <Button title={'Active'} callBack={props.activeTasksChecked}/>
                <Button title={'Completed'} callBack={props.completedTasksChecked}/>
            </div>
        </div>
    )
}
