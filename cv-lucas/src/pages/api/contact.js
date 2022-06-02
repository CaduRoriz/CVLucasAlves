const nodemailer = require('nodemailer')

export default function handleSubmitEmail(req, res){
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        host:'smtp.umbler.com',
        port:'587',
        auth:{
            user: process.env.USERMAIL,
            pass:process.env.PASSMAIL
        }
    });

    transporter.sendMail({
        from: process.env.USERMAIL,
        to: process.env.USERMAIL ,
        subject: `Contato de ${name} através do site pessoal`, 
        text: req.body.message, 
        html: ` <h1>Contato de formulário </br</h1>
                <p>Email:${email}</br>
                <p>Nome: ${name}</br> </p>
                <p>Mensagem: ${message}</p>
        `, 

    }).then((response) => {console.log(response)})
    .catch((error) => { console.log(error)})

}