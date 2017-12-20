
con = require("./../../config/connectionDB").con;

var getAllUsers = function (req, res) {
  con.query('SELECT Username, FullName, Image FROM user', function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else if (result.length == 0) {
      var resObject = {}
      resObject.m = "No users on website"
      res.send(resObject);
    } 
    else {
      res.send(result);
    }
  });
};

  
var signUp =  function(req,res){
  console.log(req.body);
  con.query("INSERT INTO User(username,fullname,email,password) values(?,?,?,?)"
  , [req.body.username, req.body.fullName, req.body.email, req.body.password]
  , function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    } 
    else {
      res.send(result);
    }
  });
};

var login = function(req,res){
  //console.log(req.body.username);
  //console.log(req.body.password);
  con.query("SELECT Username,Type FROM User WHERE Username = ? and Password = ?"
  ,[req.body.username, req.body.password]
  ,function(err,result) {
    if(err){
      console.log(err);
      res.status(500).send(err);
    }
    else if (result.length == 0) {
      //var resObject = {}
      //resObject.m = "User not found"
      res.send(null);
    }
    else {
      req.userCookie.username = result[0].Username;
      req.userCookie.type = result[0].Type;
      res.send(result);
    }
  });
};

var logout = function(req,res){

  if(!req.userCookie.username) {
    resObject = {} 
    resObject.m = "You are not logged in";
    res.send(resObject);
  }
  else {
    req.userCookie.reset();
    resObject = {} 
    resObject.m = "Done";
    res.send(resObject);
  }
};

var authenticate = function(req,res){
  var resObject = {username:null,type:null};
  if(req.userCookie.username) {
      resObject.username = req.userCookie.username;
      resObject.type = req.userCookie.type;
  }
  res.send(resObject);
};

var getUserInfo = function(req,res){
  con.query("SELECT Username,Password,Email,FullName,Gender,Birthdate,Image,Type FROM User WHERE Username = ?"
  ,[req.params.username]
  ,function(err,result){
    if(err) {
      console.log(err);
      res.status(500).send(err);
    }
    else if (result.length==0) {
      var resObject = {};
      resObject.m = "User not Found";
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};


var updateUserInfo = function (req,res){
  console.log(req.userCookie);
  console.log(req.body);
  con.query("UPDATE USER SET FullName = ? , Password = ? , Email= ? , Image = ? , Gender = ? , Birthdate = ?, Bio = ?, Interests = ? Where Username = ?"
  ,[ req.body.fullName, req.body.password, req.body.email, req.body.Image, req.body.Gender, req.body.Birthdate, req.body.bio,req.body.Interests, req.userCookie.username]
  ,function(err,result){
    console.log(err);
    console.log(result);
    if(err){
      resObject = {};
      resObject.m ="Update profile Failed";
    }
    else {
      if(req.body.username != req.userCookie.username){
        req.userCookie.username = req.body.username;
      }
      res.send(result);
    }
  });
};

var getUserEvents = function(req,res){
  con.query("SELECT * FROM Event WHERE Organizer = ?"
  ,[req.params.username]
  ,function(err,result){
    if(err){
      console.log(err);
      res.status(500).send(err);
    }
    else if (result.length==0) {
      var resObject = {};
      resObject.m = "user didn't organize events";
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};


var getAttendedEvents = function(req,res){
 con.query("SELECT E.* FROM user U, event E,attends A WHERE U.Username = A.UN AND E.ID = A.EID AND U.Username = ? AND E.StartDate < NOW() ORDER by A.Date DESC"
    ,[req.params.username]
    ,function(err,result){
      if(err){
        console.log(err);
        res.status(500).send(err);
      }
      else if(result.length==0){
        var resObject = {}
        resObject.m = "User didn't attend any events";
        res.send(resObject);
      }
      else {
        res.send(result);
      }
    });
};
  
var getCurrentEvents = function(req,res){
  con.query("SELECT E.* FROM user U, event E,attends A WHERE U.Username = A.UN AND E.ID = A.EID AND U.Username = ? AND E.StartDate > NOW() ORDER by A.Date DESC"
     ,[req.params.username]
     ,function(err,result){
       if(err){
         console.log(err);
         res.status(500).send(err);
       }
       else if(result.length==0){
         var resObject = {}
         resObject.m = "User didn't attend any events";
         res.send(resObject);
       }
       else {
         res.send(result);
       }
     });
 };

var getUserFollowers = function(req,res){
  con.query("SELECT User.Username, User.FullName, User.Image  FROM User, Follows WHERE User.Username = follows.Follower AND Followed = ?"
  ,[req.params.username]
  ,function(err,result){
    if(err){
      console.log(err);
      res.status(500).send(err);
    }
    else if(result.length==0){ 
      var resObject = {}
      resObject.m = "No Followers "+req.params.username;
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};

var getUserFollowing = function(req,res){
  con.query("SELECT User.Username, User.FullName, User.Image FROM User,Follows WHERE User.Username = follows.Followed AND Follower = ?"
  ,[req.params.username]
  ,function(err,result){
    if(err){
      console.log(err);
      res.status(500).send(err);
    }
    else if(result.length==0){ 
      var resObject = {}
      resObject.m = req.params.username + "doesn't follow anyone ";
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};

var follow = function(req,res){
  con.query("Insert into Follows Values(?,?) "
  ,[req.userCookie.username,req.params.username]
  ,function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } 
    else {
      res.send(result);
    }
  });
};

var unfollow = function(req,res){
  con.query("Delete FROM Follows Where Follower = ? AND Followed = ? "
  ,[req.userCookie.username,req.params.username]
  , function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } 
    else {
      res.send(result);
    }
  });
};


var banUser = function (req,res){
  con.query("UPDATE user SET Type = \"banned\"  WHERE Username = ? "
  ,[req.params.username]
  , function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } 
    else {
      res.send(result);
    }
  });
};

var unbanUser = function (req,res){
  con.query("UPDATE user SET Type = \"normal\"  WHERE Username = ? "
  ,[req.params.username]
  , function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } 
    else {
      res.send(result);
    }
  });
};

module.exports = {

  getAllUsers: getAllUsers,

  signUp : signUp,
  login : login,
  logout : logout,
  authenticate : authenticate,  
  getUserInfo : getUserInfo,
  updateUserInfo : updateUserInfo, 
  
  getUserEvents : getUserEvents,
  getAttendedEvents : getAttendedEvents,
  getCurrentEvents : getCurrentEvents,

  getUserFollowers : getUserFollowers,
  getUserFollowing : getUserFollowing,
  follow : follow,
  unfollow : unfollow,
  banUser : banUser,
  unbanUser : unbanUser
  
};
  

 
    
    
    
