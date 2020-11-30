<template>
    <div class="">
        <div id="carouselExampleIndicators" class="carousel slide  d-flex align-items-start flex-column"
            data-ride="carousel" data-interval="false">
            <a class="carousel-control-next d-none" href="#carouselExampleIndicators" role="button" data-slide="next"
                id="carouselExampleIndicatorsNext">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <a class="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev"
                id="carouselExampleIndicatorsPrev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <ol class="carousel-indicators py-3 d-sm-none fixed-bottom "
                style="background: #0F1010; width: 100%; margin:0;">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
            </ol>
            <div class="carousel-inner container">
                <div class="carousel-item active ">
                    <!-- ** START: CARD_GROUP ** -->
                    <div class="b-card-group ">
                        <div class="row">
                            <div class="col-md-6 col-8 px-md-1 pr-0">
                                <!-- ** START: CARD_GROUP_ITEM ** -->
                                <div class="b-card-group__item  d-flex justify-content-start align-items-center ">
                                    <p class="b-card-group__item__title extrabold m-0 pl-4">
                                        Commencez-ici
                                    </p>
                                </div>
                                <!-- ** END: CARD_GROUP_ITEM ** -->
                            </div>
                            <div class="col-md-6 col-4 px-md-1">
                                <!-- ** START: CARD_GROUP_ITEM ** -->
                                <div class="b-card-group__item   d-flex justify-content-start align-items-center">
                                    <p class="b-card-group__item__title extrabold m-0 pl-4">
                                        Blog
                                    </p>
                                </div>
                                <!-- ** END: CARD_GROUP_ITEM ** -->
                            </div>
                        </div>
                    </div>
                    <!-- ** START: CARD_GROUP ** -->


                    <!-- ** START: CARD_GROUP_COACH ** -->
                    <Coachs class="mt-2" height="200" />
                    <!-- ** END: CARD_GROUP_COACH ** -->

                    <!-- ** START: CARD_GROUP_OTHERS ** -->
                    <div class="row mt-2">

                        <!-- ** START: CARD_EXERCISES ** -->
                        <div class="col-sm-6 col-md-3 px-md-1 pr-sm-1">
                            <div class="b-card-group__item medium  p-4 d-flex align-items-md-end flex-md-column" v-on:click="toIdeesExercices">
                                <p class="b-card-group__item__title small mr-auto m-0">Exemples<br>d'exercices</p>
                                <div class="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52.518" height="70.024"
                                        viewBox="0 0 52.518 70.024">
                                        <g id="strategy_1_" data-name="strategy (1)" transform="translate(-64)">
                                            <g id="Grupo_617" data-name="Grupo 617"
                                                transform="translate(97.761 41.264)">
                                                <g id="Grupo_616" data-name="Grupo 616">
                                                    <circle id="Elipse_58" data-name="Elipse 58" cx="2.501" cy="2.501"
                                                        r="2.501" fill="#8d8d8d" />
                                                </g>
                                            </g>
                                            <g id="Grupo_619" data-name="Grupo 619"
                                                transform="translate(69.002 11.254)">
                                                <g id="Grupo_618" data-name="Grupo 618">
                                                    <path id="Trazado_1537" data-name="Trazado 1537"
                                                        d="M141.836,82.286h-5v1.25a1.25,1.25,0,0,1-1.25,1.25H108.075a1.25,1.25,0,0,1-1.25-1.25v-1.25h-5a1.252,1.252,0,0,0-1.25,1.25V134.8a1.252,1.252,0,0,0,1.25,1.25h40.014a1.252,1.252,0,0,0,1.25-1.25V83.536A1.252,1.252,0,0,0,141.836,82.286Zm-36.262,20.007a1.25,1.25,0,0,1-.884-2.134l4.118-4.118-4.118-4.118a1.25,1.25,0,1,1,1.768-1.768l4.118,4.118,4.118-4.118a1.25,1.25,0,0,1,1.768,1.768l-4.118,4.118,4.118,4.118a1.25,1.25,0,1,1-1.768,1.768l-4.118-4.118-4.118,4.118A1.247,1.247,0,0,1,105.574,102.293Zm6.252,27.509a5,5,0,1,1,5-5A5.007,5.007,0,0,1,111.826,129.8Zm0-16.256a1.25,1.25,0,0,1,0-2.5A17.53,17.53,0,0,0,129,96.887l-2.54,2.538a1.25,1.25,0,1,1-1.768-1.768l5-5a1.238,1.238,0,0,1,.408-.271,1.254,1.254,0,0,1,1.363.271l5,5a1.25,1.25,0,1,1-1.768,1.768l-3.086-3.086A20.022,20.022,0,0,1,111.827,113.547Zm15,1.25a5,5,0,1,1,5,5A5.007,5.007,0,0,1,126.831,114.8Zm12.138,15.371a1.25,1.25,0,1,1-1.768,1.768l-1.617-1.617-1.617,1.617a1.25,1.25,0,0,1-1.768-1.768l1.617-1.617-1.617-1.617a1.25,1.25,0,1,1,1.768-1.768l1.617,1.617,1.617-1.617a1.25,1.25,0,0,1,1.768,1.768l-1.617,1.617Z"
                                                        transform="translate(-100.572 -82.286)" fill="#8d8d8d" />
                                                </g>
                                            </g>
                                            <g id="Grupo_621" data-name="Grupo 621" transform="translate(89.009 5.002)">
                                                <g id="Grupo_620" data-name="Grupo 620">
                                                    <rect id="Rectángulo_447" data-name="Rectángulo 447" width="2.501"
                                                        height="2.501" fill="#8d8d8d" />
                                                </g>
                                            </g>
                                            <g id="Grupo_623" data-name="Grupo 623"
                                                transform="translate(77.755 51.267)">
                                                <g id="Grupo_622" data-name="Grupo 622">
                                                    <circle id="Elipse_59" data-name="Elipse 59" cx="2.501" cy="2.501"
                                                        r="2.501" fill="#8d8d8d" />
                                                </g>
                                            </g>
                                            <g id="Grupo_625" data-name="Grupo 625" transform="translate(64 6.252)">
                                                <g id="Grupo_624" data-name="Grupo 624">
                                                    <path id="Trazado_1538" data-name="Trazado 1538"
                                                        d="M112.767,45.714h-7.5v2.5h5a3.756,3.756,0,0,1,3.751,3.751v51.267a3.756,3.756,0,0,1-3.751,3.751H70.252a3.756,3.756,0,0,1-3.751-3.751V51.966a3.756,3.756,0,0,1,3.751-3.751h5v-2.5h-7.5A3.756,3.756,0,0,0,64,49.465v56.269a3.756,3.756,0,0,0,3.751,3.751h45.015a3.756,3.756,0,0,0,3.751-3.751V49.465A3.756,3.756,0,0,0,112.767,45.714Z"
                                                        transform="translate(-64 -45.714)" fill="#8d8d8d" />
                                                </g>
                                            </g>
                                            <g id="Grupo_627" data-name="Grupo 627" transform="translate(77.755)">
                                                <g id="Grupo_626" data-name="Grupo 626">
                                                    <path id="Trazado_1539" data-name="Trazado 1539"
                                                        d="M187.666,3.751h-3.2a5.477,5.477,0,0,1-4.392-2.23,3.715,3.715,0,0,0-6,0,5.473,5.473,0,0,1-4.392,2.23h-3.2a1.916,1.916,0,0,0-1.913,1.913v5.589H189.58V5.664A1.915,1.915,0,0,0,187.666,3.751Zm-6.84,3.757A2.5,2.5,0,0,1,178.332,10h-2.513a2.5,2.5,0,0,1-2.495-2.495V5A2.5,2.5,0,0,1,175.819,2.5h2.513A2.5,2.5,0,0,1,180.827,5Z"
                                                        transform="translate(-164.571)" fill="#8d8d8d" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <!-- ** END: CARD_EXERCISES ** -->

                        <!-- ** START: CARD_PROGRAMMES ** -->
                        <div class="col-sm-6 col-md-3 mt-2 mt-sm-0 px-md-1 pl-sm-1">
                            <div class="b-card-group__item medium  p-4 d-flex align-items-md-end flex-md-column">
                                <p class="b-card-group__item__title small mr-auto m-0">Programmes</p>
                                <div class="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49">
                                        <g id="Grupo_693" data-name="Grupo 693" transform="translate(-841 -831)">
                                            <path id="Rectángulo_484" data-name="Rectángulo 484"
                                                d="M6,0H23a0,0,0,0,1,0,0V22a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V6A6,6,0,0,1,6,0Z"
                                                transform="translate(841 831)" fill="#8d8d8d" />
                                            <path id="Rectángulo_487" data-name="Rectángulo 487"
                                                d="M0,0H23a0,0,0,0,1,0,0V22a0,0,0,0,1,0,0H6a6,6,0,0,1-6-6V0A0,0,0,0,1,0,0Z"
                                                transform="translate(841 858)" fill="#8d8d8d" />
                                            <path id="Rectángulo_485" data-name="Rectángulo 485"
                                                d="M0,0H17a6,6,0,0,1,6,6V22a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                                                transform="translate(870 831)" fill="#8d8d8d" />
                                            <path id="Rectángulo_486" data-name="Rectángulo 486"
                                                d="M0,0H23a0,0,0,0,1,0,0V16a6,6,0,0,1-6,6H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                                                transform="translate(870 858)" fill="#8d8d8d" />
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <!-- ** END: CARD_PROGRAMMES ** -->

                        <!-- ** START: CARD_FORMATION ** -->
                        <div class="col-sm-6 col-md-3 px-md-1 mt-2 mt-md-0 pr-sm-1">
                            <div class="b-card-group__item medium  p-4 d-flex align-items-md-end flex-md-column" v-on:click="toFormation">
                                <p class="b-card-group__item__title small mr-auto m-0">Formation</p>
                                <div class="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="51.726" height="68.968"
                                        viewBox="0 0 51.726 68.968">
                                        <g id="stadium" transform="translate(0)">
                                            <path id="Trazado_1542" data-name="Trazado 1542"
                                                d="M25.862,288.827a14.393,14.393,0,0,1-14.079-11.495H0v28.737a2.873,2.873,0,0,0,2.873,2.873H14.368V297.448a2.874,2.874,0,0,1,2.873-2.874H34.483a2.874,2.874,0,0,1,2.873,2.874v11.494H48.852a2.873,2.873,0,0,0,2.873-2.873V277.332H39.941a14.393,14.393,0,0,1-14.079,11.495Zm0,0"
                                                transform="translate(0 -239.975)" fill="#8d8d8d" />
                                            <path id="Trazado_1543" data-name="Trazado 1543"
                                                d="M149.332,0h11.495V8.621H149.332Zm0,0" transform="translate(-129.217)"
                                                fill="#8d8d8d" />
                                            <path id="Trazado_1544" data-name="Trazado 1544"
                                                d="M149.332,448h11.495v8.621H149.332Zm0,0"
                                                transform="translate(-129.217 -387.653)" fill="#8d8d8d" />
                                            <path id="Trazado_1545" data-name="Trazado 1545"
                                                d="M139.795,283.079a8.635,8.635,0,0,0,8.127-5.747H131.668A8.635,8.635,0,0,0,139.795,283.079Zm0,0"
                                                transform="translate(-113.932 -239.975)" fill="#8d8d8d" />
                                            <path id="Trazado_1546" data-name="Trazado 1546"
                                                d="M48.852,0H37.357V11.494a2.874,2.874,0,0,1-2.873,2.874H17.242a2.874,2.874,0,0,1-2.873-2.874V0H2.874A2.873,2.873,0,0,0,0,2.873V31.61H11.784a14.37,14.37,0,0,1,28.158,0H51.726V2.873A2.873,2.873,0,0,0,48.853,0Zm0,0"
                                                transform="translate(-0.001)" fill="#8d8d8d" />
                                            <path id="Trazado_1547" data-name="Trazado 1547"
                                                d="M139.795,192a8.635,8.635,0,0,0-8.127,5.747h16.254A8.635,8.635,0,0,0,139.795,192Zm0,0"
                                                transform="translate(-113.932 -166.137)" fill="#8d8d8d" />
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <!-- ** END: CARD_FORMATION ** -->

                        <!-- ** START: CARD_PLUS ** -->
                        <div class="col-sm-6 col-md-3 px-md-1 d-none  d-sm-inline  mt-2 mt-md-0 pl-sm-1">
                            <div class="b-card-group__item medium  p-4 d-flex align-items-md-end flex-md-column"
                                v-on:click="toVoirPlus">
                                <p class="b-card-group__item__title small mr-auto m-0">Voir plus</p>
                                <div class="mt-auto ">
                                    <svg id="expand" xmlns="http://www.w3.org/2000/svg" width="50.333" height="50.333"
                                        viewBox="0 0 50.333 50.333">
                                        <g id="Grupo_629" data-name="Grupo 629">
                                            <g id="Grupo_628" data-name="Grupo 628">
                                                <path id="Trazado_1540" data-name="Trazado 1540"
                                                    d="M118.9,0V5.593h10.025L101.44,33.08l3.957,3.957L132.884,9.549V19.574h5.593V0Z"
                                                    transform="translate(-88.144)" fill="#8d8d8d" />
                                                <path id="Trazado_1541" data-name="Trazado 1541"
                                                    d="M44.741,44.741H5.593V5.593H25.167V0H5.593A5.591,5.591,0,0,0,0,5.593V44.741a5.591,5.591,0,0,0,5.593,5.593H44.741a5.591,5.591,0,0,0,5.593-5.593V25.167H44.741Z"
                                                    fill="#8d8d8d" />
                                            </g>
                                        </g>
                                    </svg>



                                </div>
                            </div>
                        </div>
                        <!-- ** END: CARD_PLUS ** -->
                        <div class="invisible p-5 d-sm-none"></div>

                    </div>
                    <!-- ** END: CARD_GROUP_OTHERS ** -->
                </div>
                <div class="carousel-item">

                    <div class="row">
                        <div class="col-md-6 col-7 px-md-0">
                            <!-- ** START: CARD_GROUP_NEWSLETTER ** -->
                            <div class="b-card-group__item  d-flex justify-content-start align-items-center ">
                                <p class="b-card-group__item__title extrabold m-0 pl-4">
                                    Newsletter
                                </p>
                            </div>
                            <!-- ** END: CARD_GROUP_NEWSLETTER ** -->
                        </div>
                    </div>

                    <div class="row mt-2 d-flex align-items-stretch">
                        <div class="col-6 col-md-3  pr-1 pl-md-0">

                            <!-- ** START: CARD_GROUP_MEMBRES ** -->
                            <div class="b-card-group__item large  p-4 d-flex align-items-md-end flex-md-column h-100">
                                <p class="b-card-group__item__title small mr-auto m-0">Espace<br>membres</p>
                                <div class="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="72.148" height="50.504"
                                        viewBox="0 0 72.148 50.504">
                                        <path id="Icon_awesome-users" data-name="Icon awesome-users"
                                            d="M10.822,23.894A7.215,7.215,0,1,0,3.607,16.68,7.221,7.221,0,0,0,10.822,23.894Zm50.5,0a7.215,7.215,0,1,0-7.215-7.215A7.221,7.221,0,0,0,61.326,23.894ZM64.933,27.5H57.718a7.194,7.194,0,0,0-5.084,2.1A16.489,16.489,0,0,1,61.1,41.931h7.44a3.6,3.6,0,0,0,3.607-3.607V34.717A7.221,7.221,0,0,0,64.933,27.5Zm-28.859,0A12.626,12.626,0,1,0,23.448,14.876,12.62,12.62,0,0,0,36.074,27.5Zm8.658,3.607H43.8a17.432,17.432,0,0,1-15.444,0h-.936A12.99,12.99,0,0,0,14.43,44.1v3.247a5.412,5.412,0,0,0,5.411,5.411H52.307a5.412,5.412,0,0,0,5.411-5.411V44.1A12.99,12.99,0,0,0,44.732,31.109ZM19.514,29.6a7.194,7.194,0,0,0-5.084-2.1H7.215A7.221,7.221,0,0,0,0,34.717v3.607a3.6,3.6,0,0,0,3.607,3.607h7.429A16.531,16.531,0,0,1,19.514,29.6Z"
                                            transform="translate(0 -2.25)" fill="#8d8d8d" />
                                    </svg>
                                </div>
                            </div>
                            <!-- ** END: CARD_GROUP_MEMBRES ** -->
                        </div>

                        <div class="col-6 col-md-3 pl-1 pr-md-1">
                            <!-- ** START: CARD_GROUP_CONTACTO ** -->
                            <div class="b-card-group__item large  p-4 d-flex align-items-md-end flex-md-column  h-100">
                                <p class="b-card-group__item__title small mr-auto m-0">Contacto</p>
                                <div class="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53.238" height="42.59"
                                        viewBox="0 0 53.238 42.59">
                                        <path id="Icon_material-email" data-name="Icon material-email"
                                            d="M50.914,6H8.324a5.317,5.317,0,0,0-5.3,5.324L3,43.267A5.339,5.339,0,0,0,8.324,48.59h42.59a5.339,5.339,0,0,0,5.324-5.324V11.324A5.339,5.339,0,0,0,50.914,6Zm0,10.648-21.3,13.309L8.324,16.648V11.324l21.3,13.309,21.3-13.309Z"
                                            transform="translate(-3 -6)" fill="#8d8d8d" />
                                    </svg>
                                </div>
                                <!-- ** END: CARD_GROUP_CONTACTO ** -->
                            </div>
                        </div>

                        <div class="col-12 col-md-6 px-md-1 mt-2 mt-md-0">

                            <!-- ** START: CARD_GROUP_FAQ ** -->
                            <div class="b-card-group__item medium  p-4 d-flex align-items-md-end flex-md-column">
                                <p class="b-card-group__item__title small mr-auto m-0">Faq</p>
                            </div>
                            <!-- ** END: CARD_GROUP_FAQ ** -->

                            <div class="d-none d-sm-inline">
                                 <!-- ** START: CARD_GROUP_MENU-MAIN ** -->
                            <div class="b-card-group__item medium  p-4  d-flex align-items-md-end flex-md-column mt-2  "
                                v-on:click="toMenuMain">
                                <p class="b-card-group__item__title small mr-auto m-0">Menu Principal</p>
                                <div class="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50.333" height="50.333"
                                        viewBox="0 0 50.333 50.333">
                                        <path id="Trazado_1540" data-name="Trazado 1540"
                                            d="M118.9,37.037V31.444h10.025L101.44,3.957,105.4,0l27.488,27.488V17.463h5.593V37.037Z"
                                            transform="translate(-88.144 13.296)" fill="#8d8d8d" />
                                        <path id="Trazado_1541" data-name="Trazado 1541"
                                            d="M44.741,5.593H5.593V44.741H25.167v5.593H5.593A5.591,5.591,0,0,1,0,44.741V5.593A5.591,5.591,0,0,1,5.593,0H44.741a5.591,5.591,0,0,1,5.593,5.593V25.167H44.741Z"
                                            fill="#8d8d8d" />
                                    </svg>


                                </div>
                            </div>
                            <!-- ** END: CARD_GROUP_MENU-MAIN ** -->
                            </div>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>




    </div>
