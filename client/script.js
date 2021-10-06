const btn = document.querySelector('#btn')
const reset = document.querySelector('#reset')
const textBox =  document.querySelector('#inputText')



// http request post

const postAxios = () =>{
    axios.post('http://127.0.0.1:3000/post',"helloooo").then(res=>alert(res.data))
    .catch(err=>console.log(err))
}




// const textHandler = async(_value) =>{
//     if (_value){
//         console.log(_value)
//        try{
//         const action = await axios.get('http://127.0.0.1:3000/checker/'+'?value='+_value)
        
//             alert('הפעולה הושלמה בהצלחה')
            
        
//        }
//        catch(e){
//             alert('Please try again latter.')

//        }
//     }
// }

reset.addEventListener('click',()=>{
    if (textBox.value){
        textBox.value=null
    }
})
btn.addEventListener('click',()=>{
    postAxios()
    // textHandler(textBox.value)
    textBox.value=null
})

