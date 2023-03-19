 import Comment from './Comment'
 import QRCode from "react-qr-code";
 import React from 'react';
 import { seePost } from '../service/api';
 import { addComment } from '../service/api';
 export default function Post(props){

  async function handleClick(comment){
    console.log("cloc")
    await addComment(comment)
    getPost()

  }

    console.log(props)
    const [w,setW]=React.useState({})
    const getPost=async()=>{
   
        let response=await seePost(props.data);
    
        setW(response.data)
       
       
        console.log(response.data)
      


        }
        React.useEffect( ()=>{
          getPost()
        },[])
       
        console.log(w)

    return(
        <>
        {Object.keys(w).length===0 ?
   <div className="row">
   <Comment user={props.user} hc={handleClick} com={props.data}/>

   
        <div className="col-md-6 col-xl-4 grid-margin stretch-card">
          
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{props.data.head}</h4>
              <div
                className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel"
                id="owl-carousel-basic"
              >
                <div className="item">
                  <img src="assets/images/dashboard/Rectangle.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="assets/images/dashboard/Img_5.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="assets/images/dashboard/img_6.jpg" alt="" />
                </div>
              </div>
              <div className="d-flex py-4">
                <div className="preview-list w-100">
                  
                  <div className="preview-item p-0">
                    
                    <div className="preview-thumbnail">
                      <img
                        src="assets/images/faces/face12.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">{props.data.user}</h6>
                          <p className="text-muted text-small">{props.data.time}</p>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="blockquote blockquote-primary">
              <p style={{color:"#ffffff"}} className="text-muted">{props.data.body} </p>
            </div>
           
           <div style={{marginBottom:"5%"}}>{props.data.likes.length}  Likes</div>  </div>
          </div>
        </div>
        <div className="col-md-12 col-xl-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
            <div  class="blockquote blockquote-primary">
              <h4 className="card-title">Share anywher with Instant QR Code</h4>
              <QRCode
    size={256}
    style={{ marginLeft:"10%",border:"solid 2px green",align:"center",height: "80%", maxWidth: "80%", width: "80%" }}
    value={`Head:${props.data.head.substring(0,20)}Body:${props.data.body.substring(0,200)}`}
    viewBox={`0 0 256 256`}

    />
            </div>
         </div> </div>
        </div>
      </div>
      
      
      :
      
      
      <div className="row">
      <Comment hc={handleClick} user={props.user} com={w}/>
   
      
           <div className="col-md-6 col-xl-4 grid-margin stretch-card">
             
             <div className="card">
               <div className="card-body">
                 <h4 className="card-title">{w.head}</h4>
                 <div
                   className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel"
                   id="owl-carousel-basic"
                 >
                   <div className="item">
                     <img src="assets/images/dashboard/Rectangle.jpg" alt="" />
                   </div>
                   <div className="item">
                     <img src="assets/images/dashboard/Img_5.jpg" alt="" />
                   </div>
                   <div className="item">
                     <img src="assets/images/dashboard/img_6.jpg" alt="" />
                   </div>
                 </div>
                 <div className="d-flex py-4">
                   <div className="preview-list w-100">
                     
                     <div className="preview-item p-0">
                       
                       <div className="preview-thumbnail">
                         <img
                           src="user.png"
                           className="rounded-circle"
                           alt=""
                         />
                       </div>
                       <div className="preview-item-content d-flex flex-grow">
                         <div className="flex-grow">
                           <div className="d-flex d-md-block d-xl-flex justify-content-between">
                             <h6 className="preview-subject">{w.user}</h6>
                             <p className="text-muted text-small">{props.data.time}</p>
                           </div>
                         
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div>
                 <p style={{color:"#ffffff"}}className="text-muted">{w.body} </p>
               </div>
              
              <div style={{marginBottom:"5%"}}>{w.likes.length}  Likes</div>  </div>
             </div>
           </div>
           <div className="col-md-12 col-xl-4 grid-margin stretch-card">
             <div className="card">
               <div className="card-body">
               <div  class="blockquote blockquote-primary">
                 <h4 className="card-title">Share anywher with Instant QR Code</h4>
                 <QRCode
       size={256}
       style={{ marginLeft:"10%",border:"solid 2px green",align:"center",height: "80%", maxWidth: "80%", width: "80%" }}
       value={`Head:${w.head.substring(0,20)}Body:${w.body.substring(0,200)}`}
       viewBox={`0 0 256 256`}
   
       />
               </div>
            </div> </div>
           </div>
         </div>

      }
        </>
    )
    
}