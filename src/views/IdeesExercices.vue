<template>
    <div class="container">
        <!-- START *CARD-EXERCICES* -->
        <div class="b-exercices d-flex justify-content-center flex-column mt-3">
            <div class="b-exercices__title d-none d-md-inline">Idées D'exercices</div>
            <div class="b-exercices__card-idees row">
                <div class="b-exercices__card-idees__item col-md-6 px-md-2" v-for="item in itemIdees" :key="item.id">
                    <ItemIdeesExercices :title="item.title" />
                </div>
            </div>
        </div>
        <!-- END *CARD-EXERCICES* -->

        <div class="row mt-3 pb-5">
            <div class="col-md-6 ml-auto  px-md-2">
                <!-- ** START: CARD_GROUP_MENU-MAIN ** -->
                <div class="b-card-group__item   d-flex  align-items-center   p-4" v-on:click="toMenuMain">
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
</template>

<script>
    import ItemIdeesExercices from '../components/ItemCard'
    export default {
        name: 'Exercices',
        data() {
            return {
                itemIdees: [{
                        id: 0,
                        title: 'Guide 800 exercices'
                    },
                    {
                        id: 1,
                        title: '200 idées d\'exercices de jeux réduits'
                    },
                    {
                        id: 2,
                        title: '300 idées D\'exercices Physiques - Application'
                    },
                    {
                        id: 3,
                        title: '200 exercices physiques pour le gardien de but'
                    },
                    {
                        id: 4,
                        title: 'Blog'
                    },
                    {
                        id: 5,
                        title: '200 exercices physique pour le futsal'
                    }
                ]
            }
        },
        methods: {
            toMenuMain() {
                this.$router.push('/menu');
            }
        },
        components: {
            ItemIdeesExercices
        }
    }
</script>

<style scoped>
    .b-exercices__title {
        padding: 0px;
        font-family: Montserrat semibold, sans-serif;
        color: #FF0313;
        font-size: 23px;
        text-align: start;
    }

    .b-card-group__item {
        height: 80px;
        background: #232323;
        border-radius: 10px;
        cursor: pointer;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .b-card-group__item:hover {
        background-color: red;
        margin-right: 12px;
    }


    .b-card-group__item div {
        margin: 0px !important;
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

    .b-card-group__item div svg {
        width: 34px;
    }
</style>