import {v1} from "uuid";
import {TaskType} from "./App";

const tasks1: Array<TaskType> = [
    {id: v1(), title: 'HTML&CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'ReactJS', isDone: false},
    {id: v1(), title: 'Redux', isDone: false},
    {id: v1(), title: 'Typescript', isDone: false},
    {id: v1(), title: 'RTK query', isDone: false},
]

test("testing", () => {

})