$(document).ready(function() {
	//Get Input Text Name
	let robot1Name = "";
	let robot2Name = "";
	let robot1Model = "";
	let robot2Model = "";
	let robot1;
	let robot2;
	$("#name1").keydown( (event)=>{
		
		if(event.keyCode == 13){
			robot1Name = $("#name1").val();
			console.log("robot1Name", robot1Name);
		}
	});

	$("#name2").keydown( (event)=>{
		if(event.keyCode == 13){
		robot2Name = $("#name2").val();
		console.log("robot2Name", robot2Name);
		}
	});
	//Get Input Class
	$("#select1").change((event)=>{
		robot1Model = event.target.value;
		console.log("robot1Model", robot1Model);
		robot1Name = $("#name1").val();
		console.log("robot1Name", robot1Name);

	});
	$("#select2").change((event)=>{
		robot2Model = event.target.value;
		console.log("robot2Model", robot2Model);
		robot2Name = $("#name2").val();
		console.log("robot2Name", robot2Name);

	});
	//Generate Robots
	//Event Listener on Start Button
	$("#StartGame").click(() => {
		$("#robotStats").html("");
		robot1 = new Robot.Machines[robot1Model];
		console.log("robot1", robot1);
		robot1.playerName = robot1Name;
		console.log("robot1.playerName", robot1.playerName);
		robot1.generateHealth();
		robot1.generateDamage();
		$("#robotStats").append(`<div>${robot1.playerName} has an initial health of ${robot1.health} and a damage of ${robot1.damage}</div>`);
		robot2 = new Robot.Machines[robot2Model];
		robot2.playerName = robot2Name;
		robot2.generateHealth();
		robot2.generateDamage();
		$("#robotStats").append(`<div>${robot2.playerName} has an initial health of ${robot2.health} and a damage of ${robot2.damage}</div>`);
		$("#robotStats").css("border", "0.5em solid lightgrey");
		$("#robotStats").css("height", "6em");
	});
	//Run Attack Function
	$("#AttackEnemy").click(() => {
		$("#battleStats").html("");
		//Update BattleStats Until Game ends
		robot1.health -= robot2.damage;
		robot2.health -= robot1.damage;
		$("#battleStats").append(`<div>${robot1.playerName} has remaining health of ${robot1.health}</div>`);
		$("#battleStats").append(`<div>${robot2.playerName} has remaining health of ${robot2.health}</div>`);
		$("#battleStats").css("border", "0.5em solid lightgrey");
		$("#battleStats").css("height", "6em");
			//Print to the Modal Who Wins or Loses
		if (robot1.health <= 0) {
            $("#robotMessage").append(`${robot2.playerName} won with ${robot2.health} points using it's !! ${robot1.playerName} lost with ${robot1.health} points!`);
			$("#robotModal").modal('show');
        } else if (robot2.health <= 0) {
            $("#robotMessage").append(`${robot1.playerName} won with ${robot1.health} points!! ${robot2.playerName} lost with ${robot2.health} points!`);
			$("#robotModal").modal('show');
		}
	});
	

});