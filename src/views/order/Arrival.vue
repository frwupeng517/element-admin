<template>
  <div class="content">
    <!-- <h3>块级元素DIV</h3>
    <div class="img">
      <img src="https://mdn.mozillademos.org/files/15157/firefox.png" alt="">
    </div>
    <h3>行内元素SPAN</h3>
    <span class="img">
      <img src="https://mdn.mozillademos.org/files/15157/firefox.png" alt="">
    </span> -->

    <!-- <div class="sub">
      <div class="sub-content">
        <h5>transform: rotate(45deg)</h5>
        <h5>rotate：默认转换原点是旋转中心</h5>
        <div class="wrapper">
          <div class="box rotate"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: rotate(45deg)</h5>
        <h5>transform-origin: top left;</h5>
        <div class="wrapper">
          <div class="box rotate1"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: rotate(45deg)</h5>
        <h5>transform-origin: 50px 50px;</h5>
        <div class="wrapper">
          <div class="box rotate2"></div>
        </div>
      </div>
    </div>
    <div class="sub">
      <div class="sub-content">
        <h5>transform: scale(1.7)</h5>
        <h5>默认转换原点</h5>
        <div class="wrapper">
          <div class="box scale"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: scale(1.7)</h5>
        <h5>transform-origin: 0 0;</h5>
        <div class="wrapper">
          <div class="box scale1"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: scale(1.7)</h5>
        <h5>transform-origin: 100% -30%;</h5>
        <div class="wrapper">
          <div class="box scale2"></div>
        </div>
      </div>
    </div>
    <div class="sub">
      <div class="sub-content">
        <h5>transform: skewX(50deg);</h5>
        <h5>默认转换原点</h5>
        <div class="wrapper">
          <div class="box skewX"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: skewX(50deg);</h5>
        <h5>transform-origin: 100% -30%;</h5>
        <div class="wrapper">
          <div class="box skewX1"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: skewY(50deg);</h5>
        <h5>transform-origin: 100% -30%;</h5>
        <div class="wrapper">
          <div class="box skewX2"></div>
        </div>
      </div>
    </div> -->

    <!-- <div class="sub">
      <div class="sub-content">
        <h5>transform: scale(2, 2)</h5>
        <div class="wrapper">
          <div class="box scale21"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: scale(0.5, 0.5)</h5>
        <div class="wrapper">
          <div class="box scale22"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: scaleX(2)</h5>
        <div class="wrapper">
          <div class="box scale23"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: scaleY(2)</h5>
        <div class="wrapper">
          <div class="box scale24"></div>
        </div>
      </div>
    </div> -->

    <!-- <div class="sub">
      <div class="sub-content">
        <h5>transform: skew(30deg, -10deg)</h5>
        <div class="wrapper">
          <div class="box skew21"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: skewX(-30deg)</h5>
        <div class="wrapper">
          <div class="box skew22"></div>
        </div>
      </div>
      <div class="sub-content">
        <h5>transform: skewY(4deg)</h5>
        <div class="wrapper">
          <div class="box skew23"></div>
        </div>
      </div>
    </div> -->

    <div class="sub">
      <div class="sub-content translate21">
        <h5>transform: translate(100px, 100px);</h5>
        <div class="box"></div>
      </div>
      <div class="sub-content translate22">
        <h5>transform: translate(100px);</h5>
        <div class="box"></div>
      </div>
      <div class="sub-content translate23">
        <h5>transform: translateX(-30px);</h5>
        <div class="box"></div>
      </div>
      <div class="sub-content translate24">
        <h5>transform: translateY(30px);</h5>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content{
  display: flex;
  padding: 20px 100px;
  >:first-child{
    margin-right: 100px;
  }
  >:last-child{
    margin-left: 100px;
  }
}

.img{
  width: 80px;
  >img{
    width: 80px;
  }
  &:hover{
    transform: rotate(45deg)
  }
}
.sub{
  display: flex;
}
.sub-content{
  margin-right: 50px;
  margin-bottom: 20px;
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 2px dotted red;
  }
  .box{
    width: 50px;
    height: 50px;
    background-color: greenyellow;
    &:hover{
      transform: rotate(45deg);
    }
    &.rotate1:hover{
      transform-origin: top left;
    }
    &.rotate2:hover{
      transform-origin: 50px 50px;
    }
    &.rotate3:hover{
      transform-origin: bottom right 60px;
    }
    &.scale:hover{
      transform: scale(1.7);
    }
    &.scale1:hover{
      transform: scale(1.7);
      transform-origin: 0 0;
    }
    &.scale2:hover{
      transform: scale(1.7);
      transform-origin: 100% -30%;
    }
    &.skewX:hover{
      transform: skewX(50deg);
    }
    &.skewX1:hover{
      transform: skewX(50deg);
      transform-origin: 100% -30%;;
    }
    &.skewX2:hover{
      transform: skewY(50deg);
      transform-origin: 100% -30%;
    }
    &.scale21:hover{
      transform: scale(2, 2);
    }
    &.scale22:hover{
      transform: scale(0.5, 0.5);
    }
    &.scale23:hover{
      transform: scaleX(2);
    }
    &.scale24:hover{
      transform: scaleY(2);
    }
    &.skew21:hover{
      transform: skew(30deg, -10deg);
    }
    &.skew22:hover{
      transform: skewX(-30deg);
    }
    &.skew23:hover{
      transform: skewY(4deg);
    }
  }
  &.translate21:hover .box{
    -webkit-transform: translate(100px, 100px);
    -moz-transform: translate(100px, 100px);
    transform: translate(100px, 100px);
  }
  &.translate22:hover .box{
      transform: translate(100px);
    }
  &.translate23:hover .box{
    transform: translateX(-30px);
  }
  &.translate24:hover .box{
    transform: translateY(30px);
  }

  
}

</style>

