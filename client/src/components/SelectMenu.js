import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectMenu = (props) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    setLimit(props);
  }, [props]);

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Limit</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={limit}
          onChange={handleChange}
          label="Limit"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100}>Hundred</MenuItem>
          <MenuItem value={500}>Five Hundred</MenuItem>
          <MenuItem value={1000}>One Thousand</MenuItem>
        </Select>
        <FormHelperText>Number of nobel lists</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectMenu;
