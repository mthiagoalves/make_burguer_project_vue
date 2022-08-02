<template>
    <div id="main-banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>

export default {
    name: 'Banner',
}
</script>

<style scoped>

    #main-banner{
        background-image: url('/public/img/burguer.jpg');
        background-position: 0 -250px;
        background-size: cover;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    h1{
        font-size: 60px;
        color: #adadad;
        background-color: rgb(34, 34, 34, 70%);
        padding: 20px 65px;
        border-radius: 0 40px 40px 0;
    }

</style>