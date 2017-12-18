
con = require("./../../config/connectionDB").con;


var getAllEvents = function (req, res) {
  con.query('SELECT * FROM event'
  ,function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
};


var createEvent = function(req,res){
  con.query("INSERT into event(Title, StartDate, EndDate, Description, Organizer, Category, Image, TicketPrice) values(?,?,?,?,?,?,?,?)"
  ,[req.body.Title, req.body.startDate, req.body.endDate, req.body.Description, req.userCookie.userName, req.body.category, req.body.Image, req.body.ticketPrice]
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


var getEventInfo = function(req,res) {
  con.query("SELECT * FROM event where ID = ?"
  ,[req.params.id]
  ,function (err,result){
    if(err){
      var resObject = {};
      resObject.m = "no events";
    }
    else {
      res.send(result);
    }
  });
};

var updateEventInfo = function(req,res){
  con.query("UPDATE event  SET Title=? ,Description=?, StartDate=?, EndDate=?, Category = ?, image = ? TicketParice = ? WHERE ID = ?"
  ,[req.body.Title, req.body.Description, req.body.StartDate, req.body.EndDate, req.body.Category, req.body.image, req.body.TicketPrice, req.params.id]
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
  con.query("Delete from event where event.ID = ?"
  ,[req.params.id]
    ,function(err,result){
      if(err){
        var resObject = {};
        resObject.m = "can't delete";
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


  module.exports = {
    getAllEvents: getAllEvents,

    createEvent : createEvent,
    getEventInfo : getEventInfo,
    updateEventInfo : updateEventInfo,
    deleteEvent : deleteEvent,

    attendEvent : attendEvent,
    unattendEvent : unattendEvent
  };
