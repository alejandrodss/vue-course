<template>
  <section>
    <h3><span>My panels</span> ▸ {{ name }}</h3>
    <input
      type="text"
      placeholder="Add a list"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
      <column
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name">
      </column>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Column from '@/components/Column'

export default {
  name: 'board-view',
  components: { Column },
  props: {
    name: String,
    id: String
  },
  data () {
    return {
      listName: ''
    }
  },
  computed: {
    ...mapState([
      'fetchingData'
    ]),
    ...mapGetters([
      'getListsByBoard'
    ]),
    boardList () {
      return this.getListsByBoard(this.id)
    }
  },
  methods: {
    ...mapActions([
      'fetchLists',
      'addColumn'
    ]),
    add () {
      this.addColumn({ name: this.listName, board: this.id })
      this.listName = ''
    }
  },

  created () {
    this.fetchLists({ board: this.id })
  }
}
</script>

<style lang="scss" scoped>
  section {
    text-align: left;

    h3 {
      color: #37474F;
      text-align: left;
      margin: 1.5rem;

      span {
        color: #546E7A;
      }
    }

    input {
      background-color: #607E8B;
      border: 0;
      border-radius: 3px;
      box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03),
        0 2px 5px 0 rgba(49, 49, 93, .1),
        0 1px 2px 0 rgba($color: #000000, $alpha: 0.08);
      color: #607D8B;
      font-size: 1.2rem;
      margin: 0 1rem;
      outline: 0;
      padding: 1rem;
      transition: all 600ms ease;

      &:active,
      &:focus {
        background-color: #FAFAFA;
      }

      &::placeholder {
        color: #FAFAFA;
      }
    }
  }
</style>
