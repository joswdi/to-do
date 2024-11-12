import { TextField, Paper, Checkbox, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoItem = ({ todo, setToDo }) => {
  const { name, id, checked } = todo;

  const deleteTask = (e) => {
    setToDo((todoList) => {
      const newState = todoList.filter((el) => el.id !== el.target.id)
      return newState
    });
  };

  return (
    <Paper
      sx={{
        p: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        marginBottom: "20px",
      }}
      elevation={7}
    >
      <Checkbox id={id} checked={checked} />
      <TextField
        disabled
        value={name}
        id="outlined-disabled"
        label="To-do"
        variant="outlined"
      />
      <Tooltip title="Delete task">
        <IconButton
          onClick={deleteTask}
          id={id}
          aria-label="delete"
          size="large"
        >
          <DeleteIcon id={id} />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};
export default ToDoItem;
