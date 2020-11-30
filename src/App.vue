<template>
  <div id="app">
    <div id="nav">
      <div class="container-fluid  px-md-5 d-flex  align-items-center justify-content-between">
        <router-link to="/" class="text-decoration-none">
          <div class="menu_item">
            <svg class="d-md-inline d-none " xmlns="http://www.w3.org/2000/svg" width="57.533" height="59.819"
              viewBox="0 0 57.533 59.819">
              <path id="Trazado_1584" data-name="Trazado 1584"
                d="M52.907,6.976a6.3,6.3,0,0,1,1.1,2.992c.183.855-.122,2.687-1.16,3.3s-1.1.916-1.1,1.649-.122.794-.55.672-.305-.122-.427.061-.366.122-.488.305,0,.244-.366.305-.305.366-.916.366-.55-1.1-.916-1.1-.733,0-.733.183a11.841,11.841,0,0,0,1.1,1.526,5.7,5.7,0,0,1,.427,2.992c0,.794.672.672.672,2.076s.305,1.893.427,1.832S51.2,21.2,51.869,20.225a16.322,16.322,0,0,0,2.015-3.236,13.182,13.182,0,0,1,.794-3.725c.488-.794,1.71-2.2,2.2-1.71a2.106,2.106,0,0,1,.55,2.32,9.447,9.447,0,0,1-1.649,3.6,5.207,5.207,0,0,0-1.221,2.32c-.305.977-1.221,3.908-1.771,5.129s-2.137,3.969-2.809,4.152-1.588-1.343-2.259-2.2S45.58,24.5,45.4,22.973s-.366-2.442-.611-2.442-.916,1.16-1.771,1.588S38.559,23.4,36.91,24.255a19.457,19.457,0,0,0-3.541,2.2c-.611.55-.366.744.122,1.1.672.488,2.442,2.381,4.274,6.411s2.381,5.251,2.687,6.045a2.245,2.245,0,0,1-.733,2.564c-.916.855-2.748,2.076-6.838,2.87s-5.862.693-6.9,1.038c-.733.244-1.038,1.954-1.038,2.809a14.46,14.46,0,0,0,.794,4.579c.55,1.1-.672,2.137-1.649,1.038a7.338,7.338,0,0,1-1.526-4.579c-.122-1.954-2.2-3.3-2.32-4.335s.641-1.984,2.656-2.594,1.832,0,3.114-.366,7.754-3.908,7.754-3.908a44.209,44.209,0,0,1-5.007-3.175,9.665,9.665,0,0,1-1.954-2.87,17.267,17.267,0,0,1-3.725,3.908c-2.137,1.526-3.175,1.893-4.946,3.053s-5.129,3.908-7.632,5.984S5.251,49.93,4.4,52.19a45.424,45.424,0,0,0-1.4,5.068c-.427,1.465-.55,2.442-1.771,2.564S.428,54.937.306,52.861s-.427-3.236-.244-3.725,1.71.183,2.442-.122a6.07,6.07,0,0,0,2.625-3.236c.427-1.465,2.992-6.228,5.129-7.083s3.847-1.588,4.7-2.5,3.175-5.5,3.969-6.228,2.809-1.343,3.419-3.847c.417-1.71.55-3.786,3.236-4.946a26.556,26.556,0,0,0,7.693-5.312c1.282-1.526,3.6-4.7,5.923-5.556a9.145,9.145,0,0,1-1.771-2.748c-.183-.977-.305-2.5-.305-2.5a36.854,36.854,0,0,0-5.129.061,23.238,23.238,0,0,0-2.259,1.038,11.021,11.021,0,0,1-3.114,2.5c-1.4.55-2.259-.305-2.137-1.1s2.137-2.992,2.931-3.114a5.082,5.082,0,0,0,2.32-.855,21.193,21.193,0,0,1,3.053-2.381C33.7.779,35.048.657,35.964.229s1.282-.244,2.442.55,3.236,2.748,3.48,4.335a3.5,3.5,0,0,0,1.771,2.5,12.179,12.179,0,0,1,1.526,2.32S47.015,6.091,48.419,5.6A3.364,3.364,0,0,1,52.907,6.976Z"
                transform="translate(-0.004 -0.005)" fill="#434343" />
            </svg>
            <div class="d-inline menu_item__text pl-md-2">Accueil</div>

          </div>
        </router-link>
        <router-link to="/" class="text-decoration-none">
          <div class="menu_item large">
            <div class="d-md-inline d-none menu_item__text pr-md-2">Menu</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="115.258" height="115.258" viewBox="0 0 115.258 115.258">
              <rect id="Rectángulo_1" data-name="Rectángulo 1" width="81" height="82" rx="15"
                transform="translate(57.983) rotate(45)" fill="#434343" />
              <path id="Trazado_775" data-name="Trazado 775" d="M4.5,18h27"
                transform="matrix(0.719, 0.695, -0.695, 0.719, 57.314, 31.94)" fill="none" stroke="#fff"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
              <path id="Trazado_777" data-name="Trazado 777" d="M4.5,27h27"
                transform="translate(25.939 51.028) rotate(-45)" fill="none" stroke="#fff" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="3" />
            </svg>


          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
  @import "~@/assets/css/global.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  body {
    background: #0F1010 !important;

  }

  #nav {
    padding: 10px 0px;
  }


  .menu_item:hover {
    cursor: pointer;
  }

  .menu_item svg {
    width: auto;
    height: 35px;
  }

  .menu_item.large svg {
    height: 60px;
  }

  .menu_item:hover svg path {
    fill: red;
  }

  .menu_item:hover svg rect {
    fill: red;
  }

  .menu_item:hover .menu_item__text {
    color: red;
  }



  .menu_item__text {
    font-family: Montserrat-bold, sans-serif;
    font-size: 1.4rem;
    color: #434343;

  }
</style>