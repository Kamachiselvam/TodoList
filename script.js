const input =document.getElementById("demo")
const btn=document.getElementById("btn")
const unlist=document.getElementById("unlist")

let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

function savetasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function rendertask(){
    unlist.innerHTML=""

    tasks.forEach((task,index)=>{
        let li=document.createElement("li")
        li.textContent=task

        let edibtn=document.createElement("button")
        edibtn.textContent="edit"
        edibtn.classList.add("edibtn")
         
        edibtn.addEventListener("click",function(){
            let newvalue=prompt("Edittask:",task)
            if(newvalue!==null&&newvalue.trim()!==""){
                tasks[index]=newvalue
                savetasks();
                rendertask();
            }
        })
         let delbtn=document.createElement("button")
         delbtn.textContent="del"
         delbtn.classList.add("delbtn")

         delbtn.addEventListener("click",function(){
            tasks.splice(index,1)
            savetasks()
            rendertask()
         })
        
        li.appendChild(edibtn)
        li.appendChild(delbtn)
        unlist.appendChild(li)

    })

   

}
rendertask()

btn.addEventListener("click",function(){
    let text=input.value.trim()
    if(text===""){
        alert("Enter a data")
        return;
    }
    tasks.push(text)
    savetasks()
    rendertask()
})