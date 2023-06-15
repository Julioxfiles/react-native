import { Router } from "express"
import { getAllTasks, getTasks, countTasks, getTask, saveTask, updateTask, deleteTask } from "../controllers/tasks"
const Route = Router()

/*
Route.post("/tasks", (req, res) => {
    console.log(req.body)
    res.send("task added")
})
*/

Route.get('/tasks', getAllTasks)
Route.get('/tasks/count', countTasks)
Route.get('/tasks/:id', getTask)  
Route.post('/tasks', saveTask)
Route.put('/tasks/:id', updateTask)
Route.delete('/tasks/:id', deleteTask)

/*function deleteTask(req, res) {
    res.send("task deleted")
}*/

export default Route;

