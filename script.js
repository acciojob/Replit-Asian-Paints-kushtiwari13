//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.grid-item');

  document.getElementById('color-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('color_id').value;

    gridItems.forEach(function(item) {
      item.style.backgroundColor = 'transparent';
    });

    const selectedBlock = document.getElementById(blockId);
    selectedBlock.style.backgroundColor = color;
  });

  document.getElementById('reset_button').addEventListener('click', function() {
    gridItems.forEach(function(item) {
      item.style.backgroundColor = 'transparent';
    });
  });
});
