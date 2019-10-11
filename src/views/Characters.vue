<template>
    <div class="row">
    <div class="col s12 m4" v-for="item in listCharacter" >
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{item.title}}</span>
          <p>{{item.opening_crawl}}</p>
          <br>
          <strong> Director : </strong> {{item.director}} <br>
          <strong> Producer : </strong> {{item.producer}} <br> 
          <strong> Release  : </strong> {{item.release_date}} <br>
        </div>
        <div class="card-action">
          <a href="#">Caracters</a>
          <a href="#"></a>
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
            listCharacter : [],
        }
    },
    created () {
        this.getCharacter()
    },
    methods: {
        async getCharacter() {
            try {
                await getServiceStarWars.getListCharacter()
                    .then(data => {
                        console.log(data)
                        // this.listCharacter = data.results
                })
            } catch (error) {

            }
        }
    }
}
</script>