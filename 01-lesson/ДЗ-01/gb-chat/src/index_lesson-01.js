import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
/* import App from './App'; */
/* import reportWebVitals from './reportWebVitals'; */
import { Test, TestClass, ComponentWithoutJSX } from './componetns/test/test';
/* import './componetns/test/test.css'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentWithoutJSX
      props1="props1"
      props2={(arg) => console.log("click", arg)}
    />
    {/* <div className="wrapper"></div> */}
    {/* <Test
      props1={1}
      props2='123'
      props3={false}
      props4={(arg) => console.log('click', arg)}
      props5={[4, 5, 6, 7]}
      films={[{ title: 'film1', year: 2012 }, { title: 'film2', year: 2013 }]}
    /> */}
    {/* <TestClass
      props1={1}
      props2='123'
      props3={false}
      props4={(arg) => console.log('click', arg)}
      props5={[4, 5, 6, 7]}
      films={[{ title: 'film1', year: 2012 }, { title: 'film2', year: 2013 }]}
    /> */}
    <Test
      props1={1}
      props2='123'
      props3={false}
      props4={(arg) => console.log('click', arg)}
      props5={[4, 5, 6, 7]}
      films={[{ title: 'film1', year: 2012 }, { title: 'film2', year: 2013 }]}
      test={
        <TestClass
          props1={1}
          props2='123'
          props3={false}
          props4={(arg) => console.log('click', arg)}
          props5={[4, 5, 6, 7]}
          films={[{ title: 'film1', year: 2012 }, { title: 'film2', year: 2013 }]}
        />
      }
    />
    {/* <h1>Hello React!</h1> */}
    {/* <App /> */}
  </React.StrictMode>
);

/* reportWebVitals(); */
