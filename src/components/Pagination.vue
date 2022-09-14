<template>
  <div class="pagination" v-if="totalPages > 1">
    <div
      v-show="currentPageNumber > 1"
      @click="getPage(currentPageNumber-1)"
    > &lt;
    </div>
    <div
      v-for="page in totalPages"
      :key="page"
      @click="getPage(page)"
      :class="{ active: (page===currentPageNumber)}"
    >
      {{ page }}
    </div>
    <div
      v-show="currentPageNumber < totalPages"
      @click="getPage(currentPageNumber+1)"
    > &gt; </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPageNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    getPage (number) {
      this.$emit('get-page', number)
    }
  }
}
</script>

<style scoped>
  .pagination {
    display: flex;
    gap: 10px;
    margin: 20px;
    width: 400px;
    border: 1px solid gray;
    padding: 10px;
    justify-content: center;
    box-shadow: 2px 2px 2px 1px gray;
  }
  .active {
    color: cadetblue;
  }
</style>
