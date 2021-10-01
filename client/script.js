const btn = document.querySelector('#btn')
const reset = document.querySelector('#reset')
const textBox =  document.querySelector('#inputText')



// http request post

axios.get('http://127.0.0.1:3000/checker')




const textHandler = () =>{
    if (textBox.value){
        console.log(textBox.value)
        textBox.value=null
    }
}

reset.addEventListener('click',()=>{
    if (textBox.value){
        textBox.value=null
    }
})
btn.addEventListener('click',()=>{
    textHandler()
})