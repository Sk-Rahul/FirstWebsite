document.addEventListener('keydown', handleKeyup);
	
	function handleKeyup (e) {
		switch(e.key) {
			case 'ArrowUp':
			keyCallback.dUp();
			alert("ArrowUp");
			break;
			case 'ArrowDown':
			case '8': /* num pad navigation */
				app.keyCallback.dDown();
				alert("ArrowDown");
				break;
			case 'ArrowLeft': 
			case '4': /* num pad navigation */
				app.keyCallback.dLeft();
				alert("arrow left");
				break;
			case 'ArrowRight':
			case '6': /* num pad navigation */
				alert("ArrowRight");
				app.keyCallback.dRight();
				break;
	dUp()
	{
		alert("Hello");
	}
