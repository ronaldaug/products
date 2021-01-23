<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
body{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
.vs-card-content .vs-card a{
  text-decoration: none;
}

.vs-card-content{
    padding: 10px;
}
.title{
  display: block;
  position: relative;
  margin-top:100px;
  margin-left:50px;
}
.title:after{
  content:'';
  position: absolute;
  top:2px;
  left:-30px;
  width: 3px;
  height: 80%;
  background: #47c93a;
}

button.vs-navbar__item{
  text-transform: capitalize;
}

</style>
