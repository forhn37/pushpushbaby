document.getElementById('messageForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  messageInput.value = ''; // Clear the input after sending

  try {
      const response = await fetch('http://localhost:3000/send-message', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
      });

      if (!response.ok) {
          throw new Error('Failed to send message');
      }

      alert('Message sent successfully!');
  } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
  }
});
