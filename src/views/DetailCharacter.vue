<template>
    <div class="row">
    <div class="col s12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{detail.name}}</span>
          <br>
          <strong> Height : </strong> {{detail.height}} cm<br>
          <strong> Weight : </strong> {{detail.mass}} <br>
          <strong> Hair Color  : </strong> {{detail.hair_color}} <br>
          <strong> Skin Color  : </strong> {{detail.skin_color}} <br>
          <strong> Eye Color  : </strong> {{detail.eye_color}} <br>
          <strong> Gender  : </strong> {{detail.gender}} <br>
        <ul class="collection with-header white-text">
        <li class="collection-header blue-grey"><h4>Films</h4></li>
        <template v-for="(list, i) in detail.films">
            <li :key="i" class="collection-item blue-grey">
              <div>{{list.title}}
                <router-link :to="{ name: 'DetailFilm', params: { id: getId(list.url) }}" class="secondary-content">
                  <i class="material-icons">send</i>
                </router-link>
              </div>
            </li>
        </template>
      </ul>
        </div>
        <!-- <div class="card-action">
          <a href="#">Detail</a>
        </div> -->
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
                name: '',
                height: '',
                mass: '',
                hair_color: '',
                skin_color: '',
                eye_color: '',
                birth_year: '',
                gender: '',
                films: [],
            }    
        }
    },
    created () {
        const id = this.$route.params.id
        this.getDetailCharacter (id)
    },
    methods : {
        async getDetailCharacter (id) {
            try {
                this.$store.commit('setLoading', true)
                await getServiceStarWars.getDetailCharacter(id)
                    .then(data => {
                        this.$store.commit('setLoading', false)
                        this.detail.name = data.name
                        this.detail.height = data.height
                        this.detail.mass = data.mass
                        this.detail.hair_color = data.hair_color
                        this.detail.skin_color = data.skin_color
                        this.detail.eye_color = data.eye_color
                        this.detail.birth_year = data.birth_year
                        this.detail.gender = data.gender
                        // this.detail.character = data.characters
                        data.films.forEach(element => {
                            this.getCharacterbyURL(element)
                        });

                })
            } catch (error) {
                alert('Error')
            }
        },
        async getCharacterbyURL (url) {
            try {
                await getServiceStarWars.getbyUrl(url)
                    .then (data => {
                      const DATA = {
                        title: data.title,
                        url: data.url,
                      }
                      this.detail.films.push(DATA)
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
