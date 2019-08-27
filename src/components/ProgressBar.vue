<template>
  <div
      :class="{ hidden: hidden, 'has-error': hasError }"
      :style="{ 'width': `${percent}%` }"
  ></div>
</template>

<script>
  export default {
    data() {
      return {
        hidden: true,
        hasError: false,
        percent: 0
      }
    },
    methods: {
      start() {
        this.hidden = false;
        this.hasError = false;
        this.percent = 0;
        this.timer = setInterval(() => {
          this.percent++;
        }, 100);
      },
      finish() {
        this.hidden = true;
        this.percent = 100;
        clearInterval(this.timer);
      },
      fail() {
        this.hasError = true;
        this.percent = 100;
      }
    }
  }
</script>
