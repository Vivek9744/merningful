 import Comment from './Comment'
 import QRCode from "react-qr-code";
 export default function Post(props){
    console.log(props)
    return(
        <>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
     
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
       {props.data.head}
      </h1>
      <h4>{props.data.user}</h4><br/>
      <p className="mb-8 leading-relaxed">
        {props.data.body}
      </p>
     
     
      <div className="flex lg:flex-row md:flex-col">
        <h3>Share anywher with Instant QR Code</h3>
      <QRCode
    size={256}
    style={{ align:"center",height: "auto", maxWidth: "80%", width: "80%" }}
    value={`Head:${props.data.head}Body:${props.data.body}`}
    viewBox={`0 0 256 256`}
    />
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     <Comment user={props.user} com={props.data}/>
    </div>
  </div>
</section>

        </>
    )
    
}