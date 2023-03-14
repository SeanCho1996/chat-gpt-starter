<script setup>
import { reactive, ref } from 'vue'
import request from '../net/request'

const question = ref('')
const state = reactive({
    list: [{
        content: `It's fine today`, isQuestion: true
    }, {
        content: `That's great to hear! Is there anything I can assist you with today?`, isQuestion: false
    }]
})

const questionHandler = async () => {
    const cache = question.value
    question.value = ''
    state.list.push({ content: cache, isQuestion: true })
    console.log('list', state.list)
    try {
        const answer = await request({
            method: 'post',
            data: {
                prompt: cache
            }
        })
        if (answer) {
            state.list.push({ content: answer, isQuestion: false })
        }
    } catch (e) {
        console.log('e', e);
    }
}
</script>

<template>
    <div class="home">
        <div>
            <div class="fs38">Get Started with ChatGPT API from OpenAI</div>
            <div class="fs20">
                <div>This whole page is created following the demo of <a href="https://youtu.be/9b-Pv-5Av0w">Skolo
                        Online</a>,
                    thanks to their demonstration.
                </div>
                <div>This project is created for educational purposes and demonstrates the use of ChatGPT API from OpenAI.
                    To get
                    started you will need the following:</div>
                <div class="fs16 ml30">OpenAI API Key, which you can get here: <a
                        href="https://openai.com/product#made-for-developers">OpenAI Website</a></div>
            </div>
        </div>

        <div class="content">
            <div class="fs16">A sample chat example is shown below:</div>
            <ul>
                <li v-for="(item, index) in state.list" :key="index" class="li">
                    <img v-if="item.isQuestion" src="../../src/assets/images/owl.png" alt="" class="img">
                    <img v-else src="../../src/assets/images/gpt.png" alt="" class="img">
                    <div class="txt">{{ item.content }}</div>
                </li>
            </ul>
            <div class="question">
                <input type="text" v-model="question" @keyup.enter="questionHandler"
                    placeholder="please input your question" class="ipt">
                <div class="btn" @click="questionHandler">ask ChatGPT</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    margin: 20px auto;
    padding: 0 30px;
}

.fs38 {
    font-size: 38px;
    line-height: 50px;
    font-weight: 500;
}

.fs20 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 300;
}

.fs16 {
    font-size: 16px;
    line-height: 40px;
    font-weight: 400;
}

.ml30 {
    margin-left: 30px;
    position: relative;
}

.ml30::before {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    background: #000;
    position: absolute;
    top: 20px;
    left: -10px;
}

.content {
    margin-top: 40px;
}

.li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    line-height: 32px;
}

.li:not(:last-of-type) {
    border-bottom: none;
}


.img {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
}

.txt {
    margin-left: 16px;
}

.question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 40px;
}

.ipt {
    width: 80%;
    color: #212529;
    border: 1px #dee2e6 solid;
    border-radius: 4px;
    text-indent: 10px;
}

.ipt:focus {
    outline: 1px solid #0b5ed7;
    box-shadow: 0 0 4px rgba(11, 94, 215, .7);
}

.btn {
    color: #fff;
    background: #0d6efd;
    border-radius: 6px;
    padding: 8px 12px;
}

.btn:hover {
    cursor: pointer;
    background: #0b5ed7;
}
</style>
