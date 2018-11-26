import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import StarRatings from '../../node_modules/react-star-ratings';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
  stars: {
    fontSize: '0.1em',
    marginLeft: '1em'
  }

});

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    const {
      classes,
      rating,
      address,
      indoorFeatures,
      nearbyFeatures,
      preferredTrans,
      rentCost
    } = this.props;

    // const {classes} = this.props;

    return (
      <div>
        <h2>Best Match:</h2>
        <h4>Address: <span><strong>{address}</strong></span></h4>
        <h4>Satisfaction:
          <span className={classes.stars}>
            <StarRatings
            rating={rating}
            starDimension={'20px'}
            starRatedColor="black"
            numberOfStars={10}
            name='rating'/>
          </span>
        </h4>
        <h4>Near <strong>{address}</strong>:</h4>
        <ul>
          {nearbyFeatures.map(feature =>   <li>{feature}</li>)}
        </ul>
        <h4><strong>{address}</strong> comes with:</h4>
        <ul>
          {indoorFeatures.map(feature =>   <li>{feature}</li>)}
        </ul>
        <h4>Total Cost with Utilities: <span><strong>{rentCost}</strong></span></h4>
        <h4>Popular Method of Transportation: <span><strong>{preferredTrans}</strong></span></h4>

      </div>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Result);