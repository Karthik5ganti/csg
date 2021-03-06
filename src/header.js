import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  CSGmedia: {
    width: 270,
    height: 100,
  },
  IIITmedia: {
    width: 210,
    height: 100
  },
  Heading: {
    paddingTop: '45px'
  },
  flexGrow: {
    flex: 'auto',
  },
});

class Header extends Component {

    render() {
        return (
                <Card className={this.props.classes.card}>
                    <CardMedia className={this.props.classes.CSGmedia}
                        image="./csg_logo.png"
                        title="Computer Systems Group"
                    />
                    <div className={this.props.classes.flexGrow} />
                    <CardContent className={this.props.classes.Heading}>
                      <Typography type="display2">
                        Computer Systems Group
                      </Typography>
                     </CardContent>
                     <div className={this.props.classes.flexGrow} />
                     <CardMedia className={this.props.classes.IIITmedia}
                         image="./IIIT.png"
                         title="IIIT Hyderbad"
                     />
                </Card>
        );
    }
}

export default withStyles(styles)(Header);
