app.component('photo-view', {
    data() {
        return {
            isPhoto: false,
            currentPhoto: '',
            searchBoxIsShow: false,
        }
    },
    props: {
        photos: {
            type: Array,
            require: true
        },
        isPhoto: Boolean,
        currentPhoto: String,
        searchBoxIsShow: Boolean,
    },
    /*html*/
    template: 
    `
    <div v-if="isPhoto" class="bg-black">
        <div class="">
            <div @click="closePhoto" class="flex justify-end mt-2 mr-2">
                <i class="material-icons fill-current text-white cursor-pointer text-4xl">close</i>
        </div>
            <div class="flex justify-center items-center p-10">
                <img :src="currentPhoto.src" :alt="currentPhoto.title"
                class="w-60 h-80 object-cover rounded-lg ring ring-offset-white ring-offset-4">
            </div>
        </div>
    </div>
    `,
    methods: {
        // displayPhoto(number) {
        //     this.$emit('display-photo', number)
        //     this.searchBoxIsShow = false
        //     this.isPhoto = true
        // },
        closePhoto() {
            this.$emit('close-photo')
            this.isPhoto = false
        }
    }
})