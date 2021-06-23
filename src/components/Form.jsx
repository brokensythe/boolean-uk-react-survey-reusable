import Checkbox from "./Checkbox"
import RadioButton from "../RadioButtons"
import TextInput from "./TextInput"
import { useState } from 'react'

function Form({setAnswers, answers}) {

    function handleSubmit(event) {
        event.preventDefault()
    
        const newAnswer = {
            bestFeatures: [...event.target.bestFeatures].filter(feature=>feature.checked).map(feature=>feature.value),
            worstFeatures: [...event.target.worstFeatures].filter(feature=>feature.checked).map(feature=>feature.value),
            consistency: event.target.consistency.value,
            colour: event.target.colour.value,
            logo: event.target.logo.value,
            timeSpent: [...event.target.timeSpent].filter(feature=>feature.checked).map(feature=>feature.value),
            review: event.target.review.value,
            username: event.target.username.value,
            email: event.target.email.value
        }

        setAnswers([...answers, newAnswer])
    }

    return <form onSubmit={handleSubmit} className="form">
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group">
      <h3>What would you say that are the best features of your rubber duck?</h3>
      <ul>
        <li>
          <label
            ><Checkbox name="bestFeatures" value="colour" />It's
            yellow!</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="bestFeatures" value="sound"/>It
            squeaks!</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="bestFeatures" value="logo"/>It has a
            logo!</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="bestFeatures" value="size"/>Its big!</label
          >
        </li>
      </ul>
    </div>
    <div className="form__group">
      <h3>What would you say that are the worst bits of your rubber duck?</h3>
      <ul>
        <li>
          <label
            ><Checkbox name="worstFeatures" value="colour"/>It's
            yellow!</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="worstFeatures" value="sound"/>It
            squeaks!</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="worstFeatures" value="logo"/>It has a
            logo!</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="worstFeatures" value="size"/>Its big!</label
          >
        </li>
      </ul>
    </div>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck consistency?</h3>
      <ul>
        <li>
          <RadioButton id="consistency1" name="consistency" value="1"/><label
            htmlFor="consistency1"
            >1</label
          >
        </li>
        <li>
          <RadioButton id="consistency2" name="consistency" value="2"/><label
            htmlFor="consistency2"
            >2</label
          >
        </li>
        <li>
          <RadioButton id="consistency3" name="consistency" value="3"/><label
            htmlFor="consistency3"
            >3</label
          >
        </li>
        <li>
          <RadioButton id="consistency4" name="consistency" value="4"/><label
            htmlFor="consistency4"
            >4</label
          >
        </li>
      </ul>
    </div>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      <ul>
        <li>
          <RadioButton id="colour1" name="colour" value="1"/><label
            htmlFor="colour1"
            >1</label
          >
        </li>
        <li>
          <RadioButton id="colour2" name="colour" value="2"/><label
            htmlFor="colour2"
            >2</label
          >
        </li>
        <li>
          <RadioButton id="colour3" name="colour" value="3"/><label
            htmlFor="colour3"
            >3</label
          >
        </li>
        <li>
          <RadioButton id="colour4" name="colour" value="4"/><label
            htmlFor="colour4"
            >4</label
          >
        </li>
      </ul>
    </div>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck logo?</h3>
      <ul>
        <li>
          <RadioButton id="logo1" name="logo" value="1"/><label
            htmlFor="logo1"
            >1</label
          >
        </li>
        <li>
          <RadioButton id="logo2" name="logo" value="2"/><label
            htmlFor="logo2"
            >2</label
          >
        </li>
        <li>
          <RadioButton id="logo3" name="logo" value="3"/><label
            htmlFor="logo3"
            >3</label
          >
        </li>
        <li>
          <RadioButton id="logo4" name="logo" value="4"/><label
            htmlFor="logo4"
            >4</label
          >
        </li>
      </ul>
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <ul>
        <li>
          <label
            ><Checkbox name="timeSpent" value="swimming"/>Swimming</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="timeSpent" value="bathing"/>Bathing</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="timeSpent" value="chatting"/>Chatting</label
          >
        </li>
        <li>
          <label
            ><Checkbox name="timeSpent" value="noTime"/>I don't like to spend time with it</label
          >
        </li>
      </ul>
    </div>
    <label
      >What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
      ></textarea></label
    ><label
      >Put your name here (if you feel like it):<TextInput
        type="text"
        name="username"/></label
    ><label
      >Leave us your email pretty please??<TextInput
        type="email"
        name="email"/></label
    ><button className="form__submit" type="submit">Submit Survey!</button>
  </form>
}

export default Form