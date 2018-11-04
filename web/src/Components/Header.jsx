import React, { Component }  from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        flexGrow: 1,
    },
};

class Header extends React.Component {

  constructor (props) {
      super(props);
  }
  render() {
      const { classes } = this.props;
      return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            onClick={this.props.handleChange}
                            variant="h6"
                            color="inherit">
                            WatRes
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
