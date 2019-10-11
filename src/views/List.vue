<template>
    <div class="row">
    <div class="col s12 m4" v-for="item in listFilm" :key="item.episode_id">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{item.title}}</span>
          <p class="opening">{{item.opening_crawl}}</p>
          <br>
          <strong> Director : </strong> {{item.director}} <br>
          <p class="producer"><strong> Producer : </strong> {{item.producer}}  </p><br>
          <strong> Release  : </strong> {{item.release_date}} <br>
        </div>
        <div class="card-action">
            <router-link :to="{ name: 'DetailFilm', params: { id: getId(item.url) }}">Detail</router-link>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>
<script>
import {getServiceStarWars} from '../service/get.service'
export default {
    data() {
        return {
            listFilm : [],
        }
    },
    created () {
        this.getFilm()
    },
    methods: {
        async getFilm() {
            try {
                this.$store.commit('setLoading', true)
                await getServiceStarWars.getListFilm()
                    .then(data => {
                        this.$store.commit('setLoading', false)
                        this.listFilm = data.results.sort((a,b) =>
                        (a.episode_id > b.episode_id) ? 1 : (b.episode_id > a.episode_id) ? -1 : 0)
                })
            } catch (error) {
                this.$store.commit('setLoading', false)
                alert('Gagal')
            }
        },
        getId(url) {
            const a = url.split('/')
            return a[5]
        },
    }
}
</script>
<style>
.opening{
    overflow: hidden;
        max-height: 130px;
        text-overflow: ellipsis;
        word-break: keep-all;
}

.producer {
    overflow: hidden;
    white-space: nowrap;
}
</style>