const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyparser = require("body-parser");
const database = require("mysql");
const { application, request, response } = require("express");
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const util = require('util');
// const dbHandler = require("");

const add = express();
add.use(cors());
add.use(fileUpload());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static("public"));

let a = database.createConnection({
    host: "localhost",
    user: "root",
    password: "saba@1933",
    database: "cricket"
});

a.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("db connected");
    }
});
add.get('/cricketDetails', (request, response) => {
    console.log(request);
    a.query('select id,pname,age,country from cricket_table', (error, result) => {
        if (error) {
            console.log(error);
        } else {
            response.send(result);
        }

    })
})

// userlist insert API
add.post('/add', (request, response) => {
    try {
        console.log(JSON.stringify(request.body));
        let { first_name, last_name, gender, dob, email, phone_number, password, status, effective_from, effective_to, created_by, created_on, modified_by, modified_on } = request.body;
        const id = Math.floor(Math.random() * 1000) + 1;
        
        if (id != null && first_name != null && last_name != null && email != null && phone_number != null && password != null) {
            let sql = 'insert into user_details(id,first_name,last_name,gender,dob,email,phone_number,password,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on) values(?,?,?,?,?,?,?,?,?,current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp(),?,?)';
            a.query(sql, [id, first_name, last_name, gender, dob, email, phone_number, password, "A", effective_from, effective_to, created_by, created_on, modified_by, modified_on], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                }
            })
        } else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }
    } catch (e) {
        response.send(e);
    }
})

// cricketformat insert API
add.post('/format', (request, response) => {
    try {
        console.log(JSON.stringify(request.body));
        let {format_name, format_desc, format_url, status, effective_from, effective_to, created_by, created_on, modified_by, modified_on } = request.body;
       
        if (format_name != null) {
            let sql = 'insert into cricket_format(format_name,format_desc,format_url,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on) values(?,?,?,?,current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp(),?,?)';
            a.query(sql, [ format_name, format_desc, format_url, status, effective_from, effective_to, created_by, created_on, modified_by, modified_on ], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                }
            })
        } else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }
    } catch (e) {
        response.send(e);
    }
})

//cricket format get API
add.get('/formatGet', (request, response) => {
    try{
    // console.log(request);
    try{
      
        a.query('select format_name,format_desc,format_url from cricket_format where status="A"', (error, result) => {
            if (error) {
                console.log(error);
            } else {
                // console.log(result);
               response.send(result);
            }
        })       
    }catch (apperror) {
        response.send(apperror);
        response.send("Status: success");
    }
    }catch (systemerror) {
        response.send(systemerror);
    }
    });

// cricketformat update

add.put('/formatUpdate', (request, response) => {
    try {
        console.log(JSON.stringify(request.body));
        let { format_name, modified_by, modified_on } = request.body;
        
        if (format_name != null) {
            let sql = 'update cricket_format set format_name=?,modified_by=?, modified_on=current_timestamp() where id=?';
            a.query(sql, [format_name, modified_by, modified_on, id], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                }
            })
        } else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }
    } catch (e) {
        response.send(e);
    }
})

//cricket teamlist insert API
add.post('/teamlistInsert', (request, response) => {
    try {
        console.log(JSON.stringify(request.body));
        let {country_code,country_name,country_url,country_desc, status, effective_from, effective_to, created_by, created_on, modified_by, modified_on } = request.body;
       
        if (country_name != null) {
            let sql = 'insert into cricket_teams(country_code,country_name,country_url,country_desc,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on) values(?,?,?,?,?,current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp(),?,?)';
            a.query(sql, [country_code, country_name,country_url,country_desc,"A", effective_from, effective_to, created_by, created_on, modified_by, modified_on ], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                }
            })
        } else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }
    } catch (e) {
        response.send(e);
    }
})





//cricket teamlist get API
add.get('/teamlistGet', (request, response) => {
    try{
    // console.log(request);
    try{
      
        a.query('select country_code,country_name,country_url ,country_desc from cricket_teams where status="A"', (error, result) => {
            if (error) {
                console.log(error);
            } else {
                // console.log(result);
               response.send(result);
            }
        })       
    }catch (apperror) {
        response.send(apperror);
        response.send("Status: success");
    }
    }catch (systemerror) {
        response.send(systemerror);
    }
    });

//cricket players insert API
add.post('/playerInsert',(request,response)=>{
    try{
        console.log(request);
        try{
            console.log(JSON.stringify(request.body));
            let{country_code,country_flag,player_format,player_name,player_rank,player_image,status, effective_from, effective_to, created_by, created_on, modified_by, modified_on}=request.body;
            if(player_name!=null){
                let sql = 'insert into cricket_players(country_code,country_flag,player_format,player_name,player_rank,player_image,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on) values(?,?,?,?,?,?,?,current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp(),?,?)';
            a.query(sql, [country_code, country_flag,player_format,player_name,player_rank,player_image,"A", effective_from, effective_to, created_by, created_on, modified_by, modified_on], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                    console.log(result);
                }
            })
            }else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }

        }catch (apperror) {
        response.send(apperror);
        // response.send("Status: success");
    }
    }catch (systemerror) {
        response.send(systemerror);
    }
});

//cricket players get API
add.get('/playerGet/:player_format/:country_code',(request,response)=>{
try{
    console.log(request.params);
    try{
        let{player_format,country_code}=request.params
       let sql= 'select sNo,country_code,country_flag,player_format,player_name,player_rank,player_image from cricket_players where status="A" and player_format=? and  country_code=?';
            a.query(sql,[player_format,country_code],(error,result)=>{ 
            if(error){
               let e= {'status':'error'}
               response.send(e);
               console.log(e);
            }else{
                // let s={'status':'success'}      
                // response.send(s);
                response.send(result)
            }
        });
        
    }catch (apperror) {
        response.send(apperror);
        response.send("Status: success");
    }
    
}catch (systemerror) {
    response.send(systemerror);
}
});


