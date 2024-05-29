import {call,put,takeEvery} from 'redux-saga/effects'
import { GET_USER_FETCH, GET_USER_SUCCESS } from './actions'

function usersFetch(){
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
}


function* workGetUserFetch(){
    const users=yield call(usersFetch)
    yield put ({type: GET_USER_SUCCESS},users)
}
function* mySaga(){
    yield takeEvery(GET_USER_FETCH,workGetUserFetch)
}

export default mySaga
