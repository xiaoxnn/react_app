import { observable, computed, action,onBecomeObserved } from "mobx";

class home{

    @observable homeData=[];
    @observable num=0;
    @action addhomeData=(data)=> {
        this.homeData = data;
    };
    @action addNum=()=> {
        this.num++;
    }

}

export default new home()