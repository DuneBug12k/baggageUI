<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Baggage UI</title>

<link rel="stylesheet" type="text/css" href="styles.css" />
<?php 
	$bob = "bui.js"; //."?" . rand();
?>
<link href="../css/jquery-ui-1.10.3.custom.css" rel="stylesheet">
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-ui-1.10.3.custom.js"></script>
<script type="text/javascript" src="<?= $bob ?>" ></script>
</head>

<body>
	<div id="head"></div>
	<h1>Baggage Management Tool</h1>

	<div id="control"></div>
	<button id="applyBtn">Apply Changes</button>
	<button id="resetBtn">Reset All</button>
	<br style="Clear: both;" />
	<div id="teams" >
	<h1>Teams</h1>
		<div class="box team candrop">
		<h1>Team1</h1>
		</div>
		<div class="box team candrop">
		<h1>Team2</h1>
		</div>
	</div>
	<div id="players" class="candrop"></div>
	<br style="clear: both;" />

	<div id="footer">Developed by Mike DeLauter. Send all hate
		(love?) mail to mdelauter@gmail.com!</div>
</body>
</html>