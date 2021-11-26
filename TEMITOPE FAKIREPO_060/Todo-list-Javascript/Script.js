const inputList = document.getElementById('todo_text')
const addList = document.getElementById('add_btn')

addList.addEventListener('click',function (){
    if(inputList.value.trim() != 0){
        localItems = JSON.parse(localStorage.getItem('localItem'))

        if(localItems === null){
            taskLists = []
        }
        else{
            taskLists = localItems
        }
        taskLists.push(inputList.value)
        localStorage.setItem('localItem',JSON.stringify(taskLists))
     
    }
   
   listShow()
   })



    function listShow(){

        let shown = ''
        let todoListShow = document.querySelector('.lists')  
        let localItems = JSON.parse(localStorage.getItem('localItem'))

        if(localItems === null){
            taskLists = []
        }
        else{
            taskLists = localItems
        }
        taskLists.forEach((data,index) =>{
            shown += `
            
            <li>${data}<span>
            <i class='bx bxs-trash-alt' style='color:#e20c0c' 
            onclick="deleteLists(${index})">
            </i>
            </span></li>
          
            `
        })
        todoListShow.innerHTML = shown
        inputList.value = ""
        
    }
    listShow()
   
    function deleteLists(index){
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        taskLists.splice(index,1)
        localStorage.setItem('localItem',JSON.stringify(taskLists))
        listShow()
    }


    function clearAll(){
       localStorage.clear()
       listShow()
    }
  