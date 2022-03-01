const router = require('express').Router()
const path = require('path')
const sendEmail= require('../config/nodemailerSetup');

// router.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'../client/landingpage.html'))
// })

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/home.html'))
})

router.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/home.html'))
})

router.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/about.html'))
})

router.get('/project', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/project.html'))
})
router.get('/project-single', (req,res)=>{
    
    res.sendFile(path.join(__dirname,'../client/project-single.html'))
})

router.get('/blog', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/blog.html'))
})

router.get('/blog-single', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/blog-single.html'))
})

router.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname,'../client/contact.html'))
})

router.post('/contact', (req,res)=>{
    
    const {name,email,phone,project,message} = req.body;
    
       const content= `<p>Dear Sir/Madam, </p>
        <table border="1"> 
        <tr>
        <td>Name</td>
        <td>${name}</td>
        </tr>
        <tr>
        <td>Email</td>
        <td> ${email} </td>
        </tr>
        <tr>
        <td>Phone No.</td>
        <td> ${phone} </td>
        </tr>
        <tr>
        <td>Project name</td>
        <td> ${project} </td>
        </tr>
        <tr>
        <td>Message</td>
        <td> ${message}</td>
        </tr>
        </table>
    `;
     
      var mailOptions = {
        from: 'samartht@samarthtsquare.com',
        to: 'samarthtsquare@gmail.com,atharvan650@gmail.com',
        subject: `Enquiry regarding ${project} project`,
        text: ' Dear Sir/Madam ',
        html: content
      };
   
       const messageResponse=sendEmail(mailOptions);
       messageResponse
       .then(data => res.send({dataObject:data}))
       .catch(err => console.log(err) ); 
    //res.send({dataObject:true});

});




module.exports = router