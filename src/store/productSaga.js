import {call,put,takeEvery} from 'redux-saga/effects';
import { getDataSuccess } from './productSlice';

function* workGetDataFetch(){
    const products=yield call(()=>fetch('https://fakestoreapi.com/products'));
    const formattedProducts=yield products.json();
    yield put(getDataSuccess(formattedProducts));
}
function* productSaga(){
    yield takeEvery('product/getDataFetch', workGetDataFetch)
}

export default productSaga;
