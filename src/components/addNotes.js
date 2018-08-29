import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

export default class addNotes extends Component {

    btnStyleTop = {
        margin:10
    }

    btnStyleTopRight = {
        marginRight:10
    }
    
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            title: '',
            note:''
        }
    }

    hanldeTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleNoteChange(e) {
        this.setState({
            note: e.target.value
        })
    }

    handleExpandClick() {
        this.setState({
            expanded: true
        })
    }

    crateNotes(e) {
        let data = {
            id: this.props.posterData.length + 1,
            note: this.state.note,
            title: this.state.title
        }

        if(data.note !== '' || data.note !== '') {
            this.props.addNewNote(data);
        }

        this.setState({
            title: '',
            note: ''
        })
    }

    closeNotes(e) {
        this.setState({
            expanded: false
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.expanded ? <TextField
                    label="Title"
                    value={this.state.title}
                    onChange={this.hanldeTitleChange.bind(this)}
                    margin="normal"
                    fullWidth={true}
                    /> : null}

                    <TextField
                        label="Enter Notes"
                        value={this.state.note}
                        onChange={this.handleNoteChange.bind(this)}
                        onClick={this.handleExpandClick.bind(this)}
                        margin="normal"
                        fullWidth={true}
                        />

                    {this.state.expanded ? <Fragment><Button style={this.btnStyleTop} onClick={this.crateNotes.bind(this)} 
                        variant="outlined" color="primary">Save</Button> 
                        <Button style={this.btnStyleTop}
                        variant="outlined" color="secondary" onClick={this.closeNotes.bind(this)}>Close</Button></Fragment> : null}
            </Fragment> 
        )
    }
}