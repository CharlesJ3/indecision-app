class IndecisionApp extends React.Component{
  constructor(props){
    super(props);

     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
     this.handlePick = this.handlePick.bind(this);
     this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
        options: [],
    };
  }

  handleDeleteOptions(){
    this.setState (() => {
      return {
        options: []
      };
    });
  }

  //Create method handlePick - pass down to action and then bind it, here and onClick for the button
  //Randomly pick an option and alert it

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option){
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}

          handlePick={this.handlePick}        
        />
        <Options 
          options={this.state.options}

          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
      <button 
        onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}>
          What should I do?
      </button>
      </div>
    );
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
        {
         this.props.options.map((option) =><Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        {this.props.optionText}
      </div>
    );
  }
}


class AddOption extends React.Component{  
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e){ 
    e.preventDefault(); 

    const option = e.target.options.value.trim();

    if (option) {
      this.props.handleAddOption();
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
          <label>
            Add Your Decision
            <input type="text" name="options" />
          </label>
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


/*Challenges Section*/

//  Create three methods: handleAddOne, handleMinusOnehandleMinusOne, handleReset
//  Log to print method name
//  Wire onClick & bind in the constructor
// class Counter extends React.Component{
//   constructor(props){
//     super(props);

//       this.handleAddOne = this.handleAddOne.bind(this);
//       this.handleMinusOne = this.handleMinusOne.bind(this);
//       this.handleReset = this.handleReset.bind(this);
//       this.state = {
//         count: 0
//       };
//   }

//   handleAddOne(){
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//     console.log(this.state.count);
//   }

//   handleMinusOne(){
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1
//       };
//     });
//     console.log(this.state.count);
//   }

//   handleReset(){
//     this.setState((prevState) => {
//       return {
//         count: prevState.count = 0
//       };
//     });
//     console.log(this.state.count);
//   }

//   render(){
//     return(
//       <div>
//         <h1>Count:{this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'));

/*NEW CHALLENGE*/

// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

// class Visibility extends React.Component {  
//   constructor(props){
//     super(props);

//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

//     this.state = {
//       visibilityCount: 0,
//       visibilityMessage: 'Turned off! Click me to turn on!',
//       visibilityDescription: '',
//     };
//   }

//   handleToggleVisibility(){

//     if(this.state.visibilityCount !== 0){
//       this.setState((prevState) => {
//         return {
//           visibilityCount: prevState.visibilityCount = 0,
//           visibilityMessage: 'Turned off! Click me to turn on!',
//           visibilityDescription: ''
//         };
//       });
//     }
    

//     else{
//       this.setState((prevState) 
//           visibilityCount: prevState.visibilityCount = 1,
//           visibilityMessage: 'Turned on! Click to Hide the secret description!',
//           visibilityDescription: 'Glad you can see this with state now! I wonder if I could have made it easier, but honestly it is an improvement over the last one!'
//         };
//       });
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>Visibility</h1>
//         <button onClick={this.handleToggleVisibility}>{this.state.visibilityMessage}</button>
//       {this.state.visibilityDescription && (
//         <div>
//           <p>{this.state.visibilityDescription}</p>
//         </div>
//       )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Visibility />, document.getElementById('app'));