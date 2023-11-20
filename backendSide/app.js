let newArray = [];

// GET METHOD
async function getRequest() {
  const messageOutput = document.querySelector('.messageOutput');
  const response = await fetch('http://localhost:3000/message');

  if (response.ok) {
    const data = await response.json();
    // Assuming data is an array of objects with unique identifier 'id'
    data.forEach((newItem) => {
      if (!newArray.some((item) => item.id === newItem.id)) {
        newArray.push(newItem);
      }
    });
  }

  let htmlContent = ''; // String to concatenate HTML content

  for (let i = newArray.length - 1; i >= 0; i--) {
    const element = newArray[i];
    htmlContent += `
          <div class="box">
        <div class="box_form">
          <div class="title">
            <h2>Sender: <span class="title__name">${element.name}</span></h2>
            <h2>Time: <span class="title__name">${element.time}</span></h2>
            <h2>Email: <span class="title__sender">${element.email}</span></h2>
          </div>
          <div class="textArea">
            <p>
             ${element.message}
            </p>
          </div>
          <br />
          <button class="deleteBtn" onclick="deleteMessage(${element.id})">
            <strong>Delete message</strong>
          </button>
        </div>
      </div>
    `;
  }
  // Set the HTML content after the loop
  messageOutput.innerHTML = htmlContent;
}

// DELETE METHOD
async function deleteMessage(messageId) {
  try {
    const response = await fetch(`http://localhost:3000/message/${messageId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Message deleted successfully');
      // Update newArray and re-render messages after deletion
      newArray = newArray.filter((item) => item.id !== messageId);
      getRequest(); // Re-render messages
    } else {
      console.error('Failed to delete message:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
