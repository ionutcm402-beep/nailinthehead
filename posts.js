/*
  ╔══════════════════════════════════════════════════════════╗
  ║              NAIL IN THE HEAD — BLOG POSTS              ║
  ║                                                          ║
  ║  HOW TO ADD A NEW POST:                                  ║
  ║  1. Copy the template below                              ║
  ║  2. Paste it at the TOP of the POSTS array               ║
  ║  3. Fill in your title, date, category, and content      ║
  ║  4. Save and upload this file to GitHub                  ║
  ║  5. Done — your post is live!                            ║
  ╚══════════════════════════════════════════════════════════╝

  TEMPLATE — copy this for every new post:

  {
    id: "your-post-slug",           // unique, no spaces, use hyphens
    title: "Your Post Title Here",
    date: "1 June 2026",
    category: "AI BASICS",          // e.g. AI BASICS, REAL LIFE, OPINION, HOW TO, MONEY, BEGINNERS
    readTime: "5 min read",
    excerpt: "A short summary shown on the blog index page. 1-2 sentences.",
    featured: false,                // set true for ONE post to make it the featured post
    content: `
      <p>Your first paragraph goes here. Write normally — just use HTML paragraph tags.</p>

      <p>Each paragraph is wrapped in p tags like this.</p>

      <h2>Use h2 for section headings</h2>

      <p>More content here.</p>

      <blockquote>Use blockquote for pull quotes or important points.</blockquote>

      <p>Keep writing...</p>
    `
  },

*/

const POSTS = [

  {
    id: "why-people-get-rubbish-ai-answers",
    title: "Why most people get rubbish answers from AI — and how to fix it in 30 seconds",
    date: "31 May 2026",
    category: "AI BASICS",
    readTime: "5 min read",
    excerpt: "Everyone's tried AI. Most people typed something vague, got something useless back, and gave up. Here's the one thing that changes everything.",
    featured: true,
    content: `
      <p>Let me guess. You typed something into ChatGPT. You got something back that was either completely generic, weirdly wrong, or just... not what you needed. And you thought: what's the point?</p>

      <p>That's not your fault. And it's not really AI's fault either. It's just that nobody told you the one thing you need to know to get a good result.</p>

      <h2>AI is not a search engine</h2>

      <p>When you type something into Google, you're looking for a page that already exists. When you type something into AI, you're having a conversation. And like any conversation — the more context you give, the better the response.</p>

      <p>Most people type something like: <em>"Write me a complaint letter."</em></p>

      <p>And they get back something generic and useless. Of course they do — the AI has no idea who you are, what happened, who you're complaining to, or what you want as an outcome.</p>

      <blockquote>The golden rule: give AI the same detail you'd give a solicitor, a doctor, or a very thorough friend. The more specific you are, the better the answer.</blockquote>

      <h2>The 30-second fix</h2>

      <p>Instead of "write me a complaint letter", try this:</p>

      <p><em>"Write me a formal complaint letter to British Gas about an incorrect bill of £340 on my account. I moved out of the property three months ago and the bill is for a period after I left. I want a full refund and a written apology. Professional tone, under 200 words."</em></p>

      <p>Same request. Completely different result. The AI now knows who you're writing to, what happened, what you want, and how you want it written.</p>

      <h2>What this means for you</h2>

      <p>Every prompt on this site is already written with this level of detail. You don't have to figure it out yourself — just find the situation that matches yours, fill in the [brackets] with your details, and paste it in.</p>

      <p>That's it. That's the whole trick.</p>

      <p>Go try it. Pick any prompt from the library and see what comes back when the AI actually knows what you need.</p>
    `
  },

];
