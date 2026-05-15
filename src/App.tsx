import { Card } from "./Card"
import { PurchaseWindow } from "./PurchaseWindow"
import { useState } from "react"

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    price: string;
    variant: "gold" | "silver" | "bronze";
  } | null>(null);

  const handleOpenModal = (title: string, price: string, variant: "gold" | "silver" | "bronze") => {
    setSelectedPlan({ title, price, variant });
    setIsModalOpen(true);
  };

  return (
    <main 
      className={`
        bg-dark-background
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        p-24
      `}
    >
      
      <h1
        className={`
            font-bold
            text-center
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
          onClick={() => handleOpenModal("SILVER", "$ 49,90", "silver")}
        />

        <Card variant="gold"
          title="GOLD"
          price="$ 99,90"
          benefits={["Diary content", "Monthly mentoring", "VIP group"]}
          onClick={() => handleOpenModal("GOLD", "$ 99,90", "gold")}
        />

        <Card variant="bronze"
          title="BRONZE"
          price="$ 24,90"
          benefits={["Diary content"]}
          onClick={() => handleOpenModal("BRONZE", "$ 24,90", "bronze")}
        />    
      </div>
        {selectedPlan && (
          <PurchaseWindow
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={selectedPlan.title}
            price={selectedPlan.price}
            variant={selectedPlan.variant}
          />
        )}
    </main>
  )
}
export default App