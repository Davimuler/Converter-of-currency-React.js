import React from "react";
import S from "./InputExchange.module.css"

class InputExchange extends React.Component{
    state={
        First_value:this.props.First_box,
        Second_value:this.props.First_box*this.props.FirstToSecond
    }

    UpdateText1=(e)=>{
       let n= Number(e.currentTarget.value)
        if(!isNaN(n))
        {
            let N=n*this.props.FirstToSecond
            this.setState({First_value:n,Second_value:N.toFixed(3)})
            this.props.UpdateFirstBox(n)
        }

    }
    UpdateText2=(e)=>{
        let n= Number(e.currentTarget.value)
        if(!isNaN(n))
        {
            let N=n/this.props.FirstToSecond
            this.setState({Second_value:n,First_value:N.toFixed(3)})
            this.props.UpdateSecondBox(n)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.FirstToSecond!=this.props.FirstToSecond)
         {
             this.setState({First_value:this.props.First_box,Second_value:this.props.First_box*this.props.FirstToSecond})
         }
    }

    render(){
        console.log(this.state.Second_value)
        return<>
            <input onChange={this.UpdateText1}  value={this.state.First_value} className={S.InputBox1}/>
            <input onChange={this.UpdateText2}  value={this.state.Second_value} className={S.InputBox2}/>
        </>
    }

}

export default InputExchange



