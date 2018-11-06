import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper/Paper";
import InputRange from 'react-input-range';
// import HomeIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button/Button";
import axios from 'axios';
import HomeIcon from '@material-ui/icons/Home';
import Typography from "@material-ui/core/Typography/Typography";
import Result from "./Result";



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
    marginTop: '2em',
    height: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    width: '32em',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    marginBottom: '3em',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    fontSize: '3em'
  },
  radio: {
    fontSize: '2em',
  },
  group: {
    fontSize: '0.3em',
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  extendedIcon: {
    verticalAlign: 'middle',
    marginRight: theme.spacing.unit,
  },
  // formControlLabel: {
  //   fontSize: '0.8em'
  // },
  // formControlLabelRoot: {
  //   fontSize: '0.8em'
  // },
  question: {
    fontSize: '0.4em'
  },
  // checkLabel: {
  //   fontSize: '0.7em'
  // }
});

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      transportationValue: 'walking',
      Internet: false,
      TV: false,
      Furniture: false,
      Patio: false,
      Gym: false,
      Security: false,
      Pool: false,
      Reception: false,
      StudyHall: false,
      minPrice: 400,
      maxPrice: 1800,
      formSubmitted: false,
      rawData: [],
      address: '',
      satisfaction: 0,
      indoorFeatures: [],
      nearbyFeatures: [],
      dataLoaded: false,
      preferredTrans: '',
      rentCost: 0,
      features: []
    };
  }

  selectTransportation = event => {
    console.log(event.target.value);
    this.setState({ transportationValue: event.target.value });
  };

  selectFeature = name => event => {
    console.log(event.target.value);
    console.log(event.target.checked);
    const features = this.state.features;
    features.push(event.target.value);
    this.setState({features: features});
    this.setState({ [name]: event.target.checked });
  };

  submitForm = event => {
    this.setState({formSubmitted: true});
    axios.get(`http://localhost:3000/api/v1/apartments`)
      .then(res => {
      this.setState({ rawData: res.data });
    }).then( () => {
        let apartments = this.state.rawData;
        let candidate  = {};
        let max = 0;
        let maxFeatures = 0;
        console.log(this.state.features);
      /**
       * @param apartments
       * @param apartments.total_cost
       * @param apartments.nearby_features
       * @param apartments.indoor_features
       * @param apartments.best_trans_method


       */

      for (let i = 0; i < apartments.length; i++) {
          if (apartments[i].total_cost >= this.state.minPrice && apartments[i].total_cost <= this.state.maxPrice) {
            if (apartments[i].satisfaction > max) {
              // let tempFeatureCount = 0;
              // for (let j = 0; j < apartments[i].indoor_features.length; j++) {
              //   if (this.state.features.includes(apartments[i].indoor_features[j])){
              //     if (tempFeatureCount > maxFeatures) {
              //       maxFeatures = tempFeatureCount;
              //     }
              //   }
              // }
              // if (maxFeatures > ) {
              max = apartments[i].satisfaction;
              this.setState({satisfaction: apartments[i].satisfaction});
              this.setState({address: apartments[i].address});
              this.setState({indoorFeatures: apartments[i].indoor_features});
              this.setState({nearbyFeatures: apartments[i].nearby_features});
              this.setState({preferredTrans: apartments[i].best_trans_method});
              this.setState({rentCost: apartments[i].total_cost});
              candidate = apartments[i];
              console.log(candidate);

            }
          }
        }
        setTimeout((() => this.setState({dataLoaded: true})), 3000);

      }
    );
  };

  handleMinPrice = event => {
    console.log(event.target.value);
    this.setState({ minPrice: event.target.value});
  };
  handleMaxPrice = event => {
    console.log(event.target.value);
    this.setState({maxPrice: event.target.value});
  };

  render() {
    const { Internet, TV, Furniture, Gym, Pool, Patio, Reception, Security, StudyHall } = this.state;

    const { classes } = this.props;

    return <div className={classes.root}>
      <Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper} elevation={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel
                className={classes.question}
                component="legend">
                What is your preferred method of transportation?
              </FormLabel>
              <RadioGroup
                aria-label="Transportation"
                name="transportation"
                className={classes.group}
                value={this.state.transportationValue}
                onChange={this.selectTransportation}
              >
                <FormControlLabel
                  classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}}
                  value="walking"
                  control={<Radio/>}
                  label="Walking/Running"/>
                <FormControlLabel
                  classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}}
                  value="bicycle"
                  control={<Radio/>}
                  label="Bicycle"/>
                <FormControlLabel
                  classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}}
                  value="public-transit"
                  control={<Radio/>}
                  label="Public Transit"/>
                <FormControlLabel
                  classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}}
                  value="driving"
                  control={<Radio/>}
                  label="Driving"/>
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper} elevation={3}>
            <div>
              Minimum Price: <input
              type="number"
              name="min-price"
              value={this.state.minPrice}
              onChange={this.handleMinPrice}/>
            </div>
            <br/>
            <div>
              Maximum Price: <input
              type="number"
              name="max-price"
              value={this.state.maxPrice}
              onChange={this.handleMaxPrice}/>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper} elevation={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel
                className={classes.question}
                component="legend">
                I would like to have:
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  classes={{label: classes.checkLabel}}

                  control={
                    <Checkbox
                      checked={Internet}
                      onChange={this.selectFeature('Internet')}
                      value="Internet"/>
                  }
                  label="Internet"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={TV}
                      onChange={this.selectFeature('TV')}
                      value="TV"/>
                  }
                  label="TV"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={Furniture}
                      onChange={this.selectFeature('Furniture')}
                      value="Furniture"
                    />
                  }
                  label="Furniture"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={Patio}
                      onChange={this.selectFeature('Patio')}
                      value="Patio"/>
                  }
                  label="Patio"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={Pool}
                      onChange={this.selectFeature('Pool')}
                      value="Pool"/>
                  }
                  label="Pool"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={Gym}
                      onChange={this.selectFeature('Gym')}
                      value="Gym"/>
                  }
                  label="Gym"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={Reception}
                      onChange={this.selectFeature('Reception')}
                      value="Reception"/>
                  }
                  label="Reception"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={Security}
                      onChange={this.selectFeature('Security')}
                      value="Security"/>
                  }
                  label="Security"
                />
                <FormControlLabel
                  classes={{label: classes.checkLabel}}
                  control={
                    <Checkbox
                      checked={StudyHall}
                      onChange={this.selectFeature('StudyHall')}
                      value="Study Hall"/>
                  }
                  label="Study Hall"
                />
              </FormGroup>
            </FormControl>

          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper} elevation={3}>
            <Button
              onClick={this.submitForm}
              variant="extendedFab"
              aria-label="Find"
              color="primary"
              type="submit"
              className={classes.button}>
              <HomeIcon className={classes.extendedIcon}/>
              Find the right housing
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper} elevation={3}>
            {!this.state.dataLoaded && this.state.formSubmitted &&
            <div>
              <h4>Processing data using blockchain and TensorFlow.js....</h4>
            </div>
            }
            {this.state.dataLoaded && this.state.formSubmitted &&
            <Result
              rating={this.state.satisfaction}
              address={this.state.address}
              nearbyFeatures={this.state.nearbyFeatures}
              indoorFeatures={this.state.indoorFeatures}
              preferredTrans={this.state.preferredTrans}
              rentCost={this.state.rentCost}
            />}
          </Paper>
        </Grid>

      </Grid>
    </div>;
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
