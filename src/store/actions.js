export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
        // 1.payload新添加的商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 2.判断oldProduct
        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('当前的商品+1')
        } else {
          payload.count = 1
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
    })
  }

}