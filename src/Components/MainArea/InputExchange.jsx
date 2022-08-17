import React from "react";
import S from "./InputExchange.module.css"

class InputExchange extends React.Component {
    state = {
        First_value: this.props.first_box,
        Second_value: this.props.first_box * this.props.firstToSecond
    }

    UpdateText = (e, input) => {
        let n = Number(e.currentTarget.value)
        if (!isNaN(n)) {
            let N
            switch (input) {
                case 1: {
                    N = n * this.props.firstToSecond
                    this.setState({First_value: n, Second_value: N.toFixed(3)})
                    this.props.UpdateFirstBox(n)
                    return
                }
                case 2: {
                    N = n / this.props.firstToSecond
                    this.setState({Second_value: n, First_value: N.toFixed(3)})
                    this.props.UpdateSecondBox(n)
                }
            }
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.firstToSecond != this.props.firstToSecond) {
            this.setState({
                First_value: this.props.first_box,
                Second_value: this.props.first_box * this.props.firstToSecond
            })
        }
    }

    render() {
        return <>
            <input onChange={(e) => {
                this.UpdateText(e, 1)
            }} value={this.state.First_value} className={S.InputBox}/>
            <input onChange={(e) => {
                this.UpdateText(e, 2)
            }} value={this.state.Second_value} className={S.InputBox}/>
        </>
    }

}

export default InputExchange
