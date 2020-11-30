<template>
  <div class="container">
    <!-- ** START: HOME ** -->
    <div class="b-home d-flex justify-content-center flex-column mt-3">
      <div class="b-home__title d-none d-md-inline">Programmes</div>

      <!-- ** START: CARD_GROUP_COACH ** -->
      <Coachs class="mt-md-3" height="280"/>
      <!-- ** END: CARD_GROUP_COACH ** -->

      <!-- ** START: CARD__HOME ** -->

      <div class="mt-2">
        <div class="row justify-content-end ">
          <div class="col-md-6 px-md-1">

            <div class="b-card-group__item small d-flex align-items-center justify-content-between" v-on:click="toMainMenu">
              <p class="b-card-group__item__title menu m-0 pl-4">Menu Principal</p>
              <svg class="small pr-4" id="Grupo_629" data-name="Grupo 629" xmlns="http://www.w3.org/2000/svg"
                width="50.333" height="50.333" viewBox="0 0 50.333 50.333">
                <g id="Grupo_628" data-name="Grupo 628">
                  <path id="Trazado_1540" data-name="Trazado 1540"
                    d="M118.9,37.037V31.444h10.025L101.44,3.957,105.4,0l27.488,27.488V17.463h5.593V37.037Z"
                    transform="translate(-88.144 13.296)" fill="#8d8d8d" />
                  <path id="Trazado_1541" data-name="Trazado 1541"
                    d="M44.741,5.593H5.593V44.741H25.167v5.593H5.593A5.591,5.591,0,0,1,0,44.741V5.593A5.591,5.591,0,0,1,5.593,0H44.741a5.591,5.591,0,0,1,5.593,5.593V25.167H44.741Z"
                    fill="#8d8d8d" />
                </g>
              </svg>
            </div>

          </div>
        </div>
      </div>
      <!-- ** END: CARD__HOME ** -->

    </div>
    <!-- ** END: HOME ** -->

  </div>
</template>

<script>
import Coachs from '../components/Coachs.vue'

  export default {
    name: 'Home',
    components: {
      Coachs
    },
    methods: {
      toMainMenu() {
        this.$router.push('/menu');
      }
    },
  }
</script>

<style scoped>
  @import "~@/assets/css/global.scss";


  @media (max-width: 575.98px) {
    .b-card-group__item.small {
      height: 65px !important;
    }

    .b-card-group__item svg.small {
      height: 28px !important;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .b-card-group__item.small {
      height: 75px !important;
    }

    .b-card-group__item svg.small {
      height: 33px !important;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .b-card-group__item.small {
      height: 75px !important;
    }

    .b-card-group__item svg.small {
      height: 33px !important;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .b-card-group__item.small {
      height: 75px !important;
    }

    .b-card-group__item svg.small {
      height: 33px !important;
    }
  }

  @media (min-width: 1200px) {}


  .b-home__title {
    padding: 0px;
    font-family: Montserrat semibold, sans-serif;
    color: #FF0313;
    font-size: 23px;
    text-align: start;
  }

  .b-card-group__item {
    height: 280px;
    background: #232323;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .b-card-group__item.small {
    height: 75px;
    background: #232323;
    border-radius: 7px;
  }


  .b-card-group__item:hover {
    background-color: red;
    margin-right: 12px;
  }

  .b-card-group__item.small:hover * {
    fill: white;
  }

  .b-card-group__item__title {
    font-family: Montserrat-bold, sans-serif;
    line-height: 1.2;
    font-size: 1.4rem;
    color: white;
    text-align: start;
  }

  .b-card-group__item__title.menu {
    font-family: Montserrat semibold, sans-serif;
  }


  .b-card-group__item svg.small {
    height: 33px;
    width: auto;
    float: right;
  }
</style>