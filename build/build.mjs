// Quiet Machine Studio — AI Field Guide build.
// One markdown source of truth -> the whole static guide + the deliverable.
// Generates: the index (folder-tree nav + level toggle), every published article page
// (FAQ + schema, studio byline, soft CTA, breadcrumb + prev/next), the zip bundle,
// and llms.txt (root) + llms-full.txt (concatenated guide).
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import matter from 'gray-matter';
import { marked } from 'marked';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CONTENT = path.join(ROOT, 'content/field-guide');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, 'field-guide');
const SITE = 'https://qm.studio';

const RANK = { beginner: 1, intermediate: 2, advanced: 3 };
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');
const isoDate = (d) => (d instanceof Date) ? d.toISOString().slice(0, 10) : String(d).slice(0, 10);
const fmtDate = (d) => { const [y, m, day] = isoDate(d).split('-'); const M = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return `${M[+m - 1]} ${+day}, ${y}`; };

function readMatter(file) { const { data, content } = matter(fs.readFileSync(file, 'utf8')); return { data, body: content.trim() }; }

// ---- load content ----
const guide = readMatter(path.join(CONTENT, '_guide.md')).data;
const topics = fs.readdirSync(CONTENT)
  .filter((d) => fs.statSync(path.join(CONTENT, d)).isDirectory())
  .map((slug) => {
    const dir = path.join(CONTENT, slug);
    const meta = readMatter(path.join(dir, '_topic.md')).data;
    const articles = fs.readdirSync(dir).filter((f) => /^\d+-.*\.md$/.test(f)).sort().map((f) => {
      const { data, body } = readMatter(path.join(dir, f));
      const slugName = f.replace(/^\d+-/, '').replace(/\.md$/, '');
      return { topicSlug: slug, file: f.replace(/^\d+-/, ''), slug: slugName, body, ...data, url: `/field-guide/${slugName}.html` };
    });
    return { slug, name: meta.name, order: meta.order, blurb: (meta.blurb || '').trim(), articles };
  })
  .sort((a, b) => a.order - b.order);

const allArticles = topics.flatMap((t) => t.articles.map((a) => ({ ...a, topicName: t.name })));
const pub = (a) => a.status === 'published';

// ---- shared CSS ----
const CSS = `
  :root{--ink:#101014;--ink-soft:#4a4a52;--ink-faint:#8a8a92;--paper:#fcfcfa;--line:#e3e3e0;--green:#0d7a4f;--green-s:#e7f3ed;--blue:#1d6fb8;--blue-s:#e7f0f8;--amber:#a8651d;--amber-s:#f6efe4;--mono:'IBM Plex Mono',monospace;--sans:'IBM Plex Sans',sans-serif;}
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:var(--paper);color:var(--ink);font-family:var(--sans);}
  .site-header{position:fixed;top:0;left:0;right:0;height:3.25rem;display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;background:#fff;border-bottom:1px solid #eee;z-index:1000;}
  .site-header .brand{font-family:var(--mono);font-size:0.85rem;font-weight:400;letter-spacing:0.12em;color:#000;text-decoration:none;white-space:nowrap;}
  .site-header .nav{display:flex;gap:1.4rem;}
  .site-header .nav a{font-family:var(--mono);font-size:0.75rem;font-weight:300;letter-spacing:0.1em;text-transform:lowercase;color:#888;text-decoration:none;transition:color .2s ease;}
  .site-header .nav a:hover{color:#000;}
  .b-beginner{color:var(--green);background:var(--green-s);}
  .b-intermediate{color:var(--blue);background:var(--blue-s);}
  .b-advanced{color:var(--amber);background:var(--amber-s);}
  footer{margin-top:60px;padding-top:20px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;font-family:var(--mono);font-size:12px;color:var(--ink-faint);}
  footer .wordmark{color:var(--ink);font-weight:600;letter-spacing:.06em;}
  footer a{color:inherit;text-decoration:none;}
  footer a:hover{color:var(--ink);}
`;
const HEADER = `<header class="site-header">
  <a class="brand" href="/">Quiet Machine</a>
  <nav class="nav"><a href="/info.html">info</a><a href="/policy.html">policy</a></nav>
</header>`;

