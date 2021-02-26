import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    width: "100%"
  },
  resize: {
    fontSize: "20px"
  }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.handleSearch(e.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="outlined-name"
        label="Search for an item"
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
    );
  }
}

export default withStyles(styles)(Search);