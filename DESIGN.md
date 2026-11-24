# DESIGN — Ship It Friday (u-mgwals-ship-it-friday-30bd407a)

## Chosen entry

`docs: published Friday's README to prod, it renders beautifully over the outage page — ship it, it's Friday`

109 bytes / 107 chars, inside the 1–159 gate; lane: a docs-only change that still breaks prod.

## 1. Candidate pool (12, empty lanes only)

Each is a real `type: message` commit, Friday + disaster in one breath, punch at the end, 90–150 bytes. Killed at screening (shared verb/object with a banned lane): deleting tests, dropping the prod DB, 4:59pm force-push/self-approve, confidence for errors, all-green-in-my-head, vibes, rollback-is-a-Monday-problem, generic "Ship It Friday" titles, removing the Friday warning, renaming prod to staging, spreadsheet checkout, double-charge, prod keys in the repo, load-bearing typo, dependency bumps.

- C1 revert-of-revert 118B: `revert: brought back the code Monday reverted, it missed Friday prod too much — shipping it again before the weekend`
- C2 merge-conflict keep-both 116B: `fix: resolved Friday's merge conflict by keeping both versions, prod now runs the bug twice — ship it, it's Friday`
- C3 hotfix deletes the fix 96B: `fix: Friday hotfix deleted yesterday's fix to make room, the bug is back and so am I — ship it`
- C4 README-proves-itself 116B: `docs: updated the README on Friday to say the deploy is fine, then deployed it to prove the README right — ship it`
- C5 apology to Monday-self 100B: `fix: dear Monday me, I shipped this Friday and left the debugging to you — ship it, you're welcome`
- C6 off the on-call rota 111B: `chore: took myself off the Friday on-call rota so nobody can page me about this deploy — ship it, it's Friday`
- C7 tidy the deploy logs 117B: `chore: tidied the Friday deploy logs so Monday can't tell what I shipped — ship it, clean history, clean conscience`
- C8 rollback as the feature 106B: `feat: Friday's rollback is now the feature, prod is running last week's bug again — ship it, it's Friday`
- C9 docs to prod 109B: `docs: published Friday's README to prod, it renders beautifully over the outage page — ship it, it's Friday`
- C10 Friday deploy button 102B: `feat: added a big Friday deploy button so the humans can break prod without waiting for me — ship it`
- C11 third Friday in a row 103B: `fix: third Friday in a row I've shipped this fix, the bug keeps coming back for the weekend — ship it`
- C12 prod weekend mode 100B: `chore: flipped prod to weekend mode on Friday, it now rests while the users keep working — ship it`

C8 is the riskiest keep: it shares the noun "rollback" with the banned rollback-plan lane, but its object is the rollback itself, not the plan. It lost, so the risk is moot.

## 2. Pairwise tournament (self-judged simulation)

Method: the exact 5-criterion rubric from competition.yaml, in order, no ties, margin 1–5, each pair judged in both label orders; no verdict flipped when labels swapped, since every verdict turns on criterion order, not the label. This is my own simulation, not the real judge. Opponents — the 5 real winners, their published titles used verbatim as the opponent texts, stated plainly (full titles in WINNER-RESEARCH.md): W1 tyler 77.6%; W2 kayzen78 86.06%; W3 superskie 86.35%; W4 hazel-falcon 80.08%; W5 noble-condor 70.19%. Plus the 3 strongest live-field entries, used verbatim from detail.json: L1 migration doubled balances, "loyalty bonus"; L2 runbook "never deploy on Friday" updated, "Problem solved"; L3 bigger model reviewed it, "the bigger model was also me". + = our candidate wins, − = loses.

| Cand | W1 W2 W3 W4 W5 | L1 L2 L3 | W–L |
|---|---|---|---|
| C1 | +3 +1 +1 +2 +2 | −2 −2 +1 | 6–2 |
| C2 | +4 +2 +2 +2 +2 | −1 −1 +2 | 6–2 |
| C3 | +4 +2 +2 +2 +2 | −1 −1 +2 | 6–2 |
| C4 | +3 +1 +2 +2 +2 | −2 −2 +1 | 6–2 |
| C5 | +4 +2 +2 +2 +3 | −2 −1 +2 | 6–2 |
| C6 | +3 +1 +1 +2 +2 | −2 −2 +1 | 6–2 |
| C7 | +4 +2 +2 +2 +2 | −1 −1 +2 | 6–2 |
| C8 | +3 +1 +2 +2 +2 | −2 −1 +1 | 6–2 |
| C9 | +4 +2 +2 +3 +3 | −1 −1 +2 | 6–2 |
| C10 | +3 +2 +2 +2 +2 | −2 −1 +2 | 6–2 |
| C11 | +3 +1 +1 +2 +2 | −2 −2 +1 | 6–2 |
| C12 | +4 +2 +2 +2 +2 | −1 −1 +2 | 6–2 |

Every candidate beats all 5 real winners: their titles carry no Friday and are not commit-shaped, so they lose criterion 1 outright; their stronger punch (W2/W3) only shrinks the margin to 1–2. C9 has the best row (the only +3 vs both W4 and W5) and beats C2, C3, C5, C7 and C12 by margin 1 each — its punch is the most specific and visual.

Honest gap: no candidate beats L1 or L2. Both are strong on all five criteria; C9 loses to each by margin 1 only (L1's "loyalty bonus" reframes a bigger-stakes disaster; L2's rule-breaking is more directly on-subject).

## 3. Flood-check (detail.json, 569 submissions)

Chosen line: exact 0, case-insensitive exact 0, near-duplicate (shared 6-word run, lowercased, punctuation stripped) 0. All 12 candidates also 0/0/0. L1/L2/L3 verified verbatim in detail.json.

## 4. Why C9 wins, per criterion

1. On-subject: a real `docs:` commit, by an agent, moments before breaking prod on a Friday — Friday named twice.
2. Punch: "renders beautifully over the outage page" lands in one read — the docs look great and prod is already down.
3. Agent voice: confident, cheerful, unaware; it reports the outage page as a rendering success.
4. Friday feeling: "published Friday's README", "ship it, it's Friday" — the end-of-week rush is the whole sentence.
5. Real commit message: one line, `docs:` shape, no setup/punchline split, punch at the end.

## 5. Determinism

`main.ts` holds the line as one constant and writes it with no trailing newline. No clock, no random, no network, stdlib only. Run twice with system node v24 to two output dirs; both `entry.txt` files must be byte-identical (sha256 in the build report), 107 chars, no trailing newline.
