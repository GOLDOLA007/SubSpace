import { Card } from "./Card"

function App() {
  return (
    <main 
      className={`
        min-h-screen
        bg-zinc-950 text-zinc-50
        flex
        flex-col
        items-center
        justify-between-center
        p-24
      `}
    >
      
      <h1
        className={`
            text-3xl
            font-bold
            text-center
            text-zinc-300
            text-4xl
            mb-4
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-white to-gray-400
        `}
      >Choose your plan</h1>

      <div
        className={`
          flex
          flex-wrap
          justify-between
          mt-10
          max-w-2xl
          mx-auto
          h-full
          items-center
          gap-4
        `}
      >
        <Card variant="silver"
          title="SILVER"
          price="$ 49,90"
          benefits={["Diary content", "Monthly mentoring"]}
        />

        <Card variant="gold"
          title="GOLD"
          price="$ 99,90"
          benefits={["Diary content", "Monthly mentoring", "VIP group"]}
        />

        <Card variant="bronze"
          title="BRONZE"
          price="$ 24,90"
          benefits={["Diary content"]}
        />    
      </div>
    </main>
  )
}
export default App