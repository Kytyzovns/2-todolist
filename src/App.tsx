import './App.css';
import {Todolist} from "./Todolist";
import {useRef, useState} from "react";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = "All" | false | true

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
    let [currentFilter, setCurrentFilter] = useState<FilterType>("All");

    const taskIsDone = (id: string, checked: boolean) => {
        let checkedTask = currentTask.find(t =>
            t.id === id);
        if (checkedTask) {
            checkedTask.isDone = checked
        }
        setCurrentTask([...currentTask]);
    }

    const addTask = (title: string) => {
        let newTasks = [{id: v1(), title: title, isDone: false}, ...currentTask];
        setCurrentTask(newTasks);
    }

    const deleteTask = (id: string) => {
        let filteredTasks: Array<TaskType> = currentTask.filter(t => t.id !== id);
        setCurrentTask(filteredTasks);
    }


    const changeFilter = (filt: FilterType) => {
        setCurrentFilter(filt);
    }

    let resultTasks: Array<TaskType> = currentTask.filter(t =>
        currentFilter === "All" ? t : t.isDone === currentFilter
    )

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={resultTasks}
                      isDoneCheck={taskIsDone}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
