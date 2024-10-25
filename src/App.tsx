
import CardFeature from './components/CardFeature/CardFeature'
import Title from './components/Title/Title'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <Title> Quality feedbacks </Title>
        <Title> for your SaaS products </Title>
        <p className='sub-title'>The blocks & components you need</p>
      </header>
      <section className='section-card'>
        <CardFeature number={"1"} title={"Collect Feedback at Multiple Touchpoints"} content={"Provide a comprehensive understanding of the customer experience."} />
        <CardFeature number={"2"} title={"Ask Targeted and Specific Questions"} content={"Avoid vague or open-ended questions that may not yield actionable insights."} />
        <CardFeature number={"3"} title={"Prioritize and Respond to Feedback"} content={"Communicate the changes or improvements you've made in response to their feedback."} />
      </section>
    </div>
  )
}

export default App
