<template>
    <div id="main-container">
        <div id="header">
            <h3>Simple Color Palette Generator</h3>
        </div>
        <color-card-container></color-card-container>
    </div>
</template>

<script>
export default {};
</script>

<style>
* {
    font-family: "Roboto", Helvetica, sans-serif;
}
body {
    margin: 0;
    padding: 0;
}
#main-container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}
#header{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
}
</style>