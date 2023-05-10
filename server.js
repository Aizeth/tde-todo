const express = require("express")
const server = express()
server.use(express.json())

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

let tasks = [
    {
        id: 1,
        name: "Comprar leite",
        description: "Ir no mercado da esquina e comprar leite",
        isDone: false
    }
]

server.get("/tasks", (req, res) => {
    res.json({
        tasks
    })
})

server.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        description: req.body.description,
        isDone: req.body.isDone
    }
    tasks.push(newTask)
    res.json({
        task: newTask
    })
})

server.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find((task) => {
        return task.id === id
    })

    if(!product) {
        return res
        .status(404)
        .json({message: "Product not found"})
    }

    task.name = req.body.name
    task.description = req.body.price
    task.isDone = req.body.isDone

    res.json({
        task
    })
})

server.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    tasks = tasks.filter((task) => {
        return task.id !== id;
    })
    res.status(204).send();
})