# V12 Door Board

Live activity tracker and leaderboard for the V12 door-to-door team. Agents open the link, enter their name, pick their team, and log approaches, presentations, in & ups, apps (with AP) and leads bought. No account needed.

## Files

- `index.html` — the board
- `firebase-config.js` — Firebase settings, admin email, starting team list
- `firestore.rules` — who can read and write what (paste into Firebase → Firestore → Rules)

## Admin

Tap **Admin** at the bottom of the board and sign in with the email/password you created in Firebase Authentication. From there you can:

- Edit teams (one per line) and targets
- Rename reps, move them between teams, or hide reps who've left
- Fix a rep's numbers for any day

## Hosting

Netlify deploys this repository automatically. Any change pushed to the `main` branch goes live within a minute or two.
