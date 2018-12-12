<template>
    <div id="content_UsersHome_Images">
        <h3>Ajouter des photos au chantier</h3>
        <div id="content_input_images">
            <input type=file v-on:click="getImages()" multiple class="flex_container">
        </div>
        <hr>    
    </div>
</template>

<script>
export default {
    name: 'UsersHomeImages',
        data() {
            return {
            }
        },
    components: {
      
    },
    methods : {
        getImages(){
            // code
        }
    }
}
</script>

<style>
#content_UsersHome_Images{
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
}
#content_input_images{
    display: flex;
    justify-content: center;

}
#content_UsersHome_Images input{
    padding: 0.5rem 0;
    border: none;
    border-radius: 3px;
    font-weight: bolder;
    font-size: 15px;  
    color: #fafafa;
    background: #0000ff82;    
}
#content_UsersHome_Images hr{
    margin-top: 2rem;
}

/******* MEDIA QUERIES *******/

@media (max-width: 900px){

}
@media (max-width: 450px){

} 
</style>
