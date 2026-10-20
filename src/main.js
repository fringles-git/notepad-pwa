<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0f172a" />
    <meta
      name="description"
      content="Privacy-first offline notepad with dark mode, snapshots, statistics, export options, and PWA install support."
    />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230f172a'/%3E%3Cpath d='M18 18h28v28H18z' fill='%23f8fafc' fill-opacity='.08'/%3E%3Cpath d='M22 20h20v8H22zm0 10h20v7H22zm0 9h14v5H22z' fill='%23e2e8f0'/%3E%3C/svg%3E" />
    <title>Notepad PWA</title>
    <link rel="stylesheet" href="/src/style.css" />
  </head>
  <body>
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-row">
          <div class="brand-mark">N</div>
          <div>
            <h1>Notepad</h1>
            <small>Offline · private</small>
          </div>
        </div>

        <section class="panel stats-panel">
          <div class="panel-title-row">
            <h2>Note stats</h2>
            <button id="toggle-focus" class="small-button ghost" type="button">Focus</button>
          </div>
          <ul class="stats-list">
            <li><span>Words</span><strong id="word-count">0</strong></li>
            <li><span>Characters</span><strong id="char-count">0</strong></li>
            <li><span>Paragraphs</span><strong id="paragraph-count">0</strong></li>
            <li><span>Reading time</span><strong id="reading-time">0 min</strong></li>
            <li><span>Saved</span><strong id="saved-status">Now</strong></li>
          </ul>
        </section>

        <section class="panel timer-panel">
          <h2>Writing timer</h2>
          <div id="timer-display" class="timer-display">00:00:00</div>
          <div class="button-row compact">
            <button id="start-timer" class="primary" type="button">Start</button>
            <button id="pause-timer" type="button">Pause</button>
            <button id="reset-timer" type="button">Reset</button>
          </div>

          <label class="setting-row" for="break-toggle">
            <span>Break reminder</span>
            <input id="break-toggle" type="checkbox" />
          </label>
          <label class="setting-row" for="typewriter-toggle">
            <span>Typewriter sound</span>
            <input id="typewriter-toggle" type="checkbox" />
          </label>
        </section>

        <section class="panel snapshots-panel">
          <div class="panel-title-row">
            <h2>Snapshots</h2>
            <button id="save-snapshot" class="small-button primary" type="button">Save</button>
          </div>
          <div id="snapshot-list" class="snapshot-list"></div>
        </section>
      </aside>

      <main class="editor-area">
        <header class="topbar">
          <div class="topbar-left">
            <button id="theme-toggle" class="icon-button" type="button" aria-label="Toggle theme">◐</button>
            <button id="fullscreen-btn" class="icon-button" type="button" aria-label="Fullscreen">▣</button>
            <button id="float-window-btn" class="icon-button" type="button" aria-label="Floating window">⬚</button>
          </div>

          <div class="topbar-right">
            <button id="download-btn" class="primary" type="button">Download</button>
            <button id="install-btn" class="hidden" type="button">Install app</button>
          </div>
        </header>

        <div class="editor-wrap">
          <textarea id="editor" spellcheck="true" aria-label="Notepad editor" placeholder="Start writing here..."></textarea>
        </div>
      </main>

      <aside class="tools-panel">
        <section class="panel">
          <h2>Tools</h2>
          <div class="button-stack">
            <button id="save-note" type="button">Save now</button>
            <button id="export-text" type="button">Export .txt</button>
            <button id="export-html" type="button">Export .html</button>
            <button id="export-pdf" type="button">Export .pdf</button>
            <button id="export-docx" type="button">Export .docx</button>
          </div>
        </section>

        <section class="panel">
          <h2>Ambient sounds</h2>
          <div id="ambient-list" class="ambient-list"></div>
          <div class="ambient-controls">
            <label class="slider-wrap">
              <span>Volume</span>
              <input id="ambient-volume" type="range" min="0" max="100" value="45" />
            </label>
            <button id="ambient-stop" class="ghost" type="button">Stop</button>
          </div>
        </section>

        <section class="panel keyboard-panel">
          <h2>Keyboard shortcuts</h2>
          <ul>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>S</kbd> save</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> theme</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> focus</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> export PDF</li>
          </ul>
        </section>
      </aside>
    </div>

    <div id="toast" class="toast" aria-live="polite"></div>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
