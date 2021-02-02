<template> 

    <div class="container">
        <div class="col-lg-6 mx-auto p-lg-5 p-3 shadow my-5">
        
         <slot name="body" >
           <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Prents’s Name">
          </div>
           <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Prents’s Email ID">
          </div> 
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Mobile Number">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Student’s Name">
          </div>
          <div class="form-group">
            <select name="" id=""  class="form-control">
              <option value="Select Grade">Select Grade</option>
            </select>
          </div>
          <div class="form-group custom-check-box">
            <label for="" class="w-100">Select Category</label>
            <div class="check-tabs-container d-flex justify-content-around">
              <div class="form-check-inline sahdow">
              <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="">
               <div class="custom-label">
                 <img src="src/assets/images/icons/coding.svg" alt="coding">
                 <b>Coding</b>
               </div>
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value=""> 
               <div class="custom-label">
                <img src="src/assets/images/icons/yoga.svg" alt="yoga">
                <b>Yoga</b>
              </div>
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" >
               <div class="custom-label">
                <img src="src/assets/images/icons/math.svg" alt="math">
                <b>Math</b>
              </div>
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="">
               <div class="custom-label">
               <img src="src/assets/images/icons/chess-pieces.svg" alt="chess-pieces">
               <b>Chess</b>
              </div>
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" >
               <div class="custom-label">
               <img src="src/assets/images/icons/abacus.svg" alt="abacus">
               <b>Abacus</b>
              </div>
              </label>
            </div> 
            </div>
          </div>
          <div class="form-group"> 
            <select name="" id=""  class="form-control">
              <option value="Select Grade">Select Course</option>
            </select>
          </div>
           <div class="form-group mt-3"> 
             <button class="btn btn-purple btn-block">Book a Free Demo</button>
          </div> 
            <div class="form-check-inline">
              <label>
               <input type="checkbox" value=""> 
               <small class="ml-2">By registering here, I agree to Mastree Terms & Conditions and Privacy Policy</small>
              </label>
            </div>
          </slot>
    </div>
    </div>

</template>

<script> 
export default {
    name: 'modal', 
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script> 

<style>
.router-link-active.btn{
        color: #000 !important;
}
</style>

 