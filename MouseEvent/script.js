const containerEl = document.querySelector('.container');

window.addEventListener('mousemove', (event) => {
  // console.log(event); MouseEvent {isTrusted: true, screenX: 304, screenY: 773, clientX: 173, clientY: 377, …}
  containerEl.innerHTML = `
    <div class="mouse-event">
      ${event.clientX}
      <h4>Mouse X Position (px)</h4>
    </div>
    <div class="mouse-event">
      ${event.clientY}
      <h4>Mouse Y Position (px)</h4>
    </div>
  `;
});
