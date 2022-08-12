import React from "react";
import S from "./InputExchange.module.css"
import {UpdateFirstBox} from "../../Redux/CurrencyReducer";

class InputExchange extends React.Component{
    state={
        First_value:this.props.First_box,
        Second_value:this.props.Second_box
    }

    UpdateText1=(e)=>{
       let n= Number(e.currentTarget.value)
        if(!isNaN(n))
        {
            this.setState({First_value:n})
            this.props.UpdateFirstBox(n)
        }

    }
    UpdateText2=(e)=>{
        let n= Number(e.currentTarget.value)
        if(!isNaN(n))
        {
            this.setState({Second_value:n})
            this.props.UpdateSecondBox(n)
        }

    }
    Swap=()=>{
        let temp1=this.state.First_value
        let temp2=this.state.Second_value
        this.setState({First_value:temp2,Second_value:temp1})
        this.props.UpdateFirstBox(this.state.Second_value)
        this.props.UpdateSecondBox(this.state.First_value)

    }
    render(){
        console.log(this.props.First_box)
        console.log(this.props.Second_box)
        return<>
            <input onChange={this.UpdateText1}  value={this.state.First_value} className={S.InputBox}/>
            <img onClick={this.Swap} className={S.ExchangeImg} src={'https://media.istockphoto.com/vectors/exchange-arrow-transfer-icon-logo-vector-isloated-on-white-background-vector-id1200593178?k=20&m=1200593178&s=612x612&w=0&h=u_rUdLSdDSYjhIdtbmlTjZ_A-wtd-Yu0EAJ4wA9HFkQ='}/>
            <input onChange={this.UpdateText2}  value={this.state.Second_value} className={S.InputBox}/>
        </>
    }

}

export default InputExchange



