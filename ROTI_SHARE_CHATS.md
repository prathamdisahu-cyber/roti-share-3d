# 📜 Roti Share 3D — Complete Chat & Prompt History

Found **6 User Prompts/Requests** from the Roti Share conversation (`1d717d16-919b-4979-86fb-0550f4133195`):

---

## 💬 Request #1 (2026-10-11T13:05:12Z)

```text
PROJECT NAME: ROTI SHARE 3D — FRACTIONS ADVENTURE

ROLE:
Act as a senior browser game developer, Three.js engineer,
educational game designer, 3D artist, UI/UX designer,
and software testing engineer.

OBJECTIVE:
Build a complete, polished, playable 3D educational game
that teaches fractions to children in Classes 3 and 4.

This must be a fully functional browser game, not a prototype,
static mockup, screenshot, or collection of disconnected features.

IMPORTANT:
Create a NEW, CLEAN project in the current workspace.
Do not copy broken CSS or JavaScript from my previous project.
Build and test the application before declaring it complete.

==================================================
1. TECHNOLOGY
==================================================

Use:
- Vite
- HTML
- CSS
- JavaScript
- Three.js for genuine real-time 3D graphics

Use a stable, compatible version of Three.js.

The game must run in a browser and be deployable to Vercel.

Create a proper project structure:

roti-share-3d/
  index.html
  package.json
  vite.config.js
  src/
    main.js
    style.css
    game/
      Game.js
      Scene.js
      CameraController.js
      Roti.js
      Character.js
      Kitchen.js
      FractionEngine.js
      GameState.js
      Distribution.js
      Levels.js
      AudioManager.js
    ui/
      HUD.js
      Menu.js
      LevelComplete.js
      Hints.js
  public/
    assets/

You may adjust this structure if a simpler, reliable architecture
is more appropriate, but keep code organized and maintainable.

Install dependencies and configure the project correctly.

Do not leave empty modules or placeholder implementations.

==================================================
2. VISUAL QUALITY — GENUINE 3D
==================================================

Create a beautiful, colorful, stylized 3D Indian kitchen.

The game should feel like a polished family-friendly
3D adventure game.

Use Three.js WebGLRenderer and a PerspectiveCamera.

Create an immersive three-quarter camera angle.

The scene must contain:
- A detailed wooden dining table.
- A cutting board.
- A 3D roti with visible thickness.
- Individual 3D plates.
- Three attractive cartoon children.
- Kitchen shelves.
- Pots and utensils.
- A window with warm sunlight.
- Plants and decorative details.
- A tiled floor.
- Appropriate shadows.
- Rich but balanced materials.

Use:
- Directional lighting.
- Ambient or hemisphere lighting.
- Soft shadows.
- Color management.
- Suitable tone mapping.
- Procedural textures where helpful.
- Roughness variation.
- Contact shadows where practical.

The scene must not look like a collection of primitive
spheres and cylinders.

Build detailed stylized characters using carefully designed
meshes or suitable openly licensed 3D models.

If external models or textures are used, ensure their URLs,
licenses, and loading behavior are valid.

Do not rely on unavailable assets.

The game must still look attractive if optional external
assets cannot load.

Create fallback procedural models when necessary.

==================================================
3. CAMERA AND CONTROLS
==================================================

Provide:
- Three-quarter perspective view.
- Smooth camera rotation around the table.
- Zoom in and zoom out.
- Reset camera.
- Smooth transitions between gameplay views.

Prevent the camera from moving through the table or characters.

Mouse controls must not interfere with button clicks.

Support touch devices where practical.

The roti and the characters must remain visible during gameplay.

==================================================
4. CHARACTERS
==================================================

Create three distinct characters:

CHINTU:
A cheerful child wearing yellow clothing.

MEERA:
A cheerful child wearing turquoise clothing.

GOLU:
A cheerful child wearing red clothing.

Give the characters:
- Distinct clothing colors.
- Detailed hair.
- Expressive eyes.
- Eyebrows.
- Mouths.
- Ears.
- Hands and feet.
- Appropriate body proportions.
- Smooth idle animation.
- Blinking.
- Looking at the roti.
- Smiling.
- Celebrating when food is shared correctly.
- Gentle confused expressions for incorrect answers.

Do not use flat pictures as character replacements.

Use actual 3D models.

==================================================
5. ROTI MODEL
==================================================

Create a detailed 3D roti.

Requirements:
- Irregular circular outline.
- Slightly raised edges.
- Golden surface.
- Toasted brown spots.
- Visible thickness.
- Top and bottom surfaces.
- Appropriate material.
- Soft shadow on the cutting board.

Use procedural geometry and textures where necessary.

The roti must not be a flat circle with lines drawn on it.

==================================================
6. AUTOMATIC CUTTING
==================================================

The player must NOT manually draw cutting lines.

Provide these slice options:

2 pieces = 1/2 each.
3 pieces = 1/3 each.
4 pieces = 1/4 each.
6 pieces = 1/6 each.
8 pieces = 1/8 each.

When the player selects a slice option and presses
"Cut & Share Roti":

1. Validate the selected option.
2. Animate the cutting action.
3. Generate actual separate 3D sector meshes.
4. Give every piece correct geometry and area.
5. Show visible separation between pieces.
6. Continue to automatic distribution.

Each piece must have a top surface, bottom surface,
visible thickness, and curved outer edge.

Use mathematically correct sector angles.

Do not simulate cutting using visual lines alone.

The cutting system must support different slice counts.

==================================================
7. AUTOMATIC DISTRIBUTION
==================================================

The player must NOT manually drag or distribute food pieces.

After cutting, automatically distribute the appropriate pieces
to the friends' plates according to the current objective.

Animate the pieces travelling from the roti to the plates.

Each piece must land on the correct plate.

Use a short delay between pieces to make the sequence clear.

Ensure pieces do not overlap incorrectly or float far above plates.

Update the game state after each placement.

Do not allow repeated clicks to create duplicate pieces
or start overlapping animations.

Disable the relevant controls while the operation is running.

Only mark distribution as complete after every piece has
reached its destination.

For objectives that require some food to remain on the board,
leave the correct amount there.

==================================================
8. LEVEL SYSTEM
==================================================

Implement the following levels.

LEVEL 1 — TWO FRIENDS
Share one roti equally between Chintu and Meera.

Expected result:
Chintu receives 1/2.
Meera receives 1/2.

LEVEL 2 — THREE FRIENDS
Share one roti equally among Chintu, Meera, and Golu.

Expected result:
Each receives 1/3.

LEVEL 3 — FOUR EQUAL PIECES
Divide one roti into four equal pieces.

Explain that each piece represents 1/4.

LEVEL 4 — FRACTION FINDER
Ask the player to identify a selected fraction.

LEVEL 5 — THREE-QUARTERS CHALLENGE
Golu requests 3/4 of a roti.

Automatically divide the roti into four equal pieces.

Move three pieces to Golu's plate.

Leave one piece on the board.

LEVEL 6 — COMPARE FRACTIONS
Teach comparisons such as:
1/2 > 1/4.
3/4 > 1/4.
1/3 < 2/3.

LEVEL 7 — EQUIVALENT FRACTIONS
Teach:
1/2 = 2/4.
2/4 = 4/8.

Use visual fraction comparisons.

LEVEL 8 — FRACTION ADDITION
Teach:
1/4 + 1/4 = 2/4.
1/4 + 2/4 = 3/4.

LEVEL 9 — ROTI SHOP
Customers request specific fractions.

Automatically prepare and serve the requested portion.

LEVEL 10 — FRACTION MASTER
Combine cutting, sharing, comparing, and fraction calculations.

Make the difficulty increase gradually.

==================================================
9. FRACTION ENGINE
==================================================

Implement a central fraction engine.

Represent fractions using integer numerators and denominators.

Implement:
- Fraction comparison.
- Fraction addition.
- Equivalent-fraction checking.
- Equal-sharing validation.
- Remaining-area calculation.

For each level, define:
- Required total.
- Required portion for each character.
- Required slice count.
- Expected remaining fraction.
- Completion conditions.

Do not hardcode Level 1 answers for every level.

The same mathematical data must drive:
- The 3D geometry.
- Piece labels.
- Plate contents.
- Fraction displays.
- Success or failure feedback.

The visual scene and mathematical state must never disagree.

==================================================
10. PROFESSIONAL UI/UX
==================================================

Create a polished game interface using CSS.

The interface must be styled from the first launch.

TOP LEFT:
- Home button.
- Level number.
- Difficulty label.

TOP CENTER:
- Short objective.
- Level progress.

TOP RIGHT:
- Stars.
- Score.
- Coins.
- Sound.
- Settings.

MAIN SCENE:
- Keep the roti and characters visible.
- Avoid oversized panels covering the gameplay.

BOTTOM CONTROL PANEL:
- Slice selection.
- Cut & Share Roti.
- Reset.
- Check Sharing.
- Look Around.

BOTTOM RIGHT:
- Compact Teacher's Hint button.

Use:
- Rounded panels.
- Consistent typography.
- Clear spacing.
- Warm colors.
- Accessible contrast.
- Smooth button transitions.
- Responsive layouts.

Never allow the game to fall back silently to unstyled HTML.

Ensure that the stylesheet is imported correctly and loaded.

The 3D canvas must occupy the correct area behind the interface.

The interface must not block mouse interaction with the 3D scene.

==================================================
11. HINT SYSTEM
==================================================

The Teacher's Hint button should open a compact card
near the bottom-right corner.

It must not cover the center of the game.

Hints must change according to the current objective.

Examples:

LEVEL 1:
"Two friends need two equal pieces."

LEVEL 2:
"Three friends need three equal shares."

LEVEL 5:
"Three-quarters means three out of four equal pieces."

EQUIVALENT FRACTIONS:
"Compare the total area of one half and two quarters."

Allow the player to close the hint.

==================================================
12. CHECK SHARING
==================================================

Implement a fully functional Check Sharing button.

When clicked:
- Verify that cutting is complete.
- Verify that automatic distribution is complete.
- Inspect the actual plate contents.
- Calculate each character's total fraction.
- Check the level's completion conditions.

LEVEL 1:
Chintu = 1/2.
Meera = 1/2.
Remaining = 0.

LEVEL 2:
Chintu = 1/3.
Meera = 1/3.
Golu = 1/3.
Remaining = 0.

LEVEL 5:
Golu = 3/4.
Remaining = 1/4.

Do not validate by checking visual positions alone.

Do not award success before animations finish.

If correct:
- Show a clear success message.
- Animate the characters.
- Award stars and coins once.
- Unlock the next level.

If incorrect:
- Show a friendly explanation.
- Allow the player to retry.

Prevent duplicate rewards for repeated button clicks.

==================================================
13. RESET
==================================================

The Reset button must:
- Remove previously generated pieces.
- Restore the original whole roti.
- Empty all plates.
- Clear the distribution state.
- Stop or cancel ongoing animations safely.
- Restore the level's initial state.
- Preserve unrelated saved progress.

==================================================
14. AUDIO AND REWARDS
==================================================

Add optional sounds for:
- Cutting.
- Piece placement.
- Correct answers.
- Level completion.

Include a sound toggle.

Add:
- Stars.
- Coins.
- Achievement badges.
- Level progression.
- Saved progress using localStorage.

Use subtle reward animations.

Do not make sounds play if the user has disabled them.

==================================================
15. ACCESSIBILITY AND PERFORMANCE
==================================================

Support typical student laptops.

Use reasonable geometry complexity.

Reuse materials.

Avoid unnecessary lights and shadows.

Handle browser resizing.

Prevent memory leaks.

Avoid duplicate animation loops.

Use clear button labels.

Provide keyboard navigation for essential UI controls.

Support touch screens where practical.

Respect reduced-motion preferences where feasible.

==================================================
16. PROJECT CONFIGURATION
==================================================

Configure package.json with working scripts:

npm install
npm run dev
npm run build
npm run preview

Ensure the project builds successfully.

Configure Vite for normal Vercel deployment.

Do not require a backend or API key for the core game.

Store basic progress locally.

==================================================
17. TESTING
==================================================

Before declaring completion:

1. Install project dependencies.
2. Run the development server.
3. Check browser console errors.
4. Verify that CSS loads.
5. Verify that Three.js renders.
6. Test camera controls.
7. Test automatic cutting.
8. Test automatic distribution.
9. Test Check Sharing.
10. Test Reset.
11. Test all ten levels.
12. Test the production build.
13. Check responsive behavior.

Fix errors discovered during testing.

Do not create fake buttons.

Do not leave unfinished TODOs for core features.

Do not report a successful test unless it was actually run.

If a feature cannot be completed, clearly report the limitation.

FINAL RESULT:
A complete, polished, colorful, genuine 3D browser game
where children learn fractions by watching a roti get cut
automatically and distributed to friends automatically.

The project must be playable and ready for Vercel deployment.

Begin by creating the clean project, implementing the features,
running the application, and fixing any errors.
```

