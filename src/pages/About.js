import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="container py-12">
        {/* Vision Section */}
        <section className="vision-section flex flex-col md:flex-row items-center mb-12">
  <div className="text-content md:w-2/3">
    <h1 className="text-4xl font-bold mb-6 text-blue-500">My Vision</h1>
    <p className="text-gray-400 text-lg">
      I aim to revolutionize the web development industry by creating
      seamless, user-friendly, and aesthetically pleasing digital
      experiences. My goal is to combine innovative technologies with
      creative design to build impactful solutions for clients and users
      worldwide.
    </p>
  </div>
  <div className="profile-image-container md:w-1/3 flex justify-center mt-6 md:mt-0">
    <div className="image-wrapper">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s"
        alt="Syed Ahmed Ali Shah"
        className="rounded-full shadow-lg profile-image"
      />
    </div>
  </div>
</section>

        {/* Latest Journey Section */}
        <section className="journey-section py-12 bg-gray-900 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
            My Latest Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="journey-content">
              <h3 className="text-2xl font-bold mb-4">Starting Point</h3>
              <p>
                My web development journey began during my university years at
                KIET, where I honed my programming and problem-solving skills.
                I quickly developed a passion for crafting beautiful and
                functional websites.
              </p>
            </div>
            <div className="journey-content">
              <h3 className="text-2xl font-bold mb-4">Professional Growth</h3>
              <p>
                Over the years, I’ve worked on numerous projects across
                different industries, including e-commerce, UI/UX design, and
                cybersecurity. My dedication to continuous learning ensures I
                stay ahead in this ever-evolving field.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section text-center py-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Let’s Build Something Amazing
          </h2>
          <p className="text-gray-400 text-lg">
            If you’re looking for a developer who can turn your vision into
            reality, let’s connect and collaborate on your next project.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
