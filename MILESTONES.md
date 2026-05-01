# LBPQuest IV — Rework Milestones

Status key: ✅ done · ⬜ pending · 🚧 in progress

---

## Milestone 1 — Bug Fixes ✅

### Item naming & descriptions
- ✅ **Gerald.ts** — All 5 examine descriptions now identify him as a turkey
- ✅ **Crackers.ts** — `use crackers` now works when Gerald is present (delegates to `give crackers to gerald`)
- ✅ **CowboyRubberDuck.ts** — Renamed to `"cowboy duck"`; added `getLocationText()`; `examine()` reflects taken state
- ✅ **MasterBathroom.ts** — Removed hardcoded duck from description (was double-listing with item)
- ✅ **Binoculars.ts** — Added `getLocationText()`; `examine()` reflects taken state
- ✅ **PropaneLantern.ts** — Added `getLocationText()`; `examine()` reflects taken state
- ✅ **PickleballPaddle.ts** — Added `getLocationText()`; `examine()` reflects taken state
- ✅ **SportsCourt.ts** — Removed hardcoded paddle from description (was double-listing with item)
- ✅ **EmptyBeerCan.ts** — `examine()` reflects taken state
- ✅ **PlainRubberDuck.ts** — Added `getLocationText()` with "plain duck" visible; fixed "set it back in the water" when taken
- ✅ **TopoChicoBottle.ts** — Keep `name` as `"topo chico"` (guessable from description); added `getLocationText()`
- ✅ **GeraldNote.ts** — Renamed to `"tent note"`; updated `ChildTent.examine()` to say "tent note"
- ✅ **OrderNote.ts** — Keep `name` as `"cabin note"`; updated `VodkaRoom.description()` to say "cabin note"
- ✅ **LGGKey.ts** — Removed "smells faintly of cedar" from `examine()`

### BrokenJigger relocation (from win room to BackPorch bar)
- ✅ **BrokenJigger.ts** — Added `getLocationText()` describing it on the bar top
- ✅ **BlantonsBottle.ts** — Added `getLocationText()`; moved to BackPorch bar (no items in win room)
- ✅ **WhiskeyRoom.ts** — Removed jigger and Blanton's from hardcoded description text; win message shows first visit only
- ✅ **Startup.ts** — Moved `BrokenJigger` from WhiskeyRoom items to BackPorch items

### Location description fixes
- ✅ **Startup.ts** — Added `examine tallboy` custom verb in Mudroom (empty, Gerald got to it)
- ✅ **PoolEquipmentShed.ts** — Removed "(someone needs these badly)" from sunglasses line

### Help
- ✅ **HelpView.tsx** — Added `enter` to help mapper with description

---

## Milestone 2 — Code Puzzle Overhaul ✅

High-level intent: make finding the 4 code digits an active puzzle requiring discovery, not just reading the porch keypad.

- ✅ Remove digit hints from WhiskeyRoomPorch description — keypad shows only "four digits"
- ✅ Each digit requires a specific `examine` action to discover:
  - COURT (3): `examine scoreboard` — already returns "GERALD: 3"
  - SHED (7): `examine schedule` — already returns "TUESDAY 7:00 PM"
  - TUB (2): `examine plain duck` — already returns "2" on the bottom
  - BLIND (1): `examine stencil` in DeerBlind returns "BLIND NO. 1"
- ✅ OrderNote gives the ORDER only (COURT·SHED·TUB·BLIND) — player must find all four numbers separately
- ✅ WhiskeyRoomPorch keypad: standard 0–9 numeric keypad; COURT·SHED·TUB·BLIND labels on a brass plaque (`examine plaque`)

---

## Milestone 3 — Puzzle A: The Lantern ✅

High-level intent: PropaneLantern is currently a dead-end collectible. Give it a fuel source and a purpose.

