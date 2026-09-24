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
    <main className="min-h-screen p-8 bg-neutral-50 text-neutral-900">
      <header className="mb-16 text-center mt-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Curated Gallery</h1>
        <p className="text-neutral-500 uppercase tracking-widest text-sm">Original Paintings</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto pb-20">
        {artworks.map((edge) => {
          const art = edge?.node;
          if (!art) return null;

          const coverImage = art.images?.[0] || "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800";

          return (
            <div key={art.id} className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <img 
                  src={coverImage} 
                  alt={art.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-light mb-2">{art.title}</h2>
                <p className="text-lg text-neutral-600 mb-8 font-medium">£{art.price}</p>
                
                <div className="mt-auto">
                  {art.soldOut ? (
                    <button disabled className="w-full py-4 px-4 bg-neutral-200 text-neutral-500 font-semibold uppercase tracking-widest text-sm cursor-not-allowed rounded-sm">
                      Sold Out
                    </button>
                  ) : (
                    <button className="w-full py-4 px-4 bg-black text-white hover:bg-neutral-800 transition-colors font-semibold uppercase tracking-widest text-sm rounded-sm">
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
