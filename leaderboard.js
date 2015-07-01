
PlayerList = new Mongo.Collection('players')
console.log("Print test to console!!")
/*
PlayerList.insert({name: "Bob",
				   score: 0})
PlayerList.insert({name: "Mary",
				   score: 0})
PlayerList.insert({name: "Warren",
				   score: 0})
PlayerList.insert({name: "David",
				   score: 0})
PlayerList.insert({name: "Bill",
				   score: 0})
PlayerList.insert({name: "Tim",
				   score: 0})
PlayerList.find().count()				   
PlayerList.find({name: "David"}).fetch()			   
*/
if(Meteor.isClient){
	console.log("Printed only into client console")
	Template.leaderboard.helpers({
	'player' : function() {
		return PlayerList.find()
	},
	'otherPlayer' : function() {
		return "Some other random text"
	}
})
}
if(Meteor.isServer){
	console.log("Printed only into server console")
}
