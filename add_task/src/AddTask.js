import logo from './logo_2do.png';
import './AddTask.css';

function AppHeader()
{
  return (
    <header className="App-header">
        <p className = "Header-text">
          Add Task
        </p>
        <button onClick="" className="exit-button">X</button>
    </header>
  );
}

function AppLogo()
{
  return(
    <div id = "logo-container">
      <div className = "App-Logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

function AppForm()
{
  return (
    <center><div id = "Form-container">
      <form>
        <label htmlFor = "title">Title</label>
        <input 
          type = "text"
          className="input-title"
          placeholder = "Enter task title"
          // name = "title"
          // id = "title" />
          />
        <label htmlFor = "description">Description</label>
        <input 
          type = "text"
          className="input-desc"
          placeholder = "Enter task description"
          // name = "Description"
          // id = "des" />
          />
        <label htmlFor = "date">Date end</label>
        {/* need changes for date */}
        <input 
          type = "text"
          className="input-date"
          placeholder = "Click here to choose date"
          // name = "date"
          // id = "date" />
          />
      </form>
    </div></center>
  );
}

function AppButton()
{
  return( 
    <div className = "Button-container">
      <button onClick="" className="Add-button">Add</button>
      <button onClick="" className="Cancel-button">Cancel</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <body className = "App-body">
        <AppLogo/>
        <AppForm/>
        <AppButton/>
      </body>
    </div>
  );
}
export default App;
