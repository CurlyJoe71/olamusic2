import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LibraryList from './LibraryList';
import API from '../utils/API';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    container: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justify: "center",
    // margin: "auto",
    justifyContent: "center"
    }
  });

  class Library extends Component {
      state = {
        library: []
      };

      componentDidMount() {
          API.getLibrary()
            .then(res => {
                console.log(res.data);
                this.setState({ library: res.data });
            })
      };

    render() {
      const { classes } = this.props;

        return (
            <div>
                <h1>This is the Library</h1>
               
                <Grid container className={classes.container} align="center" spacing={24}>
                {this.state.library.map((item, index) => {
                  return (
                    
                    <Grid key={index} item>
                    <LibraryList 
                    title={item.title}
                    refrain={item.refrain}
                    key={index} />

                    </Grid>

                  )


                })}
                  </Grid>
                </div>
        );
    };
  }

  Library.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Library);