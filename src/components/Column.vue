<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list
      :listId="listId"
      :tasks="taskList">
    </task-list>
  </section>
</template>

<script>
import TaskList from './TaskList'

export default {
  name: 'column',
  components: { TaskList },
  props: {
    listId: String,
    name: String
  },
  data () {
    return {
      taskList: [
        { id: '1', title: 'Review MDN', completed: false },
        { id: '2', title: 'Learn VueX', completed: false }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    box-sizing: border-box;
    background-color: #ECEFF1;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
        0 2px 5px 0 rgba(49, 49, 93, .1),
        0 1px 2px 0 rgba($color: #000000, $alpha: 0.08);
    margin: 1rem;
    padding: 1rem;
    width: 100%;

    @media screen and (min-width: 600px) {
      width: calc(50% - 2rem - 2px);
    }
    @media screen and (min-width: 1024px) {
      width: calc(33% - 2rem - 2px);
    }
    @media screen and (min-width: 1200px) {
      width: calc(25% - 2rem - 2px)
    }

    header {
      color: #37474F;
      margin: 0;
      padding-bottom: 1rem;
    }
  }
</style>
