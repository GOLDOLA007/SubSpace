interface PurchaseWindowProps {
    title: string;
    price: string;
    isOpen: boolean;
    onClose: () => void;
    variant: 'gold' | 'silver' | 'bronze';
}

export function PurchaseWindow({ title, price, isOpen, onClose, variant }: PurchaseWindowProps) {
    if (!isOpen) return null;

    const colors = {
        gold: 'text-yellow-400 border-yellow-400',
        silver: 'text-gray-400 border-gray-400',
        bronze: 'text-orange-600 border-orange-800',
    }

    const description_plan = {
        gold: 'The Gold Plan offers the best value with exclusive benefits and premium features, providing an unparalleled experience for our most discerning customers.',
        silver: 'The Silver Plan provides a balanced mix of features and affordability, perfect for those seeking great value without compromising on quality.',
        bronze: 'The Bronze Plan is an affordable option that delivers essential features and benefits, ideal for those looking to get started with our services.'
    }

    const buttonColors = {
        gold: 'bg-yellow-600 hover:bg-yellow-500',
        silver: 'bg-gray-600 hover:bg-gray-400',
        bronze: 'bg-orange-600 hover:bg-orange-700'
    }

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay: o fundo escuro que fecha o modal ao clicar */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Caixa do Modal */}
      <div className={`
        relative 
        bg-[#121212]
        text-white 
        border 
        border-zinc-800 
        p-8 
        rounded-2xl 
        max-w-md 
        w-full 
        animate-in 
        fade-in 
        zoom-in 
        duration-300
      `}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white"
        >
          ✕
        </button>

        <h2 className={`text-2xl font-black mb-2 ${colors[variant]}`}>
          {title}
        </h2>
        <p className="text-zinc-400 mb-6">
          <span className="font-bold">{description_plan[variant]}</span>
        </p>

        <div className="bg-zinc-800/50 p-4 rounded-lg mb-6 flex justify-between items-center">
          <span className="text-zinc-300">Total to pay:</span>
          <span className="text-xl font-bold text-white">{price}</span>
        </div>

        {/* Aqui futuramente entrará o formulário do Stripe/Cartão */}
        <div className="space-y-3">
          <button className={`${colors[variant]} w-full bg-zinc-800/50 hover:${buttonColors[variant]} hover:text-black hover:transition-colors hover:duration-400 font-bold py-3 rounded-xl hover:opacity-90 transition-opacity`}>
            Pay with Card
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-transparent text-zinc-500 font-semibold py-2 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}