import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const posts = [
    {
      id: 1,
      title: "Building Resilient Local AI Workflows",
      date: "Oct 2026",
      readTime: "4 min read",
      category: "Engineering",
      excerpt: "Exploring how small language models and local orchestration tools change the way we build indie software."
    },
    {
      id: 2,
      title: "Why .space Domains Fit Independent Creators",
      date: "Sep 2026",
      readTime: "3 min read",
      category: "Identity",
      excerpt: "Stepping away from crowded legacy extensions to build a digital outpost that feels open and exploratory."
    }
  ];

  return (
    <div className="site-wrapper">
      
      {/* HEADER */}
      <header className="blog-header">
        <div className="blog-container nav-content">
          <a href="#home" className="logo">
            <span className="logo-dot" />
            <span>your.space</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li>
                <button 
                  onClick={() => setActiveTab('home')} 
                  style={{ color: activeTab === 'home' ? '#C85A32' : '' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('about')} 
                  style={{ color: activeTab === 'about' ? '#C85A32' : '' }}
                >
                  About
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="blog-container">
        {activeTab === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section className="hero-section">
              <span className="badge">Developer & Writer</span>
              <h1>Crafting software, indie web spaces, and local AI solutions.</h1>
              <p>Welcome to my personal digital garden. I write code, explore offline-first engineering models, and build minimal user interfaces.</p>
              <div className="hero-buttons">
                <a href="mailto:your-email@example.com" className="btn-primary">Get in Touch</a>
              </div>
            </section>

            {/* WRITINGS SECTION */}
            <section className="writing-section">
              <div className="section-header">
                <h2>Selected Writing</h2>
                <span style={{ fontSize: '13px', color: '#605B52' }}>{posts.length} posts</span>
              </div>

              <div>
                {posts.map((post) => (
                  <article key={post.id} className="post-card">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span>{post.date} • {post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* ABOUT SECTION */
          <section className="hero-section">
            <h1>About Me</h1>
            <p>I am a builder focused on clean software engineering, minimalist aesthetics, and returning control of digital tools back to the user through local architectures.</p>
            <div className="post-card" style={{ marginTop: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Tools & Technologies</h3>
              <p>React, standard CSS styling, Vite, local LLM orchestration via Ollama, and independent domain setups on the .space network.</p>
            </div>
          </section>
        )}

        {/* CONTACT CALLOUT */}
        <div className="contact-box">
          <div>
            <h3>Let's connect</h3>
            <p>Have a question or want to discuss a project?</p>
          </div>
          <a href="mailto:your-email@example.com" className="btn-primary">Send an Email</a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="blog-footer">
        <div className="blog-container footer-content">
          <p>© {new Date().getFullYear()} your.space. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </footer>

    </div>
  );
}