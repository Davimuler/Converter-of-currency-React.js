const UPDATE_USD = "UPDATE-USD";
const UPDATE_EUR = "UPDATE-EUR";


let InitialState={
  USD:5,
  EUR:15,
  UAH:1
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

    default:
      return state;
  }
};
export const UpdateUSD=(USD)=>({type:UPDATE_USD,USD});
export const UpdateEUR=(EUR)=>({type:UPDATE_EUR,EUR});
export default CurrencyReducer;