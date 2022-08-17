import React from "react";
import S from "./Selectors.module.css"

class Selectors extends React.Component {
    state = {
        firstSelectorValue: "USD Долар",
        secondSelectorValue: "UAH Гривня",
        usd: this.props.usd,
        firstToSecond: this.props.usd,
        eur: this.props.eur,
        uah: 1
    }
    getCourse = (value) => {
        switch (value) {
            case "UAH Гривня": {
                return this.state.uah
            }
            case "USD Долар": {
                return this.state.usd
            }
            case "EUR Євро": {
                return this.state.eur
            }
        }
    }

    setFTS = (fv, sv) => {
        let tempValue1 = this.getCourse(fv)
        let tempValue2 = this.getCourse(sv)
        let N=tempValue1 / tempValue2
        this.props.SetFirstToSecond(N.toFixed(3))
    }
    getValue = (e, selector) => {
        switch (selector) {
            case 1: {
                this.setState({firstSelectorValue: e.target.value})
                this.setFTS(e.target.value, this.state.secondSelectorValue)
                return
            }
            case 2: {
                this.setState({secondSelectorValue: e.target.value})
                this.setFTS(this.state.firstSelectorValue, e.target.value)
            }
        }

    }

    render() {
        return <div className={S.SelectorArea}>
            <select onChange={(e) => {
                this.getValue(e, 1)
            }} className={S.Selector} value={this.state.firstSelectorValue}>
                <option>USD Долар</option>
                <option>EUR Євро</option>
                <option>UAH Гривня</option>
            </select>
            <select onChange={(e) => {
                this.getValue(e, 2)
            }} className={S.Selector} value={this.state.secondSelectorValue}>
                <option>USD Долар</option>
                <option>EUR Євро</option>
                <option>UAH Гривня</option>
            </select>
        </div>
    }
}

export default Selectors