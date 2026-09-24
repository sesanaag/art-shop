import { client } from "../../tina/__generated__/client";

export default async function Home() {
  let artworks = [];
  try {
    const artworkResponse = await client.queries.artworkConnection();
    artworks = artworkResponse.data.artworkConnection.edges || [];
  } catch (error) {
    console.error("Error fetching artworks:", error);
  }

  return (
    <main className="min-h-screen bg-white text-black pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 pb-24">
        {artworks.map((edge) => {
          const art = edge?.node;
          if (!art) return null;

          const coverImage = art.images?.[0] || "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800";

          return (
            <div key={art.id} className="group flex flex-col bg-white border border-black/10 hover:border-black transition-colors">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img 
                  src={coverImage} 
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-light tracking-tight mb-1">{art.title}</h2>
                <p className="text-lg mb-8">£{art.price}</p>
                
                <div className="mt-auto">
                  {art.soldOut ? (
                    <button disabled className="w-full py-4 px-4 border border-black/30 text-neutral-400 font-semibold uppercase tracking-widest text-sm cursor-not-allowed">
                      Sold Out
                    </button>
                  ) : (
                    <button className="w-full py-4 px-4 bg-black text-white hover:bg-neutral-900 transition-colors font-semibold uppercase tracking-widest text-sm">
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
