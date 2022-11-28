import { createStore } from 'vuex';

const store = createStore({
	//тут храним данные
	state: {},

	// меняем state function(state, payload)
	mutations: {
		removeNote(state, index) {}
	},

	// изменяет мутацию function(context, ...)
	actions: {
		removeNote(context, index) {
			context.commit('removeNote', index);
		}
	},

	// getName.. получаем данные из state
	getters: {}
});

export default store;
