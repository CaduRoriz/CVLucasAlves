const nodemailer = require('nodemailer')

export default async function handleSubmitEmail(req, res){
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:'465',
        secure:  true,
        auth:{
            user: process.env.USERMAIL,
            pass:process.env.PASSMAIL
        }
    });

    try{
        await transporter.sendMail({
            from: process.env.USERMAIL,
            replyTo: email,
            to: process.env.MAILBOX ,
            subject: `Contact throught the personal website`, 
            html: ` <h1>Form contact </br</h1>
                     <p>Name: ${name}</p>
                    <p>Email:${email}</p> 
                    <p>Message: ${message}</p>
            `, 
    
        });
        
        return res.status(200).send();

    } catch {

        return res.status(400).send();
    }
    

}