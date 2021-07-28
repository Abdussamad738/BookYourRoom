
var mongoose = require('mongoose'), Room = mongoose.model('room')
console.log("index controller is called");
module.exports={
    GetRoom:function(req,res){
        // console.log(req.query);
        // const name = req.query;
        // console.log(name);
        // console.log(Room.find({type:name}));
        // Room.find({type:name},function(err, results){
        //     if (err) throw err;
        //     console.log(results);
        //     res.render('pages/rooms.ejs',{roomsList:results});
        // })
        const name = req.query.rooms;
        

        // Room.find({type:name},function(err, results){
        //     if (err) throw err;
        //     res.render('pages/rooms.ejs',{roomsList:results});
        // }) 


        if (name=="All"){
            console.log(name);
            Room.find({},function(err, results){
                console.log("hi");
                if (err) throw err;
                res.render('pages/rooms.ejs',{roomsList:results});
                
            }) 
        }
        else{
            Room.find({type:name},function(err, results){
                if (err) throw err;
                res.render('pages/rooms.ejs',{roomsList:results});
                console.log(results);
        })
    
    
        }
    },
    GetAll:function(req,res){
        console.log("GetAll rooms function called...");
        Room.find({},function(err, results){
            if (err) throw err;
            res.render('pages/index.ejs',{roomsList:results});
        })        
    },
    GetEachRoom: function(req,res){
        console.log('this is from geteachroom in indexcontroller');
        var id=req.query.id;
        var test="test";
        console.log(id);
        Room.find({type:id},function(err, results){
            if (err) throw err;
            console.log(id);
            
            res.render('pages/room-details.ejs',{id,results});
        
            
        
        })
          
    }
}
