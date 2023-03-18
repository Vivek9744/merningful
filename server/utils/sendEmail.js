const nodemailer=require("nodemailer")
const sendEmail=async(subjects,message,send_to,send_from,reply_to)=>{

    const transporter =nodemailer.createTransport({
        host:"smtp-mail.outlook.com",
        port:"587",
        auth:{
            user:"rmnprj@outlook.com",
            pass:'18113114ramp',
        },
        tls:{
            rejectUnauthorized:false,
        }

    })
    const options={
        from:"rmnprj@outlook.com",
        to:send_to,
        replyTo:reply_to,
        subject:"One time password for College Connect",
        html:`<h1>Welcome to college connct </h1>Your otp for login is ${message}`
    }
    //send email
    transporter.sendMail(options,function(err,info){
        if(err){
            console.log("error")
        }else{
            console.log(info)
        }
    })
}
module.exports=sendEmail