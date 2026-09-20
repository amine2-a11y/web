PS4 Offline 13.52 — AminePS4 GoldHEN integration test

Offline assets included locally:
- index.html / jb.html
- jb.js and local JS modules
- patches/1352.bin (13.52 profile)
- goldhen.bin (integration-test payload supplied by user)
- payload2.bin retained as the original fallback payload
- application cache manifest containing all runtime assets

The 13.52 profile in ps4_offsets.js selects patches/1352.bin and goldhen.bin.
No network asset is required after the browser has successfully populated the application cache.

Important: static packaging does not prove that the supplied goldhen.bin is compatible with 13.52 hardware. Test results must be verified on the console.
