import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {inject,observer} from 'mobx-react'


@inject("store")  @observer
export default class Bottom_2 extends Component {
    constructor(props) {
        super(props)
        this.home = props.store.default.home

        console.log(" this.home"+ this.home)
    }


    onclick=()=>{
        this.home.addNum()
    }

    render() {
        return (
            <Button  onClick={()=>this.onclick()}>qqq</Button>
        );
    }
}
