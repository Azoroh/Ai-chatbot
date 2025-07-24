const textArea = document.querySelector(".message-input");
const sendBtn = document.querySelector('#send-message')

sendBtn.addEventListener('click', ()=>{
  console.log('send btn clicked');
  
})

// Handle enter key press for sending messages
textArea.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();

  if (e.key === "Enter" && userMessage) {
    console.log(e.key);
    console.log(userMessage);
    outGoingMessage(userMessage);
    e.target.value = " ";
  }
});

// Handle outgoing user messages
function outGoingMessage(userMessage) {
  const userMessageHtml = `
  <div class="message user-message">
        <div class="message-text">${userMessage}</div>
      </div>
  `;

  document.querySelector(".chat-body").innerHTML += userMessageHtml;
}
