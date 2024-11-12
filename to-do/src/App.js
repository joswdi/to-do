import "./App.css";
import { TextField, Button, Paper } from "@mui/material";
import ToDoItem from "./components/to-do-item/ToDoItem";
import { useState } from "react";

function App() {
  const [todoList, setToDo] = useState([
    {
      name: "First task",
      id: 1,
      checked: true,
    },
    {
      name: "Second task",
      id: 2,
      checked: true,
    },
    {
      name: "Third task",
      id: 3,
      checked: false,
    }
  ])
  console.log(todoList)
  const addNewTask = () => {
    if (document.querySelector("#filled-basic").value) {
    const newToDo = [...todoList]
    const newName = document.querySelector("#filled-basic").value
    newToDo.push({id: todoList.length + 1, name: newName })
    setToDo(newToDo)
    document.querySelector("#filled-basic").value = ""
    }
  }

  return (
    <div className="App">
      <h1>to do</h1>
      <Paper
        sx={{
          p: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "20px",
          width: "500px",
        }}
        elevation={7}
      >
        <TextField
          sx={{ mr: "10px", width: "400px" }}
          id="filled-basic"
          label="Do name"
          variant="filled"
        />
        <Button onClick={addNewTask} variant="contained">Save</Button>
      </Paper>
      <Paper elevation={7} sx={{padding: "10px", height: "400px", overflowY: "scroll"}}>
      {todoList.map((todo) => {
        return <ToDoItem setToDo={setToDo} todo={todo} />
      })}
      </Paper>
    </div>
  );
}

export default App;