// ---- file tree (github-style nav at the foot of each article) ----
function renderTree(curSlug, curTopic) {
  const blocks = topics.map((t) => {
    const live = t.articles.filter(pub);
    if (!live.length) return '';
    const open = t.slug === curTopic ? ' open' : '';
    const items = live.map((a) => `<a class="ti${a.slug === curSlug ? ' cur' : ''}" href="${a.url}">${esc(a.title)}</a>`).join('');
    return `<details class="tsec"${open}><summary>${esc(t.name)}</summary><div class="titems">${items}</div></details>`;
  }).filter(Boolean).join('');
  return `<nav class="tree" aria-label="browse the guide">${blocks}</nav>`;
}

// ---- article page ----
function renderArticle(a, topic, prev, next, related) {
  const lvl = a.level || 'beginner';
  const summary = (a.summary || a.koan || '').trim();
  const bodyHtml = marked.parse(a.body || '');
  const faq = Array.isArray(a.faq) ? a.faq : [];
  const faqHtml = faq.length ? `
  <section class="faq">
    <h2>Common questions</h2>
    ${faq.map((f) => `<div class="qa"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('\n    ')}
  </section>` : '';
  const faqLd = faq.length ? `<script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}
</script>` : '';
  const artLd = `<script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: summary, datePublished: isoDate(a.date), dateModified: isoDate(a.updated || a.date), author: { '@type': 'Organization', name: 'Quiet Machine Studio', url: SITE }, publisher: { '@type': 'Organization', name: 'Quiet Machine Studio', url: SITE }, mainEntityOfPage: { '@type': 'WebPage', '@id': SITE + a.url } })}
</script>`;
  const pager = (prev || next) ? `
  <nav class="pager">
    ${prev ? `<a class="prev" href="${prev.url}"><span class="dir">&larr; previous</span><span class="pt">${esc(prev.title)}</span></a>` : '<span></span>'}
    ${next ? `<a class="next" href="${next.url}"><span class="dir">next &rarr;</span><span class="pt">${esc(next.title)}</span></a>` : '<span></span>'}
  </nav>` : '';
  const treeHtml = `
  <div class="tree-wrap">
    <span class="tree-label">browse the guide</span>
    ${renderTree(a.slug, a.topicSlug)}
  </div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(a.title)} — Quiet Machine Studio</title>
