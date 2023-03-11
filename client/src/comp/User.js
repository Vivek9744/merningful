import {getUsers} from "../service/api"
import React from "react"
import ReactDOM from 'react-dom/client';
import Message from './Message'
export default function User(props){
    const [users,setUsers]=React.useState([])
    React.useEffect(()=>{
    getAllUsers()
    },[])
    
    const getAllUsers=async()=>{
        let response=await getUsers();
        setUsers(response.data)
        console.log(response)
        console.log(users)
    }
    function handleMessage(event){
      const root = ReactDOM.createRoot(
        document.getElementById('main')
      );
      
      root.render(
        <>
      raman
      <Message from={props.email} to={event.target.id}/></>
      );
    }
  return(
    <>
    Raman
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {
                users.map(item=>{
                    const k="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    var t;
                    if(item.picture==="gfgh"){
                        t="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    else{
                        t=[item.picture]
                    }
                    return(
                        <>
                         <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={t} />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{item.name}</h2>
              <p className="leading-relaxed text-base">{item.email}</p>
              <button id={item.email} onClick={handleMessage} className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Message</button>
            </div>
            
                        </>
                    )
                })
            }
           
          </div>
        </div>
      </section>
    </>
    )
}