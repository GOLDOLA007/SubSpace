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
        bronze: 'text-amber-800 border-amber-800',
    }

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay: o fundo escuro que fecha o modal ao clicar */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Caixa do Modal */}
      <div 
      style={{
        backgroundColor: '#121212',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
      }}
      className="text-white relative border border-gray-800 border-zinc-800 p-8 rounded-2xl max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white"
        >
          ✕
        </button>

        <h2 className={`text-2xl font-black mb-2 ${colors[variant]}`}>
          Confirm Subscription
        </h2>
        <p className="text-zinc-400 mb-6">
          You are subscribing to the <span className="font-bold text-white">{title}</span> plan.
        </p>

        <div className="bg-zinc-800/50 p-4 rounded-lg mb-6 flex justify-between items-center">
          <span className="text-zinc-300">Total to pay:</span>
          <span className="text-xl font-bold text-white">{price}</span>
        </div>

        {/* Aqui futuramente entrará o formulário do Stripe/Cartão */}
        <div className="space-y-3">
          <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors">
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