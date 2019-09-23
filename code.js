const softkeyCallback = {
    left: function() { console.log('You click on SoftLeft') },
    center: function() { console.log('You click on Enter') },
    right: function() { console.log('You click on SoftRight') }
};
function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
          
      break;
    case 'ArrowRight':
      nav(1);
          alert("Right");
      break;
    case 'ArrowLeft':
          alert("left");
      nav(-1);
      break;
  }
}
document.addEventListener('keydown', handleKeyDown);