<meta name="description" content="${escAttr(summary)}">
<link rel="canonical" href="${SITE}${a.url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${escAttr(a.title)}">
<meta property="og:description" content="${escAttr(summary)}">
<meta property="og:url" content="${SITE}${a.url}">
<meta property="og:site_name" content="Quiet Machine Studio">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escAttr(a.title)}">
<meta name="twitter:description" content="${escAttr(summary)}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
${artLd}
${faqLd}
<style>
${CSS}
  .page{max-width:720px;margin:0 auto;padding:88px 28px 64px;}
  .breadcrumb{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);}
  .breadcrumb a{color:var(--green);text-decoration:none;}
  .breadcrumb .sep{color:var(--ink-faint);margin:0 7px;}
  .head{margin-top:14px;display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap;}
  h1{font-size:clamp(32px,5.5vw,46px);line-height:1.06;font-weight:700;letter-spacing:-0.015em;max-width:18ch;}
  .badge{flex-shrink:0;font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;border-radius:5px;padding:4px 9px;}
  .summary{margin-top:16px;font-size:17.5px;line-height:1.55;color:var(--ink-soft);max-width:58ch;}
  .summary strong{color:var(--ink);font-weight:600;}
  .body{margin-top:14px;}
  .body h2{font-size:22px;font-weight:600;letter-spacing:-0.01em;margin-top:38px;margin-bottom:10px;}
  .body h3{font-size:17px;font-weight:600;margin-top:24px;margin-bottom:6px;}
  .body p{font-size:16px;line-height:1.65;color:var(--ink-soft);max-width:64ch;margin-top:12px;}
  .body p:first-child{margin-top:0;}
  .body strong{color:var(--ink);font-weight:600;}
  .body a{color:var(--green);text-decoration:none;border-bottom:1px solid rgba(13,122,79,.3);}
  .body ul,.body ol{margin:12px 0 0 1.1rem;color:var(--ink-soft);}
  .body li{font-size:16px;line-height:1.6;margin-top:6px;max-width:64ch;}
  .body blockquote{margin:16px 0;padding:2px 0 2px 18px;border-left:2px solid var(--line);color:var(--ink-soft);}
  .faq{margin-top:48px;padding-top:30px;border-top:1px solid var(--line);}
  .faq h2{font-size:13px;font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:18px;}
  .qa{margin-top:18px;}
  .qa h3{font-size:16.5px;font-weight:600;margin-bottom:5px;}
  .qa p{font-size:15px;line-height:1.6;color:var(--ink-soft);max-width:64ch;}
  .cta{margin-top:48px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px 24px;box-shadow:0 1px 3px rgba(0,0,0,.04);}
  .cta p{font-size:15.5px;line-height:1.55;color:var(--ink-soft);max-width:60ch;}
  .cta a{color:var(--green);font-weight:600;text-decoration:none;}
  .byline{margin-top:32px;font-family:var(--mono);font-size:12px;color:var(--ink-faint);}
  .byline b{color:var(--ink-soft);font-weight:500;}
  .pager{margin-top:40px;padding-top:24px;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:16px;}
  .pager a{text-decoration:none;display:flex;flex-direction:column;gap:3px;max-width:46%;}
  .pager .next{text-align:right;margin-left:auto;}
  .pager .dir{font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:var(--ink-faint);}
  .pager .pt{font-size:14.5px;font-weight:600;color:var(--ink);}
  .pager a:hover .pt{color:var(--green);}
  .tree-wrap{margin-top:36px;}
  .tree-label{display:block;font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:12px;}
  .tree{font-family:var(--sans);font-size:15px;}
  .tsec>summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 2px 9px;font-weight:700;font-size:15px;color:var(--ink);}
  .tsec>summary::-webkit-details-marker{display:none;}
  .tsec>summary::after{content:'\\203A';color:var(--ink-faint);font-size:17px;line-height:1;transition:transform .15s ease;}
  .tsec[open]>summary::after{transform:rotate(90deg);}
  .titems{display:flex;flex-direction:column;gap:1px;border-left:1px solid var(--line);padding-left:10px;margin-bottom:6px;}
  .ti{display:block;padding:9px 13px;border-radius:8px;color:var(--ink-soft);text-decoration:none;font-size:15px;line-height:1.35;}
  .ti:hover{background:var(--paper);color:var(--ink);}
  .ti.cur{background:#f1f1ef;color:var(--ink);font-weight:500;}
  @media(max-width:640px){.page{padding:78px 22px 48px;}.pager{flex-direction:column;}.pager a{max-width:100%;}.pager .next{text-align:left;}}
</style>
</head>
<body>
${HEADER}
<div class="page">
  <div class="breadcrumb"><a href="/field-guide/">AI Field Guide</a><span class="sep">/</span>${esc(topic.name)}</div>
  <div class="head">
    <h1>${esc(a.title)}</h1>
    <span class="badge b-${lvl}">${lvl}</span>
  </div>
  <div class="body">
${bodyHtml}
  </div>
${faqHtml}
  <div class="cta">
    <p>Quiet Machine Studio builds these systems for the people who run on them. If this is the kind of work you need shipped, <a href="/info.html">work with us</a>.</p>
  </div>
  <p class="byline"><b>Quiet Machine Studio</b> &middot; published ${fmtDate(a.date)}${a.updated && isoDate(a.updated) !== isoDate(a.date) ? ` &middot; updated ${fmtDate(a.updated)}` : ''}</p>
${pager}
${treeHtml}
  <footer>
    <span class="wordmark"><a href="/">Quiet Machine Studio</a></span>
    <span><a href="/field-guide/">AI Field Guide</a></span>
  </footer>
</div>
</body>
</html>
`;
}

// ---- index (published only) ----
function renderIndex() {
  const topicHtml = topics.map((t) => {
    const live = t.articles.filter(pub);
    if (!live.length) return '';
    const files = live.slice().reverse().map((a) => {
      const lvl = a.level || 'beginner';
      return `        <li class="file" data-level="${lvl}">
          <div class="file-main">
            <a class="file-title" href="${a.url}">${esc(a.title)}</a>
            <p class="koan">${esc((a.koan || '').trim())}</p>
          </div>
          <span class="badge b-${lvl}">${lvl}</span>
        </li>`;
    }).join('\n');
    return `      <section class="topic">
        <div class="folder"><h2>${esc(t.name)}</h2></div>
        <p class="blurb">${esc(t.blurb)}</p>
        <ul class="files">
${files}
        </ul>
      </section>`;
  }).filter(Boolean).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Field Guide — Quiet Machine Studio</title>
<meta name="description" content="${escAttr(guide.intro || '')}">
<link rel="canonical" href="${SITE}/field-guide/">
<meta property="og:type" content="website">
<meta property="og:title" content="AI Field Guide">
<meta property="og:description" content="${escAttr(guide.intro || '')}">
<meta property="og:url" content="${SITE}/field-guide/">
<meta property="og:site_name" content="Quiet Machine Studio">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AI Field Guide">
<meta name="twitter:description" content="${escAttr(guide.intro || '')}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${CSS}
  .page{max-width:760px;margin:0 auto;padding:88px 28px 64px;}
  h1{font-size:clamp(34px,6vw,52px);line-height:1.04;font-weight:700;letter-spacing:-0.015em;}
  .intro{margin-top:16px;font-size:17px;line-height:1.55;color:var(--ink-soft);max-width:58ch;}
  .gh-foot{display:inline-flex;align-items:center;gap:6px;color:var(--ink-faint);text-decoration:none;transition:color .2s ease;}
  .gh-foot:hover{color:var(--ink);}
  .gh-foot svg{flex-shrink:0;}
  .toggle{margin:30px 0 4px;padding:14px 0;display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
  .toggle-label{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);}
  .segs{display:inline-flex;border:1px solid var(--line);border-radius:999px;overflow:hidden;background:#fff;}
  .seg{font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:lowercase;padding:7px 16px;border:none;background:transparent;color:var(--ink-faint);cursor:pointer;transition:all .15s ease;}
  .seg+.seg{border-left:1px solid var(--line);}
  .seg.active{color:#fff;}
  .seg[data-level="beginner"].active{background:var(--green);}
  .seg[data-level="intermediate"].active{background:var(--blue);}
  .seg[data-level="advanced"].active{background:var(--amber);}
  .topic{margin-top:40px;padding-top:30px;border-top:1px solid var(--line);}
  .folder{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}
  .folder-path{font-family:var(--mono);font-size:12.5px;color:var(--ink-faint);}
  .folder h2{font-size:24px;font-weight:600;letter-spacing:-0.01em;}
  .blurb{margin-top:8px;font-size:15px;line-height:1.6;color:var(--ink-soft);max-width:62ch;}
  .files{list-style:none;margin-top:18px;display:flex;flex-direction:column;gap:8px;}
  .file{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;background:#fff;border:1px solid var(--line);border-radius:11px;padding:15px 17px;box-shadow:0 1px 3px rgba(0,0,0,.03);}
  .file-main{min-width:0;}
  .path{font-family:var(--mono);font-size:11.5px;color:var(--ink-faint);}
  .file-row{margin-top:3px;}
  .file-title{font-size:17px;font-weight:600;letter-spacing:-0.01em;color:var(--ink);text-decoration:none;}
  a.file-title:hover{color:var(--green);}
  .koan{margin-top:5px;font-family:var(--mono);font-size:12.5px;line-height:1.5;color:var(--ink-soft);}
  .badge{flex-shrink:0;font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;border-radius:5px;padding:3px 8px;align-self:center;}
  @media(max-width:640px){.page{padding:78px 20px 48px;}.file{flex-direction:column;}.badge{align-self:flex-start;}}
</style>
</head>
<body>
${HEADER}
<div class="page">
  <h1>AI Field Guide</h1>

  <div class="toggle">
    <span class="toggle-label">read at</span>
    <div class="segs" role="tablist">
      <button class="seg" data-level="beginner">beginner</button>
      <button class="seg" data-level="intermediate">intermediate</button>
      <button class="seg" data-level="advanced">advanced</button>
    </div>
  </div>

${topicHtml}

  <footer>
    <span class="wordmark"><a href="/">Quiet Machine Studio</a></span>
    <span><a class="gh-foot" href="https://github.com/jacques-qm/qm-ai-field-guide" target="_blank" rel="noopener"><svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>open source</a></span>
  </footer>
</div>
<script>
  var RANK={beginner:1,intermediate:2,advanced:3};
  function applyLevel(level){
    var r=RANK[level]||1;
    document.querySelectorAll('.file').forEach(function(f){f.style.display=(RANK[f.dataset.level]<=r)?'':'none';});
    document.querySelectorAll('.topic').forEach(function(t){var any=Array.prototype.some.call(t.querySelectorAll('.file'),function(f){return f.style.display!=='none';});t.style.display=any?'':'none';});
    document.querySelectorAll('.seg').forEach(function(s){s.classList.toggle('active',s.dataset.level===level);});
  }
  document.querySelectorAll('.seg').forEach(function(s){s.addEventListener('click',function(){applyLevel(s.dataset.level);});});
  applyLevel('advanced');
</script>
</body>
</html>
`;
}

