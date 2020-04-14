import { HIDE_SIDEBAR, SHOW_SIDEBAR } from '../mutation-types'

export default {
  state: {
    // list: [
    //   {
    //     id: '0',
    //     text: 'Побрить голову',
    //     isDone: true
    //   },
    //   {
    //     id: '1',
    //     text: 'Вырвать зубы',
    //     isDone: false
    //   },
    //   {
    //     id: '2',
    //     text: 'Расчленить на шесть кусков',
    //     isDone: false
    //   },
    //   {
    //     id: '3',
    //     text: 'Скормить свиньям',
    //     isDone: false
    //   },
    // ],
    isVisible: false
  },
  getters: {
    isVisible: state => {
      return state.isVisible;
    },
    // allTasks: state => {
    //   return state.list;
    // },
    // activeTasks: (state, getters) => {
    //   return getters.allTasks.filter(task => !task.isDone);
    // },
    // doneTasks: (state, getters) => {
    //   return getters.allTasks.filter(task => task.isDone);
    // },
    // taskList: (state, getters) => {
    //   switch (getters.filter) {
    //     case 'active':
    //       return getters.activeTasks;
    //     case 'done':
    //       return getters.doneTasks;
    //     default:
    //       return getters.allTasks;
    //   }
    // }
  },
  actions: {
    toggleSidebar: ({ commit, getters }) => {
      console.warn('oh this realy toggled')
      if (getters.isVisible) {
        commit(HIDE_SIDEBAR);
      } else {
        commit(SHOW_SIDEBAR);
      }
    },
    // removeTask: ({ commit, getters }, id) => {
    //   const list = getters.allTasks.filter((task) => task.id !== id);
    //   commit(UPDATE_LIST, list);
    // },
    // setFilter: ({ commit }, filter) => {
    //   commit(UPDATE_FILTER, filter);
    // }
  },
  mutations: {
    [HIDE_SIDEBAR](state) {
      state.isVisible = false;
    },
    [SHOW_SIDEBAR](state) {
      state.isVisible = true;
    },
    // [UPDATE_FILTER](state, filter) {
    //   state.filter = filter;
    // }
  }
}