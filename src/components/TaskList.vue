<template>
  <ul>
    <li v-for="(task, index) in tasks"
    :key="index"
    :class="{completed: task.completed }">
    {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Add new task"
      v-model="title"
      @keyup.enter="add()"/>
  </ul>
</template>

<script>
export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    add () {
      // TODO
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      background-color: #FAFAFA;
      border-radius: 3px;
      border-bottom: 1px solid #ccc;
      margin: 0.25rem 0;
      padding: 1rem;

      &.completed {
        background-color: #CFD8DC;
        color: #90A4AE
      }
    }

    input {
      box-sizing: border-box;
      background-color: #ECEFF1;
      border: none;
      border-radius: 3px;
      font-size: 1rem;
      margin: 0.5rem;
      outline: 0;
      padding: 0.75rem 0;
      transition: all 600ms ease;

      &:active,
      &:focus {
        background-color: #FAFAFA;
        border-bottom: 1px solid #ccc;
        margin: 0.85rem 0;
        padding: 1rem;
      }

      &::placeholder {
        color: #90A4AE;
      }
    }
  }
</style>
