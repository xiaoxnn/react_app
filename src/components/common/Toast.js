import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'


export default class Toast extends Component {






    render() {
        return (
            <div style={styles.contain}>
                <Button>HHHHH</Button>
            </div>
        );
    }
}

const styles={
    contain:{
        backgroundColor: '#ff0',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex:1000
    }
}



