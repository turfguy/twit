import {HYDRATE} from 'next-redux-wrapper'

const initialState = {
    user : {
        isLog: false,
        user : null,
        signUpData: {},
        loginData : {},
    },
    post : {
        mainPosts:[],

    }
}

export const loginAction = (data)=>
{
    return{

        type : 'LOG_IN',
        data
    
    }
    
}
export const logoutAction = (data)=>
{
    return{

        type : 'LOG_OUT',    
    }
    
}

const changeNick = (data)=>{

    return{
        type : 'CHANGE_NICK',
        data
    }

}
const rootReducer = (state = initialState , action) =>{
    switch(action.type){
        case HYDRATE:
            console.log('HYDRATE')
            return{
                ...state,
                ...action.payload
            }
        case 'LOG_IN':
            return {
                ...state,
                user :{
                    ...state.user,
                    isLog : true,
                    user : action.data,

                }
        
            };
        case 'LOG_OUT':
            return{
                ...state,
                user :{
                    ...state.user,
                    isLog : false,
                    user : null,
            }
        };
        default:
            return{
              ...state,
            }
    }
}; 

export default rootReducer;
