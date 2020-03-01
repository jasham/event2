import axios from 'axios'
import store  from '../store'

export const baseUrl = 'http://35.154.214.120:8000/'

export const authData = store.getState().otp

 export const token = () => {
   return ( store.getState().otp.otpData.data[0].access_token)
 }

export default () => {
  if (token) {
    return axios.create({
      baseURL: baseUrl,
    })
  } else {
    return axios.create({
      baseURL: baseUrl
    })
  }
}
