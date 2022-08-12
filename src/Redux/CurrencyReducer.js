const UPDATE_USD = "UPDATE-USD";
const UPDATE_EUR = "UPDATE-EUR";
const UPDATE_FIRST_BOX="UPDATE-FIRST-BOX"
const UPDATE_SECOND_BOX="UPDATE-SECOND-BOX"
const SET_FIRST_TO_SECOND="SET-FIRST-TO-SECOND"

let InitialState={
  USD:36.57,
  EUR:37.75,
  UAH:1, First_box:1, Second_box:36.57, FirstToSecond:36.57
}

 const CurrencyReducer = (state=InitialState, action) => {
  switch (action.type) {
    case UPDATE_USD:
      {

      return {...state,USD:action.USD}

      }
          case UPDATE_EUR:
          {
              return {...state,EUR:action.EUR}
          }
      case UPDATE_FIRST_BOX:
      {
          return {...state,First_box: action.First_box}
      }
      case UPDATE_SECOND_BOX:
      {
          return {...state,Second_box: action.Second_box}
      }
      case SET_FIRST_TO_SECOND:{
          return {...state,FirstToSecond:action.FirstToSecond}
      }
      default:
      return state;
  }
};
export const UpdateUSD=(USD)=>({type:UPDATE_USD,USD});
export const UpdateEUR=(EUR)=>({type:UPDATE_EUR,EUR});
export const UpdateFirstBox=(First_box)=>({type:UPDATE_FIRST_BOX,First_box})
export const UpdateSecondBox=(Second_box)=>({type:UPDATE_SECOND_BOX,Second_box})
export const SetFirstToSecond=(FirstToSecond)=>({type:SET_FIRST_TO_SECOND,FirstToSecond})
export default CurrencyReducer;