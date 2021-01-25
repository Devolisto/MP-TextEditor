import "./App.css";
import {useState} from "react";
import styled from "styled-components";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const Button = styled.button`
padding: 10px 15px;
curser: pointer;
&:hover {
  background-color: lightblue;
  color: white;
}
`
const yellowButton = styled.button`
background-color: yellow;
`

const blueButton = styled.button`
background-color: blue;
` 

const redButton = styled.button`
background-color: red;
`

const blackButton = styled.button`
background-color: black;
`
const purpleButton = styled.button`
background-color: purple;
`

const TextArea = styled.textarea`
  width: 350px;
  height: 200px;
  font-size: 17px;
`;

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {

  const [highlight, setHighlight] = useState("");
  const [textColor, setTextColor] = useState("black");



  const changeTextColor = (textColor) => {
    if(textColor === "yellow") {
        setTextColor(yellowButton);
        console.log("changed to yellow")
    } if (textColor === "blue") {
      setTextColor(blueButton)
    } if (textColor === "red") {
      setTextColor(redButton);
    } if (textColor === "black") {
      setTextColor(blackButton);
    } if (textColor === "purple") {
      setTextColor(purpleButton);
    }
  } 


  const stylingBoxes = stylings.map((style) => (
    <Button className="btn btn-light" style={styles[style]} key={style} 
    >
      {style}
    </Button>
  ));

  const colorBoxes = colors.map((color) => (
    <button onClick={() => changeTextColor(textColor)}
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <TextArea />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
