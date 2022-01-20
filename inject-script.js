// Listen for page load events, throttled to 2 seconds
if (window.Pace) {
  let last_message_sent = Date.now()
  let interval = 2000 // 2 seconds

  window.Pace.on('done', () => {

    if (Date.now() > last_message_sent + interval) {
      window.postMessage({type: 'UPDATE_NOTIFICATIONS'})
      last_message_sent = Date.now()
    }
  })
}

// Listen for new notification sound
document.querySelector('#filling-inbox').addEventListener('play', () => {
  window.postMessage({type: 'UPDATE_NOTIFICATIONS'})
}, false)

// Listen for user clicking "Mark all as read"
document.addEventListener('click', (e) => {
  if (e.target.innerText == 'Mark all as read') {
    window.postMessage({type: 'UPDATE_NOTIFICATIONS'})
  }
}, false)