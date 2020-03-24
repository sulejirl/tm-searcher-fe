import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:'100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [year, setYear] = React.useState(2019);

  const handleChange = event => {
    setYear(event.target.value);
    props.onChange(event.target.value)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={year}
          onChange={handleChange}
          defaultValue={2019}
        >
          <MenuItem selected value={2019}>2019-2020</MenuItem>
          <MenuItem value={2018}>2018-2019</MenuItem>
          <MenuItem value={2017}>2017-2018</MenuItem>
          <MenuItem value={2016}>2016-2017</MenuItem>
          <MenuItem value={2015}>2015-2016</MenuItem>
          <MenuItem value={2014}>2014-2015</MenuItem>
          <MenuItem value={2013}>2013-2014</MenuItem>
          <MenuItem value={2012}>2012-2013</MenuItem>
          <MenuItem value={2011}>2011-2012</MenuItem>
          <MenuItem value={2010}>2010-2011</MenuItem>
          <MenuItem value={2009}>2009-2010</MenuItem>
          <MenuItem value={2008}>2008-2009</MenuItem>
          <MenuItem value={2007}>2007-2008</MenuItem>
          <MenuItem value={2006}>2006-2007</MenuItem>
          <MenuItem value={2005}>2005-2006</MenuItem>
          <MenuItem value={2004}>2004-2005</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
