import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Form extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
          />
        </form>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
