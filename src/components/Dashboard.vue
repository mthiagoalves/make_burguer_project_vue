<template>
  <div id="burguer-table">
    <Message :msg="msg" v-show="msg" />
    <div>
      <div id="burguer-table-heading">
        <div class="order-id">#:</div>
        <div>client</div>
        <div>bread</div>
        <div>beef</div>
        <div>opcionals</div>
        <div>actions</div>
      </div>
    </div>
    <div id="burguer-table-rows">
      <div class="burguer-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.name }}</div>
        <div>{{ burger.bread }}</div>
        <div>{{ burger.beef }}</div>
        <div>
          <ul>
            <li v-for="(options, index) in burger.opcionais" :key="index">
              {{ options }}
            </li>
          </ul>
        </div>
        <div>
          <select
            name="status"
            class="status"
            @change="updateStatus($event, burger.id)"
          >
            <option value="">Select status</option>
            <option
              :value="s.type"
              v-for="s in status"
              :key="s.id"
              :selected="burger.status == s.type"
            >
              {{ s.type }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";


export default {
  name: "Dashboard",

  data() {
    return {
      burgers: null,
      burgers_id: null,
      status: [],
      msg: null,
    };
  },

  components: {
    Message,
  },

  methods: {
    async getRequests() {
      const req = await fetch("http://localhost:3000/burgers");

      const data = await req.json();

      this.burgers = data;

      this.getStatus();
    },

    async getStatus() {
      const req = await fetch("http://localhost:3000/status");

      const data = await req.json();

      this.status = data;
    },

    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      this.msg = `Request Nº ${res.id} DELETED!`;

      setTimeout(() => (this.msg = ""), 5000);

      this.getRequests();
    },

    async updateStatus(event, id) {
      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      console.log(res);

      this.msg = `Request Nº ${res.id} updated to "${res.status}"`;

      setTimeout(() => (this.msg = ""), 5000);
    },
  },

  mounted() {
    this.getRequests()

   
  },
};
</script>

<style scoped>
#burguer-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burguer-table-heading,
#burguer-table-rows,
.burguer-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burguer-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #333;
}

#burguer-table-heading div,
.burguer-table-row div {
  width: 19%;
}

.burguer-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burguer-table-heading .order-id,
.burguer-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
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

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
