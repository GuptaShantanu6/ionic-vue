import { createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                { id: 'm1', title: 'Beach', description: 'Goa', image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg"},
                { id: 'm2', title: 'Desert', description: 'Thar', image:"https://thumbs-prod.si-cdn.com/CDwMLi9mtMpLZdyGb4D66XCl8wU=/fit-in/1600x0/https://public-media.si-cdn.com/filer/f2/94/f294516b-db3d-4f7b-9a60-ca3cd5f3d9b2/fbby1h_1.jpg"}
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId)
            } 
        }

    }
});

export default store;