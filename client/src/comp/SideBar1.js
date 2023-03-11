import jwt_decode from 'jwt-decode'
import React, { useCallback } from "react"
export default function SideBar1(props){
   console.log(props.log)
return(
    <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">Welcome to College Connect <br/>  <p className="leading-relaxed text-base">Start interacting with your batchmates and seniors.</p></h2>
          <div className="md:w-3/5 md:pl-6">
        
            <div className="flex md:mt-4 mt-6">
           <div id="hide">
              <button id="sign1" className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">Sign In</button></div>
              

              <a className="text-blue-400 inline-flex items-center ml-4">Learn More
              {props.Img &&<> <img src={props.Img.picture}/><br/>
              <div>{props.Img.given_name}</div></>}
              { Object.keys(props.Img).length !==0 ? <div><button onClick={props.log} id="sign1" className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">Log Out</button></div> :<></>}
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 74">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
)
}