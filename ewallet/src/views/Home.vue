<template>
  <div class="globalwrap">
    <header>
      <div class="ht">
        <h1>E-WALLET</h1>
      </div>
    </header>

    <main>
      <article class="active">
        <h6>ACTIVE CARD</h6>
        <card v-bind:card="cards[this.position]" />
      </article>

      <article class="cardstack">
        <card
          v-for="(card, index) in cards"
          :key="index"
          :card="cards[index]"
          @activated="activated(index)"
        />
      </article>

      <div class="addnewcard">
        <a href="/newcard">ADD A NEW CARD</a>
      </div>
    </main>
  </div>
</template>

<script>
import card from "../components/card.vue";
export default {
  data() {
    return {
      position: 0,
    };
  },
  methods: {
    activated(index) {
      this.position = index;
    },
  },
  components: {
    card,
  },
  computed: {
    cards() {
      return this.$root.card;
    },
  },
};
</script>

<style lang="sass" scoped>
a
  width: 10%
  color: #2d2d2d
  text-decoration: none
  font-weight: 600
  padding: 10px 20px

  display: flex
  justify-content: center
  margin: auto
  margin-top: 20px
  border-radius: 5px
  border: 1px solid #000

.addnewcard
  margin-top: 190px;
    
    
.active
      margin-bottom: 200px;

.card
  margin-Bottom: -150px

  
</style>