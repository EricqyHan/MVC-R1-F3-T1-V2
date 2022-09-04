const deleteBtn = document.querySelectorAll('.del')
const wishItem = document.querySelectorAll('span.not')
const wishGranted = document.querySelectorAll('span.granted')

//Delete both of these when transitioned from todos to wishes:
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteWish)
})

Array.from(wishItem).forEach((el) => {
    el.addEventListener('click', markGranted)
})

Array.from(wishGranted).forEach((el) => {
    el.addEventListener('click', markWishing)
})

//Delete both of these Arrays/listeners when transitioned from todos to wishes:
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})


async function deleteWish(){
    const wishId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteWish', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'wishIdFromJSFile': wishId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markGranted(){
    const wishId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markGranted', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'wishIdFromJSFile': wishId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markWishing(){
    const wishId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markWishing', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'wishIdFromJSFile': wishId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//
// Delete below this line when we have transitioned to wishes:
//

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}