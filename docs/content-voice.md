# Content and code voice (anti-AI slop)

Readers and developers look for the same tells: stock formulas, buzzwords, and repetitive structure. Useful framing: [Capitol Technology University on spotting AI-generated content](https://www.captechu.edu/blog/how-spot-ai-generated-content-it-fact-or-fiction) (generic jargon, parallel filler, overly smooth sameness) and common [r/webdev discussion of AI-coded tells](https://www.reddit.com/r/webdev/comments/1oq9yin/how_do_you_know_that_its_coded_by_ai/) (copy-paste patterns, over-explained comments).

## Copy

- Prefer one concrete image over three abstract nouns. Name Greenville, ticket queues, racks, phones when it fits.
- Avoid headline templates like “Questions, answered” or “Built for X you already Y” unless there is a specific reason.
- Rotate vocabulary: if “enterprise-grade” appears twice on one page, rewrite one.
- Skip filler clusters where you can: unlock, seamless, ecosystem, leverage, revolutionary, end-to-end, unless the client said it first.
- Lists: sentence case reads more human than Title Case slide bullets.
- No em dashes on Centervert properties (see workspace rules).

## Meta / social

- `openGraph.description` and `twitter.description` should not be identical strings; same facts, different wording.

## Code

- Comments explain *why* or non-obvious constraints, not what the next line states at a glance.
- Prefer one clear block over four copy-paste UI cells when content is really a short list.

Homepage strings are locked in [`docs/copy/homepage.md`](copy/homepage.md); update that file whenever marketing copy in `src/` changes.