---

## 💬 Request #2 (2026-10-11T13:16:41Z)

```text
send me the access
```

---

## 💬 Request #3 (2026-10-11T13:22:19Z)

```text
Fix the remaining gameplay bugs in my existing Roti Share 3D game.

IMPORTANT:
Do not rebuild the entire project.
Do not redesign the existing game unnecessarily.
Inspect the current implementation and fix the actual problems.

==================================================
1. CRITICAL BUG: ENTIRE ROTI GOES ONTO THE PLATE
==================================================

CURRENT PROBLEM:
When roti pieces are distributed to a character's plate,
the whole roti sometimes appears on the plate instead of
the correct individual portion.

EXPECTED BEHAVIOUR:
Only the required individual roti piece must move to the plate.

Examples:

LEVEL 1 — TWO FRIENDS:
- Cut one roti into 2 equal pieces.
- Move only one half to Chintu's plate.
- Move only the other half to Meera's plate.
- Never place a complete roti on either plate.

LEVEL 2 — THREE FRIENDS:
- Cut the roti into 3 equal pieces.
- Give one-third to each friend.
- Each plate must contain only its assigned piece.

THREE-QUARTERS CHALLENGE:
- Cut the roti into 4 equal pieces.
- Move exactly 3 quarter pieces to Golu's plate.
- Leave the remaining quarter on the cutting board.
- Do not move the whole roti to Golu's plate.

==================================================
2. FIX THE ACTUAL 3D GEOMETRY
==================================================

Inspect how the roti is created, cut, and moved.

Ensure that:
- The original whole roti is hidden or removed after cutting.
- Individual pieces are actual separate 3D meshes.
- Each piece has the correct sector geometry.
- Each piece has the correct fraction value.
- Only the selected piece mesh moves to a plate.
- The remaining pieces stay in their correct locations.
- The original whole-roti mesh cannot appear on a plate.
- Pieces do not overlap the plate incorrectly.

Do not solve this problem by changing only the fraction labels.

Do not simply draw lines on the whole roti.

Preserve correct geometry and fraction calculations.

==================================================
3. CORRECT PIECE PLACEMENT ON PLATES
==================================================

When a piece moves to a plate:

- Move the actual individual mesh.
- Position it within the plate boundaries.
- Keep it above the plate surface.
- Avoid floating or clipping through the plate.
- Use a small vertical offset to prevent z-fighting.
- Preserve the piece's correct shape and thickness.
- Animate its movement smoothly.

If a plate receives multiple pieces, arrange them neatly
inside the plate.

Do not stack all pieces at exactly the same coordinates.

Do not allow pieces to stretch, duplicate, or turn into
a complete roti during animation.

==================================================
4. FIX THE AUTOMATIC DISTRIBUTION LOGIC
==================================================

Read the current level's objective.

Create a reliable distribution plan before starting animation.

Each distribution entry must identify:
- The actual piece mesh.
- Its fraction.
- Its destination plate.
- Its placement position.

Move only the pieces listed in the distribution plan.

Do not distribute the original roti mesh.

Do not count the same piece twice.

Wait until all animations finish before marking distribution
as complete.

Prevent repeated clicks from starting duplicate distributions.

==================================================
5. FIX RESET AND REPLAY
==================================================

When Reset is clicked:

- Stop any active distribution sequence safely.
- Remove generated pieces.
- Remove or hide old plate contents.
- Restore the original whole roti.
- Clear previous placement records.
- Reset the current level's game state.
- Allow the player to start again.

Ensure old meshes do not remain hidden in the scene
and reappear during the next attempt.

==================================================
6. FIX CHECK SHARING
==================================================

The Check Sharing button must validate the actual game state.

Check:
- Which pieces exist.
- Which pieces are on each plate.
- The fraction represented by each piece.
- The total fraction assigned to each friend.
- The remaining fraction on the board.
- Whether distribution has completed.

Examples:

Level 1:
Chintu = 1/2.
Meera = 1/2.

Level 2:
Chintu = 1/3.
Meera = 1/3.
Golu = 1/3.

Three-Quarters Challenge:
Golu = 3/4.
Remaining on board = 1/4.

Do not award success when a whole roti is incorrectly
placed on a plate.

Award rewards only once per successful completion.

==================================================
7. CHECK THESE SMALL BUGS
==================================================

Inspect and fix the following if present:

A. Duplicate pieces:
The same piece should not appear on multiple plates.

B. Incorrect positions:
Pieces must remain inside their destination plates.

C. Floating pieces:
Pieces should rest naturally on the plate surface.

D. Overlapping pieces:
Multiple pieces should be positioned neatly.

E. Incorrect fraction labels:
Labels must match the actual geometry.

F. Incorrect score:
Do not award duplicate coins or stars after repeated clicks.

G. Reset problems:
The game must return to a clean initial state.

H. Animation problems:
Prevent pieces from teleporting, stretching, or moving twice.

I. UI problems:
Ensure buttons remain responsive and do not trigger
the same action multiple times.

J. Level progression:
Ensure the next level uses its own correct distribution rules.

K. Console errors:
Fix JavaScript errors related to geometry, animation,
event handlers, or missing objects.

==================================================
8. PRESERVE THE EXISTING GAME
==================================================

Keep the current:
- 3D kitchen.
- Characters.
- Camera.
- UI design.
- Learning levels.
- Equipment.
- Automatic cutting.
- Automatic distribution.
- Fraction-learning system.

Do not replace the game with a simplified demo.

Do not remove working features.

Inspect the existing code and make the smallest reliable
changes needed to fix the problems.

==================================================
9. TEST BEFORE COMPLETION
==================================================

Test the following scenarios:

TEST 1:
Cut the roti into 2 halves.
Confirm one half goes to each plate.

TEST 2:
Cut the roti into 3 equal pieces.
Confirm one piece goes to each friend's plate.

TEST 3:
Cut the roti into 4 quarters.
Move 3 quarters to Golu's plate.
Confirm 1 quarter remains on the board.

TEST 4:
Press Reset after distribution.
Confirm all plates are cleared and the whole roti returns.

TEST 5:
Complete a level and press Check Sharing repeatedly.
Confirm rewards are not duplicated.

TEST 6:
Start another level.
Confirm no pieces from the previous level remain.

Inspect the browser console and production build.

Report the root cause, files changed, and tests actually performed.

Do not claim a fix is complete unless it has been tested.
```

