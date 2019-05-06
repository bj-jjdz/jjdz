import http from '../js/http'
import apis from '../js/api'

export funciton axPost (params = {}) {
  retun http.get(apis.getExampleData, params)
}