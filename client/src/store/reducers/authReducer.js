const initialState = {
    userDeatils: null
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'DUMMY':
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;