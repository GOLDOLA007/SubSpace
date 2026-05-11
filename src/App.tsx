import { Card } from "./Card"

function App() {
  return (
    <main style={{padding: '40px', fontFamily: 'sans-serif'}}>
      
      <h1>Choose your plan</h1>

      <div style={{display: 'flex'}}>
        <Card
          title="Gold Plan"
          price="$ 99,90"
          benefits={["Diary content", "Monthly mentoring", "VIP group"]}
        />    
      </div>
    </main>
  )
}
export default App