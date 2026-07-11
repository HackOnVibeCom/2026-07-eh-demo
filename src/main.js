document.querySelector('#app').innerHTML = `
  <main style="font-family:system-ui;max-width:42rem;margin:4rem auto;text-align:center;line-height:1.6">
    <h1>✅ Built by Vite via the CI escape-hatch</h1>
    <p>This page was <b>not</b> static HTML in the repo — it was produced by
    <code>npm install &amp;&amp; npm run build</code> in GitHub Actions and deployed from <code>dist/</code>.</p>
    <p>If you can read this, framework builds work on <code>*.hackonvibe.com</code>.</p>
  </main>`;
