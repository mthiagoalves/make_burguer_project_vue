<template>
  <div>
    <Message :msg="msg" v-show="msg" />

    <div>
      <form id="burguer-form" @submit.prevent="createBurguer($event)">
        <div class="input-container">
          <label for="name">Name client</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="What's your name?"
          />
        </div>
        <div class="input-container">
          <label for="bread">Select your bread</label>
          <select id="bread" name="bread" v-model="breads">
            <option
              :value="breads.type"
              v-for="breads in bread"
              :key="breads.id"
            >
              - {{ breads.type }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="beef">Select your steak type</label>
          <select id="beef" name="beef" v-model="beefs">
            <option :value="beefs.type" v-for="beefs in beef" :key="beefs.id">
              - {{ beefs.type }}
            </option>
          </select>
        </div>
        <div class="input-container" id="opcionais-container">
          <label for="opcionais" id="opcionais-title"
            >Select your addicionals</label
          >
          <div
            class="checkbox-container"
            v-for="optional in opcionalsdata"
            :key="optional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="optional.type"
            />
            <span>{{ optional.type }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Create Burguer!" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
import Ingredients from "../services/ingredients";

export default {
  name: "BurguerForm",

  data() {
    return {
      breads: null,
      beefs: null,
      opcionalsdata: null,
      name: null,
      bread: null,
      beef: null,
      opcionais: [],
      id: null,
      msg: null,
    };
  },

  methods: {
    async getIngredients() {
      Ingredients.list().then(res => {
        this.bread = res.data.breads;
        this.beef = res.data.beefs;
        this.opcionalsdata = res.data.opcionals;
      });
    },

    async createBurguer() {
      const data = {
        id: "",
        name: this.name,
        beef: this.beefs,
        bread: this.breads,
        opcionais: Array.from(this.opcionais),
        status: "Solicited",
      };

      Ingredients.create(data).then((res) => {
        this.msg = `${data.name}, your request N?? ${res.data.id} created sucess! Please, just moment.`;

        setTimeout(() => (this.msg = ""), 3000);
      });

      this.name = "";
      this.bread = "";
      this.beef = "";
      this.opcionais = "";
    },
  },

  mounted() {
    this.getIngredients();
  },

  components: {
    Message,
  },
};
</script>

<style scoped>
#burguer-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 15px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
