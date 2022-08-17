const UPDATE_USD = "UPDATE-USD";
const UPDATE_EUR = "UPDATE-EUR";
const UPDATE_FIRST_BOX = "UPDATE-FIRST-BOX"
const UPDATE_SECOND_BOX = "UPDATE-SECOND-BOX"
const SET_FIRST_TO_SECOND = "SET-FIRST-TO-SECOND"

let InitialState = {
    usd: 36.57,
    eur: 37.03,
    uah: 1,
    first_box: 1,
    second_box: 36.57,
    firstToSecond: 36.57
}

const CurrencyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UPDATE_USD: {

            return {...state, usd: action.usd}

        }
        case UPDATE_EUR: {
            return {...state, eur: action.eur}
        }
        case UPDATE_FIRST_BOX: {
            return {...state, first_box: action.first_box}
        }
        case UPDATE_SECOND_BOX: {
            return {...state, second_box: action.second_box}
        }
        case SET_FIRST_TO_SECOND: {
            return {...state, firstToSecond: action.firstToSecond}
        }
        default:
            return state;
    }
};
export const UpdateUSD = (usd) => ({type: UPDATE_USD, usd});
export const UpdateEUR = (eur) => ({type: UPDATE_EUR, eur});
export const UpdateFirstBox = (first_box) => ({type: UPDATE_FIRST_BOX, first_box})
export const UpdateSecondBox = (second_box) => ({type: UPDATE_SECOND_BOX, second_box})
export const SetFirstToSecond = (firstToSecond) => ({type: SET_FIRST_TO_SECOND, firstToSecond})
export default CurrencyReducer;