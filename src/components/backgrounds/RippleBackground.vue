<template>
  <div class="ripple-background">
    <div class="circle xxlarge shade1"></div>
    <div class="circle xlarge shade2"></div>
    <div class="circle large shade3"></div>
    <div class="circle medium shade4"></div>
    <div class="circle small shade5"></div>
  </div>
</template>

<style lang="scss" scoped>
body {
  position: relative;

  background: #3399ff;
}
.ripple-background {
  position: relative;
  height: 100vh; // or a fixed height if you prefer
  overflow: hidden;
}

.circle {
  position: absolute;
  right: 100%;
  border-radius: 50%;
  background: white;
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
}

.small {
  width: 200px;
  height: 200px;
  right: -100px;
  bottom: -100px;
}

.medium {
  width: 400px;
  height: 400px;
  right: -200px;
  bottom: -200px;
}

.large {
  width: 600px;
  height: 600px;
  right: -300px;
  bottom: -300px;
}

.xlarge {
  width: 800px;
  height: 800px;
  right: -400px;
  bottom: -400px;
}

.xxlarge {
  width: 1000px;
  height: 1000px;
  right: -500px;
  bottom: -500px;
}

.shade1 {
  opacity: 0.2;
}
.shade2 {
  opacity: 0.5;
}

.shade3 {
  opacity: 0.7;
}

.shade4 {
  opacity: 0.8;
}

.shade5 {
  opacity: 0.9;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.8);
  }
}
</style>
