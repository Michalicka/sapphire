
import { all, fork } from 'redux-saga/effects'
import { postUsers, getMe, putUsers, putPasswords, postAvatar } from './user'
import { postTokens, putTokensWatch, refreshToken, deleteTokens } from './tokens'
import { getProjects, postProjects, putProjects, deleteProjects, putProjectMembers, getProjectMembers } from './projects'
import { getUsers } from './users'
import { getTasks, postTasks, putTasks, deleteTasks } from './tasks'

export default function* rootSaga() {
  yield all([
    fork(postUsers),
    fork(postTokens),
    fork(putTokensWatch),
    fork(getMe),
    fork(refreshToken),
    fork(getProjects),
    fork(postProjects),
    fork(deleteTokens),
    fork(putUsers),
    fork(putPasswords),
    fork(postAvatar),
    fork(putProjects),
    fork(deleteProjects),
    fork(getUsers),
    fork(getProjectMembers),
    fork(putProjectMembers),
    fork(getTasks),
    fork(postTasks),
    fork(putTasks),
    fork(deleteTasks)
  ])
}
