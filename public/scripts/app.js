'use strict';

// console.log('App.js is running!');

// const app = {
//   title: 'Indecision A;;',
//   subtitle: 'Put your life in the hands of a computer',
//   options: ['One', 'Two']
// };

// let mainTemplate = {
//   title: 'Title',
//   subtitle: 'Subtitle',
//   listOne: 'List Item One',
//   listTwo: 'List Item Two'
// };

// let user = {
//   name: 'Charles',
//   age: 33,
//   location: 'Colorado Springs'
// };

// const updateList = () => {


// };

// const onFormSubmit = (e) => {
//   e.preventDefault();

//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     renderTemplate();
//   }
// };

// const removeAllItems = () => {
//   app.options = [];
//   renderTemplate();
// };


// const appRoot = document.getElementById('app');

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1></h1>
//       <p></p>
//       <p>{app.options.length}</p>
//       <ol className="listOfItems">
//         <li>Item One</li>
//         <li>Item Two</li>
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Button</button>
//       </form>
//        <button onClick={removeAllItems}>Remove All</button>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// renderTemplate();


/* Chuck's Personal Section */

var userInformation = {
  name: 'Charles',
  age: 33,
  randomNumber: function randomNumber() {
    userInformation.age = Math.ceil(Math.random() * 20);
    renderTemplate();
  }
};

var addThisUp = function addThisUp() {};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Name: ',
      userInformation.name
    ),
    React.createElement(
      'p',
      null,
      'Age: ',
      userInformation.age
    ),
    React.createElement(
      'button',
      { onClick: userInformation.randomNumber },
      'Randomize Your Age'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
