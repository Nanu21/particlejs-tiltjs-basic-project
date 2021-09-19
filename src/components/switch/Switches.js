import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import './Switches.css'

// instead of embedding the Theme Switch (Dark/Light) in Navbar Component 
// created a new Swtiches component and used it to make the main code "More Legible"

// 
const ModeSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function Switches({ darkTheme, setDarkTheme }) {

  // initializing the initial state of the toogle to light by setting checked: false
  const [state, setState] = React.useState({
    checked: false,
  });

  // function to handle what happens when the toogle is clicked
  const handleChange = (event) => {
    // moves the toogle left right w.r.t. to its earlier position
    setState({ ...state, [event.target.name]: event.target.checked });

    // sets the darktheme true and false accordingly
    setDarkTheme(!darkTheme);
  };

  return (
    <FormGroup className="switch">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item><WbSunnyIcon/></Grid>
          <Grid item>
            <ModeSwitch checked={state.checked} onChange={handleChange} name="checked" />
          </Grid>
          <Grid item><Brightness3Icon/></Grid>
        </Grid>
    </FormGroup>
  );
}
