console.log('App.js is running!');

// create app object with two properties; title/subtitle (STRINGS)

let mainTemplate = {
  title: 'Title',
  subtitle: 'Subtitle',
  listOne: 'List Item One',
  listTwo: 'List Item Two'
};

// Use title and subtitle in template instead of safesit shit

var template = (
  <div>
    <h1>{mainTemplate.title}</h1>
    <p>{mainTemplate.subtitle}</p>

    <ol>
      <li>{mainTemplate.listOne}</li>
      <li>{mainTemplate.listTwo}</li>
    </ol>
  </div>
);



let checkForLocation = function(location, age){
  if(location !== '' && age > 18){
    return location;
  }
  else{
    return 'Unknown';
  }
}


let user = {
  name: 'Charles',
  age: 32,
  location: 'Colorado Springs'
};



var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {checkForLocation(user.location, user.age)}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);