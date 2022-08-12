import MainArea from "./MainArea";
import { connect } from "react-redux";
import {UpdateUSD, UpdateEUR} from "../../Redux/CurrencyReducer";

const mapStateToProps = (state) => {
    return {
        USD:state.Currency.USD
    };
};



export const MainAreaContainer= connect(mapStateToProps,{UpdateUSD,UpdateEUR})(MainArea)