const deleteBtn = document.querySelectorAll('.del')
const wishItem = document.querySelectorAll('h2.not')
const wishGranted = document.querySelectorAll('h2.granted')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteWish)
})

Array.from(wishItem).forEach((el)=>{
    el.addEventListener('click', markGranted)
})

Array.from(wishGranted).forEach((el)=>{
    el.addEventListener('click', markWishing)
})

async function deleteWish(){
    const wishId = this.parentNode.dataset.id
    try{
        const response = await fetch('wishes/deleteWish', {
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
        const response = await fetch('wishes/markGranted', {
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
    console.log('clicked')
    const wishId = this.parentNode.dataset.id
    try{
        const response = await fetch('wishes/markWishing', {
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
        const response = await fetch('wishes/markWishing', {
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

async function markGranted(){
    console.log('clicked')
    const wishId = this.parentNode.dataset.id
    try{
        const response = await fetch('wishes/markGranted', {
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