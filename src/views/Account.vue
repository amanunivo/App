<template> 

    <div class="container">
        <div class="col-lg-6 mx-auto p-3 my-5"> 
            <slot name="body" >
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                    <a class="nav-link active  mb-0 h5 font-weight-bold" data-toggle="tab" href="#Login">Sign In</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link h5 mb-0  font-weight-bold" data-toggle="tab" href="#Register">Register</a>
                    </li> 
                </ul>

                <!-- Tab panes -->
                <div class="tab-content shadow border-left border-right border-bottom py-5 px-3">
                    <div class="tab-pane container active" id="Login">
                         <div class="form-group"> 
                            <input type="email" placeholder="Email" class="form-control">
                        </div> 
                        <div class="form-group"> 
                            <input type="password" placeholder="Password" class="form-control">
                        </div>
                        <div class="form-group mt-5"> 
                            <button class="btn btn-block btn-purple">Login</button>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div class="tab-pane container fade" id="Register">
                        <div class="form-group"> 
                            <input type="text" placeholder="Frist Name" class="form-control">
                        </div>
                        <div class="form-group"> 
                            <input type="text" placeholder="Last Name" class="form-control">
                        </div>
                        <div class="form-group"> 
                            <input type="number" placeholder="Phone Number" class="form-control">
                        </div>
                        <div class="form-group"> 
                            <input type="email" placeholder="Email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Select Class</label>
                            <select name="" class="form-control" id="">
                                <option value="">class</option>
                            </select>
                        </div>
                        <div class="form-group"> 
                            <input type="password" placeholder="Password" class="form-control">
                        </div>
                        <div class="form-group mt-5"> 
                            <button class="btn btn-block btn-purple">Register</button>
                        </div>
                    </div> 
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

 