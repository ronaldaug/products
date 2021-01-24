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

*, *::before, *::after {
    box-sizing: border-box;
}

.c-row{
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
}

.c-col{
  flex:0 0 33.33%;
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


@media (max-width: 767px) {
    .c-col{
      flex:0 0 50%;
    }
    .vs-navbar__right{
      display: block;
    }
}

@media (max-width: 400px) {
    .c-row{
      display: block;
    }
    .c-col{
      width: 100%;
    }
    .c-col .vs-card{
      margin:15px auto;
    }
}
</style>
