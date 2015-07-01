
PlayerList = new Mongo.Collection('players')
console.log("Print test to console!!")
/*
** Untested sample input function
var samplePlayers = ["Bob", "Mary", "Warren", "David", "Bill", "Tim"]
samplePlayers.forEach(function(data){
	PlayerList.insert({name: data,
				   score: 0})
})
PlayerList.find().count()				   
PlayerList.find({name: "David"}).fetch()			   
*/
if(Meteor.isClient){
	console.log("Printed only into client console")
	Template.leaderboard.helpers({
		'player' : function() {
			return PlayerList.find() // works if fetch attached as well
		},
		'otherPlayer' : function() {
			return "Some other random text"
		}
	})
	Template.leaderboard.events({
		'click .tester': function(){
			alert("click on list element with class tester!!")
		}
	})
}
if(Meteor.isServer){
	console.log("Printed only into server console")
}
