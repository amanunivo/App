<template>

<header>
    <nav class="navbar navbar-expand-md navbar-dark position-sticky bg-pink">
        <div class="container">
           <router-link to="/" class="navbar-brand"> 
                <img src="../assets/images/logo.png" height="80" alt="AFA Logo">
            </router-link>  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto mt-2 mt-md-0"> 
                   
                    <li class="nav-item">
                          <router-link to="/" class="nav-link large-menu px-lg-4">Home</router-link>  
                    </li>
                   
                    <li class="nav-item">
                          <router-link  to="/course" class="nav-link large-menu px-lg-4">Course</router-link>  
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link large-menu px-lg-4" href="#">About</a>
                    </li>
                    <li class="nav-item">
                          <router-link  to="/account" class="nav-link large-menu px-lg-4">Sign up or Login</router-link>  
                    </li>
                    <li class="nav-item"> 
                         <router-link  to="/booking" class="btn btn-yellow btn-lg px-lg-4 rounded-full font-weight-bold">Book a Free Demo</router-link>  
                         
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

</template>

<script>

export default {
     methods: {
      open() {
        this.$emit('open');
      },
    }  
  
}
</script>


<style>
 .router-link-active{ 
    color: #fddb00 !important;
 }
</style>
