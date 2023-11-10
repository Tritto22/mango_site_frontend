export const painting = {
    namespaced: true,
    state: {
        selectedPainting: JSON.parse(localStorage.getItem('selectedPainting')) || null
    },
    actions: {
        // Azioni per le pitture
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