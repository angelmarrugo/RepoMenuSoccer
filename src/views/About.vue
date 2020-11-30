<template>
  <div class="container">
    <div class="flex-container ">
      <div class="flex-item">1111111111111111111111</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
    <div class="flex-item">4</div>
    <div class="flex-item">4</div>
<div class="flex-item">4</div>    
    </div>
  </div>
</template>

<style>
  .flex-container {
     display: flex;
     flex-wrap: wrap;
    width: 600px;
    height: 300px;
      
    align-content: flex-start;
    background-color: red;
  }

  .flex-item {
    background-color: darkseagreen;
   
    flex-basis: auto;
    height: 50px;
    margin: 10px;
    flex-grow: 1;
  }

  .flex-item:nth-child(1){
    order:1;
  }

  .flex-item:nth-child(2){
    order:2;
  }

</style>