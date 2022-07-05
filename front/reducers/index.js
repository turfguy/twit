import {HYDRATE} from 'next-redux-wrapper'
import user from './user.js'
import post from './post.js'
import { combineReducers } from 'redux'


const changeNick = (data)=>{

    return{
        type : 'CHANGE_NICK',
        data
    }

}
const rootReducer = combineReducers ({
    index: ( state ={}, action )=>{
        switch(action.type){
            case HYDRATE:
                console.log('HYDRATE',action);
                return { ...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    post,
}); 

export default rootReducer;
