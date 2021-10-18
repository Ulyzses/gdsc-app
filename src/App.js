import Increment from './components/Increment';
import APIRaw from './components/APIRaw';
import API from './components/API';

const App = () => {

  return (
    <div className="container my-5">
      <div className="row flex-column">
        <div className="col">
          <h1 className="display-4">GDSC-UPD Developer Test</h1>
          <p>The Github repository for this page can be found <a href="https://github.com/Ulyzses/gdsc-app">here</a>. Built using <a href="https://reactjs.org">React.js</a> with the <a href="https://bootswatch.com/sandstone/">Sandstone</a> theme.</p>
        </div>
      </div>
      <hr />
      <Increment />
      <hr />
      <APIRaw />
      <hr />
      <API />
    </div>
  );
}

export default App;
