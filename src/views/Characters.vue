<template>
<div>
    <div class="row">
    <div class="col s12 m4" v-for="(item, i ) in listCharacter" :key="i">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{item.name}}</span>
          <strong> Height : </strong> {{item.height}} <br>
          <strong> Weight : </strong> {{item.mass}} <br> 
          <strong> Gender  : </strong> {{item.gender}} <br>
        </div>
        <div class="card-action">
          <router-link :to="{ name: 'DetailCharacter', params: { id: getId(item.url) }}">Detail</router-link>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
  <div class="row" style="display: flex;">
        <div class="icon-preview col s6 m3 ">
            <a class="btn-floating btn-large waves-effect waves-light" id="backButton" @click="goTo(back)"><i class="material-icons">arrow_back</i></a>
            </div>
        <div class="icon-preview col s6 m3 ">
           <a class="btn-floating btn-large waves-effect waves-light"  id="nextButton" @click="goTo(next)"><i class="material-icons">arrow_forward</i></a>
            </div>
  </div>
</div>
</template>
<script>
import {getServiceStarWars} from '../service/get.service'
export default {
    data() {
        return {
            listCharacter : []
        }
    },
    created () {
        this.getCharacter()
    },
    methods: {
        async getCharacter() {
            try {
                this.$store.commit('setLoading', true)
                await getServiceStarWars.getListCharacter()
                    .then(data => {
                        this.$store.commit('setLoading', false)
                        this.listCharacter = data.results
                        let next, back
                        this.back = data.previous
                        this.next = data.next
                        next = document.getElementById('nextButton')
                        back =  document.getElementById('backButton') 
                        if (data.next) {
                            next.classList.remove('disabled')
                        } else {
                            next.classList.add('disabled')
                        }
                        if (data.previous) {
                            back.classList.remove('disabled')
                        } else {
                            back.classList.add('disabled')
                        }
                })
            } catch (error) {
                this.$store.commit('setLoading', false)
                alert('Error')
            }
        },
        async getbyUrl (url) {
            try {
                this.$store.commit('setLoading', true)
                await getServiceStarWars.getbyUrl(url)
                    .then(data => {
                        this.$store.commit('setLoading', false)
                        this.listCharacter = data.results
                        this.back = data.previous
                        this.next = data.next
                        let next, back
                        next = document.getElementById('nextButton')
                        back =  document.getElementById('backButton') 
                        if (data.next) {
                            next.classList.remove('disabled')
                        } else {
                            next.classList.add('disabled')
                        }
                        if (data.previous) {
                            back.classList.remove('disabled')
                        } else {
                            back.classList.add('disabled')
                        }
                })
            } catch (error) {
                this.$store.commit('setLoading', false)
                alert('Error')
            }
        },
         getId(url) {
            const a = url.split('/')
            return a[5]
        },
        goTo(action) {
            if (action) {
                this.getbyUrl(action)
            }
        }
    }
}
</script>
<style>
    .size-icon {
        font-size: 40px;
        cursor: pointer;
        background-color: antiquewhite;
        border-radius: 20px;
    }

    .size-icon:hover {
        color: blue;
    }
</style>