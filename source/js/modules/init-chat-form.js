const openChatButton = document.querySelector('.js-open-chat');
const closeChatButton = document.querySelector('.js-close-chat');
const chatForm = document.getElementById("chatForm");

function openForm() {
  chatForm.style.display = "block";
}

function closeForm() {
  chatForm.style.display = "none";
}

const initChat = () => {
  if (!openChatButton) {
    return;
  }
  openChatButton.addEventListener('click', () => {
    openForm();
  });
  closeChatButton.addEventListener('click', () => {
    closeForm();
  });

};
export {initChat};
