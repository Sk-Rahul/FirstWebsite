function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            // Action case press left key
          left();
        break;

        case 'SoftRight':
            // Action case press right key
          right();
        break;

        case 'Enter':
            // Action case press center key
       center();
        break;
    }
};

document.addEventListener('keydown', handleKeyDown);


left()
{
    alert("left");
}
