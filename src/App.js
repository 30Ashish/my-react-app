// function App() {
//   return "Hello Ashish";
// }

// export default App;

//b1 - jsx - single line
// function App() {
//   return <h1>Ashish Londhe</h1>
// }
// export default App;

/* b2 - jsx - multiline*/
// function App() {
//   return (<h1>Software developers create the computer applications that allow users to do specific tasks
//     and the underlying systems that run the devices or control networks.
//     Software quality assurance analysts and testers design and execute software tests to identify problems and learn how the software works.
//   </h1>);
// }
// export default App;

/* b2- multi tags */
// function App() {
//   return (
//     <div>
//       <h1>HElloooo Guysss</h1>
//     </div>
//   );
// }
// export default App;

/* b2-multiple jx*/
function App() {
  return (
    <div>
      <Person name="Ashish" />
      <Person name="Londhe" />
      <Person name="Sindhudurg" />
      <Person name="Sawantwadi" />
      <Person name="HELLO" />
    </div>
  );
}
function Person({ name }) {
  return (
    <div>
      <img src="https://picsum.photo/300" alt=" " />
      <h1>Person name :{name}</h1>
      <p>
        Software developers create the computer applications that allow users to
        do specific tasks and the underlying systems that run the devices or
        control networks. Software quality assurance analysts and testers design
        and execute software tests to identify problems and learn how the
        software works. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Veniam obcaecati libero, maiores corrupti aliquid unde, commodi,
        soluta omnis sed vel possimus magnam doloribus quidem autem. Delectus
        tenetur expedita repellendus deleniti.
      </p>
    </div>
  );
}

export default App;
