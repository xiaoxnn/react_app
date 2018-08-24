import React, { Component } from 'react';
import BottomNavigation  from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Bottom_1 from '../tab/Bottom_1'
import Bottom_2 from '../tab/Bottom_2'
import Bottom_3 from '../tab/Bottom_3'
export default class index extends Component {

    constructor(props){
        super(props)
        this.state={
            value:1,
        }
    }
    _onChange(e,value){
         this.setState({
             value:value
         })
    }


    render() {
        const {value} =this.state
        return (
            <ul  style={styles.contain}>
                {value==0?<Bottom_1/>:value==1?<Bottom_2/>:<Bottom_3/>}
                <BottomNavigation
                    onChange={this._onChange.bind(this)}
                    showLabels
                    value={value}
                    style={styles.bottom}
                   >
                    <BottomNavigationAction label="Recents"  />
                    <BottomNavigationAction label="Favorites"  />
                    <BottomNavigationAction label="Nearby"  />
                </BottomNavigation>
            </ul>
        );
    }
}


const  styles={
    contain:{
        height:'100%',
        width:'100%'
    },
    bottom:{
        alignSelf:'flex-end',
        position:'absolute',
        bottom:0,
        height:40
    }
}