---

## 💬 Request #4 (2026-10-11T13:58:29Z)

```text
Fix the UI layering and visibility bugs in my existing
Roti Share 3D game.

IMPORTANT:
Do not rebuild the project.
Do not redesign the existing main menu.
Preserve the current colors, typography, button styles,
animations, and overall visual design.

PROBLEM:
On the main menu, these buttons and their associated screens
appear behind the blurred background or another UI layer:

1. Creative Kitchen (Sandbox)
2. Achievements & Badges
3. Select Level
4. How to Play

The main menu currently shows these buttons, but the UI layering
makes them appear partially hidden behind the background.

TASK 1 — FIX UI LAYERING
Inspect the existing HTML structure, CSS, and JavaScript.

Identify the exact cause of the problem.

Check:
- CSS position properties.
- z-index conflicts.
- Stacking contexts.
- Background overlay layers.
- Backdrop filters.
- Modal and dialog containers.
- Parent elements with overflow: hidden.
- Elements with incorrect opacity or visibility.
- Incorrect DOM hierarchy.

Fix the root cause instead of randomly increasing z-index values.

Ensure the main menu and its interactive buttons render
above the blurred decorative background.

TASK 2 — BACKGROUND AND OVERLAY
Keep the attractive blurred game scene in the background.

However:
- The background must remain behind the menu.
- The menu panel must remain clearly visible.
- Every menu button must appear in front of the background.
- No overlay should cover the buttons.
- Do not remove the background blur effect.
- Do not make the entire interface transparent.

Use a reliable layering structure with appropriate stacking
contexts and z-index values.

TASK 3 — FIX ALL MENU BUTTONS
Test these buttons individually:

1. Story Campaign
2. Roti Shop Order Mode
3. Timed Fraction Rush
4. Creative Kitchen (Sandbox)
5. Achievements & Badges
6. Select Level
7. How to Play

Every button must:
- Be fully visible.
- Be clickable.
- Respond to mouse and touch input.
- Open the correct screen or panel.
- Display above the background.
- Have a working close or back button where appropriate.

Do not create buttons that only look functional.

TASK 4 — MODAL AND PANEL LAYERING
When Creative Kitchen, Achievements, Select Level,
or How to Play opens:

- Show the appropriate content in the foreground.
- Keep the panel above the background and main menu.
- Prevent background elements from covering the panel.
- Ensure the close button is visible and clickable.
- Keep scrolling content inside its panel when necessary.
- Ensure the panel fits within the browser viewport.
- Support different screen sizes.

TASK 5 — PRESERVE THE 3D GAME
Do not break the Three.js scene or game functionality.

Preserve:
- 3D kitchen and characters.
- Roti cutting.
- Automatic distribution.
- Fraction calculations.
- Level progression.
- Scoring and rewards.
- Sound controls.
- Saved progress.

TASK 6 — TESTING
Run the application and inspect the actual rendered result.

Verify:
- All main menu buttons are in the foreground.
- No button is hidden behind the blurred background.
- Every menu button can be clicked.
- Each corresponding screen opens correctly.
- Close and back navigation work.
- The layout remains correct after resizing the browser.
- No new JavaScript or CSS errors are introduced.

Make the smallest reliable fix to the existing project.

Do not claim completion until the actual application has
been tested.

At the end, report the root cause and the files changed.
```

---

## 💬 Request #5 (2026-10-11T14:38:09Z)

```text
send me the access
```

---

## 💬 Request #6 (2026-10-21T06:04:37Z)

```text
Make the folder ready to deploy in github
```

---

