import React from "react";
import S from "./Selectors.module.css"

class Selectors extends React.Component{
    state={
        FirstSelectorValue:"UAH Гривня",
        SecondSelectorValue:"USD Долар",
        USD:this.props.USD,
         firstToSecond:this.props.USD,
        EUR:this.props.EUR
    }
    setFTS=(fv,sv)=>{
      if(fv==="UAH Гривня" && sv==="UAH Гривня")
      {
          this.props.SetFirstToSecond(1)
      }
      else if(fv==="UAH Гривня" && sv==="USD Долар")
      {
          let n=1/this.state.USD
          this.props.SetFirstToSecond(n.toFixed(3))
      }
      else if(fv==="UAH Гривня" && sv==="EUR Євро")
      {
          let n=1/this.state.EUR
          this.props.SetFirstToSecond(n.toFixed(3))
      }
      else if(fv==="EUR Євро" && sv==="EUR Євро")
      {
          this.props.SetFirstToSecond(1)

      }
      else if(fv==="EUR Євро" && sv==="UAH Гривня")
      {
          this.props.SetFirstToSecond(this.state.EUR)

      }
      else if(fv==="EUR Євро" && sv==="USD Долар")
      {
          let n=this.state.USD/this.state.EUR
          this.props.SetFirstToSecond(n.toFixed(3))
      }
      else if(fv==="USD Долар" && sv==="USD Долар")
      {
          this.props.SetFirstToSecond(1)

      }
      else if(fv==="USD Долар" && sv==="UAH Гривня")
      {
          this.props.SetFirstToSecond(this.state.USD)

      }
      else if(fv==="USD Долар" && sv==="EUR Євро")
      {
          let n=this.state.EUR/this.state.USD
          this.props.SetFirstToSecond(n.toFixed(3))
      }

    }
    getFirstValue=(e)=>{
        this.setState({FirstSelectorValue:e.target.value})
        this.setFTS(e.target.value,this.state.SecondSelectorValue)
    }
    getSecondValue=(k)=>{
        this.setState({SecondSelectorValue:k.target.value})
        this.setFTS( this.state.FirstSelectorValue,k.target.value)
    }
    render() {
        //console.log(this.props.FirstToSecond)
        return<div  className={S.SelectorArea}>
            <select  onChange={this.getFirstValue} className={S.Selector} value={this.state.FirstSelectorValue}>
                <option>USD Долар</option>
                <option>EUR Євро </option>
                <option>UAH Гривня</option>
            </select>
            <select onChange={this.getSecondValue} className={S.SelectorSecond} value={this.state.SecondSelectorValue}>
                <option>USD Долар</option>
                <option>EUR Євро </option>
                <option>UAH Гривня</option>
            </select>
        </div>
    }
}
export default Selectors