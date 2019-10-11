<template>
    <div class="row">
    <div class="col s12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{detail.title}} - Episode {{detail.episode }}</span>
          <p>{{detail.opening}}</p>
          <br>
          <strong> Director : </strong> {{detail.director}} <br>
          <strong> Producer : </strong> {{detail.producer}} <br>
          <strong> Release  : </strong> {{detail.release}} <br>
        <ul class="collection with-header white-text">
        <li class="collection-header blue-grey"><h4>Characters</h4></li>
        <template v-for="(list, i) in detail.character">
            <li :key="i" class="collection-item blue-grey">
              <div>{{list.name}}
                <router-link :to="{ name: 'DetailCharacter', params: { id: getId(list.url) }}" class="secondary-content">
                  <i class="material-icons">send</i>
                </router-link>
              </div></li>
        </template>
      </ul>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>
<script>
import { getServiceStarWars} from '../service/get.service'
export default {
    data() {
        return {
            detail :  {
                title: '',
                episode: '',
                opening: '',
                director: '',
                producer: '',
                release: '',
                character: [],
            }    
        }
    },
    created () {
        const id = this.$route.params.id
        this.getDetailFilm (id)
    },
    methods : {
        async getDetailFilm (id) {
            try {
                this.$store.commit('setLoading', true)
                await getServiceStarWars.getDetailFilm(id)
                    .then(data => {
                        // console.log(data)
                        this.$store.commit('setLoading', false)
                        this.detail.title = data.title
                        this.detail.episode = data.episode_id
                        this.detail.opening = data.opening_crawl
                        this.detail.director = data.director
                        this.detail.producer = data.producer
                        this.detail.release = data.release_date
                        // this.detail.character = data.characters
                        data.characters.forEach(element => {
                            this.getCharacterbyURL(element)
                        });

                })
            } catch (error) {
              this.$store.commit('setLoading', false)
                alert('Error')
            }
        },
        async getCharacterbyURL (url) {
            try {
                await getServiceStarWars.getbyUrl(url)
                    .then (data => {
                      const DATA = {
                        name: data.name,
                        url: data.url,
                      }
                      this.detail.character.push(DATA)
                    })
            } catch (error) {
              alert('Error')
            }
        },
         getId(url) {
            const a = url.split('/')
            return a[5]
        },
    }
}
</script>
