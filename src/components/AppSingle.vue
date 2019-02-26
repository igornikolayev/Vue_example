<template>
    <div class="single" id="single">
        <div class="single__human" id="humans">
            <div class="single__human__person" id="human__person-1">
                <p class="single__human__name" id="human__person__name-1">Input your name</p>
                <input id="humanFirst" class="form-control" type="text" v-model="nameFirst">
            </div>
            <button class="btn btn-primary single__human-button" id="humanButton" type="button" v-on:click="hideForm">submit</button>
        </div>
        <div id="single__game">
            <p class="single__game__result">{{nameFirst}}, you scored : {{countProfit}} </p>
            <p class="single__game__result">{{messageGame()}}</p>
            <button id="add-button" class="btn btn-success" type="button" v-on:click="randomNumber">add new number</button>
            <ul class="list-group list-unline  single__game__list" v-for="(num) in mathNumber" :key="num.id">
                <li class="list-group-item "> {{num}} </li>
            </ul>
        </div> 
        <div class="single__exit" id="exit">
            <router-link to="/">
                <button class="btn btn-warning" type="button" id="exit-button">Exit</button>
            </router-link>
        </div>
    </div>
</template>
<style>
    .single {
        margin: 100px 300px; 
    }
    .single__human{
        max-width: 400px;
        margin: 100px auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: flex-end
    }
    .single__human-button{
        margin-left: 20px;
    }
    .single__human__name{
        font-size: 30px;
    }
    .single__exit{
        margin-left: 220px;
    }
    #add-button{
        margin-bottom: 10px;
    }
    .single__game__list{
        margin-bottom: 10px;
    }
    
    #single__game{
        display: none;
    }
    .single__game__result{
        font-size: 30px;

    }
</style>
<script>
    export default {
        data() {
            return {
                mathNumber: [],
                countNumber: 0,
                countTotal: 0,
                message: '',
                showMessage: false,
                nameFirst: '',
                nameSecond: ''
            }
        },
        methods: {
            hideForm(){
                document.getElementById("humans").style.display="none"
                document.getElementById("single__game").style.display="block"
                document.getElementById("exit").style.marginLeft=0
            },
            randomNumber() {
                this.mathNumber.push(Math.round(Math.random() * (21) - 10))
                this.countTotal = this.countTotal + this.mathNumber[this.mathNumber.length - 1]
                this.countNumber++
                if (this.countNumber > 5) {
                    this.countNumber = 0
                    this.mathNumber = []
                    this.countTotal = 0
                    this.message = ""
                }
                let button = document.getElementById("add-button")
                button.innerHTML = "add new number"
            },
            messageGame() {
                if (this.countNumber == 5) {
                    let button = document.getElementById("add-button")
                    button.innerHTML = "play new game"
                    if (this.countTotal > 0) {
                        this.message = "you are winner"
                    } else {
                        this.message = "you are looser"
                    }
                }
                return this.message
            }
        },
        computed: {
            countProfit() {
                return this.countTotal
            },
        }
    }
</script>
