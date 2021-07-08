<template>
<div>
    <button @click="decrement">-</button>
    {{ counter }}
    <button @click="increment">+</button>
    <div>{{ message }}</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            messages: [
                { start: 0, end: 9, message: 'Go on with it!' },
                { start: 10, end: 15, message: '頑張って!' },
                { start: 16, end: 25, message: 'Sauba' },
                { start: 26, end: 50, message: 'Good Job' },
            ],
        }
    },
    computed: {
        message() {
            return this.messages
                .find(({start, end}) => this.counter >= start && this.counter <= end)
                .message
        }
    },
    methods: {
        decrement() {
            if (this.counter > 0) this.counter--
        },
        increment() {
            if (this.counter < 50) this.counter++
        },
    }
}
</script>