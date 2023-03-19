const nodemailer=require("nodemailer")
const sendEmail=async(subjects,message,send_to,send_from,reply_to)=>{

    const transporter =nodemailer.createTransport({
/*
       host:"smtp-mail.outlook.com",
        port:"587",
        auth:{
            user:"rmnprj@hotmail.com",
            pass:'raman123',
        },
        tls:{
            rejectUnauthorized:false,
        }
        */
        host:"smtp.gmail.com",
        port:"587",
        auth:{
            user:"collegeconnect121@gmail.com",
            pass:'gvkptbzibjbjxdij',
        },
        tls:{
            rejectUnauthorized:false,
        }

    })
    const options={
        from:"collegeconnect121@gmail.com",
        to:send_to,
        replyTo:reply_to,
        subject:"One time password for College Connect",
        html:`<h1>Welcome to college connct </h1>
        <h2>Connect with your college friends and interact with them at one place </h2>Your otp for login is ${message}`
    }
    //send email
    transporter.sendMail(options,function(err,info){
        if(err){
            console.log("error email send",err)
        }else{
            console.log(info)
        }
    })
}
module.exports=sendEmail