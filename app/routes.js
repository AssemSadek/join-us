
user = require("./DB_handlers/user");
event = require("./DB_handlers/event");

module.exports.route = function(app){

    //requests for user
    app.get("/users", user.getAllUsers);
    app.post("/signUp", user.signUp);
    app.post("/login", user.login);
    app.post("/logout", user.logout);
    app.get("/authenticate", user.authenticate);
    app.get("/users/:username", user.getUserInfo);
    app.get("/updateUserInfo", user.updateUserInfo);

    app.get("/userEvents/:username", user.getUserEvents);
    app.get("/getAttendedEvents/:username", user.getAttendedEvents);
    app.get("/getCurrentEvents/:username", user.getCurrentEvents);
    app.get("/userFollowers/:username", user.getUserFollowers);
    app.get("/userFollowing/:username", user.getUserFollowing);

    app.get("/userEventsFollowing/:username", user.getUserFollowing);
    app.get("/userEventsFollowing/:username", user.getUserFollowing);
    app.get("/follow/:usernme", user.follow);
    app.delete("/unfollow/:username", user.unfollow);
    app.get("/banUser/:username", user.banUser);
    app.get("/unbanUser/:username", user.unbanUser);
   
    //requests for event
    app.get("/events", event.getAllEvents);
    
    app.post("/createEvent", event.createEvent);
    app.get("/events/:id", event.getEventInfo);
    app.post("/updateEvent/", event.getAllEvents);
    app.delete("/deleteEvent/:id", event.deleteEvent);

    app.get("/attendEvent/:id", event.attendEvent);
    app.delete("/unattendEvent/:id", event.unattendEvent);
    app.get("/getEventParticipants/:id", event.getEventParticipants);
    /*
    app.post("addcomment", event.addComment);
    app.get("getEventComments/:id", event.getEventComments);
    app.post("addReport", event.addReport);
    app.get("getEventReport/:id", event.getEventReport);
    app.getAllReports("getAllReports", event.getAllReports);
    */  


};
