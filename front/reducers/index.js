const initialState = {
    name: 'Jacob'
    ,age : '25'
    ,pw : '123'
}

const changeNick = (data)=>{

    return{
        type : 'CHANGE_NICK',
        data
    }

}
const rootReducer = (state = initialState , action) =>{
    switch(action.type){
        
        case 'CHANGE_NICK':
            return {
                ...state,
                name : action.data,

            }
    }
}; 

export default rootReducer;
