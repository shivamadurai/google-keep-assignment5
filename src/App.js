import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from './Home';
import Login from './Login';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  linkStyle: {
      linkStyle: "none",
      padding: 20
  }
});

class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const classes = styles;
    console.log(classes.root);
    return (
        <div className={classes.root}>


      <Router>
          <div className="container">
              <Grid container spacing={24}>
                  <Grid item xs={3} sm={3}>
                    <Paper className={this.props.paper}>

                       <ul>
                          <li><Link style={classes.linkStyle} to={'/'}>Login</Link></li>
                          <li><Link style={classes.linkStyle} to={'/Home'}>Home</Link></li>
                       </ul>

                    </Paper>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <Paper className={this.props.paper}>

                       <Switch>
                          <Route exact path='/Home' component={Home} />
                          <Route exact path='/' component={Login} />
                       </Switch>

                    </Paper>
                  </Grid>
              </Grid>
          </div>
       </Router>


    </div>
    );
  }
}

export default withStyles(styles)(App);
