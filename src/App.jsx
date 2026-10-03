import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('light');

  // Toggle theme state and update HTML attribute
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

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
            <span>viswahq.space</span>
          </a>

          <div className="nav-right">
            <nav>
              <ul className="nav-links">
                <li>
                  <button 
                    onClick={() => setActiveTab('home')} 
                    style={{ color: activeTab === 'home' ? 'var(--accent)' : '' }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('about')} 
                    style={{ color: activeTab === 'about' ? 'var(--accent)' : '' }}
                  >
                    About
                  </button>
                </li>
              </ul>
            </nav>

            {/* THEME TOGGLE BUTTON */}
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="blog-container">
        {activeTab === 'home' ? (
          <>
           {/* ROLLING TICKER BAR */}
            <div className="ticker-wrapper">
              <div className="ticker-track">
                <span><span className="ticker-dot" />⚡ Freshly launched viswahq.space domain — site under active construction & AI-assisted exploration!</span>
                <span><span className="ticker-dot" />⚡ Freshly launched viswahq.space domain — site under active construction & AI-assisted exploration!</span>
              </div>
            </div>

            {/* HERO SECTION */}
            <section className="hero-section">
              <span className="badge">Salesforce Developer & Proactive Monitoring Engineer</span>
              <h1>Building reliable systems, clean web spaces, and local AI solutions.</h1>
              <p>Welcome to my personal corner of the viswahq.space web. I specialize in enterprise Salesforce architecture, proactive monitoring engineering, and exploring local developer workflows.</p>
              <div className="hero-buttons">
                <a href="mailto:viswanani2003@gmail.com" className="btn-primary">Get in Touch</a>
              </div>
            </section>

            {/* WRITINGS SECTION */}
            <section className="writing-section">
              <div className="section-header">
                <h2>Selected Writing</h2>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{posts.length} posts</span>
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
            <p>I am a Salesforce Developer and Proactive Monitoring Engineer by trade. What makes this corner of the .space web unique is that this entire site was co-created live alongside an AI collaborator—turning an empty domain into a minimalist editorial space from scratch.</p>
            <p style={{ marginTop: '16px' }}>I'm using this space to dive deeper into modern frontend tools, programming languages, and local AI workflows, exploring how human intent and AI assistance can build clean, independent software.</p>
            <div className="post-card" style={{ marginTop: '24px' }}>
              <h3 style={{ marginBottom: '8px' }}>Stack & Exploration</h3>
              <p>React, Vite, pure CSS custom properties, AI-assisted development workflows, and independent domain setups.</p>
            </div>
          </section>
        )}
        {/* CONTACT CALLOUT */}
        <div className="contact-box">
          <div>
            <h3>Let's connect</h3>
            <p>Have a question or want to discuss a project?</p>
          </div>
          <a href="mailto:viswanani2003@gmail.com" className="btn-primary">Send an Email</a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="blog-footer">
        <div className="blog-container footer-content">
          <p>© {new Date().getFullYear()} viswahq.space. All rights reserved.</p>
          <ul className="footer-links">
            {/* GitHub */}
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>

            {/* Twitter / X */}
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
}