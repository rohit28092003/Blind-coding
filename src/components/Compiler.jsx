import React, { useState, useEffect } from "react";
import { RxHeight } from "react-icons/rx";
import { VscRunAll } from "react-icons/vsc";

const Compiler = (props) => {
  const { qNo } = props;
  console.log(qNo); 
  const details = JSON.parse(localStorage.getItem("login"))
  console.log(details)
  const [count, setCount] = useState(0);
  const [Output, setOutput] = useState("");
  const [flag, setflag] = useState("false");
  useEffect(() => {
    const storedCount = localStorage.getItem("my-counter");
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-counter", count);
  }, [count]);

  const [formData, setformDataa] = useState({
    code: "",
    langid: "54",
  });
  const { code, langid } = formData;
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setformDataa((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const languages = ["54", "50", "71", "62"];
  const user = details?.email;

  const handlesubmit = async (e) => {
    e.preventDefault();
    setCount(count + 1);
    //console.log("submitting")
    if (!langid) {
      //console.log("error no lang  id")
      return;
    }
    try {
      const program = {
        source_code: code,
        language: langid,
        qNo: props.qNo,
        runCount: count,
        score: "100",
        user: user,
        flag:flag
        // versionIndex:"0",
        // stdin: "",
      };
      console.log(program)

      const response = await fetch(
        "https://blind-coding-backend.vercel.app/runCode",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // json:program,
          body: JSON.stringify(program),
        }
      );

      // if (!response.ok) {
      //   throw new Error(`API request failed with status ${response.status}`);
      // }

      const data = await response.json();
      // if('message' in data.message){
      //   console.log("error")
      // }
      if (data.output?.message) {
        setOutput(data.output?.message);
        setflag("true");
      } else {
        setOutput(data.output?.output);
      }
      //console.log(data)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function handlePaste(event) {
    event.preventDefault();
  }
  function handleCopy(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="side">
          <div>
            <select
              className="lang"
              defaultValue={langid}
              onChange={handlechange}
              id="langid"
              name="langid"
              value={formData.langid}
            >
              <option value={54}>C++</option>
              <option value={50}>C</option>
              <option value={71}>Python</option>
              <option value={62}>Java</option>
            </select>
          </div>

          {/* run button-> */}
          <div className="run">
            <button className="button-48" role="button">
              <VscRunAll size={18} />
              <span className="text">Run</span>
              <span>Count:{count}</span>
            </button>
          </div>
        </div>
        <div className="">
          <div className="editor">
            <textarea
              onCut={(event) => handlePaste(event)}
              onPaste={(event) => handlePaste(event)}
              onCopy={(event) => handleCopy(event)}
              className="codeInput"
              id="code"
              name="code"
              value={code}
              onChange={handlechange}
              cols={93}
              rows={30}
            ></textarea>
          </div>

          <div
            style={{
              color: "white",
              padding: "20px",
              backgroundColor: "#262626",
              height: "500px",
            }}
            className="output"
          >
            {Output ? (
              <div>
                <div style={{ color: "white", fontSize: "20px" }}>
                  {`Output: ${Output}`}
                </div>
              </div>
            ) : null}
          </div>

          {/* <div className="outputArea">
    <div className='output'>Output:</div>
					<textarea id="compilerOutput" cols={100} rows={10} style={{color:"white"}}>
          <div>
          {
            Output ? (<div>
              <div>
                {Output}
              </div>
            </div>) : null
          }
          </div>
          </textarea>
		</div> */}
        </div>
      </form>
    </div>
  );
};

export default Compiler;
