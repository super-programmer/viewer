import viewer from './components/viewer'
const components = [
  viewer
]

const install = function install (Vue) {
  components.map(component => (
    Vue.component(component.name, component)
  ))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  viewer
}
