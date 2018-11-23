<template>
  <div style="padding: 30px 100px;">
    <div class="demo1">
      <p>盒子的多个属性一起动画: width, height, background-color, transform. 将光标悬停在盒子上查看动画。</p>
      <div class="box"></div>
    </div>
    <div class="demo2">show me transition!</div>
    <div class="demo3">
      <div class="sidebar">
        <p><a class="menuButton" href="home">Home</a></p>
        <p><a class="menuButton" href="about">About</a></p>
        <p><a class="menuButton" href="contact">Contact Us</a></p>
        <p><a class="menuButton" href="links">Links</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo1{
  margin-bottom: 50px;
  .box{
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    background-color: #0000FF;
    -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    -moz-transition: width 2s, height 2s, background-color 2s, -moz-transform 2s;
    -o-transition: width 2s, height 2s, background-color 2s, -o-transform 2s;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
    &:hover{
      width: 200px;
      height: 200px;
      background-color: #ffcccc;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
.demo2{
  margin-bottom: 50px;
  position: relative;
  font-size: 14px;
  -webkit-transition: font-size 4s 2s;
  -moz-transition: font-size 4s 2s;
  -o-transition: font-size 4s 2s;
  transition: font-size 4s 2s;
  &:hover{
    font-size: 36px;
    -webkit-transition: font-size 4s 2s;
    -moz-transition: font-size 4s 2s;
    -o-transition: font-size 4s 2s;
    transition: font-size 4s 2s;
  }
}
.sidebar{
  display: flex;
  >p:not(:last-child){
    margin-right: 15px;
  }
  .menuButton{
    height: 26px;
    padding: 2px 4px;
    box-shadow: 2px 2px 1px solid;
    border: 1px solid #000;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #666;
    -webkit-transition: color 1s ease-out, background-color 1s ease-out;
    -moz-transition: color 1s ease-out, background-color 1s ease-out;
    -o-transition: color 1s ease-out, background-color 1s ease-out;
    transition: color 1s ease-out, background-color 1s ease-out;
    &:hover{
      color: #000;
      background-color: #fff;
      -webkit-transition: color 1s ease-out, background-color 1s ease-out;
      -moz-transition: color 1s ease-out, background-color 1s ease-out;
      -o-transition: color 1s ease-out, background-color 1s ease-out;
      transition: color 1s ease-out, background-color 1s ease-out;
    }
  }
}

</style>

