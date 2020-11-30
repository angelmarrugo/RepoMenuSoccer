<template>
    <div class="b-card d-flex justify-content-between  p-0 mt-3">
        <p class="b-card__title m-0 align-self-center pl-4">{{title}}</p>
        <div class="content-svg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="164" height="137"
                viewBox="0 0 164 137">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectángulo_716" data-name="Rectángulo 716" width="164" height="137"
                            transform="translate(0 -0.013)" fill="none" stroke="#707070" stroke-width="1" />
                    </clipPath>
                </defs>
                <g id="Enmascarar_grupo_138" data-name="Enmascarar grupo 138" transform="translate(0 0.013)"
                    clip-path="url(#clip-path)">
                    <g id="Grupo_991" data-name="Grupo 991" transform="translate(3.385 -2.602)" opacity="0.6">
                        <path id="Trazado_2713" data-name="Trazado 2713"
                            d="M35.022.3,5,14.1a3.319,3.319,0,0,0-1.919,2.708L.014,49.71A3.319,3.319,0,0,0,1.4,52.725l26.961,19.1a3.319,3.319,0,0,0,3.3.308l30.025-13.8a3.318,3.318,0,0,0,1.919-2.708l3.064-32.9a3.319,3.319,0,0,0-1.386-3.016L38.326.611A3.318,3.318,0,0,0,35.022.3Z"
                            transform="matrix(0.921, -0.391, 0.391, 0.921, 103.43, 64.226)" fill="#bebebe"
                            opacity="0.27" />
                        <path id="Trazado_2714" data-name="Trazado 2714"
                            d="M50.315.436,7.179,20.258a4.769,4.769,0,0,0-2.757,3.891L.021,71.417a4.768,4.768,0,0,0,1.991,4.332L40.746,103.2a4.768,4.768,0,0,0,4.747.442L88.63,83.815a4.767,4.767,0,0,0,2.757-3.89l4.4-47.268A4.768,4.768,0,0,0,93.8,28.324L55.063.878A4.768,4.768,0,0,0,50.315.436Z"
                            transform="translate(0 121.904) rotate(-40)" fill="#bebebe" opacity="0.27" />
                        <path id="Trazado_2715" data-name="Trazado 2715"
                            d="M29.65.257,4.23,11.938A2.81,2.81,0,0,0,2.606,14.23L.012,42.085a2.809,2.809,0,0,0,1.173,2.553L24.011,60.812a2.809,2.809,0,0,0,2.8.26l25.42-11.681A2.81,2.81,0,0,0,53.853,47.1l2.594-27.855a2.81,2.81,0,0,0-1.173-2.553L32.448.517A2.81,2.81,0,0,0,29.65.257Z"
                            transform="matrix(0.891, 0.454, -0.454, 0.891, 71.593, 0)" fill="#bebebe" opacity="0.27" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
    }
</script>

<style scoped>
    .b-card {
        height: 90px;
        background: #0F1010;
        border-radius: 10px;
        border: 0.4px solid #ffffffcb;
        cursor: pointer;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .b-card:hover {
    background-color: rgba(255, 0, 0, 0.507);
    margin-right: 12px;
  }

    .b-card__title {
        color: #FFFFFF;
        font-family: Montserrat semibold;
        font-size: 1.1rem;
        text-align: start;
        line-height: 1.15;
    }

    .b-card div svg {
        height: auto;
        width: 105px;
    }
</style>