//players details insert API
add.post('/playerDetails',(request,response)=>{
    try{
        console.log(request);
        try{
            console.log(JSON.stringify(request.body));
            let{player_id,player_age,player_dob,player_role,player_gender,player_country,player_score,status, effective_from, effective_to, created_by, created_on, modified_by, modified_on}=request.body;
            if(player_id!=null){
                let sql = 'insert into player_details(player_id,player_age,player_dob,player_role,player_gender,player_country,player_score,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on) values(?,?,?,?,?,?,?,?,current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp(),?,?)';
            a.query(sql, [player_id,player_age,player_dob,player_role,player_gender,player_country,player_score,"A", effective_from, effective_to, created_by, created_on, modified_by, modified_on], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                    console.log(result);
                }
            })
            }else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }

        }catch (apperror) {
        response.send(apperror);
      
    }
    }catch (systemerror) {
        response.send(systemerror);
    }
});


//player details get API
add.get('/playerdetailsGet/:player_id',(request,response)=>{
    try{
        console.log(request.params);     
        try{
            let{player_id}=request.params
           let sql= 'select cp.player_image,cp.player_name,player_age,player_dob,player_role,player_gender,player_country,player_score from cricket_players cp join player_details pd on cp.sNo=pd.player_id where cp.status="A" and pd.status="A" and pd.player_id=?';
                a.query(sql,[player_id],(error,result)=>{ 
                if(error){
                   let e= {'status':'error'}
                   response.send(e);
                   console.log(e);
                }else{
                    // let s={'status':'success'}      
                    // response.send(s);
                    response.send(result)
                }
            });
            
        }catch (apperror) {
            response.send(apperror);
            response.send("Status: success");
        }
        
    }catch (systemerror) {
        response.send(systemerror);
    }
    });




add.listen(60, () => {
    console.log('server is running on 60 port');
})


//login check API
add.post("/login", (request, response) => {

    const { email, password } = request.body;
    const sql = "SELECT * FROM user_details WHERE email = ? and status='A'";
    a.query(sql, [email], (error, results) => {
        if (error) {
            console.log(error);
            const a = { status: "error" };
            response.send(a);
        } else {
            if (results.length > 0) {
                const user = results[0];
                if (user.password === password) {
                    // Login successful
                    const a = { status: "success", userId: user.id };
                    response.send(a);
                    console.log(a);
                    console.log("Login successful!");
                } else {
                    // Incorrect password
                    const a = { status: "error", message: "Incorrect password" };
                    response.send(a);
                }
            } else {
                // User not found
                const a = { status: "error", message: "User not found" };
                response.send(a);
            }
        }
    });
});



add.get('/schedulejob', (request, response) => {
    try{
    // console.log(request);
    try{
       schedule.scheduleJob('3 * * * * *', ()=> {
        a.query('select id,first_name,last_name,gender,dob,email,phone_number from user_details where status="A"', (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                console.log(new Date());
            }
        })
        })
        // console.log("success");
           
    }catch (apperror) {
        response.send(apperror);
        response.send("Status: success");
    }
    }catch (systemerror) {
        response.send(systemerror);
    }
    });

    // function sendMail(){
    //     try{
    //     var transports;
    //     transports = nodemailer.createTransport({
    //         host:"127.0.0.1",
    //         port:587,
    //         secure:false,
    //         auth:{
    //             user:'sabariwatson7@gmail.com',
    //             pass:'9047274221'
    //         }
    //         // tls:{
    //         //     rejectUnauthorized:false,
    //         //     minVersion:"TLSv1.2"
    //         // },
    //     })
    //     try {
    //         if(transports){

    //             var templateMessage = "welcome";
    //             var msg = util.format(templateMessage,"Hello")
    //             var mailOptions = {
    //                 from:'sabariwatson7@gmail.com',
    //                 to:'sarun9025@gmail.com',
    //                 subject:"subject",
    //                 text: msg,
    //                 html: '<b>hi hello</b>'
                    
    //             };
    //             transports.sendMail(mailOptions=(error,info) => {
    //                 if(error){
    //                     console.log("unable to send Email: ", "subject"," : ",error);
    //                 } else{
    //                     console.log(info);
    //                 }
                   
    //             });
    //         }else{
    //             console.log("Email is switched off. Email Not send with subject[","subject","]");
    //         }
    //     } catch(er) {
    //         console.log('err');
    //         console.lo
    //     }
    // }catch(error){

    //     console.log(error);
    // }
    // }
    // sendMail();


    //nodemailer
    function Email(){
    let transporter = nodemailer.createTransport({
        service:'gmail',
        host:" smtp.hostinger.com",
         port:465,
        auth:{
            user:'sabariwatson7@gmail.com',
            pass:'9047274221'
        }
    });
    let mailOptions ={
        from:'sabariwatson7@gmail.com',
        to:'narikuttam7@gmail.com',
        subject:'sending email successfully',
        text:'that was easy'
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log('email sent: '+info.response);
        }
    })
}
Email();


    add.get("/getPlayers/:player_format/:country_code",(req,res)=>{
        try{
            try{
                console.log(req.params);
                res.send("success")
            }catch(app_error){
                res.send(app_error)
            }
        }catch(system_error){
            res.send(system_error)
        }
    })