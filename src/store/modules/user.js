import { getToken, setToken, removeToken } from '@/utils/auth'
import { api } from '@/config'
import fetch from 'utils/fetch'
import { Message } from 'element-ui'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // Message({
        //   message: '登录成功',
        //   type: 'success'
        // })
        // setToken('123')
        // commit('SET_TOKEN', '123')
        // resolve()
        fetch('post', api.userLogin, {username: username, password: userInfo.password}).then((res) => {
          Message({
            message: '登录成功',
            type: 'success'
          })
          const data = res.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // commit('SET_NAME', 'zhulin')
        // commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
        // resolve()
        fetch('get', api.userInfo, {token: state.token}).then((res) => {
          const data = res.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // commit('SET_TOKEN', '')
        // removeToken()
        // resolve()
        fetch('get', api.userLogout, {}).then((res) => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
