import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Button = (props) => 
  <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => 
<tr>
  <td>{props.text}</td> 
  <td>{props.value}</td>
</tr>


const Statistics = (props) => {
  if (props.good || props.bad || props.neutral) {
  return (
    <div>
    <h2>Statistics</h2>
    <table>
    <tbody>
    <StatisticLine text="Good" value={props.good} />
    <StatisticLine text="Neutral" value={props.neutral} />
  <StatisticLine text="Bad" value={props.bad} />
<StatisticLine text="All" value={props.total()} />
<StatisticLine text="Average" value={props.average()} />
<StatisticLine text="Positive" value={props.positive()} />
</tbody>
</table>
</div>
)
} else {
  return ( 
    <div>
  <h2>Statistics</h2>
  <p>No feedback given</p>
  </div>
  )
}
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const calculateTotal = () => {
    return good + bad + neutral
  }

  const calculateAvg = () => {
    let average = (good * 1 + bad * -1 + neutral * 0) / (calculateTotal())
    if (average) {
      return average
    } else {
      return 0
    }
    
  }

  const calculatePositive = () => {
    let result = good / (calculateTotal()) * 100
    if (result) {
    return result + " %"
    } else {
      return 0
    }
  }


  return (
    <div>
    <h1>Give feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
     <Button onClick={handleBad} text="Bad" />
     <Statistics good={good} bad={bad} neutral={neutral} total={calculateTotal} average={calculateAvg} positive={calculatePositive} />
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

