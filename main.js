const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
const tasksContainer = document.querySelector('#tasksContainer')
const counter = document.querySelector('#counter')
const progressBar = document.querySelector('#myProgressBar')

let tasks = 1
let taskId = 1
let completedTasks = 0


function progress(){
    if (tasks > 0){
        const perecent = (completedTasks / tasks) * 100
        const result = Math.round(perecent)
        progressBar.style.width = result + "%"
    } else {
        progressBar.style.width = "0%"
    }
}

function renderCounter(){ 

        

        counter.innerHTML = '';
        let taskcounter = tasks
        counterContainer = document.createElement('div')
        completedContainer = document.createElement('div')
        let vara = taskcounter - 1
        counterContainer.textContent = `TASKS: ${vara}`
        completedContainer.textContent = `COMPLETED: ${completedTasks}`
        
        counter.appendChild(counterContainer)
        counter.appendChild(completedContainer)

        progress()
        
        
    
}

btn.addEventListener('click', e=> {
    text = input.value
    if (text !== ''){


        e.preventDefault()
        const task = document.createElement('p')
        const taskContainer = document.createElement('div')
        const deleteBtn = document.createElement('button')
        const currentTaskid = document.createElement('span')
        

        currentTaskid.textContent = ` NUMBER: ${taskId}`
        task.textContent = `TITLE: ${text}`
        taskContainer.appendChild(currentTaskid)
        taskContainer.appendChild(deleteButton(task))  
        taskContainer.appendChild(completeButton(task))  
        taskContainer.appendChild(task)
        tasksContainer.appendChild(taskContainer)
        

        input.value = ''
        tasks = tasks + 1
        taskId = taskId + 1
        renderCounter()
        console.log(tasks)
    }


    
})

function deleteButton(id){

    const addDeleteButton = document.createElement('button')
    addDeleteButton.classList.add('deletebtn')
    addDeleteButton.textContent = 'X'

    addDeleteButton.addEventListener('click', e=> {
        const item = e.target.parentElement
        tasksContainer.removeChild(item)
        tasks = tasks - 1    
        renderCounter()
    })

    return addDeleteButton


}

function completeButton(id){

    const addCompleteButton =  document.createElement('button')
    addCompleteButton.classList.add('completeBtn')
    addCompleteButton.textContent = 'COMPLETE!'

    addCompleteButton.addEventListener('click', e=> {
        completedTasks = completedTasks + 1

        const item = e.target.parentElement
        tasksContainer.removeChild(item)

        tasks = tasks - 1
        
        renderCounter()
    })

    return addCompleteButton

}


