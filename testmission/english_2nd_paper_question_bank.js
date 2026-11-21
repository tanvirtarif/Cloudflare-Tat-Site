// =========================================================================
// English 2nd Paper — Question Bank (english_2nd_paper_question_bank.js)
// নির্দেশনা:
// ১. প্রশ্ন যোগ করার পর যখন পরীক্ষা চালু করতে চাইবেন তখন status: "live" লিখবেন।
// ২. examEndDate-এ দেওয়া তারিখ ও সময় পার হয়ে গেলে এটি অটোমেটিক Archive হয়ে যাবে।
// ৩. status: "live" না লিখলে প্রশ্ন এড থাকলেও টপিকটি গ্রে (Soon) অবস্থায় থাকবে।
// =========================================================================
window.TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB || {};

Object.assign(window.TOPIC_EXAMS_DB, {
    "Basic Sentence Structure (Subject, Verb, Object, Complement, Adjunct)": {
        status: "live",
        examEndDate: "2026-11-22T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: [
            {
                q: "In the sentence 'The rising sun dispels darkness,' what is the grammatical function of 'The rising sun'?",
                options: ["Object", "Subject", "Complement", "Adjunct"],
                ans: 1,
                exp: "বাক্যে 'dispels' (দূর করে) ক্রিয়াটি কে বা কী সম্পন্ন করছে তা বোঝাতে 'The rising sun' ব্যবহৃত হয়েছে, তাই এটি Subject। বাকি অপশনগুলো কেন নয়: 'darkness' হলো Object (কী দূর করে?); Complement এখানে নেই; 'dispels darkness' হলো Predicate-এর অংশ এবং কোনো সময় বা স্থান বোঝালে তা Adjunct হতো।"
            },
            {
                q: "Identify the verb in: 'She has been practicing English for two hours.'",
                options: ["practicing", "has been", "has been practicing", "for two hours"],
                ans: 2,
                exp: "এখানে 'has been' হলো Auxiliary Verb এবং 'practicing' হলো Main Verb; একত্রে সম্পূর্ণ ক্রিয়াপদটি হলো 'has been practicing'। বাকি অপশনগুলো কেন নয়: শুধু 'practicing' বা শুধু 'has been' আংশিক ক্রিয়া বোঝায়, পূর্ণ Verb phrase নয়; আর 'for two hours' হলো সময়বাচক Adjunct।"
            },
            {
                q: "In 'The teacher gave the students a useful handout,' what is 'the students'?",
                options: ["Direct Object", "Indirect Object", "Subject Complement", "Adjunct"],
                ans: 1,
                exp: "'gave' transitive verb-কে 'কাকে?' প্রশ্ন করলে উত্তর আসে 'the students', যা হলো Indirect Object। বাকি অপশনগুলো কেন নয়: 'কী?' প্রশ্নের উত্তর 'a useful handout' হলো Direct Object; 'the students' Subject-এর গুণ বা পরিচয় নয় বলে Complement নয়; এটি কোনো স্থান বা সময়ও বোঝায় না তাই Adjunct নয়।"
            },
            {
                q: "In the sentence 'The teacher gave the students a useful handout,' what is 'a useful handout'?",
                options: ["Indirect Object", "Object Complement", "Direct Object", "Adverbial"],
                ans: 2,
                exp: "'gave' ক্রিয়াকে 'কী?' দিয়ে প্রশ্ন করলে 'a useful handout' উত্তর পাওয়া যায়, যা সরাসরি ক্রিয়ার প্রভাব গ্রহণ করে বলে Direct Object। বাকি অপশনগুলো কেন নয়: 'কাকে?' প্রশ্নের উত্তর হলো Indirect Object; এটি Object-এর অবস্থা বর্ণনা করে না বলে Object Complement নয়; এটি ক্রিয়ার ধরন বা সময়ও বোঝায় না।"
            },
            {
                q: "In 'Honesty is the best policy,' 'the best policy' acts as a —",
                options: ["Direct Object", "Subject Complement", "Object Complement", "Adjunct"],
                ans: 1,
                exp: "'is' একটি Linking Verb এবং 'the best policy' Subject 'Honesty'-এর পরিচয় ও মান নির্দেশ করছে, তাই এটি Subject Complement। বাকি অপশনগুলো কেন নয়: 'is' Linking Verb হওয়ায় এর পর Object আসে না; এখানে কোনো Object-কে পরিপূরক করা হয়নি তাই Object Complement নয়; এটি স্থান-কাল-পাত্র বোঝায় না বলে Adjunct নয়।"
            },
            {
                q: "In 'The soup tastes delicious,' the word 'delicious' is a —",
                options: ["Direct Object", "Object Complement", "Subject Complement", "Adjunct of manner"],
                ans: 2,
                exp: "'tastes' এখানে Linking Verb হিসেবে কাজ করছে এবং 'delicious' (adjective) Subject 'The soup'-এর গুণ বোঝাচ্ছে, তাই এটি Subject Complement। বাকি অপশনগুলো কেন নয়: Linking verb-এর পরে Direct Object হয় না; এটি Object-এর গুণ নয়; 'deliciously' হলে manner বোঝাত, কিন্তু এখানে adjective রূপে Subject-এর অবস্থা বলছে।"
            },
            {
                q: "They elected him chairman. Here 'chairman' is a/an —",
                options: ["Direct Object", "Indirect Object", "Subject Complement", "Object Complement"],
                ans: 3,
                exp: "'him' হলো Object, এবং 'chairman' সেই Object 'him'-এর নতুন পদবি বা পরিচয় প্রকাশ করছে, তাই এটি Object Complement। বাকি অপশনগুলো কেন নয়: মূল Object হলো 'him'; 'elected'-এর সাথে 'কাকে' প্রশ্নে Indirect Object আসে না; এটি Subject ('They')-এর পদ নয় বরং Object ('him')-এর পদ।"
            },
            {
                q: "In 'We painted the wall green,' what is 'green'?",
                options: ["Object", "Subject Complement", "Object Complement", "Adjunct"],
                ans: 2,
                exp: "রং করার ফলে 'the wall' (Object)-এর যে অবস্থা তৈরি হয়েছে তা হলো 'green', তাই এটি Object Complement। বাকি অপশনগুলো কেন নয়: মূল Object হলো 'the wall'; 'green' দেয়ালের অবস্থা বোঝাচ্ছে, 'We'-এর নয়; এটি সময় বা স্থান বোঝায় না বলে Adjunct নয়।"
            },
            {
                q: "Identify the Adjunct in: 'He speaks English fluently in class.'",
                options: ["He speaks", "English", "fluently in class", "in class only"],
                ans: 2,
                exp: "'fluently' (কীভাবে/manner) এবং 'in class' (কোথায়/place) উভয়ই ক্রিয়াকে অতিরিক্ত তথ্য দিচ্ছে, তাই একত্রে 'fluently in class' হলো Adjunct। বাকি অপশনগুলো কেন নয়: 'He speaks' হলো Subject ও Verb; 'English' হলো Object; 'in class only' বাক্যে নেই এবং 'fluently' বাদ দিলে manner অংশটি অপূর্ণ থাকে।"
            },
            {
                q: "In 'Yesterday, my brother bought a laptop from Dhaka,' how many Adjuncts are there?",
                options: ["One", "Two", "Three", "Zero"],
                ans: 1,
                exp: "বাক্যে দুটি Adjunct আছে: 'Yesterday' (Adjunct of time) এবং 'from Dhaka' (Adjunct of place)। বাকি অপশনগুলো কেন নয়: একটি ধরলে অন্যটি বাদ পড়ে; তিনটি নেই কারণ 'my brother' Subject, 'bought' Verb এবং 'a laptop' Object; শূন্য হওয়া সম্ভব নয় কারণ স্পষ্ট সময় ও স্থান উল্লেখ আছে।"
            },
            {
                q: "Which of the following is an intransitive verb? 'The baby slept peacefully.'",
                options: ["baby", "slept", "peacefully", "None of these"],
                ans: 1,
                exp: "'slept' ক্রিয়াটির কোনো Object নেই এবং এটি নিজেই সম্পূর্ণ অর্থ প্রকাশ করে, তাই এটি Intransitive Verb। বাকি অপশনগুলো কেন নয়: 'baby' হলো Subject; 'peacefully' হলো Adjunct of manner; 'slept' স্পষ্টতই একটি Intransitive Verb।"
            },
            {
                q: "In 'To err is human,' what is the Subject of the sentence?",
                options: ["err", "To err", "is", "human"],
                ans: 1,
                exp: "'To err' একটি Infinitive Phrase যা 'is' ক্রিয়ার Subject হিসেবে ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: শুধু 'err' একটি verb form, একা Subject নয়; 'is' হলো Linking Verb; 'human' হলো Subject Complement।"
            },
            {
                q: "In 'Reading newspapers regularly broadens one's outlook,' what is the Direct Object?",
                options: ["Reading newspapers", "newspapers", "one's outlook", "regularly"],
                ans: 2,
                exp: "মূল ক্রিয়া 'broadens' (প্রসারিত করে)-কে 'কী প্রসারিত করে?' প্রশ্ন করলে উত্তর আসে 'one's outlook', যা Direct Object। বাকি অপশনগুলো কেন নয়: 'Reading newspapers regularly' পুরোটি Subject phrase; শুধু 'newspapers' হলো 'Reading' gerund-এর object; 'regularly' হলো Adjunct।"
            },
            {
                q: "In 'She made me cry,' what is the grammatical role of 'cry'?",
                options: ["Object Complement", "Subject Complement", "Adjunct", "Indirect Object"],
                ans: 0,
                exp: "'me' হলো Object এবং bare infinitive 'cry' সেই Object-এর ক্রিয়া বা অবস্থা প্রকাশ করছে, যা Object Complement হিসেবে কাজ করে। বাকি অপশনগুলো কেন নয়: এটি 'She'-এর ক্রিয়া নয়; সময় বা স্থান বোঝায় না বলে Adjunct নয়; 'me' হলো Object, 'cry' Indirect Object নয়।"
            }
        ]
    },

    "Parts of Speech Overview": {
        status: "live",
        examEndDate: "2026-11-22T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: [
            {
                q: "Which part of speech is 'after' in: 'He came after I had left.'?",
                options: ["Preposition", "Adverb", "Conjunction", "Adjective"],
                ans: 2,
                exp: "'after' এখানে দুটি Clause ('He came' এবং 'I had left')-কে যুক্ত করছে, তাই এটি Subordinating Conjunction। বাকি অপশনগুলো কেন নয়: এর পরে কোনো Noun/Pronoun object নেই বরং একটি পূর্ণ Clause আছে বলে Preposition নয়; একা ক্রিয়াকে মডিফাই করছে না বলে Adverb নয়; Adjective-ও নয়।"
            },
            {
                q: "In 'He came after me,' what part of speech is 'after'?",
                options: ["Conjunction", "Preposition", "Adverb", "Interjection"],
                ans: 1,
                exp: "'after' এখানে Pronoun ('me')-এর আগে বসে বাক্যের অন্যান্য অংশের সাথে সম্পর্ক তৈরি করছে, তাই এটি Preposition। বাকি অপশনগুলো কেন নয়: দুটি Clause যুক্ত করছে না বলে Conjunction নয়; এর পরে স্পষ্ট Object ('me') থাকায় Adverb নয়; আবেগসূচক নয় বলে Interjection নয়।"
            },
            {
                q: "In 'Jack fell down and broke his crown,' the word 'down' is a/an —",
                options: ["Preposition", "Adverb", "Conjunction", "Noun"],
                ans: 1,
                exp: "'fell' ক্রিয়ার সাথে যুক্ত হয়ে পতনের দিক বা স্থান বোঝাচ্ছে এবং এর পরে কোনো Object নেই, তাই এটি Adverb। বাকি অপশনগুলো কেন নয়: Object না থাকায় এটি Preposition নয়; দুটি অংশ যুক্ত করছে না বলে Conjunction নয়; নাম বোঝাচ্ছে না বলে Noun নয়।"
            },
            {
                q: "Identify the part of speech of 'but' in: 'None but the brave deserves the fair.'",
                options: ["Conjunction", "Adverb", "Preposition", "Pronoun"],
                ans: 2,
                exp: "'but' এখানে 'except' (ছাড়া/ব্যতীত) অর্থে ব্যবহৃত হয়ে Noun phrase ('the brave')-এর সাথে সম্পর্ক গড়ছে, তাই এটি Preposition। বাকি অপশনগুলো কেন নয়: এখানে দুটি clause বা সমজাতীয় পদ যুক্ত করছে না বলে Conjunction নয়; 'only' অর্থে ক্রিয়া বা বিশেষণ মডিফাই করছে না বলে Adverb নয়; Pronoun-ও নয়।"
            },
            {
                q: "In 'All that glitters is not gold,' what part of speech is 'that'?",
                options: ["Demonstrative Pronoun", "Relative Pronoun", "Conjunction", "Adjective"],
                ans: 1,
                exp: "'that' এখানে antecedent ('All')-এর পরিবর্তে বসে পরবর্তী Clause ('glitters')-কে যুক্ত করছে, তাই এটি Relative Pronoun। বাকি অপশনগুলো কেন নয়: দূরত্ব বা নির্দিষ্ট ইঙ্গিত বোঝাতে এককভাবে বসেনি বলে Demonstrative Pronoun নয়; নিজে Clause-এর Subject হিসেবে কাজ করায় শুধু Conjunction নয়; Noun-এর আগে বসেনি বলে Adjective নয়।"
            },
            {
                q: "In 'This is my book,' what part of speech is 'This'?",
                options: ["Demonstrative Adjective", "Demonstrative Pronoun", "Relative Pronoun", "Adverb"],
                ans: 1,
                exp: "'This' এখানে একা Subject হিসেবে বসে 'book'-এর পরিবর্তে ব্যবহৃত হয়েছে, তাই এটি Demonstrative Pronoun। বাকি অপশনগুলো কেন নয়: এর ঠিক পরে কোনো Noun না থাকায় এটি Demonstrative Adjective নয়; clause যুক্ত করছে না বলে Relative Pronoun নয়; Adverb-ও নয়।"
            },
            {
                q: "In 'This book is mine,' the word 'This' is a/an —",
                options: ["Demonstrative Pronoun", "Demonstrative Adjective", "Personal Pronoun", "Conjunction"],
                ans: 1,
                exp: "'This' এখানে Noun ('book')-এর ঠিক আগে বসে সেটিকে নির্দেশ করছে, তাই এটি Demonstrative Adjective। বাকি অপশনগুলো কেন নয়: Noun-এর বদলে এককভাবে বসেনি বলে Demonstrative Pronoun নয়; পুরুষবাচক নয় বলে Personal Pronoun নয়; সংযোজক নয় বলে Conjunction নয়।"
            },
            {
                q: "What is the part of speech of 'alas' in: 'Alas! The poor man is dead.'?",
                options: ["Adverb", "Noun", "Interjection", "Conjunction"],
                ans: 2,
                exp: "'alas' দুঃখ বা শোকের আকস্মিক আবেগ প্রকাশ করছে, তাই এটি Interjection। বাকি অপশনগুলো কেন নয়: বাক্যের কোনো ক্রিয়া বা বিশেষণকে মডিফাই করছে না বলে Adverb নয়; কোনো নাম বোঝাচ্ছে না বলে Noun নয়; দুটি অংশ যুক্ত করছে না বলে Conjunction নয়।"
            },
            {
                q: "In 'Honesty is a noble virtue,' what part of speech is 'Honesty'?",
                options: ["Proper Noun", "Abstract Noun", "Collective Noun", "Material Noun"],
                ans: 1,
                exp: "'Honesty' একটি গুণ বা ধারণার নাম যা দেখা বা ছোঁয়া যায় না, কেবল অনুভব করা যায়—তাই এটি Abstract Noun। বাকি অপশনগুলো কেন নয়: নির্দিষ্ট ব্যক্তি বা স্থানের নাম নয় বলে Proper Noun নয়; সমষ্টি বোঝায় না বলে Collective Noun নয়; পদার্থ বা উপাদান নয় বলে Material Noun নয়।"
            },
            {
                q: "Identify the part of speech of 'around' in: 'The earth moves around the sun.'",
                options: ["Adverb", "Preposition", "Conjunction", "Adjective"],
                ans: 1,
                exp: "'around' এখানে Noun phrase ('the sun')-এর আগে বসে গতির সম্পর্ক নির্দেশ করছে, তাই এটি Preposition। বাকি অপশনগুলো কেন নয়: এর পরে স্পষ্ট Object ('the sun') থাকায় এটি Adverb নয়; দুটি Clause যুক্ত করছে না বলে Conjunction নয়; Noun-এর গুণ বোঝাচ্ছে না বলে Adjective নয়।"
            },
            {
                q: "In 'Please sit around,' what is the part of speech of 'around'?",
                options: ["Preposition", "Conjunction", "Adverb", "Pronoun"],
                ans: 2,
                exp: "'around' এখানে 'sit' ক্রিয়ার সাথে যুক্ত হয়ে অবস্থান বোঝাচ্ছে এবং এর পরে কোনো Object নেই, তাই এটি Adverb। বাকি অপশনগুলো কেন নয়: Object না থাকায় এটি Preposition নয়; সংযোজক নয় বলে Conjunction নয়; সর্বনাম নয় বলে Pronoun নয়।"
            },
            {
                q: "In 'I know what you want,' the word 'what' is a/an —",
                options: ["Interrogative Pronoun", "Relative Pronoun", "Adjective", "Preposition"],
                ans: 1,
                exp: "এখানে 'what' প্রশ্ন করার বদলে পূর্বপদবিহীনভাবে ('the thing which' অর্থে) Noun Clause শুরু করছে এবং 'want' ক্রিয়ার Object হিসেবে কাজ করছে, তাই এটি Nominal Relative Pronoun। বাকি অপশনগুলো কেন নয়: বাক্যে প্রশ্ন করা হচ্ছে না বলে Interrogative Pronoun নয়; Noun-এর আগে বসেনি বলে Adjective নয়; Preposition-ও নয়।"
            },
            {
                q: "In 'What book do you want?', what part of speech is 'What'?",
                options: ["Interrogative Pronoun", "Interrogative Adjective", "Relative Pronoun", "Adverb"],
                ans: 1,
                exp: "'What' এখানে প্রশ্নবোধক শব্দ হিসেবে Noun ('book')-এর ঠিক আগে বসে সেটিকে নির্দিষ্ট করছে, তাই এটি Interrogative Adjective। বাকি অপশনগুলো কেন নয়: 'book' Noun-এর আগে বসায় এটি শুধু Interrogative Pronoun নয়; clause যুক্ত করছে না বলে Relative Pronoun নয়; Adverb-ও নয়।"
            },
            {
                q: "In 'He has enough money to buy a car,' what part of speech is 'enough'?",
                options: ["Adverb", "Adjective", "Noun", "Verb"],
                ans: 1,
                exp: "'enough' এখানে Noun ('money')-এর আগে বসে পরিমাণ বোঝাচ্ছে, তাই এটি Adjective (Quantifier/Determiner)। বাকি অপশনগুলো কেন নয়: এখানে এটি কোনো adjective বা adverb-এর পরে বসে মাত্রা বোঝাচ্ছে না বলে Adverb নয়; নাম বা ক্রিয়া নয় বলে Noun বা Verb নয়।"
            },
            {
                q: "In 'She is intelligent enough to solve the problem,' 'enough' is a/an —",
                options: ["Adjective", "Adverb", "Pronoun", "Preposition"],
                ans: 1,
                exp: "'enough' এখানে Adjective ('intelligent')-এর পরে বসে মাত্রা বা পর্যাপ্ততা বোঝাচ্ছে, তাই এটি Adverb। বাকি অপশনগুলো কেন নয়: কোনো Noun-এর আগে বসেনি বলে Adjective নয়; সর্বনাম বা সম্বন্ধপদ নয় বলে Pronoun বা Preposition নয়।"
            }
        ]
    }
});
