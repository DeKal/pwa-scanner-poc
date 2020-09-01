import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_USER } from 'state/actions/actionTypes'
import { fetchUser } from 'api'
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
} from 'state/actions/user.action'
function* fetchUserEffect(action) {
  try {
    yield put(fetchUserRequest())
    const { data } = yield call(fetchUser, action.payload)
    yield put(fetchUserSuccess(data))
  } catch (e) {
    yield put(fetchUserError(e))
  }
}

export function* userSaga(): Generator {
  yield takeLatest(FETCH_USER, fetchUserEffect)
}
