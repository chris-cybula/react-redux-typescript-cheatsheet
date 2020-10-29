export interface State {
  data: string;
}

const initialState = {
  data: "empty"
}

type Action = { type: 'SET_DATA', payload: string }

const reducer = (state:State = initialState, action: Action) => {

    switch(action.type) {
      case 'SET_DATA':
        return {...state, data: action.payload};

      default:
        return state
    }
  }

  export default reducer