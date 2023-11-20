async function sendMeMessage() {
  event.preventDefault();
  console.log('click');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mssg = document.getElementById('message').value;

  let data = { name: name, email: email, messages: mssg };

  console.log(data);
  try {
    let response = await fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    name.value = '';
    if (response.ok) {
      let jsonData = await response.json();
    } else {
      console.error(
        'Failed to fetch data:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
