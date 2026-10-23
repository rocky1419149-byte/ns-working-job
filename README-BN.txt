NS WORKING JOB — Firebase Starter (Demo)
==========================================

গুরুত্বপূর্ণ
------------
এটি শেখা/প্রোটোটাইপ করার starter। এটি সম্পূর্ণ প্রোডাকশন marketplace নয়।
- বাস্তবে টাকা পাঠায় না।
- পয়েন্ট স্বয়ংক্রিয়ভাবে দেয় না।
- Admin panel নেই।
- এখানে role নির্বাচন user-এর হাতে; তাই এটিকে নিরাপদ admin/role ব্যবস্থা ভাববেন না।
- বাস্তব ব্যবহারকারীর ডেটা বা টাকা নেওয়ার আগে নিরাপত্তা নিয়ম ও backend পর্যালোচনা দরকার।

ফাইল
----
index.html       পেজের কাঠামো
styles.css       ডিজাইন
app.js           Firebase Auth + Firestore demo
firestore.rules  শুরুর security rules (প্রোডাকশন ব্যবহারের আগে রিভিউ আবশ্যক)

শুরু করার ধাপ
-------------
1. Firebase Console > Project settings > Your apps > আপনার Web App খুলুন।
2. Firebase config-এ apiKey, authDomain, projectId, appId দেখুন।
3. app.js ফাইলের firebaseConfig-এ placeholder-গুলো আপনার Web App config দিয়ে বদলান।
   Web config সাধারণত browser-এ ব্যবহারের জন্য; Service Account private key কখনো এখানে দেবেন না।
4. Authentication > Sign-in method > Phone চালু করুন।
5. Authentication-এর Settings-এ Authorized domains দেখুন; যে domain-এ host করবেন সেটি যোগ করুন।
6. Firestore Database তৈরি করুন এবং Rules পেজে firestore.rules-এর নিয়মগুলি বসান।
   সাবধান: role/balance/payout-এর জন্য এই starter production-ready নয়।
7. Firebase Hosting প্রকাশ করতে CLI/terminal দরকার। শুধু Chrome-এ command লেখা যায় না।
   কম্পিউটার বা বিশ্বস্ত cloud development environment ব্যবহার করতে হবে।
8. SMS OTP-এর জন্য Firebase-এর quota, region, billing এবং abuse protection শর্ত প্রযোজ্য হতে পারে।

Google Sites সম্পর্কে
--------------------
Google Sites-এ সাধারণ arbitrary JavaScript app code চালানো যায় না। এই starter-টি আলাদা hosted web app হিসেবে প্রকাশ করতে হবে; পরে Google Sites-এ link/embed ব্যবহার করা যেতে পারে, তবে embed ও auth domain সীমাবদ্ধতা থাকতে পারে।

নিরাপত্তা
---------
- কখনো password, OTP, private key বা payment PIN কারও সঙ্গে শেয়ার করবেন না।
- পয়েন্ট/ব্যালেন্স browser-side code দিয়ে নিয়ন্ত্রণ করবেন না।
- বাস্তব টাকা তোলার আগে trusted server-side validation, admin authorization, fraud prevention এবং প্রযোজ্য আইন/পেমেন্ট provider-এর নিয়ম লাগবে।
