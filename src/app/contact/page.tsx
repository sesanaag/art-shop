"use client";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-8 py-24">
      <h1 className="text-5xl font-serif italic tracking-tight mb-16 text-center">Inquiry</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-stone-300 pb-3 text-lg focus:outline-none focus:border-stone-900 w-full bg-transparent placeholder:text-stone-400 transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b border-stone-300 pb-3 text-lg focus:outline-none focus:border-stone-900 w-full bg-transparent placeholder:text-stone-400 transition-colors"
        />
        <select className="appearance-none border-b border-stone-300 pb-3 text-lg focus:outline-none focus:border-stone-900 w-full bg-transparent text-stone-900 transition-colors cursor-pointer">
          <option value="">Inquiry Type</option>
          <option value="purchase">Purchase</option>
          <option value="commission">Commission</option>
          <option value="general">General Inquiry</option>
        </select>
        <textarea
          placeholder="Message"
          rows={6}
          className="border-b border-stone-300 pb-3 text-lg focus:outline-none focus:border-stone-900 w-full resize-y bg-transparent placeholder:text-stone-400 transition-colors"
        />
        <button
          type="submit"
          className="w-full bg-stone-900 text-stone-50 py-6 text-sm uppercase tracking-[0.125em] hover:bg-stone-700 transition-colors"
        >
          SEND INQUIRY
        </button>
      </form>
    </div>
  );
}
