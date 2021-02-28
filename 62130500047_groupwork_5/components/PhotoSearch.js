app.component('photo-search', {
    data() {
        return {
            searchBoxIsShow: false,
            inputSearch: ''
        }
    },
    props: {
        searchBoxIsShow: Boolean,
        inputSearch: String
    },
     /*html*/
    template:
        `
    <div v-if="searchBoxIsShow" class="my-2">
        <input type="text" v-model="inputSearch"
          placeholder="Please enter text for searching photos"
          class="p-2 bg-white text-black rounded flex-1 h-10 w-4/12 border-2 border-pink-200">
        <button @click="clickCancelBtn" class="bg-pink-400 text-white px-6 h-10 rounded mx-2">Cancel</button>
    </div>

    <div v-else class="flex item-center my-2 h-10">
        <button @click="clickSearchIcon">
          <i class="material-icons">search</i>
        </button>
    </div>

    
    `,
    methods: {
        clickSearchIcon() {
            // this.$emit('click-search')
            this.searchBoxIsShow = true
        },
        clickCancelBtn() {
            // this.$emit('click-cancelbtn')
            this.searchBoxIsShow = false;
            this.inputSearch = ''
        },
    },
    
})