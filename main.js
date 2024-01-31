

// Отправка запроса на сервер
async function main() {
  const response = await fetch('http://94.198.50.185:7081/api/users', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  });

  const sessionId = response.headers.get('Set-Cookie');

  console.log('Session ID:', sessionId);

  const userData = {
      "id": 3,
      "name": "James",
      "lastName": "Brown",
      "age": 25
  };
  console.log(await response.text());

  const postResponse = await fetch('http://94.198.50.185:7081/api/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Cookie': sessionId
      },
      body: JSON.stringify(userData)
  });
  console.log(await postResponse.text());

  const putResponse = await fetch('http://94.198.50.185:7081/api/users', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Cookie': sessionId
      },
      body: JSON.stringify({
          "id": 3,
          "name": "Thomas",
          "lastName": "Shelby",
          "age": 25
      })
      
  });
  console.log(await putResponse.text());

  const deleteResponse = await fetch('http://94.198.50.185:7081/api/users/3', {
      method: 'DELETE',
      headers: {
          'Cookie': sessionId
      }
  });

  console.log(await deleteResponse.text());
}

main();
