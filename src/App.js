import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  let [isValid, setIsValid] = useState(false);
  let [text, setText] = useState('');

  const testValidity = useMemo(()=>{
    return /^[+-]?(?=.)(?:\d+,)*\d*(?:\.\d+)?$/.test(text)
  }, [text])

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  }

  useEffect(()=>{
    testValidity ? setIsValid(true) : setIsValid(false) 
  }, [testValidity])

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={handleChange}

        />
        <span className="icon is-small is-right">
          <i className={`fas ${ isValid ? "fa-check" : "fa-times" }`} />
        </span> 
      </div>
    </div>
  );
}

export default App;
