<template> 

    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> 
            <h3 class="mb-0 text-dark font-weight-bold">Book a Free Demo Class</h3> 

            <button
              type="button"
              class="btn-close"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
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
        </section>
       
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


<style lang="css" scoped>


.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
   .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  .modal-header,
  .modal-footer {
    padding: 10px 15px;
    display: flex;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #dc3545;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;  
    cursor: pointer;
    font-weight: bold;
    color: #dc3545;
    background: transparent;
  }

  .btn-green { 
    background-color: #dc3545;
    color:#fff;
    border: 1px solid #dc3545;
    border-radius: 2px;
  }
</style>
