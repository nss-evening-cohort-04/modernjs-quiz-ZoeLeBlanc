"use strict";
var Robot = (function(NewRobot){
	
	NewRobot.Machines = {};

	NewRobot.Machines.OriginalRobot = function(){
		this.health = null;
		this.damage = null;
		this.playerName = null;
		this.weapon = null;
	};
	NewRobot.Machines.OriginalRobot.prototype.generateHealth = function(){
  		let min = this.allowedHealthRange[0];
  		let max = this.allowedHealthRange[1];
  		let random = Math.random() * (max - min) + min;
  		this.health = random.toFixed(0);
  		return this.health;
	};	
	NewRobot.Machines.OriginalRobot.prototype.generateDamage = function(){
  		let min = this.allowedDamageRange[0];
  		let max = this.allowedDamageRange[1];
  		let random = Math.random() * (max - min) + min;
  		this.damage = random.toFixed(0);
  		return this.damage;
	};
	NewRobot.Machines.OriginalRobot.prototype.generateWeapon = function(){
		let random = Math.round(Math.random() * (this.allowedWeapons.length - 1));
		let randomWeapon = this.allowedWeapons[random];
		this.weapon = randomWeapon;
		return this.weapon;
	};	
	//Robot Types
	NewRobot.Machines.Drone = function(){
		this.type = "Drone";
		this.property = "aerial";
		this.allowedWeapons = ["aerial bombardment", "rocket"];
	};
	NewRobot.Machines.Drone.prototype = new NewRobot.Machines.OriginalRobot();
	NewRobot.Machines.Bipedal = function(){
		this.type = "Bipedal";
		this.property = "ground";
		this.allowedWeapons = ["fist crush", "electric shock"];
	};
	NewRobot.Machines.Bipedal.prototype = new NewRobot.Machines.OriginalRobot();
	NewRobot.Machines.ATV = function(){
		this.type = "ATV";
		this.property = "wheels";
		this.allowedWeapons = ["run down", "sit on"];
	};
	NewRobot.Machines.ATV.prototype = new NewRobot.Machines.OriginalRobot();
	//Robot Models
	NewRobot.Machines.MilleniumFalcon = function(){
		this.name = "Millenium Falcon";
		this.allowedHealthRange = [50, 80];
		this.allowedDamageRange = [10, 20];
	};
	NewRobot.Machines.MilleniumFalcon.prototype = new NewRobot.Machines.Drone();
	NewRobot.Machines.AirForceOne = function(){
		this.name = "Air Force One";
		this.allowedHealthRange = [40, 100];
		this.allowedDamageRange = [10, 15];
	};
	NewRobot.Machines.AirForceOne.prototype = new NewRobot.Machines.Drone();
	NewRobot.Machines.C3PO = function(){
		this.name = "C3PO";
		this.allowedHealthRange = [50, 100];
		this.allowedDamageRange = [5, 10];
	};
	NewRobot.Machines.C3PO.prototype = new NewRobot.Machines.Bipedal();
	NewRobot.Machines.ATAT = function(){
		this.name = "ATAT";
		this.allowedHealthRange = [90, 150];
		this.allowedDamageRange = [5, 25];
	};
	NewRobot.Machines.ATAT.prototype = new NewRobot.Machines.Bipedal();
	NewRobot.Machines.Tank = function(){
		this.name = "Tank";
		this.allowedHealthRange = [60, 120];
		this.allowedDamageRange = [5, 20];

	};
	NewRobot.Machines.Tank.prototype = new NewRobot.Machines.ATV();
	NewRobot.Machines.BB8 = function(){
		this.name = "BB8";
		this.allowedHealthRange = [10, 120];
		this.allowedDamageRange = [15, 30];
	};
	NewRobot.Machines.BB8.prototype = new NewRobot.Machines.ATV();

 return NewRobot; 
})(Robot || {});
