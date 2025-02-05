// import './App.css';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';


// function App() {
//   return (
//     <div classname="app">
//       <Navbar/>
//       <Main/>
//       <Sidebar1/>
//     </div>
    

//   );
// }

// export default App;

//props
// import React, { Component } from 'react'
// import CBCPropex1 from './components/CBCPropex1'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//       <CBCPropex1
//       username="bharath sai teja"
//       age={20}
//       hobbies={["playing cricket","watching movies"]}
//       address={{city:"hyd", area:"prgathinagr"}}
//       ismarried={true}
//       sendFun={function(){alert("hello bharath sai teja😍")}}    
//        />
//       </div>
//     )
//   }
// }


//props.children
import React, { Component } from 'react'
import Propchild from './components/Propchild'
import Sub from './components/Sub'

export default class extends Component {
  render() {
    return (
      <div>
        <Propchild username="bharath" comapny="accenture">
          <h1>this is bharath sai teja😍</h1>
          <Sub/>
        </Propchild>
      </div>
    )
  }
}

