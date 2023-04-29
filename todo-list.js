  window.addEventListener("load", ()=>{
    const task_form=document.querySelector(".task-form");
    const container=document.querySelector(".container");
    const task_input=document.querySelector(".task-input");
    const newDate=new Date();
    const dateString= newDate.toString().split(" ");
    const date=document.querySelector(".date").innerHTML=dateString[0] + " " + dateString[1] + " " + dateString[2] + " " + dateString[3] + " " + dateString[4];
    console.log(dateString);
    task_form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const task=task_input.value;
        if(!task){
            alert("please fill in a todo-task");
        }else{
        const content=document.createElement("div");
        content.classList.add("content");

        const task_content=document.createElement("div");

        const task_text=document.createElement("input");
        task_text.type="text";
        task_text.value=task;
        task_text.setAttribute("readonly", "readonly");
        task_text.classList.add("task-text");
        task_content.appendChild(task_text);

        content.appendChild(task_content);

        const actions=document.createElement("div");
        const edit=document.createElement("button")
        edit.type="button";
        edit.innerText="EDIT";
        edit.classList.add("edit-btn")
        actions.appendChild(edit);
        const del=document.createElement("button")
        del.type="button";
        del.innerText="DELETE";
        del.classList.add("delete-btn");
        actions.appendChild(del);
        content.appendChild(actions)

        container.appendChild(content);
        task_input.value="";
        
        edit.addEventListener("click",()=>{
            if(edit.innerText==="EDIT"){
                task_text.removeAttribute("readonly");
                task_text.focus();
                edit.innerText="SAVE";
                task_text.classList.remove("checked");

            }else{
                task_text.setAttribute("readonly", "readonly");
                task_text.classList.add("checked");
                edit.innerText="EDIT";

            }
        } )
        del.addEventListener("click", ()=>{
            content.remove();
        })
        }
        
    }) 
    

})
