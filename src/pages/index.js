import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I’m <span className="text-blue-500">Syed Ahmed Ali Shah</span>
          </h1>
          <p className="text-lg text-gray-400">
            Web Developer | Designer | Learner
          </p>
        </section>

        {/* Projects Section */}
        <section className="projects py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
            Featured Projects
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6Ux75AXGv1rvA5SfH7e5wyDo8Q8wuqNb_g&s"
                alt="Khan's Fragrance"
                className="rounded mb-4 project-image"
              />
              <h3 className="text-xl font-bold mb-2">Khan's Fragrance</h3>
              <p className="text-gray-400">
                A luxury online perfume store showcasing exclusive scents with an
                elegant design. Built for seamless shopping and fragrance
                exploration.
              </p>
            </div>
            <div className="project-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3NHWg4OjeqEnKMSr7v2JaECqjUg8Dje6QA&s"
                alt="SNJWireless"
                className="rounded mb-4 project-image"
              />
              <h3 className="text-xl font-bold mb-2">SNJWireless</h3>
              <p className="text-gray-400">
                A mobile company providing cutting-edge smartphones and gadgets
                with a sleek e-commerce platform for easy browsing and secure
                shopping.
              </p>
            </div>
            <div className="project-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXzA69ev-P0xc8todWa3Of0LbR8TqqM-n2g&s"
                alt="Autoparts Company"
                className="rounded mb-4 project-image"
              />
              <h3 className="text-xl font-bold mb-2">Autoparts Company</h3>
              <p className="text-gray-400">
                An autoparts marketplace offering a vast range of high-quality
                products for vehicles. Built to simplify searching and
                purchasing parts.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials py-12 bg-gray-900 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
            What People Say
          </h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="italic">
                "Syed Ahmed Ali Shah delivered an exceptional website for my
                business. Highly recommend his services!"
              </p>
              <h4 className="text-lg font-bold mt-4">- Client 1</h4>
            </div>
            <div className="testimonial-card">
              <p className="italic">
                "A true professional with a keen eye for design. Working with
                Syed was a fantastic experience."
              </p>
              <h4 className="text-lg font-bold mt-4">- Client 2</h4>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
            Latest Blog Posts
          </h2>
          <div className="blog-grid">
            <div className="blog-card">
              <h3 className="text-xl font-bold mb-2">
                How to Build Responsive Websites
              </h3>
              <p className="text-gray-400">
                Learn the best practices for creating fully responsive websites
                that work on any device.
              </p>
            </div>
            <div className="blog-card">
              <h3 className="text-xl font-bold mb-2">
                Top 10 Web Design Trends in 2024
              </h3>
              <p className="text-gray-400">
                Discover the latest trends in web design and how they can
                improve user experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
