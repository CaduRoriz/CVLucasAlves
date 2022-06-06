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
            subject: `Contato de ${name} através do site pessoal`, 
            text: req.body.message, 
            html: ` <h1>Contato de formulário </br</h1>
                    <p>Email:${email}</br>
                    <p>Nome: ${name}</br> </p>
                    <p>Mensagem: ${message}</p>
            `, 
    
        });
        
        return res.status(200).send();

    } catch {

        return res.status(400).send();
    }
    

}