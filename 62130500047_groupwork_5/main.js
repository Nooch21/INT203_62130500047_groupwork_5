const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello & Welcome, Vue3',
            photos: [{
                    src: './images/90sLove_Haechan.jpeg',
                    title: 'NCT - Haechan',
                    favor: false,
                    like: 0,
                    number: "1"
                },
                {
                    src: './images/90sLove_Jeno.jpeg',
                    title: 'NCT - Jeno',
                    favor: false,
                    like: 0,
                    number: "2"
                },
                {
                    src: './images/90sLove_Mark.jpeg',
                    title: 'NCT - Mark',
                    favor: false,
                    like: 0,
                    number: "3"
                },
                {
                    src: './images/90sLove_Sungchan.jpeg',
                    title: 'NCT - Sungchan',
                    favor: false,
                    like: 0,
                    number: "4"
                },
                {
                    src: './images/90sLove_Ten.jpeg',
                    title: 'NCT - Ten',
                    favor: false,
                    like: 0,
                    number: "5"
                },
                {
                    src: './images/90sLove_Winwin.jpeg',
                    title: 'NCT - Winwin',
                    favor: false,
                    like: 0,
                    number: "6"
                },
                {
                    src: './images/90sLove_Yangyang.jpeg',
                    title: 'NCT - Yangyang',
                    favor: false,
                    like: 0,
                    number: "7"
                }
            ],
            searchBoxIsShow: false,
            inputSearch: '',
            isPhoto: false,
            currentPhoto: '',
        }
    },
    methods: {
        favor(index) {
            this.photos[index].favor = !this.photos[index].favor;
            this.photos[index].like++
        },
        // clickSearchIcon() {
        //     this.searchBoxIsShow = true
        // },
        // clickCancelBtn() {
        //     this.searchBoxIsShow = false
        //     this.inputSearch = ''
        // },
        displayPhoto(number) {
            this.searchBoxIsShow = false
            this.isPhoto = true
            this.currentPhoto = this.photos.filter(p => p.number == number)[0]
        },
        closePhoto() {
            // this.isPhoto = false
            if (this.inputSearch) {
                this.searchBoxIsShow = true
            }
        }
    },
    computed: {
        countPhotos() {
            return this.photos.length
        },
        filterPhotos() {
            if (this.inputSearch) {
                return this.photos.filter(p => p.title.toLowerCase().includes(this.inputSearch.toLowerCase()))
            }
            return this.photos
        }
    }
})
// app.mount('#app')