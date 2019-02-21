var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./models/db');
var app = express();
 
var authenticateController=require('./controllers/authenticate');
var registerController=require('./controllers/register');
var addCourseController=require('./controllers/addCourse')
var traineeCourseProgressController=require('./controllers/traineeCourseProgress')
var adminAdd_updateEmployeeController=require('./controllers/admin_AddEmployee')
var adminDeleteEmployeeController=require('./controllers/admin_DeleteEmployee')
var adminAddDeleteTrainerController=require('./controllers/admin_AddDeleteTrainer')
var adminAddDeleteCourseController=require('./controllers/admin_addDeleteCourse')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   //res.sendFile( __dirname + "/" + "index.html" );  
   console.log("GET /");
})  
 
app.get('/login', function (req, res) {  
   //res.sendFile( __dirname + "/" + "login.html" );  
   console.log("GET /login");
})  
 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/addCourse',addCourseController.addCourse);
app.post('/api/traineeCourseProgress',traineeCourseProgressController.traineeCourseProgress);
app.post('/api/traineeCourseCompleteDetails',traineeCourseProgressController.traineeCourseCompleteDetails);
app.post('/api/addEmployee',adminAdd_updateEmployeeController.addEmployee);
app.put('/api/updateEmployee',adminAdd_updateEmployeeController.updateEmployee);
app.post('/api/getIdEmployee',adminDeleteEmployeeController.getDeleteEmployee);
app.post('/api/deleteEmployee',adminDeleteEmployeeController.deleteEmployee);
app.post('/api/addTrainer',adminAddDeleteTrainerController.addTrainer);
app.post('/api/deleteTrainer',adminAddDeleteTrainerController.deleteTrainer);
app.post('/api/adminaddCourse',adminAddDeleteCourseController.admin_addCourse);
app.post('/api/admindeleteCourse',adminAddDeleteCourseController.admin_deleteCourse);
 
// console.log(authenticateController);
app.post('/controllers/register', registerController.register);
app.post('/controllers/authenticate', authenticateController.authenticate);
app.post('/controllers/traineeCourseCompleteDetails', traineeCourseProgressController.traineeCourseCompleteDetails);
app.post('/controllers/traineeCourseProgress', traineeCourseProgressController.traineeCourseProgress);
app.post('/controllers/addCourse', addCourseController.addCourse);
app.post('/controllers/addEmployee',adminAdd_updateEmployeeController.addEmployee);
app.put('/controllers/updateEmployee',adminAdd_updateEmployeeController.updateEmployee);
app.post('/controllers/getIdEmployee',adminDeleteEmployeeController.getDeleteEmployee);
app.post('/controllers/deleteEmployee',adminDeleteEmployeeController.deleteEmployee);
app.post('/controllers/addTrainer',adminAddDeleteTrainerController.addTrainer);
app.post('/controllers/deleteTrainer',adminAddDeleteTrainerController.deleteTrainer);
app.post('/controllers/adminaddCourse',adminAddDeleteCourseController.admin_addCourse);
app.post('/controllers/admindeleteCourse',adminAddDeleteCourseController.admin_deleteCourse);
app.listen(3001);