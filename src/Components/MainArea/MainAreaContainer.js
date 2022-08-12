import MainArea from "./MainArea";
import { connect } from "react-redux";
import {
    UpdateUSD,
    UpdateEUR,
    UpdateFirstBox,
    UpdateSecondBox,
    SetFirstToSecond
} from "../../Redux/CurrencyReducer";

const mapStateToProps = (state) => {
    return {
        FirstToSecond:state.Currency.FirstToSecond,
        USD:state.Currency.USD,
        EUR:state.Currency.EUR,
        First_box: state.Currency.First_box,
        Second_box: state.Currency.Second_box
    };
};



export const MainAreaContainer= connect(mapStateToProps,{SetFirstToSecond,UpdateUSD,UpdateEUR,UpdateFirstBox,UpdateSecondBox},null, {forwardRef: true})(MainArea)