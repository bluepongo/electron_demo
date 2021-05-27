import axios from 'axios'

const path = require('path')

const baseUrl = '/api/v1/lifeboat'
const roleUrl = '/roles'

export default{
  components: {
    axios
  }
}

export function getRoleInfo () {
  return axios.get(
    path.join(baseUrl, roleUrl))
}

export function getRoleInfoByName (name) {
  return axios.get(
    path.join(baseUrl, roleUrl, name))
}
