# HENloader GoldHEN Offline

مشروع GitHub Pages/Offline مرتب. يحتوي على GoldHEN payload محلي في `payloads/hen.bin`، مع فحص توفره من الواجهة.

مهم: صفحة WebKit وحدها لا تستطيع تنفيذ ملف `hen.bin` مباشرة. التشغيل الفعلي يحتاج exploit/loader متوافق مع Firmware. المشروع لا يدّعي دعم 13.52 الكامل.


## 13.52 status
The 13.52 firmware profile now uses the public PS4HEN offsets for PRISON0, ROOTVNODE and SYSENT. The loader remains payload-only on 13.52 because no verified exploit chain/shellcode is included in this package.


## 13.52 test mode
13.52 uses the experimental profile and verified public offsets. The kernel exploit stage remains gated until a verified 13.52 exploit chain/shellcode is available; payload-only fallback is retained.
