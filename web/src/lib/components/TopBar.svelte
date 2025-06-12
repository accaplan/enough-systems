<script lang="ts">
    // Props or logic can be added here if needed
  </script>
  
  <nav class="topbar">
    <div class="topbar__logo">
      <!-- Replace with your logo or site title -->
      <span>Systems for one planet thinking...</span>
    </div>
    <ul class="topbar__nav">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <!-- Add more links as needed -->
    </ul>
  </nav>
  
  <style>
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-family: 'Suisse', Arial, sans-serif;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .topbar__logo span {
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
  }
  .topbar__nav {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .topbar__nav a {
    text-decoration: none;
    color: #222;
    font-size: 1rem;
    transition: color 0.2s;
  }
  .topbar__nav a:hover {
    color: #0070f3;
  }
  </style>
  