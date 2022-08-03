<template>
  <div id="burguer-table">
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
      <div class="burguer-table-row">
        <div class="order-number">1</div>
        <div>name</div>
        <div>bread</div>
        <div>beef</div>
        <div>
          <ul>
            <li>opcionals</li>
            <li>opcionals</li>
          </ul>
        </div>
        <div>
          <select name="status" class="status">
            <option value="">Select status</option>
          </select>
          <button class="delete-btn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
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
