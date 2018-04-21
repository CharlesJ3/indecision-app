'use strict';

console.log('App.js is running!');

// create app object with two properties; title/subtitle (STRINGS)

var mainTemplate = {
  title: 'Title',
  subtitle: 'Subtitle',
  listOne: 'List Item One',
  listTwo: 'List Item Two'
};

// Use title and subtitle in template instead of safesit shit

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    mainTemplate.title
  ),
  React.createElement(
    'p',
    null,
    mainTemplate.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      mainTemplate.listOne
    ),
    React.createElement(
      'li',
      null,
      mainTemplate.listTwo
    )
  )
);

var checkForLocation = function checkForLocation(location, age) {
  if (location !== '' && age > 18) {
    return location;
  } else {
    return 'Unknown';
  }
};

var user = {
  name: 'Charles',
  age: 17,
  location: 'Colorado Springs'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    checkForLocation(user.location, user.age)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
