const PROMPTS = [
  {
    id: 1, cat: "work",
    title: "Ask for a pay rise",
    desc: "Gets you a professional, persuasive email asking for a salary increase — without sounding desperate or aggressive.",
    preview: "Write me a professional email asking my manager for a pay rise...",
    prompt: `Write me a professional email asking my manager for a pay rise. Here are the details:

My name: [YOUR NAME]
My job title: [YOUR JOB TITLE]
How long I've worked here: [X YEARS]
My main achievements this year: [LIST 2-3 THINGS YOU'VE DONE WELL]
The salary increase I want: [AMOUNT OR PERCENTAGE]
My current salary: [CURRENT SALARY]

Make the email confident but not arrogant. Keep it under 200 words. Focus on my value to the company, not on my personal needs.`,
    tip: "Tip: Fill in the bits in [brackets] before you paste this in. The more specific you are, the better the result."
  },
  {
    id: 2, cat: "letters",
    title: "Complaint letter that gets results",
    desc: "A firm, professional complaint letter that companies actually respond to. Works for energy, broadband, shops — anything.",
    preview: "Write a formal complaint letter to a company on my behalf...",
    prompt: `Write a formal complaint letter to a company on my behalf. Here are the details:

Company name: [COMPANY NAME]
What happened: [DESCRIBE THE PROBLEM CLEARLY]
When it happened: [DATE OR TIMEFRAME]
What I've already tried: [CALLS, EMAILS, VISITS — OR "NOTHING YET"]
What I want them to do: [REFUND / APOLOGY / FIX THE PROBLEM]
My name: [YOUR NAME]

Make it firm, professional, and factual. Reference my consumer rights where relevant. End with a clear deadline for their response (14 days). Do not be rude but do not be a pushover either.`,
    tip: "Tip: Send this by email AND post if it's a serious complaint. Keep a copy of everything."
  },
  {
    id: 3, cat: "money",
    title: "Understand any letter from HMRC",
    desc: "Paste a confusing tax letter and get back a plain English explanation of what it means and what you need to do.",
    preview: "I have received a letter from HMRC that I don't understand. Please explain it...",
    prompt: `I have received a letter from HMRC that I don't understand. Please read it carefully and explain:

1. What this letter is actually about in plain English
2. Whether I need to do anything
3. What happens if I ignore it
4. Any deadlines I need to be aware of
5. What I should do next

Here is the letter:
[PASTE THE FULL LETTER TEXT HERE]

Please be clear and simple. I am not an accountant. Use bullet points where helpful.`,
    tip: "Tip: Never ignore HMRC letters. Even if you don't owe anything, always respond by the deadline."
  },
  {
    id: 4, cat: "work",
    title: "Decode a job advert",
    desc: "Find out what a job ad really means — the hidden requirements, the red flags, and whether it's worth applying.",
    preview: "Read this job advert and give me an honest breakdown of what it really means...",
    prompt: `Read this job advert and give me an honest breakdown of what it really means. Tell me:

1. What they actually want (not just what they say they want)
2. Any red flags in the language (e.g. "fast-paced environment", "wear many hats")
3. Skills that are must-haves vs nice-to-haves
4. What the salary probably is if they haven't stated it
5. Whether this sounds like a good place to work based on the language they use
6. Whether I should bother applying

Here is the job advert:
[PASTE THE FULL JOB ADVERT HERE]`,
    tip: "Tip: 'Competitive salary' usually means below market rate. 'Dynamic environment' often means chaotic. Trust the AI on this one."
  },
  {
    id: 5, cat: "everyday",
    title: "Explain anything simply",
    desc: "Paste any confusing document, article, or piece of text and get it explained like you're a normal person.",
    preview: "Please explain the following to me in plain, simple English...",
    prompt: `Please explain the following to me in plain, simple English. I am not an expert. Assume I know nothing about this topic.

After explaining it, tell me:
- The 3 most important things I need to understand
- Anything I should be worried about
- Any action I need to take

Here is the text I want explained:
[PASTE YOUR TEXT HERE]`,
    tip: "Tip: Works brilliantly for insurance documents, tenancy agreements, medical letters, bank terms — anything confusing."
  },
  {
    id: 6, cat: "work",
    title: "Write a CV that stands out",
    desc: "Tell the AI about yourself and get a proper, professional CV written — no awkward self-promotion required.",
    preview: "Write me a professional CV based on the information I give you...",
    prompt: `Write me a professional CV based on the information I give you. Make it clear, punchy, and tailored to get interviews.

My name: [YOUR NAME]
The type of job I'm applying for: [JOB TYPE OR SPECIFIC ROLE]
My work history (most recent first): [LIST JOBS, COMPANY, DATES, WHAT YOU DID]
My education: [QUALIFICATIONS AND WHERE YOU GOT THEM]
My key skills: [LIST ANYTHING RELEVANT]
Any achievements I'm proud of: [ANYTHING — DOESN'T HAVE TO BE WORK RELATED]
Any gaps in employment: [EXPLAIN BRIEFLY OR LEAVE BLANK]

Keep it to one page if possible. Use strong action words. Do not use clichés like "team player" or "hard worker".`,
    tip: "Tip: Tailor this for each job. Run it again with a specific job advert pasted in and ask the AI to adjust the CV to match."
  },
  {
    id: 7, cat: "letters",
    title: "Challenge a parking fine",
    desc: "A proper appeal letter for a parking fine or PCN. Most people just pay — those who appeal win more often than you'd think.",
    preview: "Write a formal appeal letter challenging a parking fine on my behalf...",
    prompt: `Write a formal appeal letter challenging a parking fine on my behalf.

Details of the fine:
- Issued by (council or private company): [NAME]
- Date of the fine: [DATE]
- Location: [WHERE]
- Reason stated on the fine: [WHAT THEY SAY I DID]
- My reason for appealing: [WHY YOU THINK IT'S UNFAIR]
- PCN or ticket number: [NUMBER]

Make this firm and professional. Reference relevant regulations where appropriate. If this is a private car park fine, note that it is an invoice not a legal fine and challenge their right to charge.`,
    tip: "Tip: Private car park fines (e.g. supermarket car parks) are invoices, not legal fines. You have more power than they want you to think."
  },
  {
    id: 8, cat: "business",
    title: "Write your About page",
    desc: "Tell the AI about your business and get a proper About page — warm, real, and not like every other one on the internet.",
    preview: "Write an About page for my small business website...",
    prompt: `Write an About page for my small business website. Make it feel warm, genuine, and human — not corporate.

Business name: [NAME]
What I do: [DESCRIBE YOUR SERVICE OR PRODUCT]
How long I've been doing it: [TIME]
Why I started: [YOUR STORY — EVEN IF IT'S SIMPLE]
What makes me different: [BE HONEST]
Who my customers are: [DESCRIBE THEM]
Where I'm based: [LOCATION]
My name (if personal business): [YOUR NAME]

Keep it under 250 words. Write in first person. Sound like a real person, not a press release.`,
    tip: "Tip: The best About pages tell a story. Don't just list facts — explain why you do what you do."
  },
  {
    id: 9, cat: "everyday",
    title: "Get out of an awkward situation",
    desc: "Need to cancel plans, say no, or have a difficult conversation? Get the right words without the drama.",
    preview: "Help me write a message to get out of an awkward situation politely but firmly...",
    prompt: `Help me write a message to get out of an awkward situation politely but firmly.

The situation: [DESCRIBE WHAT'S HAPPENING]
Who I'm messaging: [FRIEND / FAMILY / COLLEAGUE / BOSS]
My relationship with them: [CLOSE / PROFESSIONAL / DIFFICULT]
What I want the outcome to be: [E.G. THEY ACCEPT IT WITHOUT DRAMA]
Tone I want: [WARM / FIRM / APOLOGETIC / MATTER OF FACT]

Give me 2 versions — one softer, one more direct. I'll pick the one that fits.`,
    tip: "Tip: You don't owe anyone a long explanation. A short, kind, clear message is almost always better than a long one."
  },
  {
    id: 10, cat: "money",
    title: "Make sense of your payslip",
    desc: "Paste your payslip details and find out exactly what all the deductions mean and whether your pay looks right.",
    preview: "Help me understand my payslip and check if my deductions look correct...",
    prompt: `Help me understand my payslip and check if my deductions look correct.

My gross pay: [AMOUNT]
My tax code: [E.G. 1257L]
Income tax deducted: [AMOUNT]
National Insurance deducted: [AMOUNT]
Any other deductions: [LIST THEM E.G. PENSION, STUDENT LOAN]
My net (take home) pay: [AMOUNT]
How often I'm paid: [WEEKLY / MONTHLY]

Please explain what each deduction is, whether the amounts look roughly correct for my salary, and flag anything unusual. Tell me what my tax code means.`,
    tip: "Tip: If your tax code has W1 or M1 at the end, you may be on an emergency tax code and could be overpaying tax."
  },
  {
    id: 11, cat: "writing",
    title: "Write a professional email",
    desc: "Tell the AI what you need to say and get back an email that's clear, professional, and sounds like a human wrote it.",
    preview: "Write a professional email for me based on these details...",
    prompt: `Write a professional email for me based on these details.

Who I'm writing to: [NAME / ROLE / COMPANY]
My relationship to them: [CLIENT / COLLEAGUE / MANAGER / STRANGER]
What I need to say or ask: [EXPLAIN IN YOUR OWN WORDS]
The tone I want: [FORMAL / FRIENDLY / FIRM / APOLOGETIC]
Any important details to include: [DATES, REFERENCE NUMBERS, SPECIFICS]
What I want them to do after reading it: [REPLY / TAKE ACTION / JUST BE INFORMED]

Write a subject line too. Keep the email concise. No waffle.`,
    tip: "Tip: Read it before you send it. Change anything that doesn't sound like you — it's your email, not the AI's."
  },
  {
    id: 12, cat: "business",
    title: "Write a social media post",
    desc: "Describe what you want to promote and get a social post that actually gets attention — not corporate waffle.",
    preview: "Write a social media post for my small business...",
    prompt: `Write a social media post for my small business.

Platform: [FACEBOOK / INSTAGRAM / LINKEDIN / TWITTER/X]
What I want to promote: [PRODUCT / SERVICE / OFFER / NEWS]
Key details: [PRICE, DATE, WHAT MAKES IT GOOD]
My business name: [NAME]
Tone of my brand: [FRIENDLY / PROFESSIONAL / FUNNY / LOCAL AND PERSONAL]
My target customer: [WHO ARE THEY]

Give me 3 versions — short (1-2 lines), medium (3-4 lines), and one with a story or hook. Include relevant hashtags at the end.`,
    tip: "Tip: The version with a personal story or hook almost always performs better than the straightforward one. Test it."
  },
  {
    id: 13, cat: "everyday",
    title: "Plan a week of meals on a budget",
    desc: "Tell the AI your budget and what's in your fridge and get a full week of meals planned out for you.",
    preview: "Plan me a week of meals based on my budget and what I have...",
    prompt: `Plan me a week of meals based on my budget and what I already have.

My weekly food budget: [AMOUNT IN £]
Number of people eating: [NUMBER — INCLUDE AGES IF CHILDREN]
What I already have in: [LIST ANYTHING USEFUL IN YOUR FRIDGE/CUPBOARDS]
Any dietary requirements: [E.G. VEGETARIAN, ALLERGIES, DISLIKES]
How much time I have to cook: [E.G. 20 MINS ON WEEKDAYS, MORE AT WEEKENDS]

Give me a full 7-day meal plan with breakfast, lunch, and dinner. Include a shopping list at the end. Prioritise cheap, filling, and genuinely tasty meals.`,
    tip: "Tip: Ask it to give you the shopping list sorted by supermarket aisle to save time in the shop."
  },
  {
    id: 14, cat: "letters",
    title: "Write a landlord letter",
    desc: "Whether it's repairs, deposit disputes, or giving notice — get the right letter that protects your rights as a tenant.",
    preview: "Write a formal letter to my landlord about a problem with my rented property...",
    prompt: `Write a formal letter to my landlord about a problem with my rented property.

The issue: [DESCRIBE THE PROBLEM — E.G. DAMP, BROKEN BOILER, DEPOSIT DISPUTE]
How long the problem has existed: [TIMEFRAME]
What I've already done to report it: [E.G. CALLED THEM, EMAILED, NOTHING YET]
What I want them to do: [FIX IT / RETURN MY DEPOSIT / OTHER]
My name: [NAME]
Property address: [ADDRESS]
Landlord or letting agent name: [NAME]

Reference my legal rights as a tenant where relevant. Set a reasonable deadline (14 days for non-urgent, 24-48 hours for urgent like no heating). Keep it firm and factual.`,
    tip: "Tip: Always send landlord letters by email so you have a paper trail. Take photos of any problems as evidence."
  },
  {
    id: 15, cat: "money",
    title: "Negotiate a better deal",
    desc: "Write a script or message to negotiate a lower price, better terms, or a discount — on anything.",
    preview: "Help me negotiate a better deal or lower price on something...",
    prompt: `Help me negotiate a better deal or lower price on something.

What I'm trying to negotiate: [E.G. BROADBAND BILL, INSURANCE RENEWAL, CAR PRICE, RENT]
My current deal or price: [CURRENT COST OR TERMS]
What I want to achieve: [LOWER PRICE / BETTER TERMS / FREE UPGRADE]
How long I've been a customer (if relevant): [TIME]
Any competitor prices I've found: [LIST THEM IF YOU HAVE THEM]

Give me a script I can use on the phone, and a shorter version I can send by email or chat. Tell me the best time to do this and any tips for this specific type of negotiation.`,
    tip: "Tip: Always be willing to actually leave. The moment they believe you might go, the deals get much better."
  },
  {
    id: 16, cat: "writing",
    title: "Proofread and improve my writing",
    desc: "Paste anything you've written — email, letter, post, essay — and get it back polished and professional.",
    preview: "Please proofread and improve the following piece of writing...",
    prompt: `Please proofread and improve the following piece of writing.

What this writing is for: [E.G. WORK EMAIL / JOB APPLICATION / SOCIAL POST / COMPLAINT]
Who will read it: [AUDIENCE]
The tone I'm going for: [PROFESSIONAL / FRIENDLY / FORMAL / CASUAL]

Please:
1. Fix any spelling and grammar mistakes
2. Improve the flow and clarity
3. Remove any waffle or repetition
4. Keep my voice — don't make it sound like a robot
5. Tell me what the main improvements were

Here is my writing:
[PASTE YOUR TEXT HERE]`,
    tip: "Tip: If you don't like the result, tell it what you want changed. 'Make it shorter' or 'make it sound more like me' work well."
  }
];
