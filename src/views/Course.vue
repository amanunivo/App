<template>
 
<section class="position-relative py-3 py-md-5 hero-inner-banner">
    <div class="container position-relative h-100">
        <div class="row h-100">
            <div class="col-lg-6  hero-caption">
                <h1 class="display-3 font-weight-bold pt-lg-5 text-purpule">
                    Developed for curious minds
                </h1>
                <p class="lead font-weight-bold text-muted">
                    Amity Future Academy junior courses are empowering passionate and curious minds with joy of learning and building the skills in specific areas
                </p>
                <a class="btn btn-yellow rounded-full btn-lg px-lg-4 font-weight-bold" href="#">Book a Free Demo</a>
            </div>
            <div class="col-lg-6 hero-caption px-0">
                <img src="../assets/images/courses-banner-img.png" class="img-fluid" alt="courses banner">
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
       <div class="col-lg-10 mx-auto">
           
                <div class="row">
                    <div class="col-lg-12">
                       <ul class="list-unstyled d-flex font-weight-bold custom-tabs">
                           <li> 
                              <a href="#" class="d-inline-block px-3 active text-center">
                                  <div>
                                      <img src="src/assets/images/icons/all-check.svg" width="30" alt="check">
                                  </div>
                                  <div>All</div>
                               </a>
                            </li> 
                            <li> 
                              <a href="#" class="d-inline-block px-3 text-center">
                                  <div>
                                      <img src="src/assets/images/icons/coding.svg" width="30" alt="coding">
                                  </div>
                                  <div>Coding</div>
                               </a> 
                            </li>  
                           <li>
                              <a href="#" class="d-inline-block px-3 text-center">
                                  <div>
                                      <img src="src/assets/images/icons/yoga.svg" width="30" alt="yoga">
                                  </div>
                                  <div>Yoga</div>
                               </a>  
                            </li> 
                            <li>
                              <a href="#" class="d-inline-block px-3 text-center">
                                  <div>
                                      <img src="src/assets/images/icons/math.svg" width="30" alt="math">
                                  </div>
                                  <div>Maths</div>
                               </a>  
                            </li>   
                        </ul>    
                    </div>  
                </div>

                <div class="row">  
                    <div class="col-12 mb-3 mb-lg-5">
                        <div class="shadow-sm border d-flex flex-wrap flex-lg-nowrap">
                            <figure class="mb-0 overflow-hidden" style="width:500px">
                                <img src="../assets/images/courses/2.jpg" alt="Coding" height="100%">
                            </figure>
                            <div class="py-3 px-4 w-100">
                                <a href="#" class="text-purple h5 font-weight-bold">Coding for Kids - Beginner </a>
                                <ul class="list-unstyled d-flex text-center w-100 mt-3">
                                    <li class="pr-lg-4 border-right">
                                        <span class="text-muted">Grade</span>
                                        <h4 class="h5 text-pink font-weight-bold">4th to 14th</h4>
                                    </li>
                                    
                                    <li class="px-lg-4 border-right">
                                        <span class="text-muted">Classes</span>
                                        <h4 class="h5 text-pink font-weight-bold">16 Live Sessions</h4>
                                    </li>
                                    
                                    <li class="pl-lg-4">
                                        <span class="text-muted">Duration</span>
                                        <h4 class="h5 text-pink font-weight-bold">1 Month</h4>
                                    </li> 
                                </ul>
                                <div class="d-flex flex-wrap justify-content-between">
                                    <span class="text-muted w-100 mb-0">Price</span>
                                    <div>
                                        <del class="text-pink">₹ 12,500</del> <b class="h4 font-weight-bold text-dark">₹ 7,199</b>
                                    </div>
                                    <div class="text-muted">
                                    (Limited Period Offer)
                                    </div>
                                </div> 
                                <div class="btn-group mt-4"> 
                                    <button class="btn btn-purple rounded-0 btn-sm">Explore Course</button>                            
                                    <button class="btn btn-yellow rounded-0 btn-sm ml-3">Book a Free Demo</button>                            
                                </div> 
                            </div>
                        </div>
                    </div> 
                </div>  
            </div>     
    </div>
</section>
</template>

<script> 
import axios from 'axios'

export default {
  data() {
    return {
      Course: null,
      CourseCategory: null,
    };
  },
  mounted() {
    axios.get('http://13.232.127.167/afaapi/api.php?fn=Course').then((response) => {
      console.log(this.Course = response.data);
    });
    
   axios.get('http://13.232.127.167/afaapi/api.php?fn=CourseCategory').then((response) => {
      console.log(this.CourseCategory = response.data);
    });
  }
};
</script>

<style>
.custom-tabs a{
    color:#333;
} 

.custom-tabs a.active{
    color:#fec708;
} 
</style>