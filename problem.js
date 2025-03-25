১. export এবং import-এর মধ্যে পার্থক্য কী?
উত্তর: export ব্যবহৃত হয় কোড বা মডিউল অন্য ফাইলে শেয়ার করতে, আর import ব্যবহৃত হয় অন্য ফাইল থেকে কোড বা মডিউল আনতে।

২. default export কী? এর মাধ্যমে ইমপোর্ট করার সময় কী সুবিধা হয়?
উত্তর: default export হলো একটি ফাইলে একটিমাত্র প্রধান জিনিস এক্সপোর্ট করার পদ্ধতি। এটি ইমপোর্ট করার সময় নাম পরিবর্তন করা যায়, যা সুবিধাজনক।

৩. as কী-ওয়ার্ড কীভাবে নাম পরিবর্তন করতে সাহায্য করে?
উত্তর: as কিওয়ার্ড ব্যবহার করে ইমপোর্ট বা এক্সপোর্ট করা মডিউলের নাম পরিবর্তন করা যায়। যেমন:

js
Copy code
import { myFunction as newFunction } from './module.js';
৪. নাম দিয়ে export আর default export-এর মধ্যে পার্থক্য কী?
উত্তর: নাম দিয়ে এক্সপোর্ট (named export) একাধিক জিনিস এক্সপোর্ট করতে পারে, কিন্তু default export কেবল একটিমাত্র জিনিস এক্সপোর্ট করে এবং ইমপোর্ট করার সময় যেকোনো নামে ইমপোর্ট করা যায়।

৫. এক ফাইল থেকে একাধিক default export কি সম্ভব? কীভাবে সম্ভব?
উত্তর: এক ফাইল থেকে একাধিক default export সম্ভব নয়। প্রতিটি ফাইলে কেবলমাত্র একটি default export থাকতে পারে। একাধিক এক্সপোর্ট করতে চাইলে named export ব্যবহার করতে হয়।