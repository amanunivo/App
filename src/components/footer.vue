<template>
  

<footer class="py-5" :class="{ 'footer-main' : homePage } ">
    <div class="container">
        <div class="row"  v-show="homePage">
            <div class="col-lg-7 mx-auto pt-5 footer-girl-section d-flex justify-content-center align-items-center">
               <figure>
                   <img src="../assets/images/footer-girl.png" alt="footer" class="img-fluid">
               </figure>
                <div class="caption text-center">
                    <p class="h1 font-weight-bold">Take the first step and start for free today</p>
                    <a href="#" class="btn btn-dark-pink rounded-full text-white btn-lg px-lg-4 font-weight-bold">Book a free demo</a>
                </div>
            </div>
        </div>
        <div class="row py-3"  v-show="homePage">
            <div class="col-lg-12 d-flex align-items-end flex-wrap if-question-img">
                <img src="../assets/images/footer-question.png" class="question-img" alt="question">
                <h3 class="h1 font-weight-bold text-yellow-light divider-right title-head">Any questions? Contact us anytime </h3>
                <div class="d-flex align-items-center pl-lg-5 my-lg-5 my-3">
                    <ul class="list-unstyled">
                        <li class="d-flex align-items-center mb-2">
                        <span>
                            <img src="../assets/images/icons/mail-icon.png" alt="mail" >
                        </span>
                            <p class="text-white h3">support.jr@amilearn.com</p>
                        </li>
                        <li class="d-flex align-items-center">
                        <span>
                            <img src="../assets/images/icons/call-icon.png" alt="mail" >
                        </span>
                            <p  class="text-white h3">+91-7428793921</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row py-3">
            <div class="col-lg-12 mx-auto mt-lg-5" >
                <ul class="grid grid-col-lg-3 list-unstyled mx-auto">
                    <li>
                        <h3 class="text-pink h5 font-weight-bold">Company</h3>
                        <div>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Home</a>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Aobout Us</a>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Book a Free Demo</a>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Blogs</a>
                        </div>
                    </li>
                    <li>
                        <h3 class="text-pink h5 font-weight-bold">Courses</h3>
                        <div>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Coding Classes for Kids</a>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Yoga Classes for Kids </a>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Maths Classes for Kids </a>
                        </div>
                    </li>
                    <li>
                        <h3 class="text-pink h5 font-weight-bold">Legal</h3>
                        <div>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Terms of Service </a>
                            <a href="#" class="d-inline-block h6 w-100 text-white">Privacy Policy</a>
                        </div>
                    </li>
                </ul>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 mx-auto mt-lg-2">
                <div class="d-flex align-items-center justify-content-center">
                    <h3 class="text-white h5 font-weight-bold mr-lg-3">Company</h3>
                    <div class="d-inline-flex">
                        <a href="#" class="d-inline-block text-white">
                            <img src="../assets/images/icons/yt.png" alt="yt">
                        </a>
                        <a href="#" class="d-inline-block text-white">
                            <img src="../assets/images/icons/fb.png" alt="yt">
                        </a>
                        <a href="#" class="d-inline-block text-white">
                            <img src="../assets/images/icons/tw.png" alt="tw">
                        </a>
                        <a href="#" class="d-inline-block text-white">
                            <img src="../assets/images/icons/in.png" alt="in">
                        </a>
                        <a href="#" class="d-inline-block text-white">
                            <img src="../assets/images/icons/insta.png" alt="insta">
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </div>
    <div class="copyright">
        <hr class="w-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto text-center text-white"> @2020 Amity Future Academy. All rights reserved.</div>
            </div>
        </div>
    </div>
   <figure class="bg-style3"  v-show="homePage">
        <img src="../assets/images/footer-bg.png" alt="footer">
    </figure>
</footer>


<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {  
 computed: {
      homePage: function() {
        if(this.$route.path == "/" || this.$route.path == "/home" ) {
          return true
        } else {
          return false
        }
      }
    }
}
</script>

<style>

</style>