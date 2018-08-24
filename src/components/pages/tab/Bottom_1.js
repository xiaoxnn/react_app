import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Toast from '../../../utils/toast/index'
import home   from '../../store/home'

import { observer } from 'mobx-react';
import  {getFetch,postFetch}  from '../../../utils/network/request/HttpExtension'


@observer
export default class Bottom_1 extends Component {

    fetchData(){
        getFetch("https://api.douban.com/v2/book/1220562").then((ref)=>{
            console.log("ref"+ref)
        })
    }

    render() {
        return (
            <div style={{width:'100%',height:'100%',background:'#f00'}}>
               <Button >{home.num}</Button>
                <Button  onClick={()=>Toast.success('ss',1000)}>弹出提示框</Button>
                <Button  onClick={()=>home.addNum()} >ffff</Button>
            </div>
        );
    }
}
