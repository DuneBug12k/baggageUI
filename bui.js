	var players = [ {
		"name_first" : "mike",
		"name_last" : "delauter",
		"sex" : "m",
		"baggage_num" : "1",
		"skill_level" : "5",
		"id" : "1"
	}, {
		"name_first" : "brett",
		"name_last" : "borsvold",
		"sex" : "m",
		"baggage_num" : "1",
		"skill_level" : "3",
		"id" : "2"
	}, {
		"name_first" : "megan",
		"name_last" : "villwock",
		"sex" : "f",
		"baggage_num" : "2",
		"skill_level" : "1",
		"id" : "3"
	}, {
		"name_first" : "celia",
		"name_last" : "c",
		"sex" : "f",
		"baggage_num" : "2",
		"skill_level" : "2",
		"id" : "4"
	}, {
		"name_first" : "girl",
		"name_last" : "mchasboobs",
		"sex" : "f",

		"baggage_num" : "0",
		"skill_level" : "8",
		"id" : "5"
	}, {
		"name_first" : "guy",
		"name_last" : "mccreeper",
		"sex" : "m",
		"baggage_num" : "2",
		"skill_level" : null,
		"id" : "6"
	}, {
		"name_first" : "joe",
		"name_last" : "plumber",
		"sex" : "m",
		
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "7"
	}, {
		"name_first" : "ryan",
		"name_last" : "donnelly",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : "9",
		"id" : "8"
	}, {
		"name_first" : "sarah",
		"name_last" : "harper",
		"sex" : "f",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "9"
	}, {
		"name_first" : "ted",
		"name_last" : "dybear",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "10"
	}, {
		"name_first" : "norris",
		"name_last" : "chuck",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "11"
	}, {
		"name_first" : "guy",
		"name_last" : "mcdougal",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "12"
	}, {
		"name_first" : "drew",
		"name_last" : "benson",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "13"
	}, {
		"name_first" : "caleb",
		"name_last" : "davis",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "14"
	}, {
		"name_first" : "julia",
		"name_last" : "liu",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "15"
	}, {
		"name_first" : "tom",
		"name_last" : "bosworth",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "16"
	}, {
		"name_first" : "iam",
		"name_last" : "hungry",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "17"
	}, {
		"name_first" : "jeff",
		"name_last" : "head",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "18"
	}, {
		"name_first" : "catthegirl",
		"name_last" : "dog",
		"sex" : "f",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "19"
	}, {
		"name_first" : "samir",
		"name_last" : "deeb",
		"sex" : "m",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "20"
	}, {
		"name_first" : "arianne",
		"name_last" : "reister",
		"sex" : "f",
		"baggage_num" : "0",
		"skill_level" : null,
		"id" : "21"
	} ];
	
	/*
	var players = [ {
		"name_first" : "mike",
		"name_last" : "delauter",
		"sex" : "m",
		"baggage_num" : "1",
		"skill_level" : "5",
		"id" : "1"
	}, {
		"name_first" : "brett",
		"name_last" : "borsvold",
		"sex" : "m",
		"baggage_num" : "1",
		"skill_level" : "3",
		"id" : "2"
	}, {
		"name_first" : "megan",
		"name_last" : "villwock",
		"sex" : "f",
		"baggage_num" : "3",
		"skill_level" : "1",
		"id" : "3"
	}];
	
	*/

	//DOCUMENT ON READY.
	$(document).ready(function() {
		$("#resetBtn").click(resetButtonHandler);
		reset();
		
		$(".candrop").draggable( {
			snap: ".candrop",
			snapMode: "inner",
			snapTolerance: 20, 
			cursorAt: { top: 20},
			stack: ".candrop",
			revert: "invalid"
		});
		$(".team").draggable( "disable");
		$(".candrop").droppable( {
			accept: ".candrop", 
			drop: function(event, ui) {
				var targetNode = event.target;
				var draggedNode = ui.draggable;
				$(draggedNode).css("left", 0);
				$(draggedNode).css("top", 0);
				
				$(targetNode).append(draggedNode);
				
				
				if ( $(targetNode).attr("class").indexOf("team") >= 0 )
				{
					$(draggedNode).droppable("disable");
				}
				else 
					$(draggedNode).droppable("enable");
				
			},
			hoverClass: "ui-state-highlight",
			activeClass: "ui-state-dragging"
		});

	});
	
	function test() {
		var player = players[0];
		var bnode = makeBaggageNode(player.baggage_num);
		addPlayerToBaggageNode(player, bnode);
		//addBagToPage(bnode);
	}

	/**
		Creates baggage groups out of the array supplied in var 'players'.
	*/
	function reset() {
		var length = players.length;
		for ( var i = 0; i < length; i++) {
			var player = players[i];

			//sanitizing data for undefined's, etc.
			for ( var field in player) {
				var item = player[field];
				if (!item) //ie if item is undefined/null.. change it to blank str. 
					player[field] = "";
			}

			addToBaggageGroup(player);
			
		}
	}

	/**
		Given a player, runs through the process of adding that player to a baggage group.
		@param player - A player Object.
	 */
	function addToBaggageGroup(player) {
		var bagNode;
 
		if (player.baggage_num && player.baggage_num > 0 ) {	//love dat javascript logic.
			//check for existing group and set bagnode to it.
			bagNode = findBaggageGroup(player.baggage_num);
			if (!bagNode) {
				//group DNE. Create new group.
				bagNode = makeBaggageNode( player.baggage_num); //use baggage_num just in case joining some other player's bag. 
			}

		} else {
			//baggage group does not exist yet.  
			bagNode = makeBaggageNode(player.id);	//use player's id since there's no bag num.
			player.baggage_num = player.id;
		}
		
		//make the player and add them to the baggage group. 
		addPlayerToBaggageNode(player, bagNode);
		
		if (player.baggage_num < 1) {
			console.log(player.name_first + " " + player.name_last + "still has bag 0.");
		}
		else if (player.baggage_num != player.id) {
			console.log(player.name_first + " " + player.name_last + "has bag " + player.baggage_num + " and id " + player.id);
		}
		
	}

	//used by makeBaggageNode to assign colors.
	var lastNodeColor = 0;
	//constructs and returns a (movable) baggage node. (player container)
	function makeBaggageNode(nodeId ) {
		var node = document.createElement("div");
		$(node).addClass("box");
		$(node).addClass("candrop");

		//set box color. 
		lastNodeColor++;
		$(node).addClass("boxbg" + lastNodeColor);
		lastNodeColor = lastNodeColor % 5; //resets it back to 0 if it hits 5.
		$(node).attr("id", "b" +nodeId);
		
		console.log("creating baggage node: " + nodeId);
		addBagToPage(node);
		return node;
	}

	/** constructs a node containing information about the player. (name, sex, skill, etc)
	@Param player - A player object.
	@return An html node containing information about the player. 
	 */
	function makePlayerNode(player) {
		var node = document.createElement("div");
		$(node).addClass("player");

		//create an entry for the player's name / skill level. 
		var playerHtml = "<span id='p" + player.id + "'>" + player.name_first
				+ " " + player.name_last + "</span><span>" + player.skill_level
				+ "</span>";
		$(node).html(playerHtml);

		//set the color (class) based on sex. 
		if (player.sex == "m")
			$(node).addClass("guy");
		else
			$(node).addClass("girl");

		console.log("player: " + player.name_first + " " + player.name_last + " created. B# " + player.baggage_num);
		return node;
	}

	function resetButtonHandler() {
		reset();
	}
	
	function addPlayerToBaggageNode(player, bNode) {
		var pNode = makePlayerNode(player);
		$(bNode).append(pNode);
		console.log("added player " + player.name_first + " " + player.name_last + " to bag #" + player.baggage_num);
	}
	
	function findBaggageGroup(baggage_number) {
		var node = document.getElementById("b" + baggage_number);
		//var node = $("#b" + baggage_number);	//abstracting this for readability i guess.
		return node;  
	}
	
	function addBagToPage( bagNode) {
		$("#players").append(bagNode);
	}

