<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="logo">ToDo List</div>
                <label for="inputTask">
                    <input
                        id="inputTask"
                        type="text"
                        placeholder="No one will do it but You"
                        :value="inputValue"
                        @input="inpValueNow"
                        @keypress.enter="addTask"
                /></label>
                <input
                    id="buttonAddTask"
                    type="button"
                    value="Enter"
                    @click="addTask"
                />
            </div>
        </div>
        <ul class="ulTo">
            <li
                v-for="(elem, indexElem) in this.$store.state.listTasksVuex"
                :key="indexElem.id"
            >
                {{ elem }}
                <div>
                    <button class="btnDelete" @click="deleteTask(indexElem)">
                        Delete
                    </button>
                </div>
            </li>
        </ul>
        <div v-if="this.$store.state.listTasksVuex.length" class="sumTasks">
            <div>
                <hr v-if="this.$store.state.listTasksVuex.length" />
            </div>
            <div>
                Counter notes: {{ this.$store.state.listTasksVuex.length }}
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
        };
    },
    methods: {
        addTask() {
            if (this.inputValue !== '') {
                this.$store.state.listTasksVuex.push(this.inputValue);
                this.inputValue = '';
            }
        },
        inpValueNow(event) {
            this.inputValue = event.target.value;
        },
        deleteTask(indexElem) {
            this.$store.state.listTasksVuex.splice(indexElem, 1);
        },
    },
};
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    background-color: rgb(255 241 241);
}

.ulTo {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
}

.ulTo li {
    list-style-type: none;
    word-wrap: break-word;
    margin-top: 14px;
    font-size: 30px;
    background-color: rgb(233 182 216);
    border-radius: 10px;
    width: 700px;
}

.header {
    width: 100%;
    background-color: rgb(153, 0, 255);
    text-align: center;
}

.container {
    height: 46px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.header .container .logo {
    font-family: 'Rubik Mono One', sans-serif;
    width: 135px;
    color: #fff700;
    font-size: 30px;
    cursor: pointer;
    text-shadow: 2px 2px 3px rgb(251 255 0 / 45%),
        -2px -2px 3px rgb(255 145 0 / 45%);
    -webkit-text-stroke: 1px #fff700;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    display: flex;
    flex-wrap: wrap;
    margin-right: 5%;
    margin-top: -6px;
}

#inputTask {
    color: rgb(153, 0, 255);
    background-color: rgb(238, 178, 213);
    width: 350px;
    height: 28px;
    border-radius: 7px;
    font-size: 17px;
    margin-right: 5px;
    display: flex;
    flex-wrap: wrap;
    border: black solid 2px;
}

#buttonAddTask {
    color: black;
    background-color: rgb(238, 178, 213);
    border-radius: 7px;
    height: 28px;
    display: flex;
    flex-wrap: wrap;
}

#buttonAddTask:hover {
    color: #ffffff;
    background-color: rgb(94, 255, 0);
}

#inputTaskText {
    text-align: center;
    word-break: break-all;
    margin-left: 102px;
    margin-right: 102px;
    color: rgba(109, 140, 141, 0.781);
}

.liTodo {
    text-align: center;
    list-style-type: none;
    font-size: 27px;
    word-break: break-all;
}

.btnDelete {
    width: 70px;
    height: 30px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-family: 'montserrat';
    text-decoration: none;
    margin: 7px 0;
    border: 2px solid #ff7675;
    padding: 0px 0px;
    text-transform: uppercase;
    overflow: hidden;
    margin-left: 87%;
    border-radius: 7px;
    background-color: blanchedalmond;
}

.btnDelete:hover {
    color: antiquewhite;
    background-color: #ff0000;
}

.sumTasks {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
}

hr {
    margin: 0;
    color: inherit;
    border: 0;
    border-top: 1px solid;
    opacity: 0.25;
    width: 650px;
    display: flex;
    justify-content: center;
}
</style>
