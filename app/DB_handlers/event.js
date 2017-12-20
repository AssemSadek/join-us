
con = require("./../../config/connectionDB").con;


var getAllEvents = function (req, res) {
  con.query('SELECT * FROM event'
  ,function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else if (result.length == 0) {
      var resObject = {}
      resObject.m = "No events on website"
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};


var createEvent = function(req,res){
  con.query("INSERT INTO event(Title, StartDate, EndDate, Description, Organizer, Category, Image, TicketPrice) values(?,?,?,?,?,?,?,?)"
  ,[req.body.title, req.body.startDate, req.body.endDate, req.body.description, req.userCookie.username, req.body.category, req.body.Image, req.body.ticketPrice]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't be created";
    }
    else {
      res.send(result);
    }
  });
};

var getIDbyTitle = function(req,res){
  con.query("SELECT ID from event where Title = ?"
  ,[req.params.title]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't find event";
    }
    else {
      res.send(result);
    }
  });
};


var getEventInfo = function(req,res) {
  con.query("SELECT * FROM event WHERE ID = ?"
  ,[req.params.id]
  ,function (err,result){
    console.log(err);
    console.log(result);
    if(err){
      var resObject = {};
      resObject.m = "no event found";
    }
    else {
      res.send(result);
    }
  });
};

var updateEventInfo = function(req,res){
  con.query("UPDATE event  SET Title=? ,Description=?, StartDate=?, EndDate=?, Category = ?, image = ? TicketParice = ? WHERE ID = ?"
  ,[req.body.title, req.body.description, req.body.startDate, req.body.endDate, req.body.category, req.body.image, req.body.ticketPrice, req.body.id]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "Update Event Data Failed";
    }
    else {
      res.send(result);
    }
  });
};

var deleteEvent = function(req,res){
  con.query("Delete FROM event WHERE event.ID = ?"
  ,[req.params.id]
    ,function(err,result){
      if(err){
        var resObject = {};
        resObject.m = "can't delete event";
      }
      else {
        res.send(result);
      }
    });
};


var attendEvent = function(req,res){
  con.query("INSERT INTO attends VALUES(?,?) "
  ,[req.userCookie.userName,req.params.id]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't attend";
    }
    else {
      res.send(result);
    }
  });
};

var unattendEvent = function(req,res){
  con.query("DELETE FROM attends WHERE UN = ? AND EID = ? "
  ,[req.userCookie.userName,req.params.id]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't unattend";
    }
    else {
      res.send(result);
    }
  });
};

var getEventParticipants = function(req,res){
  console.log(req.params);
  con.query("SELECT U.UserName,U.FullName,U.Image FROM User U,Attends A WHERE U.UserName = A.UN and A.EID=?"
  ,[req.params.id]
  ,function(err,result){
    console.log(err);
    console.log(result);
    if(err){
      var resObject = {};
      resObject.m = "can't unattend";
    }
    else if (result.length == 0) {
      var resObject = {}
      resObject.m = "No participants";
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};

var addComment = function (req,res) {
  con.query("INSERT INTO comment(Content,CUN,CEID) values(?,?,?);"
  ,[req.body.text, req.userCookie.userName, req.body.id]
  ,function(err,result){
    if(err){
        var resObject = {};
        resObject.m = "can't add comment";
      }
    else {
      res.send(result);
    }
  });
};

var getEventComments = function (req,res) {
  con.query("SELECT * FROM comment EID =? ORDER BY ID DESC"
  ,[req.params.id]
  ,function(err,result){
    if(err){
        var resObject = {};
        resObject.m = "can't get comments";
      }
      else if (result.length == 0) {
        var resObject = {}
        resObject.m = "No comments";
        res.send(resObject);
      }
    else {
      res.send(result);
    }
  });
};

var addReport = function (req,res) {
  con.query("INSERT INTO report(Problem,RUN,REID) values(?,?,?);"
  ,[req.body.text, req.userCookie.userName, req.body.id]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't add report";
    }
    else {
      res.send(result);
    }
  });
};


var getEventReports = function (req,res) {
  con.query("SELECT * FROM report REID =? ORDER BY ID DESC"
  ,[req.params.id]
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't get reports";
    }
    else if (result.length == 0) {
      var resObject = {}
      resObject.m = "No reports";
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};

var getAllReports = function (req,res) {
  con.query("SELECT E.Title, R.RUN, R.Problem FROM Report R Event E WHERE E.ID = R.REID  ORDER BY R.ID DESC"
  ,function(err,result){
    if(err){
      var resObject = {};
      resObject.m = "can't get reports";
    }
    else if (result.length == 0) {
      var resObject = {}
      resObject.m = "No reports";
      res.send(resObject);
    }
    else {
      res.send(result);
    }
  });
};

module.exports = {
  getAllEvents: getAllEvents,

  createEvent : createEvent,
  getIDbyTitle : getIDbyTitle,
  getEventInfo : getEventInfo,
  updateEventInfo : updateEventInfo,
  deleteEvent : deleteEvent,

  attendEvent : attendEvent,
  unattendEvent : unattendEvent,
  getEventParticipants : getEventParticipants,

  addcomment: addComment,
  getEventComments : getEventComments,
  addReport: addReport,
  getEventReports : getEventReports,
  getAllReports : getAllReports

};
