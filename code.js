const softkeyCallback = {
    left: function() { alert('You click on SoftLeft') },
    center: function() { alert('You click on Enter') },
    right: function() { alert('You click on SoftRight') },
    ArrowRight: function(){alert('You click right')}
};
function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            // Action case press left key
            softkeyCallback.left();
        break;

        case 'SoftRight':
            // Action case press right key
            softkeyCallback.right();
        break;

        case 'Enter':
            // Action case press center key
            softkeyCallback.center();
        break;

        case 'ArrowRight':
            softkeyCallback.ArrowRight();
         break;
    }
};

document.addEventListener('keydown', handleKeyDown);
