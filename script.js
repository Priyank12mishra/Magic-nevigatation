var active =3;
var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");
gsap.to(mncircles[active -1],{
    opacity: .5
})




        mncircles.forEach(function(val,index){
            val.addEventListener("click",function(){

            gsap.to("#circle", {
                rotate: (3-(index+1))*10,
                ease: Expo.easeInOut,
                duration: 1

    })
    greyout();
    gsap.to(this,{
        opacity:.5
    })
})
 })

 function greyout(){
    gsap.to(mncircles,{
        opacity :.8
    })

 }
gsap.to("#circle", {
    rotate:0,
    ease: Expo.easeInOut,
    duration: 2,
})

