<template>
    <div class="home" id="home">
        <h1 class="home__top">Play the litle game</h1>
        <p class="home__text">Choose game mode </p>
        <router-link to="/single">
            <button class="btn btn-dark home__button home__button-first" >Single</button>
        </router-link>
        <router-link to="/multiplayer">
            <button class="btn btn-outline-success home__button">Multiplayer</button>
        </router-link>
    </div>
</template>
<style scoped lang="sass">
    .home
        text-align: center
        background: #ffdddd
        &__text
            font-size: 30px
            color: #2aaddd
        &__button
            width: 100px
            margin-left: 20px
            &-first
                margin-left: 0px
            
</style>