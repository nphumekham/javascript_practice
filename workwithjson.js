const formatJson = (resJson) => {
    resJson = JSON.stringify(resJson);
    let counter = 0;
    return resJson.split('')
    .map(char => {
      switch (char) {
        case ',':
          return `,\n${' '.repeat(counter * 2)}`;
        case '{':
          counter += 1;
          return `{\n${' '.repeat(counter * 2)}`;
        case '}':
          counter -= 1;
          return `\n${' '.repeat(counter * 2)}}`;
        default:
          return char;
      }
    })
    .join('');
  };


  testJson = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }};

  console.log(testJson);