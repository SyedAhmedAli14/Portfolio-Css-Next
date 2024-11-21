import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 rounded bg-black text-white border border-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
