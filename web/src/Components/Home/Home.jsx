import React, { Component } from 'react';
import Form from "./Form";
import Header from "./Header";
import Result from './Result';
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
    marginTop: '3em',
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
    marginTop: '1em',
    fontSize: '1.8em'
  },
  fact: {
    fontSize: '1em',
    marginTop: '2em',
    marginBottom: '2em',
  },
  bg: {
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  home: {
    // height: '100vh',
    paddingBottom: '5em',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  flexbox: {
    display: 'flex',
    width: '70%',
    margin: '0 -15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3em',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
},
  maps: {
    padding: '0 15px',
  },
  mapHeading: {
    color: '#ffffff',
    fontSize: '1.5em'
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
      <div className={classes.home}>
        <Header handleChange={this.handleChange}/>
        <div>
          {!this.state.btnClicked &&
            <Paper className={classes.root} elevation={3}>
              <Typography className={classes.title} variant="h3" component="h3">
                Welcome to WatHaus.AI
              </Typography>
              <Typography className={classes.subHeading} component="p">
                Find the right housing for <strong>YOU</strong>
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
        {!this.state.btnClicked &&
          <div className={classes.flexbox}>
            <div className={classes.map}>
              <h1 className={classes.mapHeading}>Satisfaction by region</h1>
              {/*Satisfaction heatmap*/}
              <iframe
                width="500"
                height="300"
                scrolling="no"
                frameBorder="no"
                src="https://fusiontables.google.com/embedviz?q=select+col1%2C+col2%2C+col5+from+1ONxyRJUDNlUIP8qZaWIDEX58XEQUcRIirveLp1aF+limit+1000&amp;viz=HEATMAP&amp;h=true&amp;lat=43.47566580681892&amp;lng=-80.52146095904038&amp;t=1&amp;z=14&amp;l=col1&amp;y=3&amp;tmplt=3&amp;hmd=true&amp;hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&amp;hmo=0.6&amp;hmr=40&amp;hmw=5&amp;hml=TWO_COL_LAT_LNG"></iframe>
            </div>
            {/*Price heatmap*/}
            <div className={classes.map}>
              <h1 className={classes.mapHeading}>Price by region</h1>
              <iframe
                className={classes.map}
                width="500"
                height="300"
                scrolling="no"
                frameBorder="no"
                src="https://fusiontables.google.com/embedviz?q=select+col1%2C+col2%2C+col4+from+1ONxyRJUDNlUIP8qZaWIDEX58XEQUcRIirveLp1aF+limit+1000&amp;viz=HEATMAP&amp;h=true&amp;lat=43.47648502099104&amp;lng=-80.5360260559799&amp;t=1&amp;z=16&amp;l=col1&amp;y=4&amp;tmplt=4&amp;hmd=true&amp;hmg=%2366ff0000%2C%2393ff00ff%2C%23c1ff00ff%2C%23eeff00ff%2C%23f4e300ff%2C%23f4e300ff%2C%23f9c600ff%2C%23ffaa00ff%2C%23ff7100ff%2C%23ff3900ff%2C%23ff0000ff&amp;hmo=0.6&amp;hmr=30&amp;hmw=4&amp;hml=TWO_COL_LAT_LNG"></iframe>
            </div>
          </div>
        }
        {this.state.btnClicked && <Form /> }
      </div>
    );
  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
