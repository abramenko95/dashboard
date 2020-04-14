import { ADD_TASK, UPDATE_LIST, UPDATE_FILTER } from '../mutation-types'

export default {
  state: {
    list: [
      {
        id: '0',
        text: 'Побрить голову',
        isDone: true
      },
      {
        id: '1',
        text: 'Вырвать зубы',
        isDone: false
      },
      {
        id: '2',
        text: 'Расчленить на шесть кусков',
        isDone: false
      },
      {
        id: '3',
        text: 'Скормить свиньям',
        isDone: false
      },
    ],
    filter: 'all'
  },
  getters: {
    filter: state => {
      return state.filter;
    },
    allTasks: state => {
      return state.list;
    },
    activeTasks: (state, getters) => {
      return getters.allTasks.filter(task => !task.isDone);
    },
    doneTasks: (state, getters) => {
      return getters.allTasks.filter(task => task.isDone);
    },
    taskList: (state, getters) => {
      switch (getters.filter) {
        case 'active':
          return getters.activeTasks;
        case 'done':
          return getters.doneTasks;
        default:
          return getters.allTasks;
      }
    }
  },
  actions: {
    addTask: ({ commit, getters }, input) => {
      if (
        input.length &&
        getters.allTasks.find((task) => task.text === input) === undefined
      ) {
        let id = 0;
        if (getters.taskList.length) {
          id = Math.max.apply(null, getters.allTasks.map((element) => { return element.id })) + 1;
        }
        const task = {
          id: id,
          text: input,
          isDone: false
        };
        commit(ADD_TASK, task);
      }
    },
    removeTask: ({ commit, getters }, id) => {
      const list = getters.allTasks.filter((task) => task.id !== id);
      commit(UPDATE_LIST, list);
    },
    setFilter: ({ commit }, filter) => {
      commit(UPDATE_FILTER, filter);
    }
  },
  mutations: {
    [ADD_TASK](state, task) {
      state.list.push(task);
    },
    [UPDATE_LIST](state, list) {
      state.list = list;
    },
    [UPDATE_FILTER](state, filter) {
      state.filter = filter;
    }
  }
}