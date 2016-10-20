var Robot = ( (newRobot) =>{
	
	newRobot.Machines = {};

	newRobot.Machines.OriginalRobot = function(){
		this.health = null;
		this.damage = null;
		this.playerName = null;
	};
	newRobot.Machines.OriginalRobot.prototype.generateHealth = function(){
  		let min = this.allowedHealthRange[0];
  		let max = this.allowedHealthRange[1];
  		let random = Math.random() * (max - min) + min;
  		this.health = random.toFixed(0);
  		return this.health;
	};	
	newRobot.Machines.OriginalRobot.prototype.generateDamage = function(){
  		let min = this.allowedDamageRange[0];
  		let max = this.allowedDamageRange[1];
  		let random = Math.random() * (max - min) + min;
  		this.damage = random.toFixed(0);
  		return this.damage;
	};	
	//Robot Types
	newRobot.Machines.Drone = function(){
		this.type = "Drone";
		this.property = "aerial";
	};
	newRobot.Machines.Drone.prototype = new newRobot.Machines.OriginalRobot();
	newRobot.Machines.Bipedal = function(){
		this.type = "Bipedal";
		this.property = "ground";
	};
	newRobot.Machines.Bipedal.prototype = new newRobot.Machines.OriginalRobot();
	newRobot.Machines.ATV = function(){
		this.type = "ATV";
		this.property = "wheels";
	};
	newRobot.Machines.ATV.prototype = new newRobot.Machines.OriginalRobot();
	//Robot Models
	newRobot.Machines.MilleniumFalcon = function(){
		this.name = "Millenium Falcon";
		this.allowedHealthRange = [50, 80];
		this.allowedDamageRange = [10, 20];
	};
	newRobot.Machines.MilleniumFalcon.prototype = new newRobot.Machines.Drone();
	newRobot.Machines.AirForceOne = function(){
		this.name = "Air Force One";
		this.allowedHealthRange = [40, 100];
		this.allowedDamageRange = [10, 15];
	};
	newRobot.Machines.AirForceOne.prototype = new newRobot.Machines.Drone();
	newRobot.Machines.C3PO = function(){
		this.name = "C3PO";
		this.allowedHealthRange = [50, 100];
		this.allowedDamageRange = [5, 10];
	};
	newRobot.Machines.C3PO.prototype = new newRobot.Machines.Bipedal();
	newRobot.Machines.ATAT = function(){
		this.name = "ATAT";
		this.allowedHealthRange = [90, 150];
		this.allowedDamageRange = [5, 25];
	};
	newRobot.Machines.ATAT.prototype = new newRobot.Machines.Bipedal();
	newRobot.Machines.Tank = function(){
		this.name = "Tank";
		this.allowedHealthRange = [60, 120];
		this.allowedDamageRange = [5, 20];

	};
	newRobot.Machines.Tank.prototype = new newRobot.Machines.ATV();
	newRobot.Machines.BB8 = function(){
		this.name = "BB8";
		this.allowedHealthRange = [10, 120];
		this.allowedDamageRange = [15, 30];
	};
	newRobot.Machines.BB8.prototype = new newRobot.Machines.ATV();

 return newRobot; 
})(Robot || {});