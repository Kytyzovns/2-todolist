import './App.css';
import {Todolist} from "./Todolist";
import {useRef, useState} from "react";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    const tasks1: Array<TaskType> = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ]

    let [currentTask, setCurrentTask] = useState<Array<TaskType>>(tasks1);
    let savedTasks = useRef(currentTask);

    const taskIsDone = (id: string, checked: boolean) => {
        let checkedTasks = currentTask.map(t => {
            if (t.id === id) {
                t.isDone = checked;
            }
            return t
        });
        console.log(checkedTasks);
        setCurrentTask(checkedTasks);
        savedTasks.current = checkedTasks;
    }

    const addTask = (title: string) => {
        let newTasks = [{id: v1(), title: title, isDone: false}, ...currentTask];
        setCurrentTask(newTasks);
        savedTasks.current = newTasks;
    }

    const deleteTask = (id: string) => {
        let filteredTasks: Array<TaskType> = currentTask.filter(t => t.id !== id);
        setCurrentTask(filteredTasks);
        savedTasks.current = filteredTasks;
    }


    const activeTasksChecked = () => {
        let activeTasks = savedTasks.current.filter(t => !t.isDone);
        setCurrentTask(activeTasks);
    }

    const completedTasksChecked = () => {
        let activeTasks = savedTasks.current.filter(t => t.isDone);
        setCurrentTask(activeTasks);
    }

    const allTasksChecked = () => {
        setCurrentTask(savedTasks.current);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={currentTask}
                      isDoneCheck={taskIsDone}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      activeTasksChecked={activeTasksChecked}
                      completedTasksChecked={completedTasksChecked}
                      allTasksChecked={allTasksChecked}
            />
        </div>
    );
}

export default App;
