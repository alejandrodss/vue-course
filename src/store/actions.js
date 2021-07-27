import * as types from './mutations-types'
import API from '@/api'

export default {
  // Fetching user's boards via AJAX
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)

    API.getBoardsByUser(user)
      .then(snapshot => commit(types.FETCH_BOARDS_SUCCESS, { boards: snapshot.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },

  // Fetch board's list via AJAX
  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    API.getListsFromBoard(board)
      .then(snapshot => commit(types.FETCH_LISTS_SUCCESS, { lists: snapshot.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  // Fetch list's task via AJAX
  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    API.getTasksFromList(list)
      .then(snapshot => commit(types.FETCH_TASKS_SUCCESS, { tasks: snapshot.val() }))
      .catch(error => commit(types.FETCH_TASKS_FAILURE, { error }))
  },

  // Add new panel
  addBoard ({ commit }, { name }) {
    API.postBoard(name)
      .then(board => commit(types.ADD_BOARD, { board }))
  },

  addColumn ({ commit }, { board, name }) {
    API.postList(board, name)
      .then(column => commit(types.ADD_COLUMN, { column }))
  },

  addTask ({ commit }, { list, title }) {
    API.postTask(list, title)
      .then(task => commit(types.ADD_TASK, { task }))
  },

  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK, { taskId }))
  },

  markAsCompleted ({ commit }, { task }) {
    API.completeTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }))
  }

}