// ---- llms.txt (root index) + llms-full.txt (concatenated) ----
function renderLlms() {
  let idx = `# Quiet Machine Studio — AI Field Guide\n\n> ${(guide.intro || '').trim()}\n`;
  let full = `# Quiet Machine Studio — AI Field Guide\n\n${(guide.intro || '').trim()}\n`;
  for (const t of topics) {
    const live = t.articles.filter(pub);
    if (!live.length) continue;
    idx += `\n## ${t.name}\n${(t.blurb || '').trim()}\n\n`;
    for (const a of live) {
      idx += `- [${a.title}](${SITE}${a.url}) (${a.level}): ${(a.koan || '').trim()}\n`;
      full += `\n\n---\n\n# ${a.title}\n_${t.name} · ${a.level}_\n\n${(a.summary || a.koan || '').trim()}\n\n${a.body}\n`;
    }
  }
  full += `\n\n---\n\nQuiet Machine Studio · ${SITE}/field-guide/\n`;
  return { idx, full };
}

// ---- bundle zip (markdown tree + licensed README) ----
function buildZip() {
  const stage = path.join(DIST, '_bundle');
  const inner = path.join(stage, 'quiet-machine-field-guide');
  fs.rmSync(stage, { recursive: true, force: true });
  fs.mkdirSync(inner, { recursive: true });
  execSync(`cp -R "${CONTENT}/." "${inner}/"`);
  fs.writeFileSync(path.join(inner, 'README.md'),
`# Quiet Machine Studio — AI Field Guide

A working map of how AI systems actually work, written by the studio that builds them.
Topics are folders, articles are markdown files. Read it in any editor, Obsidian, or on GitHub.

Web edition: ${SITE}/field-guide/

## License
This work is licensed under Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0).
You may share and adapt it for non-commercial use with attribution to Quiet Machine Studio (${SITE}).
`);
  const zipPath = path.join(OUT, 'quiet-machine-field-guide.zip');
  fs.rmSync(zipPath, { force: true });
  execSync(`cd "${stage}" && zip -r -q "${zipPath}" quiet-machine-field-guide`);
  fs.rmSync(stage, { recursive: true, force: true });
}

// ---- run ----
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let pages = 0;
for (const t of topics) {
  const live = t.articles.filter(pub);
  live.forEach((a, i) => {
    const prev = live[i - 1] || null;
    const next = live[i + 1] || null;
    const related = live.filter((x) => x.slug !== a.slug).slice(0, 3);
    fs.writeFileSync(path.join(OUT, `${a.slug}.html`), renderArticle(a, t, prev, next, related));
    pages++;
  });
}
fs.writeFileSync(path.join(OUT, 'index.html'), renderIndex());
const { idx, full } = renderLlms();
fs.writeFileSync(path.join(DIST, 'llms.txt'), idx);            // site root
fs.writeFileSync(path.join(OUT, 'llms-full.txt'), full);       // concatenated guide
buildZip();

const total = allArticles.length, published = allArticles.filter(pub).length;
console.log(`built: index + ${pages} article pages + zip + llms.txt  (${published}/${total} published)`);
