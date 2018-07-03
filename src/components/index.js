
import viewer from 'viewer'
viewer.install = function install (Vue) {
  Vue.component(viewer.name, viewer)
}

export default viewer
