<template>
  <section
    class="card"
    :style="{ backgroundColor: card.backgroundcolor }"
    @click="$emit('activated')"
  >
    <div class="Top">
      <img src="../assets/chip-light.svg" alt="chip" />
      <img
        v-bind:src="require('../assets/vendor-' + card.image + '.svg')"
        alt="logo"
      />
    </div>

    <div class="Middle">
      <h2 :style="{ color: card.color }">{{ card.number }}</h2>
    </div>

    <!-- färgkoder mm. -->

    <div class="Bottom">
      <div class="owner">
        <h6 style="color: #ffffff">CARDHOLDER NAME</h6>

        <h4 :style="{ color: card.color }">{{ card.owner }}</h4>
      </div>
      <div class="validto">
        <h6 style="color: #ffffff">VALID</h6>
        <h4 :style="{ color: card.color }">
          {{ card.vMonth }}/{{ card.vDay }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style lang="sass" scoped>
.Top
  display: flex
  justify-content: space-between

.card
  padding: 15px
  overflow: overlay
  border-radius: 15px
  cursor: pointer
  max-width: 340px
  height: 190px
  margin: auto

.Bottom
  display: flex
  text-align: left
  margin: 0
  justify-content: space-between

  h4
    margin: 0

  h6
    margin: 0
</style>