<template>  
 <!--  <button @click="showModal" class="btn btn-yellow btn-lg px-lg-4 rounded-full font-weight-bold" >Book a Free Demo</button>
  <modalBox  v-show="isModalVisible" @close="closeModal" @open="showModal"  /> -->
  <Header/>
  <router-view /> 
  <Footer/>   
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue' 
import modalBox from './components/modal.vue'
import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
import './assets/js/bootstrap.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    modalBox
  },
  data () {
      return {
        isModalVisible: false,
      };
    },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
