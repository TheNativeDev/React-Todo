import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    width: "83%"
  },
  resize: {
    fontSize: "20px"
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginLeft: "10px",
    marginTop: "13px"
  }
});

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.todo.task };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleTaskChange(this.props.todo.id, this.state.value);
  };
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-task"
          label="Edit task"
          value={this.state.value}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          className={classes.textField}
        />
        <Fab
          color="secondary"
          aria-label="close"
          onClick={() => this.props.handleEdit(this.props.todo.id)}
          className={classes.button}
        >
          <CloseIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="done"
          type="submit"
          className={classes.button}
        >
          <DoneIcon />
        </Fab>
      </form>
    );
  }
}

export default withStyles(styles)(EditTodo);