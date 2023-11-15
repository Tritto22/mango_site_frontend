export const painting = {
    namespaced: true,
    state: {
        selectedPainting: JSON.parse(localStorage.getItem('selectedPainting')) || null
    },
    actions: {
        clearSelectedPainting({ commit }) {
            // Rimuovere l'elemento dal localStorage
            localStorage.removeItem('selectedPainting');
            commit('clearSelectedPainting');
        }
    },
    mutations: {
        setSelectedPainting(state, painting) {
        state.selectedPainting = painting;
        },
        clearSelectedPainting(state) {
        state.selectedPainting = null;
        }
    }
}