import superagent from 'superagent'
import { API_HOST } from './config'

class Api {

  requestSignup = (email, password) => (

    superagent
    .post(`${API_HOST}/auth/users`)
    .send({email, password})
  )


  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )

  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  getBoardsList = (page, count) => (
    superagent
    .get(`${API_HOST}/boards`)
  )

  getBoard = (id) => (
    superagent
    .get(`${API_HOST}/boards/${id}`)
  )

  createBoards = (id) => (
    superagent
    .post(`${API_HOST}/boards/${id}`)
  )

  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  createBookmarks = (boardId) => (
    superagent
    .post(`${API_HOST}/boards/${boardId}/bookmarks`)
  )

  getMe = (token) => (
    superagent
    .get(`${API_HOST}/auth/me`)
  )

}

export default new Api();
