import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    width: "100%"
  },
  resize: {
    fontSize: "20px"
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    fontSize: "16px",
    width: "220px",
    marginLeft: "10px"
  }
});

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-name"
          label="Type a todo item"
          value={this.state.value}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          className={classes.textField}
          InputProps={{
            classes: { input: classes.resize }
          }}
          InputLabelProps={{
            classes: { root: classes.resize }
          }}
        />
        <div className={classes.buttonDiv}>
          <Button
            variant="contained"
            onClick={this.props.handleClear}
            color="secondary"
            className={classes.button}
          >
            Clear Completed
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(TodoForm);