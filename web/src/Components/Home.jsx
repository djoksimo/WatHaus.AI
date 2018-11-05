import React, { Component } from 'react';
import Form from "./Form";
import Header from "./Header";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    flex: 1,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'center',
    alignItems: 'center',
    display: 'block',
    marginTop: '7em'
  },
  title: {
    display: 'block',
    fontSize: '3em',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  subHeading: {
    marginTop: '2em',
    fontSize: '1.8em'
  },
  fact: {
    fontSize: '1em',
    marginTop: '2em',
    marginBottom: '2em',
  }
});

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      btnClicked: false
    };
  }
  handleChange() {
    this.setState({btnClicked: !this.state.btnClicked});
  }
  render () {
    const { classes } = this.props;
    return (
      <div >
        <Header handleChange={this.handleChange}/>
        <div>
          {!this.state.btnClicked &&
            <Paper className={classes.root} elevation={3}>
              <Typography className={classes.title} variant="h3" component="h3">
                Welcome to WatHaus.AI
              </Typography>
              <Typography className={classes.subHeading} component="p">
                Find the right housing for you with the power of <strong>MACHINE LEARNING</strong>
              </Typography>
              <Typography className={classes.fact} component="p">
                Haus in German means topographic and occupational name for someone who lived and worked in a great house.
              </Typography>
              <Button
                onClick={this.handleChange}
                variant="extendedFab"
                aria-label="Find"
                color="primary"
                className={classes.button}>
                <HomeIcon className={classes.extendedIcon} />
                Find the right housing
              </Button>
            </Paper>
          }
        </div>
        {this.state.btnClicked && <Form/> }
      </div>
    );
  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
