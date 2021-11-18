import React,{useState} from 'react'
import axios from 'axios';
import './main.css'

const Post = () => {
    const [clear, setClear] = useState("")
     const submit =(e)=>{
          const dataOb = {
               name: e.target.name.value,
               email: e.target.email.value,
               message: e.target.message.value
          }
          e.preventDefault();
          axios.post('https://admin.srkprojects.com/web/api/client/v1/contact-us/', dataOb)
          .then((res)=>{
               console.log(res.data)
          })

          setClear({
               name: e.target.name.value = '',
               email: e.target.email.value ='',
               message: e.target.message.value = ''
          })
     }
     return (
          <div>
               <form onSubmit={submit}>
               <h1>Post data</h1>

                    <input type="text" name="name"/><br/>
                    <input type="email" name="email"/><br/>
                    <input type="text" name="message"/><br/>
                    <button onClick={clear}>submit</button>

               </form>
          </div>
     )
}

export default Post
