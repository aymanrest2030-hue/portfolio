// VALIDATION + LOCAL STORAGE
function saveMessage(e){
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let status = document.getElementById('status');

  // Validation
  if(name === '' || email === '' || message === ''){
    status.innerText = '❌ Please fill all fields';
    status.style.color = 'red';
    return;
  }

  if(!email.includes('@') || !email.includes('.')){
    status.innerText = '❌ Invalid email';
    status.style.color = 'red';
    return;
  }

  if(message.length < 10){
    status.innerText = '❌ Message must be at least 10 characters';
    status.style.color = 'red';
    return;
  }j

  // Save to localStorage
  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push({name, email, message});
  localStorage.setItem('messages', JSON.stringify(messages));

  status.innerText = '✅ Message sent successfully';
  status.style.color = 'lightgreen';

  // Clear inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}