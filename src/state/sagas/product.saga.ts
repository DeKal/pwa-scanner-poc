import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_PRODUCT } from 'state/actions/actionTypes'
import { fetchProduct } from 'api'
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
} from 'state/actions/products.action'

function* fetchProductEffect(action) {
  try {
    yield put(fetchProductRequest())
    const { data } = yield call(fetchProduct, action.payload)
    yield put(fetchProductSuccess(data))
  } catch (e) {
    yield put(fetchProductError(e))
  }
}

export function* productSaga(): Generator {
  yield takeLatest(FETCH_PRODUCT, fetchProductEffect)
}