</template>

<script>
    import Coachs from '../components/Coachs.vue'
    export default {
        name: 'MenuMain',
        components: {
            Coachs
        },
        methods: {
            toVoirPlus() {

                document.getElementById('carouselExampleIndicatorsNext').click();
            },
            toMenuMain() {
                document.getElementById('carouselExampleIndicatorsPrev').click();
            },
            toIdeesExercices(){
                this.$router.push('/exercices');
            },
            toFormation() {
                this.$router.push('/formation');
            }
        }
    }
</script>

<style scoped>
    @import "~@/assets/css/global.scss";

    @media (max-width: 575.98px) {
        .b-card-group__item.medium {
            height: 68px !important;
            display: flex !important;
            justify-content: space-between;
            align-items: center !important;
            padding: 0;
            margin: 0px;
        }


        .b-card-group__item.medium div {
            margin: 0px !important;
        }

        .b-card-group__item.large{
            height: 250px!important;
        }

    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .b-card-group__item.medium {
            height: 70px !important;
            display: flex !important;
            justify-content: space-between;
            align-items: center !important;
            padding: 0;
            margin: 0px;
        }

        .b-card-group__item.medium div svg {
            width: 24px !important;
        }

        .b-card-group__item div svg {
            width: 24px !important;
        }

        .b-card-group__item.medium div {
            margin: 0px !important;
        }

        .b-card-group__item.large{
            height: 190px!important;
        }

    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .b-card-group__item.medium {
            height: 160px !important;
        }

        .b-card-group__item.medium div svg {
            width: 24px !important;
        }

        .b-card-group__item div svg {
            width: 24px !important;
        }

    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .b-card-group__item .medium {
            height: 280px !important;
        }


    }

    @media (min-width: 1200px) {}

    .b-card-group__item {
        height: 60px;
        background: #232323;
        border-radius: 10px;
        cursor: pointer;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .b-card-group__item.medium {
        height: 170px;
    }

    .b-card-group__item:hover {
        background-color: red;
        margin-right: 12px;
    }

    .b-card-group__item.medium:hover * {
        fill: white;
    }

    .b-card-group__item:hover * {
        fill: white;
    }

    .b-card-group__item__title {
        font-family: Montserrat-bold, sans-serif;
        line-height: 1.2;
        font-size: 1.4rem;
        color: white;
    }

    .b-card-group__item__title.small {
        font-size: 1.1rem;
        line-height: 1.3;
    }

    .b-card-group__item.medium div svg {
        width: 34px;
    }

    .b-card-group__item div svg {
        width: 34px;
    }

    .b-card-group__item__title.extrabold {
        font-family: Montserrat-extrabold, sans-serif;
        font-size: 1.2rem;
    }

    .carousel-indicators li {
        background-color: #707070;
        height: 5px;
    }

    .carousel-indicators .active {
        background-color: red;
    }
</style>