- ✅ Add `FuelCanister` to PoolEquipmentShed (among the utility supplies)
- ✅ `use fuel canister` (with lantern in inventory) or `use lantern` (with fuel canister in inventory) lights it — +3 score first time
- ✅ Lit lantern reveals carved initials in DeerBlind via `examine markings` — +2 score first time; flashlight only washes the marks out
- ✅ Lit lantern counts as an alternative light source for dark areas (`isDark` check in GameEngine)

---

## Milestone 4 — Puzzle B: Gerald as Gatekeeper ✅

High-level intent: Gerald's patrol is mechanically interesting but narratively purposeless. Give him a reason to be guarding the beer can/LGGKey area.

- ✅ **GeraldTree.ts** — dynamic description(): when can + Gerald both present, says "Gerald is standing directly over it. He is not moving from it."; when can present alone, says "Something has been left at the base of the tree. Deliberately."; can mention disappears once can is taken
- ✅ **EmptyBeerCan.ts** — added `take()` override: reveals LGGKey whenever can is taken (whether examined first or not); added `getLocationText()` (fixes pre-existing double-listing with hardcoded description)
- ✅ **Gerald.ts** — updated last cycling examine description to "standing very close to something on the ground. He is not touching it. He is not moving from it."
- ✅ **GameEngine.ts** — patrol expanded to 5 stops: EntranceRoad → GeraldTree → NorthField → OakGroveSouth → ParkingArea
- ✅ BrokenJigger alternative (`show jigger to gerald`) already implemented in M1

---

## Milestone 5 — Description Rewrites ✅

High-level intent: tighten the writing voice, fix cross-references, improve the worst descriptions.

- ✅ Remove all cross-location references ("stranger than the Whiskey Room", etc.)
- ✅ Gerald's `getLocationText()` — now reads "A large tom turkey stands here. Gerald. He was here first."
- ✅ LGG Room — removed "Not what you expected"; juxtaposition lands via "You are standing in the back of a corrugated metal outbuilding at a ranch in Johnson City, Texas."
- ✅ Vodka Room — opens with the neon discovery ("The neon says THE VODKA ROOM") instead of "A small, dark anteroom"
- ✅ WhiskeyRoomTrail — replaced "smelling of oak and time" with "cedar and woodsmoke"
- ✅ Win screen — replaced meta-announcement with narrative landing ("You do. The walk through the property...")
- ✅ WoodenPavilion — removed hardcoded lantern line (item handles it); replaced with neutral hook reference
- ✅ OakGroveNorth — "mudroom exit" → "Lodge back door"

---

## Milestone 6 — Puzzle C: Binoculars

High-level intent: binoculars already have location-specific `use` text at multiple locations; one of those views should reveal something actionable.

- ⬜ From DeerBlind or WoodenPavilion, `use binoculars` reveals a detail that gives a code digit or item location
- ⬜ Tie into milestone 2 or 3 puzzle structure

---

## Milestone 7 — Quest Tracker + Game Over

- ⬜ Quest tracker — game-state display (dev/HUD), not a player-accessible command; shows puzzle completion flags (code digits found, LGG unlocked, Gerald defeated, flashlight active)
- ⬜ Game over screen — proper win state, not just a line in the room description

---

## Standing Rules

- `examine()` describes what an item **is** — no location or inventory references.
- `getLocationText()` must also be location-neutral — it is called wherever the item happens to be, including after a drop. Describe the item, not where it's resting. Atmospheric context for an item's starting location belongs in the location's own `descriptionText`.
- No takeable items in the win room — the game is won on entry, so anything there can never be meaningfully collected.
- Item names must be guessable from the text shown at the location (`getLocationText()`). If two items share a base name, both need qualifiers visible in their respective location descriptions.

---

## Deferred / Notes

- Sunglasses (PoolEquipmentShed) — description fixed in M1; could become a puzzle item in M3 or M6
- Hallway LoneStick — could become takeable and combinable in a later milestone
- Navigation map audit — physical coherence check deferred
- WhiskeyKey (value 0, not placed) — possibly used in M2 as physical key alternative to code
