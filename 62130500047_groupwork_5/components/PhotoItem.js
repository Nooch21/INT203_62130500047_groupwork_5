app.component('photo-item',{
    data() {
        return {
            inputSearch: '',
        }
    },
    props: {
        photos: {
            type: Array,
            require: true
        },
        inputSearch: String,
        number: Number,
    },
    
    /*html*/
    template:
    `
    <div class="m-5">
        <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
          <li v-if="filterPhotos.length !== 0" v-for="(photo,index) in filterPhotos">
            <p class="text-lg font-semibold">{{ photo.title }}</p>
            <img :src="photo.src" class="h-48 w-32 cursor-pointer" :alt="photo.title" @click="clickPhoto(photo.number)"
              @dblclick="favor(index)">

            <div class="flex flex-row justify-start space-x-1">
              <p v-if="photo.like > 0"> {{ photo.like }}<span> like</span></p>
              <button @click="favor(index)">
                <i v-if="1 > photo.like" class="material-icons stroke-current text-black">favorite_border</i>
                <i v-else class="material-icons fill-current text-red-500">favorite</i>
              </button>
            </div>
          </li>
          <div v-else>
            <p>No Photo</p>
          </div>    
        </ul>
      </div>

    `,
    methods: {
        favor(index) {
            this.$emit('click-favor', index)
        },
        clickPhoto(number) {
            this.$emit('click-photo', number)
        },
    },
    computed: {
        filterPhotos() {
            return this.photos
        }
    }
})