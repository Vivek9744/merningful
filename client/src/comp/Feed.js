import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import React from 'react'
import {posts} from "../service/api"
import {getPosts} from "../service/api"
import Load from './Load';

import ReactDOM from 'react-dom/client';
export default function Feed(props){
  var i=0;
  const d=new Date().toLocaleString()
  const [post,setPost]=React.useState({"time":d,"user":props.props.email})
  console.log(props)
  function handleChange(event){
    
console.log(d)
setPost(old=>{
  return(
    {
      ...old,
      [event.target.id]:event.target.value
    }
  )
  
})
console.log(post)

  }
async function handlePost(){
  
  const p=post;
  await posts(p)
}
const [fpost,setFposts]=React.useState([])
React.useEffect(()=>{
  
getAllPost()
},[])

const getAllPost=async()=>{
  const root = ReactDOM.createRoot(
    document.getElementById('load')
  );
  
  root.render(
    <>
    <Load/>
    </>
  );
    let response=await getPosts();

    setFposts(response.data)
    console.log(response)
    root.render(
      <>
     
      </>
    );
    console.log(fpost)
}
    return(
        <div>
          <div id="load">
            
          </div>
           <div style={{fontSize:20}}> Share a new post in Community</div>
            <div>
        <TextField
        onChange={handleChange}
          id="head"
          label="Post Heading"
          multiline
          maxRows={4}
          defaultValue=""
        />
       
        <TextField
        onChange={handleChange}
          id="body"
          label="Post Content"
          multiline
          rows={4}
          defaultValue=""
        />
        <Stack direction="row" spacing={2}>
      
      <Button onClick={handlePost} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
      </div>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

 

            
{fpost.reverse().map(item=>{
  return(
    <>
    <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.user}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.head}</h1>
                  <p className="leading-relaxed mb-3">{item.body}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
})}







          </div>
        </div>
      </section>
        </div>
    )
}