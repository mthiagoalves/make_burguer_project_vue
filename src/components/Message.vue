<template>
    <div class="message-container">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: "Message",

    props: {
        msg: String
    }
}
</script>

<style scoped>
    .message-container{
        color: #23a51d;
        background-color: #85e97f;
        border: 2px solid #52e44d;
        border-radius: 5px;
        padding: 10px;
        max-width: 550px;
        margin: 30px auto;
        text-align: center;
    }
</style>