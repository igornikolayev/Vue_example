<template>
    <div class="single" id="single">
        <div class="single__human" id="humans">
            <div class="single__human__person" id="human__person-1">
                <p class="single__human__name" id="human__person__name-1">Input 1st name</p>
                <input id="humanFirst" class="form-control" type="text" v-model="nameFirst">
            </div>
            
            <div class="single__human__person" id="human__person-2">
                <p class="single__human__name" id="human__person__name-2">Input 2nd name</p>
                <input id="humanSecond" class="form-control" type="text" v-model="nameSecond">
            </div>
            <button class="btn btn-primary single__human-button" id="humanButton" type="button" v-on:click="hideForm">submit</button>
        </div>
        <div id="single__game">
            <p class="single__game__result">{{nameFirst}}, you scored : {{countProfitFirst}} </p>
            <p class="single__game__result">{{nameSecond}}, you scored : {{countProfitSecond}} </p>
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
<style scoped>
    .single__human{
        max-width: 800px;
    }
    .single__human__person{
        margin-left: 20px;
    }
</style>
<script>
    export default {
        data() {
            return {
                mathNumber: [],
                countNumber: 0,
                countNumberFirst: 0,
                countNumberSecond: 0,
                countTotalFirst: 0,
                countTotalSecond: 0,
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
                this.countNumber++
                if (this.countNumber<=5) {
                    this.mathNumber.push(Math.round(Math.random() * (21) - 10))
                    this.countNumberFirst++
                    this.countTotalFirst+=this.mathNumber[this.mathNumber.length-1]
                    if (this.countNumberFirst==5) {
                        this.mathNumber=[]
                        this.countNumberFirst=0
                    } 
                }
                else if (this.countNumber>=6 && this.countNumber<=10) {
                    this.mathNumber.push(Math.round(Math.random() * (21) - 10))
                    this.countNumberSecond++
                    this.countTotalSecond+=this.mathNumber[this.mathNumber.length-1]
                    if (this.countNumberSecond==5) {
                        this.mathNumber=[]
                        this.countNumberSecond=0
                    } 
                }
                if ( this.countNumber==11) {
                    this.countNumber=0
                    this.mathNumber=[]
                }
                if (this.countNumber==0){
                    this.countTotalFirst=0
                    this.countTotalSecond=0
                    this.message='  '
                }
                let button = document.getElementById("add-button")
                button.innerHTML = "add new number"
            },
            messageGame() {
                if (this.countNumber ==10) {
                    let button = document.getElementById("add-button")
                    button.innerHTML = "play new game"
                    if (this.countTotalFirst > this.countTotalSecond) {
                        this.message = this.nameFirst+", you won"
                    } else {
                        this.message = this.nameSecond+", you won"
                    }
                }
                return this.message
            }
        },
        computed: {
            countProfitFirst() {
                return this.countTotalFirst
            },
            countProfitSecond() {
                return this.countTotalSecond
            },
        }
    }
</script>
