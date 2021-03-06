import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const TextInput = (props) => {
  const classes = useStyles();
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.value);
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="Limit" inputProps={{ 'aria-label': 'description' }} onChange={handleChange} />
    </form>
  );
};

export default TextInput;
