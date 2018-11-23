<template>
  <div>
    <h1 id="watchme">Watch me move</h1>
    <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ex amet deleniti, earum ratione assumenda eius laborum nulla minima, unde ullam natus et nostrum labore optio totam laudantium reprehenderit est.</p>
    <ul id="output"></ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$nextTick(() => {
      var e = document.getElementById('watchme')
      e.addEventListener('animationstart', listener, false)
      e.addEventListener('animationend', listener, false)
      e.addEventListener('animationiteration', listener, false)
      e.className = 'slidein'

      function listener(e) {
        var l = document.createElement('li')
        switch(e.type) {
          case 'animationstart':
            l.innerHTML = 'Started: elapsed time is ' + e.elapsedTime
            break
          case 'animationend':
            l.innerHTML = 'Ended: elapsed time is ' + e.elapsedTime
            break
          case 'animationiteration':
            l.innerHTML = 'New loop started at time ' + e.elapsedTime
            break
        }
        document.getElementById('output').appendChild(l)
      }
    })
  }
}
</script>


<style lang="scss" scoped>
.slidein {
  -moz-animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -moz-animation-name: slidein;
  -webkit-animation-name: slidein;
  animation-name: slidein;
  -moz-animation-iteration-count: 3;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
    
@-moz-keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }
      
  to {
    margin-left:0%;
    width:100%;
  }
}

@-webkit-keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }
  
  to {
   margin-left:0%;
   width:100%;
 }
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }
  
  to {
   margin-left:0%;
   width:100%;
 }
}
</style>

