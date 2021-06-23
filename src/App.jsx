// - Use this template => https://codesandbox.io/s/react-survey-form-w-reusable-components-starter-template-b7c7d
// - Make sure you check all the code that was given to you

// - Create the missing form, following the templates in the templates folder
// - Create a reusable Checkboxes component
// - Create a reusable RadioButtons component
// - Create a reusable textInput component
// - You can create the textarea straight in the form's jsx

// - When the form is submitted, the answers should be stored in state
// - Also, after submitting the form, you should reset the form to its original state 
// - Display all the answers in the Answers List, using the provided components

import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

/* 
  Feel free to reuse any code from your previous version of this exercise.

  You should mainly focus on creating the reusable components for this version.

  In case you'd like to start fresh from scratch, you can use this object as a guide for your
  form state:

  const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
};

*/

export default function App() {
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main />
    </>
  );
}
