let projects = document.querySelectorAll(".section1 div div")
let projectsChild = document.querySelectorAll(".section1 div div span")

function proj(){
    for (let i = 0; i < projectsChild.length; i++) {
       
        let elem = projectsChild[i];
        elem.addEventListener("mouseover",function(){
            elem.style.opacity = 1
           
        })
        elem.addEventListener("mouseout",function(){
            elem.style.opacity = 0
            
        })
    }
    for (let i = 0; i < projects.length; i++) {
       
        let elem = projects[i];
        elem.addEventListener("mouseover",function(){
            projectsChild[i].style.opacity = 1
       
           
            
        })
        elem.addEventListener("mouseout",function(){
            projectsChild[i].style.opacity = 0
           
        })
    }

}
proj()
