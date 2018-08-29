import React, { Component, Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

export default class displayNotes extends Component {
    styles = {
        marginTop: 5
    }

    deleteIconStyle = {
        marginTop: 20
    }

    deleteCard(poster) {
        this.props.handleDeleteCard(poster);
    }

    render() {
        return (
            <Fragment>
                <Grid container spacing={40} style={this.styles}>
                    {this.props.posterData.map((poster, index) => (
                        <Grid key={index} item xs={3} id={index}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary">
                                        <strong>{poster.title}</strong>
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {poster.note}
                                    </Typography>
                                    <DeleteIcon style={this.deleteIconStyle} onClick={this.deleteCard.bind(this, poster)} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Fragment>
        )
    }
}