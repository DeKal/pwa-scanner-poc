import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_USER } from 'state/actions/actionTypes'
import { toRequest, toSuccess, toError } from 'utils/state'
import { get } from 'utils/api'

function fetchUser(userId: string) {
  return get(`/api/users/${userId}`)
}

function* fetchUserEffect(action) {
  try {
    yield put({ type: toRequest(FETCH_USER) })
    const { data } = yield call(fetchUser, action.payload)
    yield put({ type: toSuccess(FETCH_USER), payload: data })
  } catch (e) {
    yield put({ type: toError(FETCH_USER), payload: e })
  }
}

export function* userSaga(): Generator {
  yield takeLatest(FETCH_USER, fetchUserEffect)
}
