
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
		'selectedClass' : function() {
			if(this._id == Session.get('selectedPlayer'))
				return "selected"
		}
	})
	Template.leaderboard.events({
		'click .tester': function(){
			var playerId = this._id
			Session.set('selectedPlayer', playerId)
		}
		/*
			event-types include dblclick,focus,blur,mouseover,and change
		*/
	})
}
if(Meteor.isServer){
	console.log("Printed only into server console")
}
