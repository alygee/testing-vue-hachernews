<template>
  <form name="email-form" @submit.prevent="onSubmit">
    <input type="email" v-model="email">
    <button type="submit">Submit</button>
    <input
        v-model="enterCompetition"
        value="yes"
        type="radio"
        name="enterCompetition"
    />
    <input
        v-model="enterCompetition"
        value="no"
        type="radio"
        name="enterCompetition"
    />
  </form>
</template>

<script>
  export default {
    data: () => ({
      email: null,
      enterCompetition: 'yes'
    }),
    methods: {
      onSubmit() {
        this.axios.post('http://demo7437963.mockable.io/validate', {
          email: this.email,
          enterCompetition: this.enterCompetition === 'yes'
        });
        this.$emit('form-submitted');
      }
    }
  }
</script>
