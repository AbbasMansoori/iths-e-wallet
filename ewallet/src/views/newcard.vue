<template>
  <div class="globalwrap">
    <header>
      <div class="ht">
        <h1>ADD A NEW BANK CARD</h1>
      </div>
    </header>

    <main>
      <section class="inputcard">
        <section class="card" style="background-color: rgb(213, 213, 213)">
          <div class="Top">
            <img src="../assets/chip-light.svg" alt="chip" />
            <img src="../assets/vendor-bitcoin.svg" alt="logo" />
          </div>

          <div class="Middle">
            <h2>XXXX XXXX XXXX XXXX</h2>
          </div>

          <div class="Bottom">
            <div class="owner">
              <h6>CARDHOLDER NAME</h6>
              <h4>FIRSTNAME LASTNAME</h4>
            </div>
            <div class="validto">
              <h6>VALID</h6>
              <h4>XX/XX</h4>
            </div>
          </div>
        </section>
      </section>

      <section class="inputform">
        <form class="primecard" @submit.prevent="primecard" ref="form">
          
          <label for="cardnumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardnumber"
            placeholder="XXXX XXXX XXXX XXXX"
            class="cardnumber"
          />

          <!-- alla tre döps till ownersname  etc -->

          <label for="ownersname">CARDHOLDER NAME</label>
          <input
            type="text"
            name="ownersname"
            placeholder="NAME"
            class="ownersname"
          />

          <div class="validto">
            <div class="valid">
              <label for="valid" class="val2">VALID</label>
              <div class="expire">
                <input
                  type="text"
                  name="vmonth"
                  placeholder="MM"
                  class="valid"
                />
                <input
                  type="text"
                  name="vyear"
                  placeholder="YY"
                  class="valid"
                />
              </div>
            </div>

            <div class="cvc">
              <label for="cvc" class="lcvc">CVC</label>
              <div class="newcvc">
                <input type="text" name="cvc" placeholder="XXX" class="valid" />
              </div>
            </div>
          </div>

          <select name="vendor">
            <option value="bitcoin">Bitcoin</option>
            <option value="ninja">Ninja</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
          </select>

          <button>ADD CARD</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {
        image: "",
        color: "",
        backgroundcolor: "",
        owner: "",
        vendor: "",
        number: "",
        vMonth: "",
        vDay: "",
      },
    };
  },

  methods: {
    primecard() {
      this.card.color = "#ffffff";
      this.card.vDay = this.$refs.form.vyear.value;
      this.card.cvc = this.$refs.form.cvc.value;
      this.card.vendor = this.$refs.form.vendor.value;
      this.card.number = this.$refs.form.cardnumber.value;
      this.card.owner = this.$refs.form.ownersname.value;
      this.card.vMonth = this.$refs.form.vmonth.value;

      if (this.$refs.form.vendor.value == "bitcoin") {
        this.card.image = "bitcoin";
        this.card.backgroundcolor = "#e8d843";
      }
      if (this.$refs.form.vendor.value == "evil") {
        this.card.image = "evil";
        this.card.backgroundcolor = "#ff5252";
      }
      if (this.$refs.form.vendor.value == "ninja") {
        this.card.image = "ninja";
        this.card.backgroundcolor = "#2d2d2d";
      }
      if (this.$refs.form.vendor.value == "blockchain") {
        this.card.image = "blockchain";
        this.card.backgroundcolor = "#a06de8";
      }

      this.$root.newcard(this.card);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="sass" scoped>
.Top
  display: flex
  justify-content: space-between

.card
  cursor: pointer
  max-width: 340px
  height: 190px
  margin: auto
  padding: 16px
  overflow: overlay
  border-radius: 12px

.Bottom
  display: flex
  justify-content: space-between
  text-align: left
  margin: 0

  h6
    margin: 0

  h4
    margin: 0

.primecard
  max-width: 352px
  margin: 50px auto 0 auto
  display: flex
  flex-direction: column

label
  font-size: .6rem
  text-align: left
  margin: 3px 0

input
  padding: 10px
  margin-bottom: 10px
  border-radius: 4px
  border: 1px solid #000

.validto
  display: flex
  justify-content: space-between

.expire
  display: flex
  justify-content: space-between

.valid
  width: 40%
  text-align: left

select
  padding: 15px
  border-radius: 5px
  margin-bottom: 15px

option
  font-weight: normal
  min-height: 1.1em
  padding: 0px 3px 2px
  display: block
  white-space: pre

button
  width: 100%
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

.newcvc
  display: flex
  flex-direction: row-reverse
</style>