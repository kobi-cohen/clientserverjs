const btn = document.querySelector('#btn')
const reset = document.querySelector('#reset')
const textBox =  document.querySelector('#inputText')



// http request post






const textHandler = async(_value) =>{
    if (_value){
        console.log(_value)
        const action = await axios.get('http://127.0.0.1:3000/checker/'+'?value='+_value)
        
    }
}

reset.addEventListener('click',()=>{
    if (textBox.value){
        textBox.value=null
    }
})
btn.addEventListener('click',()=>{
    textHandler(textBox.value)
    textBox.value=null
})