<template>  
  <button @click="showModal" class="btn btn-yellow btn-lg px-lg-4 rounded-full font-weight-bold" >Book a Free Demo</button>
  <Header/>
  <router-view /> 
  <Footer/>   
  <modalBox  v-show="isModalVisible" @close="closeModal"  />
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue' 
import modalBox from './components/modal.vue'

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
