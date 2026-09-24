export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-8 py-24">
      <h1 className="text-5xl font-light tracking-tight mb-16 text-center">Inquiry</h1>
      
      <form className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-black pb-3 mb-10 text-lg focus:outline-none w-full placeholder:text-neutral-400"
        />
        
        <input
          type="email"
          placeholder="Email"
          className="border-b border-black pb-3 mb-10 text-lg focus:outline-none w-full placeholder:text-neutral-400"
        />
        
        <select className="border-b border-black pb-3 mb-10 text-lg focus:outline-none w-full bg-transparent">
          <option value="">Inquiry Type</option>
          <option value="purchase">Purchase</option>
          <option value="commission">Commission</option>
          <option value="general">General Inquiry</option>
        </select>
        
        <textarea
          placeholder="Message"
          rows={6}
          className="border-b border-black pb-3 mb-10 text-lg focus:outline-none w-full resize-y placeholder:text-neutral-400"
        />
        
        <button
          type="submit"
          className="w-full bg-black text-white py-6 text-sm uppercase tracking-[0.125em] hover:bg-neutral-900 transition-colors"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
