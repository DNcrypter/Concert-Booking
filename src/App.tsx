import "./App.css";
import WorkingSolution from "./Concert_booking";



const App = () => {

  const Head_line = () => {
    return ( <div className="div_align">
      <h1 className="headline_style">Coldplay consert booking page:</h1>
      <h3 className="headline_style">book your ticket before it out of sale....... What are you waiting for !!!....... grab tickets and get a chance to meet one to one.</h3>
      <h5 className="headline_style">Note:- each person is allowed to book 5 tickets only</h5>
      <h2 className="headline_style">Coldplay is waiting for you !!!</h2>

    </div>
    );
  }





  return (
    <>
    <Head_line />
      <WorkingSolution />
    </>
  );
};

export default App;
