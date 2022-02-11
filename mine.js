body {
	margin: 0;
	padding: 0;
	background: #232F52;
}

button:focus {
	outline: none;
}

.start {
	position: absolute;
	top: calc(50% + 100px);
	left: 50%;
	background: #51D05E;
	transform: translate(-50%, -50%);
	width: 100px;
	height: 25px;
	border: 2px solid #4CBD58;
	color: white;
	font-weight: bold;
	border-radius: 5px;
	transition: 0.3s ease;
	user-select: none;
	cursor: pointer;
	filter: drop-shadow(2px 2px 2px rgba(89, 217, 102, 0.2));
}

.start:hover {
	background: #4CBD58;
}

.shadow {
	position: absolute;
	z-index: 2;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	border: 2px solid white;
	width: 400px;
	height: 100px;
	box-shadow: inset 0px 0px 20px 0px black;
}

.random {
	position: absolute;
	overflow: hidden;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	width: 400px;
	height: 100px;
	background: #161D31;
}

.cards {
	position: absolute;
	left: 0;
	top: 0;
	width: 2000px;
	height: 100%;
	transition: 5s ease;
}

.cards > div {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	float: left;
	font-family: sans-serif;
	font-weight: bold;
	font-size: 20px;
	margin-top: 5px;
	margin-left: 5px;
	width: 100px;
	height: 90px;
	color: #6A6A6A;
	background: white;
	border-radius: 10px;
}

.result {
	position: absolute;
	z-index: 10;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	border: 10px solid transparent;
	border-top: 20px solid #425DD8;
	filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}
