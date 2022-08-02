<template>
  <div>
    <p>componente de mensagem</p>

    <div>
      <form id="burguer-form">
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
          <select id="bread" name="bread" v-model="bread">
            <option value="">Select your bread</option>
            <option value="integral">integeral</option>
          </select>
        </div>
        <div class="input-container">
          <label for="beef">Select your type beef</label>
          <select id="beef" name="beef" v-model="beef">
            <option value="">Select your beef</option>
            <option value="picanha">picanha</option>
          </select>
        </div>
        <div class="input-container" id="opcionais-container">
          <label for="opcionais" id="opcionais-title"
            >Select your addicionals</label
          >
          <div class="checkbox-container">
            <input
              type="checkbox"
              name="opicionais"
              v-model="opicionais"
              value="salame"
            />
            <span>salame</span>
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              name="opicionais"
              v-model="opicionais"
              value="salame"
            />
            <span>salame</span>
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              name="opicionais"
              v-model="opicionais"
              value="salame"
            />
            <span>salame</span>
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
export default {
  name: "BurguerForm",

  data() {
    return {
      breads: null,
      meets: null,
      opcicionals: null,
      name: null,
      bread:null,
      meet: null,
      opcional: [],
      status: "solicited",
      msg: null
    };
  },

  methods: {
    async getIngredients (){
        const req = await fetch("http://localhost:3000");
        const data = await req.json();

        console.log(data);
    }
  },

  mounted() {
    this.getIngredients()
  }
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
