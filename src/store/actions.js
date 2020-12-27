export default {
  addCart(context, payload) {
    //数组常用的方法有哪些? push/pop/unshift/shift/sort/reverse/ map/filter/reduce/join/
    // 1.payload新添加的商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.判断oldProduct
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      // context.cartList.push(payload)
      context.commit('addToCart', payload)
    }
  }
}