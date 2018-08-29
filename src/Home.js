import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AddNotes from './components/addNotes';
import DisplayNotes from './components/displayNotes';

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          posterData : [
            {
              id: 1,
              title: 'Shrimp and Chorizo Paella',
              note: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
            },
            {
              id: 2,
              title: 'Transitions',
              note: 'Material-UI provides a number of transitions that can be used to introduce some basic motion to your applications components.'
            },
            {
              id: 3,
              title: 'Popover',
              note: 'Use the radio buttons to adjust the anchorOrigin and transformOrigin positions. You can also set the anchorReference to anchorPosition or anchorEl. When it is anchorPosition, the component will, instead of anchorEl, refer to the anchorPosition prop which you can adjust to set the position of the popover.'
            },
            {
              id: 4,
              title: 'Portal',
              note: 'The component is used internally by the Modal and Popper components. On the server, the content wont be rendered. You have to wait for the client side reconciliation to see the children.'
            }
          ]
      };

      this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }



  addNewNote(data) {
    this.setState({
      posterData: [...this.state.posterData, data]
  });
  }

  handleDeleteCard (poster) {
    const deleteUpdateData = this.state.posterData.filter(newPosterData => newPosterData.id !== poster.id);
    this.setState({posterData: deleteUpdateData});
  }

  render() {
    return (<Fragment>
              <AppBar position="static" color="default">
                  <Toolbar variant="dense">
                      <IconButton color="inherit" aria-label="Menu">
                          <MenuIcon />
                      </IconButton>
                      <Typography>Google keep</Typography>
                  </Toolbar>
              </AppBar>
            <AddNotes addNewNote={this.addNewNote.bind(this)} posterData={this.state.posterData} />
            <DisplayNotes posterData={this.state.posterData} handleDeleteCard={this.handleDeleteCard} />
        </Fragment>
    );
  }
}
