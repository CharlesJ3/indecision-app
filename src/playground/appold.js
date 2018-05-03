// const app = {
//   title: 'Indecision A;;',
//   subtitle: 'Put your life in the hands of a computer',
//   options: []
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

// const onMakeDecision = () => {
//   const decision = Math.floor(Math.random()*app.options.length);
//   const option = app.options[decision];
//   alert(option);
// };

// const numbers = [55, 101, 1000];

// const appRoot = document.getElementById('app');

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <ol>
//       {
//         app.options.map((option) => <li key={option}>{option}</li>)
//       }
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Button</button>
//       </form>
//         <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
//         <button onClick={removeAllItems}>Remove All</button>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// renderTemplate();


/* Challenges - Classes Part 1 and 2 */

// Setup constructor to name and age, default age to 0

class Person {
  constructor(name = 'Anonymous', location = 'No location', grade = 0) {
    this.name = name;
    this.location = location;
    this.grade = grade;
  }

  getDescription() {
    return `Hi. I am ${this.name}. I'm from ${this.location}. I'm hoping to get a decent grade; like ${this.grade}.`;
    console.log();
  }

  getGreeting(){
    return `Hi, my name is ${this.name}.`;
  }

}

class Student extends Person {
  constructor(name, location, age, major){
    super(name, location, age);
    this.major = major;
  }

  hasMajor() {
    return this.major;
  }

  getDescription(){
    let description = super.getDescription();

    if (this.hasMajor()) {
      return description += ` Their major is ${this.major}.`;
    }

    else {
      return description;
    }
  }
}

// Add a subclass -> Traveler (subclass of Person)
// Add support for location
// Override "getGreeting" 
// getGreeting - "Hi, I am Andrew Mead. I'm visiting from Philadelphia.
// getGreeting NO HOME - "Hi, I am Andrew Mead"

class Traveler extends Person {
  constructor(name, location){
    super(name, location);
  }

  getGreeting(){
    let greeting = super.getGreeting();

    if(this.location){
      return greeting + ` I'm visiting from ${this.location}.`
    }
    else{
      return greeting;
    }
  }
}

const myCar = new Student('Charles Jones', 'Colorado', 85);
const myCarTwo = new Student('Sup Johnson', 'Colorado', 85, 'Computer Security');
const myCarThree = new Traveler('Sup Johnson', 'Colorado', 85, 'Computer Security');
const myCarFour = new Traveler('Sup Johnson', null, 85, 'Computer Security');


const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <p>{myCarThree.getGreeting()}</p>
      <p>{myCarFour.getGreeting()}</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderTemplate();
