export default function Home() {
  const artworks = [
    {
      id: "1",
      title: "Midnight Horizon",
      price: "450",
      soldOut: false,
      coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
    },
    {
      id: "2",
      title: "Crimson Silence",
      price: "650",
      soldOut: true,
      coverImage: "https://picsum.photos/seed/art/800/1000",
    },
    {
      id: "3",
      title: "The Valley Awake",
      price: "320",
      soldOut: false,
      coverImage: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800",
    }
  ];

  return (
    <main className="min-h-screen bg-transparent text-stone-900 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 pb-24">
        {artworks.map((art) => (
          <div key={art.id} className="group flex flex-col bg-transparent border border-stone-200 hover:border-stone-400 transition-colors">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <img 
                src={art.coverImage} 
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h2 className="text-2xl font-serif italic tracking-tight mb-2">{art.title}</h2>
              <p className="text-lg text-stone-500 mb-8">£{art.price}</p>
              
              <div className="mt-auto">
                {art.soldOut ? (
                  <button disabled className="w-full py-4 px-4 border border-stone-300 text-stone-400 font-semibold uppercase tracking-widest text-sm cursor-not-allowed">
                    Sold Out
                  </button>
                ) : (
                  <button className="w-full py-4 px-4 bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors font-semibold uppercase tracking-widest text-sm">
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
