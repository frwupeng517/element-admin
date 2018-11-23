<template>
  <div>
    <div class="syntax">
      <h1>Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置</h1>
      <h2>返回值是一个 DOMRect对象，包含了一组用于描述边框的只读属性---left、top、right和bottom，单位为像素</h2>
      <h2>除了width和height外的属性都是相对于视口的左上角位置而言的</h2>
      <div class="box" id="boxRect"></div>
    </div>
    <div class="demo">
      <div class="btn" @click="addToShopcart()" id="eleBtn">加入购物车</div>
      <div class="cart" id="eleCart">购物车<span class="num">0</span></div>
      <div id="flyItem" class="fly-item">
        <img src="./book.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  data() {
    return {

    }
  },
  created() {
    this.$nextTick(() => {
      let boxRect = document.getElementById('boxRect')
      // console.log(boxRect.getBoundingClientRect())

      /*
        DOMRect {x: 180, y: 222.625, width: 200, height: 200, top: 222.625, bottom: 422.625, left: 180, right: 380}
      */
    })
  },
  methods: {
    addToShopcart() {
      let isRunning = false,

          // 按钮距离购物车的距离
          boundBtn = event.target.getBoundingClientRect(),
          eleCart = document.getElementById('eleCart'),
          cartNum = eleCart.getElementsByClassName('num')[0],
          boundCart = eleCart.getBoundingClientRect(),

          // 中心点的水平垂直距离
          offsetX = boundCart.left + boundCart.width / 2 - (boundBtn.left + boundBtn.width / 2),
          offsetY = boundCart.top + boundCart.height / 2 - (boundBtn.top + boundBtn.height / 2),

          // 飞入的元素
          eleFlyItem = document.getElementById('flyItem'),
          eleFlyImg = document.getElementsByTagName('img')[0],

          // 页面滚动尺寸
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0,
          scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0

          if(isRunning === false) {
            // 购物车图形出现与初始定位
            eleFlyItem.style.display = 'block'
            eleFlyItem.style.left = (boundBtn.left + scrollLeft + event.target.clientWidth / 2) + 'px'
            eleFlyItem.style.top = (boundBtn.top + scrollTop + event.target.clientHeight /2) + 'px'

            // 开始动画
            eleFlyItem.style.transform = `translateX(${offsetX}px)`
            eleFlyImg.style.transform = `translateY(${offsetY}px)`

            // 动画标志量
            isRunning = true

            setTimeout(() => {
              eleFlyItem.style.display = 'none'
              eleFlyItem.style.transform = `translateX(0)`
              eleFlyImg.style.transform = `translateY(0)`
              isRunning = false
              console.log(cartNum)
              cartNum.innerHTML = cartNum.innerHTML *1 + 1
            }, 490)
          }
    }
  }
}
</script>

<style lang="scss" scoped>
.syntax{
  .box{
    width: 200px;
    height: 200px;
    background-color: lightgreen;
  }
}
.demo{
  height: 600px;
  padding: 15px;
  margin: 15px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  .btn{
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #e4393c;
    font-size: 22px;
    cursor: pointer;
  }
  .cart{
    align-self: flex-end;
    width: 200px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #e4393c;
    font-size: 16px;
  }
  .fly-item, .fly-item >img{
    position: absolute;
    width: 50px;
    height: 50px;
    transition: transform .5s;
  }
  .fly-item{
    display: none;
    margin: -25px 0 0 -25px;
    transition-timing-function: linear;
    opacity: .5;
    >img{
      transition-timing-function: cubic-bezier(.55,0,.85,.36);
      outline: 1px solid rgb(221,46,59);
    }
  }
}
</style>


