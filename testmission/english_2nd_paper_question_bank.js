// =========================================================================
// English 2nd Paper — Question Bank (english_2nd_paper_question_bank.js)
// নির্দেশনা:
// ১. প্রশ্ন যোগ করার পর যখন পরীক্ষা চালু করতে চাইবেন তখন status: "live" লিখবেন।
// ২. examEndDate-এ দেওয়া তারিখ ও সময় পার হয়ে গেলে এটি অটোমেটিক Archive হয়ে যাবে।
// ৩. status: "live" না লিখলে প্রশ্ন এড থাকলেও টপিকটি গ্রে (Soon) অবস্থায় থাকবে।
// =========================================================================
window.TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB || {};

Object.assign(window.TOPIC_EXAMS_DB, {
    "Pronouns: Classification, Use & Function": {
        status: "live",
        examEndDate: "2026-11-22T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: [
            {
                q: "Between you and _____, he is telling a lie.",
                options: ["I", "me", "mine", "myself"],
                ans: 1,
                exp: "Preposition ('Between')-এর পরে সর্বদা Objective case বসে; তাই 'you and me' সঠিক। বাকি অপশনগুলো কেন নয়: 'I' হলো Subjective case; 'mine' হলো Possessive pronoun; 'myself' এখানে কোনো পূর্বপদ ছাড়া স্বতন্ত্রভাবে বসা ভুল।"
            },
            {
                q: "The man _____ came yesterday is my uncle.",
                options: ["whom", "who", "which", "whose"],
                ans: 1,
                exp: "Antecedent 'The man' ব্যক্তি এবং পরবর্তী clause ('came yesterday')-এর Subject প্রয়োজন, তাই 'who' বসবে। বাকি অপশনগুলো কেন নয়: 'whom' Object হিসেবে ব্যবহৃত হয়; 'which' সাধারণত বস্তু বা প্রাণীর জন্য বসে; 'whose' মালিকানা বোঝায়।"
            },
            {
                q: "This is the pen _____ I bought from Nilkhet.",
                options: ["who", "whom", "which", "whose"],
                ans: 2,
                exp: "Antecedent 'the pen' একটি বস্তু এবং এটি 'bought' ক্রিয়ার Object হিসেবে কাজ করছে, তাই 'which' বা 'that' সঠিক। বাকি অপশনগুলো কেন নয়: 'who' ও 'whom' ব্যক্তির জন্য ব্যবহৃত হয়; 'whose' মালিকানা নির্দেশ করে।"
            },
            {
                q: "Each of the students must submit _____ assignment on time.",
                options: ["their", "his", "they", "them"],
                ans: 1,
                exp: "'Each of the students' এর head word হলো singular 'Each', যার জন্য প্রমিত ব্যাকরণে singular pronoun 'his' (বা formal context-এ 'his or her') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'students' plural হলেও head হলো 'Each'; 'they' ও 'them' plural pronoun।"
            },
            {
                q: "The boy hurt _____ while playing football.",
                options: ["him", "himself", "his", "he"],
                ans: 1,
                exp: "Subject ('The boy') এবং Object একই ব্যক্তিকে বোঝাচ্ছে ('নিজেকেই আঘাত করল'), তাই Reflexive Pronoun 'himself' বসবে। বাকি অপশনগুলো কেন নয়: এখানে 'him' দিলে ভিন্ন ব্যক্তিকে বোঝানোর প্রবণতা তৈরি হয়; 'his' possessive এবং 'he' subjective।"
            },
            {
                q: "I _____ will do the work.",
                options: ["me", "myself", "mine", "us"],
                ans: 1,
                exp: "এখানে 'myself' Subject 'I'-এর ওপর বিশেষ জোর (emphasis) দেওয়ার জন্য ব্যবহৃত হয়েছে (Emphatic Pronoun)। বাকি অপশনগুলো কেন নয়: 'me' ও 'us' objective; 'mine' possessive।"
            },
            {
                q: "Neither of the two candidates _____ qualified for the post.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'Neither of + plural noun' কাঠামোতে pronoun-টি singular হিসেবে গণ্য হয় এবং singular verb 'is' নেয়। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural verb যা 'Neither'-এর সাথে মেলে না।"
            },
            {
                q: "_____, who has worked hard, will succeed.",
                options: ["Him", "He", "His", "Himself"],
                ans: 1,
                exp: "বাক্যের মূল verb 'will succeed'-এর Subject প্রয়োজন, তাই Nominative/Subjective case 'He' বসবে। বাকি অপশনগুলো কেন নয়: 'Him' objective; 'His' possessive; 'Himself' একা Subject হিসেবে বসে না।"
            },
            {
                q: "One should do _____ duty properly.",
                options: ["his", "one's", "their", "ones"],
                ans: 1,
                exp: "Subject হিসেবে 'One' থাকলে তার Possessive রূপ হয় 'one's'। বাকি অপশনগুলো কেন নয়: 'One'-এর সাথে প্রমিত ইংরেজিতে 'his' বা 'their' না দিয়ে 'one's' দেওয়া হয়; 'ones' কোনো possessive form নয়।"
            },
            {
                q: "Whom did you meet at the station? Here 'Whom' is a/an —",
                options: ["Relative Pronoun", "Interrogative Pronoun", "Demonstrative Pronoun", "Indefinite Pronoun"],
                ans: 1,
                exp: "বাক্যটি প্রশ্নবোধক এবং 'Whom' প্রশ্ন করার জন্য ব্যবহৃত হয়েছে, তাই এটি Interrogative Pronoun। বাকি অপশনগুলো কেন নয়: এটি দুটি clause যুক্ত করছে না বলে Relative Pronoun নয়; নির্দেশক বা অনির্দিষ্ট সর্বনামও নয়।"
            },
            {
                q: "The girl _____ father is a lawyer won the scholarship.",
                options: ["who", "whom", "whose", "which"],
                ans: 2,
                exp: "'father'-এর সাথে 'The girl'-এর মালিকানা বা সম্বন্ধ বোঝাতে Genitive Relative Pronoun 'whose' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'who' বা 'whom' সম্বন্ধ বোঝায় না; 'which' সাধারণত বস্তুর ক্ষেত্রে আসে।"
            },
            {
                q: "Everything _____ he says is true.",
                options: ["who", "whom", "that", "whose"],
                ans: 2,
                exp: "'Everything'-এর মতো indefinite/all-inclusive antecedent-এর পরে সাধারণত 'that' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'who' ও 'whom' ব্যক্তির জন্য আসে; 'whose' সম্বন্ধ বোঝায়।"
            },
            {
                q: "These mangoes are sweeter than _____ of Rajshahi.",
                options: ["that", "those", "this", "it"],
                ans: 1,
                exp: "Plural noun 'mangoes'-এর সাথে তুলনা করতে plural demonstrative pronoun 'those' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'that', 'this' এবং 'it' singular হওয়ায় plural 'mangoes'-এর সাথে মেলে না।"
            },
            {
                q: "The climate of Cox's Bazar is milder than _____ of Dhaka.",
                options: ["those", "these", "that", "they"],
                ans: 2,
                exp: "Singular noun 'The climate'-এর সাথে তুলনা করতে singular demonstrative pronoun 'that' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'those' ও 'these' plural; 'they' এখানে তুলনামূলক demonstrative হিসেবে ব্যবহৃত হয় না।"
            },
            {
                q: "Somebody has left _____ bag in the classroom.",
                options: ["their", "his", "her", "its"],
                ans: 1,
                exp: "Traditional/formal grammar অনুযায়ী 'Somebody' singular হওয়ায় 'his' ব্যবহৃত হয় (আধুনিক ব্যবহারে 'their' দেখা গেলেও ঢাবির প্রচলিত এমসিকিউতে 'his' বা 'his/her' গুরুত্ব পায়)। বাকি অপশনগুলো কেন নয়: 'her' ও 'its' এখানে নির্ধারিত লিঙ্গ বোঝায় না; 'its' প্রাণহীন বস্তুর জন্য।"
            }
        ]
    },

    "Nouns: Classification, Use & Function (Including Number & Gender)": {
        status: "live",
        examEndDate: "2026-11-22T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: [
            {
                q: "Which of the following is a Collective Noun?",
                options: ["Gold", "Honesty", "Committee", "River"],
                ans: 2,
                exp: "'Committee' সমজাতীয় ব্যক্তিদের সমষ্টি বোঝায়, তাই এটি Collective Noun। বাকি অপশনগুলো কেন নয়: 'Gold' হলো Material Noun; 'Honesty' হলো Abstract Noun; 'River' সাধারণ শ্রেণির নাম হওয়ায় Common Noun।"
            },
            {
                q: "In 'Iron is a useful metal,' what type of noun is 'Iron'?",
                options: ["Common Noun", "Abstract Noun", "Material Noun", "Proper Noun"],
                ans: 2,
                exp: "'Iron' এখানে একটি পদার্থ বা ধাতু বোঝাচ্ছে যা দিয়ে অন্যান্য জিনিস তৈরি হয়, তাই এটি Material Noun। বাকি অপশনগুলো কেন নয়: 'metal' হলো Common Noun; 'Iron' কোনো গুণ বা ধারণা নয় বলে Abstract Noun নয়; কোনো নির্দিষ্ট স্থানের নাম নয় বলে Proper Noun নয়।"
            },
            {
                q: "What is the plural form of 'criterion'?",
                options: ["Criterions", "Criteria", "Criterias", "Criteri"],
                ans: 1,
                exp: "গ্রিক মূল শব্দ 'criterion'-এর বহুবচন রূপ হলো 'criteria' (singular: criterion, plural: criteria)। বাকি অপশনগুলো কেন নয়: 'Criterions' বা 'Criterias' ইংরেজিতে প্রমিত plural নয়; 'Criteri' শব্দটি অস্তিত্বহীন।"
            },
            {
                q: "Which of the following nouns is always used in the plural form with a plural verb?",
                options: ["News", "Mathematics", "Scissors", "Physics"],
                ans: 2,
                exp: "'Scissors' (কাঁচি) দুটি অংশ নিয়ে গঠিত একটি বস্তু এবং সর্বদা plural রূপে ব্যবহৃত হয়ে plural verb গ্রহণ করে। বাকি অপশনগুলো কেন নয়: 'News', 'Mathematics' এবং 'Physics' দেখতে plural মনে হলেও এগুলো uncountable/singular noun হিসেবে singular verb নেয়।"
            },
            {
                q: "Identify the feminine gender of 'stag':",
                options: ["Doe", "Hind", "Ewe", "Mare"],
                ans: 1,
                exp: "'Stag' (পুরুষ হরিণ)-এর স্ত্রীলিঙ্গ হলো 'hind' (স্ত্রী হরিণ)। বাকি অপশনগুলো কেন নয়: 'Doe' সাধারণত খরগোশ বা কিছু হরিণের স্ত্রীলিঙ্গ হলেও 'stag'-এর সঠিক জোড়া 'hind'; 'Ewe' হলো ভেড়ার স্ত্রীলিঙ্গ এবং 'Mare' হলো ঘোড়ার স্ত্রীলিঙ্গ।"
            },
            {
                q: "In 'The jury were divided in their opinions,' what is the grammatical number/behavior of 'jury'?",
                options: ["Singular noun with singular verb", "Collective noun acting as plural", "Material noun", "Abstract noun"],
                ans: 1,
                exp: "জুরি বোর্ডের সদস্যরা যখন আলাদা আলাদা মত দেন (বিভক্ত হন), তখন 'jury' সমষ্টি না বুঝিয়ে পৃথক ব্যক্তিদের বোঝায় এবং plural হিসেবে ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: একমত হলে singular verb নিত কিন্তু এখানে 'were' ও 'their' plural বোঝাচ্ছে; এটি পদার্থ বা গুণ নয়।"
            },
            {
                q: "Which of the following is a Common Gender noun?",
                options: ["Spinster", "Orphan", "Duchess", "Widower"],
                ans: 1,
                exp: "'Orphan' (এতিম) পুরুষ বা নারী—উভয়কেই বোঝাতে পারে, তাই এটি Common Gender। বাকি অপশনগুলো কেন নয়: 'Spinster' (অবিবাহিতা নারী) ও 'Duchess' Feminine Gender; 'Widower' (বিপত্নীক পুরুষ) Masculine Gender।"
            },
            {
                q: "In 'He gave me some good advice,' what kind of noun is 'advice'?",
                options: ["Countable Noun", "Uncountable Noun", "Collective Noun", "Proper Noun"],
                ans: 1,
                exp: "'Advice' (উপদেশ) গণনা করা যায় না বলে Uncountable Noun; এর আগে 'a' বা শেষে 's' বসে না ('advices' ভুল)। বাকি অপশনগুলো কেন নয়: এটি সরাসরি গণনাযোগ্য নয় বলে Countable Noun নয়; সমষ্টি বা নির্দিষ্ট নামও নয়।"
            },
            {
                q: "What is the plural form of 'phenomenon'?",
                options: ["Phenomenons", "Phenomena", "Phenomenas", "Phenomenon"],
                ans: 1,
                exp: "'Phenomenon' (ঘটনা/প্রপঞ্চ)-এর সঠিক plural রূপ হলো 'phenomena'। বাকি অপশনগুলো কেন নয়: 'Phenomenons' বা 'Phenomenas' ঢাবি/প্রমিত ব্যাকরণে সঠিক plural নয়; 'Phenomenon' singular।"
            },
            {
                q: "In 'The Padma is a mighty river,' what is 'Padma'?",
                options: ["Common Noun", "Proper Noun", "Collective Noun", "Abstract Noun"],
                ans: 1,
                exp: "'Padma' একটি নির্দিষ্ট নদীর নাম, তাই এটি Proper Noun। বাকি অপশনগুলো কেন নয়: 'river' হলো Common Noun; সমষ্টি বা গুণবাচক নয় বলে Collective বা Abstract Noun নয়।"
            },
            {
                q: "Which noun remains unchanged in both singular and plural forms?",
                options: ["Book", "Sheep", "Child", "Man"],
                ans: 1,
                exp: "'Sheep' (ভেড়া)-এর singular এবং plural উভয় রূপই 'sheep'। বাকি অপশনগুলো কেন নয়: 'Book' -> 'books', 'Child' -> 'children', এবং 'Man' -> 'men' হয়।"
            },
            {
                q: "In 'Childhood is the golden period of life,' 'Childhood' is a/an —",
                options: ["Concrete Noun", "Abstract Noun", "Collective Noun", "Material Noun"],
                ans: 1,
                exp: "'Childhood' (শৈশব) একটি অবস্থা বা সময়ের ধারণা বোঝায় যা স্পর্শ করা যায় না, তাই এটি Abstract Noun। বাকি অপশনগুলো কেন নয়: এটি ভৌত বস্তু নয় বলে Concrete Noun নয়; সমষ্টি বা পদার্থও নয়।"
            },
            {
                q: "What is the plural of 'commander-in-chief'?",
                options: ["Commander-in-chiefs", "Commanders-in-chief", "Commander-in-chieves", "Commanders-in-chiefs"],
                ans: 1,
                exp: "Compound noun-এ মূল শব্দ ('commander')-এর সাথে 's' যুক্ত হয়ে plural হয়—তাই 'commanders-in-chief'। বাকি অপশনগুলো কেন নয়: মূল শব্দ বাদ দিয়ে পেছনে বা উভয় পাশে 's' যোগ করা ব্যাকরণসম্মত নয়।"
            },
            {
                q: "In 'This is my brother's house,' what function does \"brother's\" perform?",
                options: ["Direct Object", "Possessive / Genitive modifier", "Subject Complement", "Adjunct of time"],
                ans: 1,
                exp: "\"brother's\" এখানে apostrophe-s যুক্ত হয়ে 'house'-এর ওপর মালিকানা বা সম্বন্ধ বোঝাচ্ছে (Possessive/Genitive case)। বাকি অপশনগুলো কেন নয়: মূল Object হলো 'house'; এটি Subject Complement বা সময়বাচক Adjunct নয়।"
            },
            {
                q: "Identify the noun used as an Adjunct in: 'He went home early.'",
                options: ["He", "went", "home", "early"],
                ans: 2,
                exp: "'home' সাধারণত noun হলেও এখানে 'কোথায় গিয়েছিল?' প্রশ্নের উত্তরে স্থানবাচক Adjunct হিসেবে ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'He' হলো Subject; 'went' হলো Verb; 'early' হলো Adverb (Adjunct of time)।"
            }
        ]
    },

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


 "Adjectives & Adverbs: Use & Function": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Linking Verb ও Action Verb-এর সাথে Adjective এবং Adverb-এর ব্যবহারগত পার্থক্য উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "The flower smells _____.",
            options: ["sweet", "sweetly", "sweetness", "sweeten"],
            ans: 0,
            exp: "'smells' এখানে Linking Verb হিসেবে ব্যবহৃত হয়েছে এবং Subject 'The flower'-এর গুণ বোঝাচ্ছে, তাই Adjective 'sweet' বসবে। বাকি অপশনগুলো কেন নয়: 'sweetly' adverb হওয়ায় linking verb-এর পর subject-এর গুণ বোঝাতে ভুল; 'sweetness' noun এবং 'sweeten' verb।"
        },
        {
            q: "He spoke _____ at the seminar.",
            options: ["clear", "clearly", "clarity", "clearness"],
            ans: 1,
            exp: "'spoke' ক্রিয়ার ধরন (manner) বোঝাতে Adverb 'clearly' ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'clear' এখানে verb-এর ধরন বোঝাতে অনুপযুক্ত; 'clarity' ও 'clearness' noun।"
        },
        {
            q: "Seldom _____ such a dedicated student in this department.",
            options: ["I see", "do I see", "I saw", "did saw I"],
            ans: 1,
            exp: "Negative বা frequency adverb ('Seldom') বাক্যের শুরুতে বসলে Subject-Verb Inversion হয়; তাই 'do I see' সঠিক। বাকি অপশনগুলো কেন নয়: inversion না থাকায় 'I see' বা 'I saw' প্রমিত গঠন নয়; 'did saw I' ভুল tense/word order।"
        },
        {
            q: "She is _____ tired to continue studying tonight.",
            options: ["very", "too", "much", "so"],
            ans: 1,
            exp: "'too + adjective + to-infinitive' কাঠামোতে অতিরিক্ত মাত্রায় কিছু হওয়ার কারণে অন্য কিছু অসম্ভব বা নেতিবাচক ফল বোঝায়, তাই 'too' বসবে। বাকি অপশনগুলো কেন নয়: 'very' দিয়ে 'to continue' এমন নেতিবাচক ফলাফল বোঝায় না; 'much' সাধারণত comparative বা uncountable noun-এর সাথে আসে; 'so' দিয়ে 'that' clause লাগে।"
        },
        {
            q: "He has _____ friends in Dhaka, so he feels lonely.",
            options: ["few", "a few", "little", "a little"],
            ans: 0,
            exp: "'friends' countable plural noun এবং 'feels lonely' থেকে বোঝা যাচ্ছে তার বন্ধু প্রায় নেই বললেই চলে; তাই নেতিবাচক অর্থে 'few' সঠিক। বাকি অপশনগুলো কেন নয়: 'a few' ইতিবাচক ('কিছু আছে') অর্থে ব্যবহৃত হয়; 'little' ও 'a little' uncountable noun-এর সাথে বসে।"
        },
        {
            q: "We have _____ milk left in the pot; we can make a cup of tea.",
            options: ["few", "a few", "little", "a little"],
            ans: 3,
            exp: "'milk' uncountable noun এবং 'চা বানানো যাবে'—এই ইতিবাচক স্বল্পতা বোঝাতে 'a little' সঠিক। বাকি অপশনগুলো কেন নয়: 'few' ও 'a few' countable noun-এর জন্য; 'little' প্রায় শূন্য বা নেতিবাচক পরিমাণ বোঝায়।"
        },
        {
            q: "The man behaves _____ towards his junior colleagues.",
            options: ["friendly", "in a friendly manner", "friend", "friendliness"],
            ans: 1,
            exp: "'friendly' নিজে একটি Adjective (advise/manner বোঝাতে '-ly' থাকলেও এটি adverb নয়), তাই ক্রিয়ার ধরন বোঝাতে 'in a friendly manner' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'friendly' সরাসরি adverb নয়; 'friend' noun এবং 'friendliness' abstract noun।"
        },
        {
            q: "I have _____ finished my assignment.",
            options: ["hard", "hardly", "hardness", "harden"],
            ans: 1,
            exp: "'hardly' অর্থ 'কদাচিৎ বা প্রায় না'—যা বাক্যের অর্থের সাথে সঙ্গতিপূর্ণ। বাকি অপশনগুলো কেন নয়: 'hard' অর্থ 'কঠোরভাবে বা পরিশ্রম করে'; 'hardness' noun এবং 'harden' verb।"
        },
        {
            q: "Which of the following is an adjective?",
            options: ["Cowardly", "Quickly", "Slowly", "Happily"],
            ans: 0,
            exp: "'Cowardly' (কাপুরুষোচিত) শব্দটি Noun + ly যুক্ত হয়ে গঠিত একটি Adjective (যেমন: *a cowardly attack*)। বাকি অপশনগুলো কেন নয়: 'Quickly', 'Slowly' এবং 'Happily' সাধারণ Adverb of Manner।"
        },
        {
            q: "The train arrived _____ than we had expected.",
            options: ["late", "later", "lately", "latest"],
            ans: 1,
            exp: "'than' থাকায় তুলনামূলক (Comparative) রূপ প্রয়োজন; 'late'-এর comparative হলো 'later' (পরে/দেরিতে)। বাকি অপশনগুলো কেন নয়: 'late' positive; 'lately' অর্থ 'সম্প্রতি' (adverb of time); 'latest' superlative।"
        },
        {
            q: "Have you heard any _____ news about the exam schedule?",
            options: ["farther", "further", "farthest", "far"],
            ans: 1,
            exp: "'further' অর্থ 'অতিরিক্ত বা পরবর্তী' (তথ্য বা আলোচনার ক্ষেত্রে), তাই 'further news' সঠিক। বাকি অপশনগুলো কেন নয়: 'farther' ও 'farthest' মূলত শারীরিক দূরত্ব বোঝায়; 'far' positive।"
        },
        {
            q: "The children looked _____ when they saw the circus.",
            options: ["excite", "excited", "exciting", "excitement"],
            ans: 1,
            exp: "শিশুরা নিজেরা রোমাঞ্চিত/উত্তেজিত অনুভব করেছিল, তাই Past Participle Adjective 'excited' বসবে। বাকি অপশনগুলো কেন নয়: 'exciting' দিলে বোঝাত শিশুরা অন্যকে উত্তেজিত করছে; 'excite' verb এবং 'excitement' noun।"
        },
        {
            q: "The movie was so _____ that I fell asleep halfway through.",
            options: ["bore", "bored", "boring", "boredom"],
            ans: 2,
            exp: "মুভিটি নিজেই বিরক্তিকর ছিল, তাই Present Participle Adjective 'boring' সঠিক। বাকি অপশনগুলো কেন নয়: 'bored' ব্যক্তি বা প্রাণীর অনুভূতি বোঝায়; 'bore' verb এবং 'boredom' noun।"
        },
        {
            q: "She sings _____.",
            options: ["good", "well", "better", "best"],
            ans: 1,
            exp: "'sings' ক্রিয়াকে মডিফাই করতে Adverb 'well' বসে। বাকি অপশনগুলো কেন নয়: 'good' adjective; 'better' comparative এবং 'best' superlative (তুলনা না থাকায় এগুলো এখানে অপ্রযোজ্য)।"
        },
        {
            q: "He is _____ senior to me in service.",
            options: ["more", "very", "much", "too"],
            ans: 2,
            exp: "'senior' নিজেই Latin comparative হওয়ায় এর আগে 'more' বসে না, বরং মাত্রা বোঝাতে 'much' বা 'far' বসে। বাকি অপশনগুলো কেন নয়: 'more' দিলে double comparative-এর ভুল হয়; 'very' সাধারণত positive adjective-এর আগে বসে; 'too' অতিরিক্ত নেতিবাচক মাত্রা বোঝায়।"
        },
        {
            q: "Never _____ such a rude remark before.",
            options: ["I have heard", "have I heard", "I heard", "did heard I"],
            ans: 1,
            exp: "বাক্যের শুরুতে 'Never' থাকায় Auxiliary Verb আগে এবং Subject পরে বসে (Inversion); তাই 'have I heard' সঠিক। বাকি অপশনগুলো কেন নয়: 'I have heard' বা 'I heard' সাধারণ word order; 'did heard I' ব্যাকরণগতভাবে ভুল।"
        },
        {
            q: "The patient feels _____ today than yesterday.",
            options: ["good", "well", "better", "best"],
            ans: 2,
            exp: "'today than yesterday' দুই সময়ের তুলনা বোঝাচ্ছে, তাই Comparative form 'better' বসবে। বাকি অপশনগুলো কেন নয়: 'good' ও 'well' positive; 'best' superlative।"
        },
        {
            q: "They walked _____ along the river bank.",
            options: ["quiet", "quietly", "quietness", "quieter"],
            ans: 1,
            exp: "'walked' ক্রিয়ার ধরন বোঝাতে Adverb 'quietly' ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'quiet' adjective; 'quietness' noun; 'quieter' comparative।"
        },
        {
            q: "He is _____ old enough to understand his responsibilities.",
            options: ["enough", "very", "too", "so"],
            ans: 0,
            exp: "'enough' সাধারণত Adjective-এর পরে বসে ('old enough') পর্যাপ্ততা বোঝায়। বাকি অপশনগুলো কেন নয়: 'enough' আগে বসানো হয় না; 'very' বা 'too' দিয়ে 'enough to' কাঠামো পূর্ণ হয় না।"
        },
        {
            q: "The _____ chapter of the book is very interesting.",
            options: ["last", "latest", "latter", "later"],
            ans: 0,
            exp: "বইয়ের 'সর্বশেষ অধ্যায়' বোঝাতে 'last' সঠিক। বাকি অপশনগুলো কেন নয়: 'latest' সময় বা নতুন প্রকাশিত বিষয়ের ক্ষেত্রে আসে; 'latter' দুটির মধ্যে দ্বিতীয়টিকে বোঝায়; 'later' সময়সূচক comparative adverb।"
        },
        {
            q: "He comes here _____.",
            options: ["often", "frequent", "frequency", "frequenting"],
            ans: 0,
            exp: "'comes' ক্রিয়া কতবার বা কত ঘনঘন ঘটে তা বোঝাতে Adverb of Frequency 'often' বসে। বাকি অপশনগুলো কেন নয়: 'frequent' adjective; 'frequency' noun; 'frequenting' verb/gerund।"
        },
        {
            q: "In 'The elder brother lives in Dhaka,' what is 'elder'?",
            options: ["Adverb", "Adjective", "Noun", "Conjunction"],
            ans: 1,
            exp: "'elder' এখানে Noun ('brother')-এর আগে বসে বয়স/জ্যেষ্ঠতা বোঝাচ্ছে, তাই এটি Adjective। বাকি অপশনগুলো কেন নয়: এটি কোনো verb বা adjective মডিফাই করছে না বলে Adverb নয়; নাম বা সংযোজকও নয়।"
        },
        {
            q: "She looks _____ in that blue dress.",
            options: ["charming", "charmingly", "charm", "charmed"],
            ans: 0,
            exp: "'looks' এখানে Linking Verb এবং 'charming' Adjective রূপে Subject 'She'-এর সৌন্দর্য/আকর্ষণ প্রকাশ করছে। বাকি অপশনগুলো কেন নয়: 'charmingly' adverb; 'charm' noun/verb; 'charmed' এখানে ক্রিয়ার অর্থ পাল্টে দেয়।"
        },
        {
            q: "I have _____ read this book; I don't need to read it again.",
            options: ["already", "yet", "ever", "never"],
            ans: 0,
            exp: "ইতিবাচক বাক্যে কাজটি আগেই সম্পন্ন হয়েছে বোঝাতে 'already' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'yet' সাধারণত negative বা interrogative বাক্যে আসে; 'ever' প্রশ্ন বা শর্তে আসে; 'never' সম্পূর্ণ না-বোধক অর্থ দেয়।"
        },
        {
            q: "A _____ decision was taken by the board.",
            options: ["wise", "wisely", "wisdom", "wisen"],
            ans: 0,
            exp: "Noun ('decision')-এর আগে বসে তার গুণ বোঝাতে Adjective 'wise' বসে। বাকি অপশনগুলো কেন নয়: 'wisely' adverb; 'wisdom' abstract noun; 'wisen' প্রমিত verb নয়।"
        }
    ]
},
"Determiners & Articles": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Definite Article 'the' এবং Indefinite Article 'a/an'-এর ব্যতিক্রমী ব্যবহার ও Zero Article-এর নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "He is _____ university student.",
            options: ["a", "an", "the", "no article"],
            ans: 0,
            exp: "'university' শব্দটির শুরুতে 'u' থাকলেও এর উচ্চারণ 'ইউ' (consonant sound /j/)-এর মতো হওয়ায় 'a' বসে। বাকি অপশনগুলো কেন নয়: vowel sound না থাকায় 'an' ভুল; অনির্দিষ্টভাবে একজন শিক্ষার্থী বোঝাতে 'the' বা zero article প্রযোজ্য নয়।"
        },
        {
            q: "It will take me _____ hour to reach the venue.",
            options: ["a", "an", "the", "no article"],
            ans: 1,
            exp: "'hour' শব্দটির শুরুতে 'h' অনুচ্চারিত (silent) এবং প্রথম উচ্চারিত ধ্বনি vowel sound ('আওয়ার') হওয়ায় 'an' বসে। বাকি অপশনগুলো কেন নয়: consonant sound না থাকায় 'a' ভুল; অনির্দিষ্ট এক ঘণ্টা বোঝাতে 'the' বা article-হীনতা সঠিক নয়।"
        },
        {
            q: "_____ rich are not always happy.",
            options: ["A", "An", "The", "No article"],
            ans: 2,
            exp: "'The + Adjective' বসে সমগ্র শ্রেণিকে বোঝায় ('ধনী শ্রেণি'), তাই 'The' বসবে। বাকি অপশনগুলো কেন নয়: 'A' বা 'An' দিয়ে সমগ্র শ্রেণি বোঝানো যায় না; শ্রেণিবাচক এই বিশেষ কাঠামোতে 'The' আবশ্যক।"
        },
        {
            q: "She plays _____ piano very well.",
            options: ["a", "an", "the", "no article"],
            ans: 2,
            exp: "বাদ্যযন্ত্রের নামের আগে সাধারণত 'the' বসে ('play the piano')। বাকি অপশনগুলো কেন নয়: প্রমিত নিয়মে বাদ্যযন্ত্রের আগে 'a', 'an' বা article বাদ দেওয়া সঠিক নয়।"
        },
        {
            q: "They play _____ football every afternoon.",
            options: ["a", "an", "the", "no article"],
            ans: 3,
            exp: "খেলাধুলার নামের আগে কোনো Article বসে না (Zero Article), তাই 'no article' সঠিক। বাকি অপশনগুলো কেন নয়: খেলাধুলার নামের আগে 'a', 'an' বা 'the' বসানো ব্যাকরণগতভাবে ভুল।"
        },
        {
            q: "_____ sun rises in the east.",
            options: ["A", "An", "The", "No article"],
            ans: 2,
            exp: "বিশ্বজগতের অনন্য বা নির্দিষ্ট বস্তু ('the sun')-এর আগে 'The' বসে। বাকি অপশনগুলো কেন নয়: 'A' বা 'An' অনির্দিষ্টতা বোঝায় এবং 'no article' দিলে নির্ভুল হয় না।"
        },
        {
            q: "There are not _____ students in the room today.",
            options: ["much", "many", "little", "a little"],
            ans: 1,
            exp: "'students' countable plural noun এবং বাক্যটি negative হওয়ায় 'many' সঠিক। বাকি অপশনগুলো কেন নয়: 'much', 'little' এবং 'a little' uncountable noun-এর সাথে ব্যবহৃত হয়।"
        },
        {
            q: "How _____ water do you drink daily?",
            options: ["many", "much", "few", "several"],
            ans: 1,
            exp: "'water' uncountable noun এবং এর পরিমাণ জানতে 'How much' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'many', 'few' এবং 'several' countable noun-এর সাথে বসে।"
        },
        {
            q: "_____ honesty is the best policy.",
            options: ["A", "An", "The", "No article"],
            ans: 3,
            exp: "সাধারণ বা সার্বজনীন অর্থে Abstract Noun ('honesty')-এর আগে কোনো Article বসে না। বাকি অপশনগুলো কেন নয়: 'A', 'An' বা 'The' সাধারণ নীতিবাচক বাক্যে অপ্রয়োজনীয়।"
        },
        {
            q: "He is _____ honest man.",
            options: ["a", "an", "the", "no article"],
            ans: 1,
            exp: "'honest'-এর 'h' silent থাকায় প্রথম ধ্বনি vowel sound ('অনেস্ট'), তাই 'an' বসবে। বাকি অপশনগুলো কেন নয়: 'a' ভুল; নির্দিষ্টতা না থাকায় 'the' বা article-হীনতা সঠিক নয়।"
        },
        {
            q: "_____ Pacific Ocean is the deepest ocean in the world.",
            options: ["A", "An", "The", "No article"],
            ans: 2,
            exp: "মহাসাগর, সাগর, নদী ও প্রণালির নামের আগে 'The' বসে ('the Pacific Ocean')। বাকি অপশনগুলো কেন নয়: 'A', 'An' বা article বাদ দেওয়া ভুল।"
        },
        {
            q: "I saw _____ one-eyed man in the market.",
            options: ["a", "an", "the", "no article"],
            ans: 0,
            exp: "'one'-এর শুরুতে 'o' থাকলেও এর উচ্চারণ 'ওয়া' (consonant sound /w/)-এর মতো হওয়ায় 'a' বসে। বাকি অপশনগুলো কেন নয়: vowel sound না থাকায় 'an' ভুল; অনির্দিষ্টভাবে একজন মানুষকে বোঝাতে 'the' বা শূন্য article সঠিক নয়।"
        },
        {
            q: "_____ Himalayas lie to the north of India.",
            options: ["A", "An", "The", "No article"],
            ans: 2,
            exp: "পর্বতশ্রেণির নামের আগে 'The' বসে ('the Himalayas')—যদিও একক পর্বতচূড়ার (যেমন: Mount Everest) আগে 'the' বসে না। বাকি অপশনগুলো কেন নয়: 'A', 'An' বা 'no article' এখানে সঠিক নয়।"
        },
        {
            q: "Each _____ boy was given a prize.",
            options: ["a", "the", "no article", "an"],
            ans: 2,
            exp: "'Each' নিজেই একটি Determiner, তাই এর পর সরাসরি singular countable noun ('boy') বসে; মাঝখানে 'a/an/the' আসে না। বাকি অপশনগুলো কেন নয়: দুটি determiner একসাথে এভাবে বসানো যায় না।"
        },
        {
            q: "She is _____ M.A. in English.",
            options: ["a", "an", "the", "no article"],
            ans: 1,
            exp: "'M'-এর উচ্চারণ 'এম' (vowel sound 'এ'-এর মতো শুরু) হওয়ায় এর আগে 'an' বসে। বাকি অপশনগুলো কেন নয়: 'a' ভুল; 'the' বা article-হীনতা এখানে প্রযোজ্য নয়।"
        },
        {
            q: "He was sent to _____ prison for committing a crime.",
            options: ["a", "an", "the", "no article"],
            ans: 3,
            exp: "জেল/কারাগার, হাসপাতাল, স্কুল বা গির্জা তার প্রাথমিক উদ্দেশ্যে ব্যবহৃত হলে Article বসে না ('sent to prison' = কয়েদি হিসেবে জেলে যাওয়া)। বাকি অপশনগুলো কেন নয়: দর্শনার্থী বা অন্য বিশেষ উদ্দেশ্যে গেলে 'the' বসত, কিন্তু এখানে প্রাথমিক উদ্দেশ্য বোঝাচ্ছে।"
        },
        {
            q: "_____ more you practice, _____ better you become.",
            options: ["A / a", "The / the", "An / the", "No article / the"],
            ans: 1,
            exp: "Double comparative কাঠামোতে ('The + comparative ..., the + comparative ...') উভয় অংশের আগে 'The' বসে। বাকি অপশনগুলো কেন নয়: এই বিশেষ সমানুপাতিক তুলনায় 'a/an' বা article বাদ দেওয়া ভুল।"
        },
        {
            q: "He bought _____ dozen eggs from the grocer.",
            options: ["a", "an", "the", "no article"],
            ans: 0,
            exp: "'dozen'-এর শুরুতে 'd' (consonant sound) থাকায় অনির্দিষ্ট এক ডজন বোঝাতে 'a' বসে। বাকি অপশনগুলো কেন নয়: 'an' ভুল; নির্দিষ্টতা বোঝানো হয়নি বলে 'the' বা article বাদ দেওয়া সঠিক নয়।"
        },
        {
            q: "_____ Bangla is our mother tongue.",
            options: ["A", "An", "The", "No article"],
            ans: 3,
            exp: "ভাষার নামের আগে সাধারণত কোনো Article বসে না (তবে ভাষার পরে 'language' শব্দটি থাকলে 'the Bangla language' হয়)। বাকি অপশনগুলো কেন নয়: 'A', 'An' বা 'The' একা ভাষার নামের আগে বসানো সঠিক নয়।"
        },
        {
            q: "I have _____ information for you.",
            options: ["a", "an", "some", "many"],
            ans: 2,
            exp: "'information' uncountable noun হওয়ায় এর আগে 'a/an' বা 'many' বসে না; ইতিবাচক অনির্দিষ্ট পরিমাণ বোঝাতে 'some' সঠিক। বাকি অপশনগুলো কেন নয়: 'a/an' countable singular-এর জন্য এবং 'many' countable plural-এর জন্য।"
        },
        {
            q: "_____ honest are respected everywhere.",
            options: ["A", "An", "The", "No article"],
            ans: 2,
            exp: "'The + honest' দিয়ে সৎ ব্যক্তিদের সমষ্টি বোঝাচ্ছে, তাই 'The' বসবে। বাকি অপশনগুলো কেন নয়: 'A', 'An' বা article ছাড়া 'honest' একা সমষ্টিবাচক noun হিসেবে কাজ করে না।"
        },
        {
            q: "She goes to _____ bed at 11 p.m.",
            options: ["a", "an", "the", "no article"],
            ans: 3,
            exp: "'go to bed' একটি স্থায়ী অভ্যাসগত বাক্যাংশ (ঘুমাতে যাওয়া অর্থে), যেখানে 'bed'-এর আগে কোনো article বসে না। বাকি অপশনগুলো কেন নয়: 'a/an/the' বসালে সাধারণ ঘুমানোর অভ্যাস বোঝানোর প্রমিত রূপ বদলে যায়।"
        },
        {
            q: "There is _____ hope of his recovery.",
            options: ["few", "a few", "little", "a little"],
            ans: 2,
            exp: "'hope' uncountable noun এবং সুস্থ হওয়ার আশা ক্ষীণ বা প্রায় নেই বোঝাতে 'little' সঠিক। বাকি অপশনগুলো কেন নয়: 'few' ও 'a few' countable noun-এর জন্য; 'a little' ইতিবাচক সামান্য আশা বোঝায়।"
        },
        {
            q: "_____ United States is a powerful nation.",
            options: ["A", "An", "The", "No article"],
            ans: 2,
            exp: "যেসব দেশের নামের সাথে 'United', 'Republic', 'Kingdom' বা 'States' যুক্ত থাকে, তাদের আগে 'The' বসে ('the United States')। বাকি অপশনগুলো কেন নয়: 'A', 'An' বা 'no article' এই নিয়মের পরিপন্থী।"
        },
        {
            q: "He has _____ umbrella.",
            options: ["a", "an", "the", "no article"],
            ans: 1,
            exp: "'umbrella'-এর শুরুতে vowel sound ('আমব্রেলা') থাকায় 'an' বসবে। বাকি অপশনগুলো কেন নয়: consonant sound না থাকায় 'a' ভুল; নির্দিষ্ট করে বলা হয়নি বলে 'the' বা article বাদ দেওয়া সঠিক নয়।"
        }
    ]
},
"Degree of Comparison (Positive, Comparative, Superlative)": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Positive, Comparative এবং Superlative Degree-এর মধ্যে অর্থ অপরিবর্তিত রেখে রূপান্তরের প্রধান কাঠামোগুলো উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "Dhaka is bigger than _____ other city in Bangladesh.",
            options: ["any", "all", "most", "much"],
            ans: 0,
            exp: "Singular noun ('other city')-এর সাথে তুলনা করতে 'than any other + singular noun' কাঠামো ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'all' বা 'most' দিলে plural noun ('other cities') লাগে; 'much' এখানে সঠিক কাঠামো নয়।"
        },
        {
            q: "No other metal is as useful as _____.",
            options: ["iron", "an iron", "the iron", "irons"],
            ans: 0,
            exp: "'iron' এখানে material noun হিসেবে সাধারণ অর্থে ব্যবহৃত হয়েছে, তাই কোনো article বা plural ছাড়া 'iron' সঠিক। বাকি অপশনগুলো কেন নয়: material noun-এর আগে সাধারণত 'an' বা 'irons' বসে না; 'the iron' নির্দিষ্ট বস্তুকে বোঝায়।"
        },
        {
            q: "He is senior _____ me by two years.",
            options: ["than", "to", "from", "over"],
            ans: 1,
            exp: "Latin comparative adjectives ('senior', 'junior', 'superior', 'inferior', 'prior', 'anterior', 'posterior')-এর পরে 'than' না বসে 'to' বসে। বাকি অপশনগুলো কেন নয়: 'than', 'from' এবং 'over' এই বিশেষ Latin comparative-গুলোর সাথে প্রমিত নয়।"
        },
        {
            q: "Very few boys in the class are as industrious _____ him.",
            options: ["than", "as", "so", "like"],
            ans: 1,
            exp: "সমান পর্যায়ের তুলনায় 'as + positive adjective + as' কাঠামো ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'than' comparative degree-তে আসে; 'so...as' সাধারণত negative বাক্যে ব্যবহৃত হয়; 'like' preposition/adjective।"
        },
        {
            q: "Which is the superlative degree of 'bad'?",
            options: ["Baddest", "Worse", "Worst", "Most bad"],
            ans: 2,
            exp: "'bad' একটি irregular adjective; এর comparative হলো 'worse' এবং superlative হলো 'worst'। বাকি অপশনগুলো কেন নয়: 'Baddest' ও 'Most bad' ভুল রূপ; 'Worse' comparative।"
        },
        {
            q: "Of the two sisters, Mina is the _____.",
            options: ["cleverest", "cleverer", "clever", "most clever"],
            ans: 1,
            exp: "দুইয়ের মধ্যে তুলনা বোঝাতে 'Of the two + plural noun' থাকলে Comparative degree-এর আগে 'the' বসে ('the cleverer')। বাকি অপশনগুলো কেন নয়: সাধারণভাবে দুইয়ের মধ্যে superlative 'cleverest' বা 'most clever' প্রমিত নয়; 'clever' positive।"
        },
        {
            q: "Mount Everest is higher than _____ peaks in the world.",
            options: ["any other", "all other", "no other", "each"],
            ans: 1,
            exp: "Plural noun ('peaks')-এর সাথে তুলনা করতে 'than all other + plural noun' কাঠামো ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'any other'-এর পরে সাধারণত singular noun আসে; 'no other' দিয়ে তুলনার এই কাঠামো গঠিত হয় না; 'each' সঠিক নয়।"
        },
        {
            q: "He is not so tall _____ his brother.",
            options: ["than", "as", "that", "which"],
            ans: 1,
            exp: "Negative বাক্যে তুলনা বোঝাতে 'not so/as + positive adjective + as' কাঠামো ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'than' comparative-এর জন্য; 'that' ও 'which' এখানে অনুপযুক্ত।"
        },
        {
            q: "What is the comparative form of 'little' (পরিমাণ অর্থে)?",
            options: ["Littler", "Less", "Lesser", "Least"],
            ans: 1,
            exp: "পরিমাণ বোঝাতে 'little'-এর সাধারণ comparative হলো 'less' (এবং superlative 'least')। বাকি অপশনগুলো কেন নয়: 'Littler' প্রমিত নয়; 'Lesser' সাধারণত 'কম গুরুত্বপূর্ণ/ছোট' অর্থে attributive adjective হিসেবে ব্যবহৃত হয়; 'Least' superlative।"
        },
        {
            q: "He prefers tea _____ coffee.",
            options: ["than", "to", "over", "form"],
            ans: 1,
            exp: "'prefer'-এর সাথে তুলনা করতে 'than'-এর পরিবর্তে 'to' ব্যবহৃত হয় ('prefer X to Y')। বাকি অপশনগুলো কেন নয়: 'prefer ... than' প্রমিত ইংরেজিতে ভুল; 'from' ও 'over' এখানে সঠিক নয়।"
        },
        {
            q: "This is _____ unique opportunity for young entrepreneurs.",
            options: ["a", "an", "the", "no article"],
            ans: 0,
            exp: "'unique'-এর শুরুতে 'u' থাকলেও উচ্চারণ consonant sound ('ইউনিক') হওয়ায় 'a' বসে (পাশাপাশি 'unique', 'perfect', 'round', 'square', 'dead'-এর মতো absolute adjective-গুলোর আগে সাধারণত 'more/most' বসে না)। বাকি অপশনগুলো কেন নয়: consonant sound থাকায় 'an' ভুল; অনির্দিষ্ট একটি সুযোগ বোঝাতে 'the' বা article-হীনতা সঠিক নয়।"
        },
        {
            q: "She is the _____ intelligent girl in the batch.",
            options: ["more", "most", "much", "very"],
            ans: 1,
            exp: "সকলের মধ্যে সেরা বা সর্বোচ্চ মাত্রা বোঝাতে 'the + most + adjective' (Superlative) ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'more' comparative; 'much' বা 'very' দিয়ে 'the ... in the batch' superlative অর্থ সম্পূর্ণ হয় না।"
        },
        {
            q: "The _____ you study, the _____ marks you will get.",
            options: ["more / more", "much / much", "most / most", "many / many"],
            ans: 0,
            exp: "একটির পরিবর্তনের সাথে অপরটির সমানুপাতিক পরিবর্তন বোঝাতে 'The + comparative, the + comparative' কাঠামো বসে ('more / more')। বাকি অপশনগুলো কেন নয়: 'much' ও 'many' positive/determiner; 'most' superlative।"
        },
        {
            q: "He is _____ than his cousin.",
            options: ["more smart", "smarter", "smartest", "most smart"],
            ans: 1,
            exp: "এক-সিলেবলের adjective 'smart'-এর comparative রূপ হলো 'smarter'। বাকি অপশনগুলো কেন নয়: 'more smart' অপ্রয়োজনীয় periphrastic রূপ; 'smartest' ও 'most smart' superlative।"
        },
        {
            q: "I have never seen a _____ building than this.",
            options: ["tall", "taller", "tallest", "most tall"],
            ans: 1,
            exp: "'than this' থাকায় তুলনামূলক রূপ 'taller' সঠিক। বাকি অপশনগুলো কেন নয়: 'tall' positive; 'tallest' ও 'most tall' superlative।"
        },
        {
            q: "Which sentence uses the correct comparative structure?",
            options: ["He is more taller than I.", "He is taller than I am.", "He is most tallest of all.", "He is as taller as I."],
            ans: 1,
            exp: "'taller than I am' বাক্যে comparative form এবং subject-to-subject তুলনা উভয়ই শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'more taller' ও 'most tallest' double comparison-এর ভুল; 'as taller as' এর মাঝে positive degree 'tall' থাকা উচিত ছিল।"
        },
        {
            q: "Gold is one of the _____ precious metals.",
            options: ["more", "most", "much", "very"],
            ans: 1,
            exp: "'one of the + superlative adjective + plural noun' কাঠামো অনুযায়ী 'most' সঠিক। বাকি অপশনগুলো কেন নয়: 'more' comparative; 'much' বা 'very' এই superlative কাঠামোতে বসে না।"
        },
        {
            q: "He arrived _____ than his friends.",
            options: ["soon", "sooner", "soonest", "more soon"],
            ans: 1,
            exp: "'than his friends' থাকায় comparative adverb 'sooner' বসবে। বাকি অপশনগুলো কেন নয়: 'soon' positive; 'soonest' superlative; 'more soon' প্রমিত নয়।"
        },
        {
            q: "In 'He is the better of the two boys,' 'better' is in the —",
            options: ["Positive degree", "Comparative degree", "Superlative degree", "Absolute degree"],
            ans: 1,
            exp: "দুইয়ের মধ্যে তুলনা বোঝাতে 'the better' Comparative degree হিসেবে ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: এটি positive বা superlative নয়; 'absolute' বলতে unique/perfect-এর মতো শব্দ বোঝায়।"
        },
        {
            q: "The weather today is _____ worse than yesterday.",
            options: ["very", "much", "more", "so"],
            ans: 1,
            exp: "Comparative adjective ('worse')-এর আগে জোর দেওয়ার জন্য 'much' (বা 'far/even') বসে। বাকি অপশনগুলো কেন নয়: 'very' সাধারণত comparative-এর আগে বসে না; 'more worse' double comparative হওয়ায় ভুল; 'so' এখানে অনুপযুক্ত।"
        },
        {
            q: "No other boy in the village is so brave _____ Rakib.",
            options: ["than", "as", "that", "who"],
            ans: 1,
            exp: "'so + positive adjective + as' কাঠামো অনুযায়ী 'as' বসবে। বাকি অপশনগুলো কেন নয়: 'than' comparative-এর সাথে আসে; 'that' ও 'who' এই তুলনায় সঠিক নয়।"
        },
        {
            q: "What is the superlative degree of 'good'?",
            options: ["Goodest", "Better", "Best", "Most good"],
            ans: 2,
            exp: "'good'-এর comparative হলো 'better' এবং superlative হলো 'best'। বাকি অপশনগুলো কেন নয়: 'Goodest' ও 'Most good' ভুল; 'Better' comparative।"
        },
        {
            q: "This problem is _____ difficult than the previous one.",
            options: ["more", "most", "very", "much"],
            ans: 0,
            exp: "বহু-সিলেবলের adjective 'difficult'-এর comparative রূপ হলো 'more difficult'। বাকি অপশনগুলো কেন নয়: 'most' superlative; 'very' positive-এর সাথে আসে; 'much' এখানে 'more'-এর বিকল্প নয়।"
        },
        {
            q: "The population of Chattogram is larger than _____ of Khulna.",
            options: ["that", "those", "this", "which"],
            ans: 0,
            exp: "Singular noun 'The population'-এর সাথে তুলনা করতে 'that of' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'those' plural noun-এর সাথে আসে; 'this' ও 'which' এখানে সঠিক নয়।"
        },
        {
            q: "She speaks English _____ fluently than her sister.",
            options: ["more", "most", "very", "too"],
            ans: 0,
            exp: "'fluently'-এর comparative রূপ হলো 'more fluently'। বাকি অপশনগুলো কেন নয়: 'most' superlative; 'very' ও 'too' তুলনা বোঝায় না।"
        }
    ]
},
"Basic Prepositions (Rules and Usage)": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. সময় ও স্থান নির্দেশক Preposition (in, on, at, by, since, for)-এর পার্থক্য এবং Appropriate Preposition-এর গুরুত্ব উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "The class starts _____ 9:30 a.m. sharp.",
            options: ["in", "on", "at", "by"],
            ans: 2,
            exp: "ঘড়ির নির্দিষ্ট সময়ের আগে 'at' বসে ('at 9:30 a.m.')। বাকি অপশনগুলো কেন নয়: মাস, বছর বা দীর্ঘ সময়ের আগে 'in' বসে; বার বা নির্দিষ্ট তারিখের আগে 'on' বসে; 'by' সাধারণত 'এর মধ্যে/নাগাদ' সময়সীমা বোঝায়।"
        },
        {
            q: "He was born _____ April 26, 1998.",
            options: ["in", "on", "at", "since"],
            ans: 1,
            exp: "নির্দিষ্ট তারিখ বা বারের আগে 'on' বসে ('on April 26')। বাকি অপশনগুলো কেন নয়: শুধু মাস বা বছর হলে 'in' বসত; নির্দিষ্ট ঘড়ির সময়ে 'at' বসে; 'since' শুরু থেকে চলমান সময় বোঝায়।"
        },
        {
            q: "She has been living in Dhaka _____ 2020.",
            options: ["for", "since", "from", "by"],
            ans: 1,
            exp: "অতীতের একটি নির্দিষ্ট শুরু বিন্দু থেকে বর্তমান পর্যন্ত চলমান সময় বোঝাতে 'since' বসে। বাকি অপশনগুলো কেন নয়: 'for' নির্দিষ্ট সময়কাল বা ব্যাপ্তি (যেমন: for six years) বোঝায়; 'from' সাধারণত শুরু ও শেষের প্রেক্ষাপটে বা নির্দিষ্ট tense-এ আসে; 'by' সময়সীমা বোঝায়।"
        },
        {
            q: "He has been studying English _____ three hours.",
            options: ["since", "for", "at", "on"],
            ans: 1,
            exp: "সময়ের মোট ব্যাপ্তি বা পরিমাণ ('three hours') বোঝাতে 'for' বসে। বাকি অপশনগুলো কেন নয়: 'since' নির্দিষ্ট শুরুর বিন্দু বোঝায়; 'at' ও 'on' এখানে অনুপযুক্ত।"
        },
        {
            q: "The book is _____ the table.",
            options: ["in", "on", "at", "into"],
            ans: 1,
            exp: "কোনো তল বা পৃষ্ঠের সংস্পর্শে স্থির অবস্থায় থাকলে 'on' বসে। বাকি অপশনগুলো কেন নয়: ভেতরে বোঝাতে 'in' বসে; নির্দিষ্ট বিন্দু/স্থানে 'at' বসে; বাইরে থেকে ভেতরে গতি বোঝাতে 'into' বসে।"
        },
        {
            q: "The boy jumped _____ the river to save the child.",
            options: ["in", "on", "into", "at"],
            ans: 2,
            exp: "বাইরে থেকে ভেতরে প্রবেশের গতি বোঝাতে 'into' বসে ('jumped into the river')। বাকি অপশনগুলো কেন নয়: 'in' স্থির অবস্থান বোঝায়; 'on' তলের ওপর বোঝায়; 'at' নির্দিষ্ট স্থান বা লক্ষ্য বোঝায়।"
        },
        {
            q: "Divide these mangoes _____ the five children.",
            options: ["between", "among", "into", "with"],
            ans: 1,
            exp: "দুয়ের অধিক (এখানে পাঁচজন) ব্যক্তি বা বস্তুর মধ্যে ভাগ করে দেওয়া বোঝাতে 'among' বসে। বাকি অপশনগুলো কেন নয়: 'between' সাধারণত দুজনের মধ্যে বোঝাতে ব্যবহৃত হয়; 'into' রূপান্তর বা ভেতরে গতি বোঝায়; 'with' দিয়ে ভাগ করার অর্থ হয় না।"
        },
        {
            q: "Share this secret _____ you and me.",
            options: ["among", "between", "within", "beside"],
            ans: 1,
            exp: "দুজন ব্যক্তির ('you and me') মধ্যে সীমাবদ্ধ সম্পর্ক বা ভাগ বোঝাতে 'between' বসে। বাকি অপশনগুলো কেন নয়: 'among' সাধারণত দুয়ের অধিকের জন্য; 'within' সময় বা সীমার ভেতরে বোঝায়; 'beside' পাশে অর্থে বসে।"
        },
        {
            q: "He is good _____ mathematics.",
            options: ["in", "at", "on", "with"],
            ans: 1,
            exp: "কোনো বিষয়ে বা কাজে দক্ষতা বোঝাতে 'good at' বসে ('good at mathematics')। বাকি অপশনগুলো কেন নয়: 'good in' বা 'good with' এই নির্দিষ্ট দক্ষতা বোঝাতে প্রমিত নয়।"
        },
        {
            q: "She is fond _____ classical music.",
            options: ["of", "for", "in", "at"],
            ans: 0,
            exp: "'fond'-এর পরে সঠিক preposition হলো 'of' ('fond of' = অনুরক্ত/ভালোবাসা)। বাকি অপশনগুলো কেন নয়: 'for', 'in' বা 'at' 'fond'-এর সাথে সঠিক নয়।"
        },
        {
            q: "We should abide _____ the rules of the institution.",
            options: ["with", "by", "to", "at"],
            ans: 1,
            exp: "নিয়ম বা সিদ্ধান্ত মেনে চলা অর্থে 'abide by' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'abide with' বা 'abide to' প্রমিত collocation নয়।"
        },
        {
            q: "The train arrived _____ Dhaka station on time.",
            options: ["in", "at", "to", "into"],
            ans: 1,
            exp: "ছোট বা নির্দিষ্ট স্থান (যেমন: স্টেশন, বাসস্টপ, দরজা)-এর আগে 'at' বসে; আর বড় শহর বা দেশের আগে 'in' বসে। বাকি অপশনগুলো কেন নয়: 'in' বড় এলাকার জন্য; 'to' গন্তব্যের দিকে গতি বোঝায়; 'into' ভেতরে প্রবেশ বোঝায়।"
        },
        {
            q: "He died _____ overwork.",
            options: ["of", "from", "by", "in"],
            ans: 1,
            exp: "রোগে মারা গেলে 'die of' বসে, কিন্তু অতিরিক্ত পরিশ্রম, ক্ষুধা বা আঘাতের মতো বাহ্যিক কারণে মারা গেলে 'die from' বসে। বাকি অপশনগুলো কেন নয়: 'die of' সাধারণত রোগ বা অভ্যন্তরীণ কারণের জন্য আসে; 'by' বা 'in' এখানে অনুপযুক্ত।"
        },
        {
            q: "The bird flew _____ my head.",
            options: ["over", "above", "under", "below"],
            ans: 0,
            exp: "এক পাশ থেকে আরেক পাশে গতিশীল অবস্থায় ওপর দিয়ে যাওয়া বোঝাতে 'over' বসে। বাকি অপশনগুলো কেন নয়: 'above' সাধারণত স্থির উচ্চতা বা স্তর বোঝায়; 'under' ও 'below' নিচে বোঝায়।"
        },
        {
            q: "I have been waiting here _____ two hours.",
            options: ["since", "for", "during", "until"],
            ans: 1,
            exp: "সময়ের পরিমাণ বা ব্যাপ্তি ('two hours') বোঝাতে 'for' বসে। বাকি অপশনগুলো কেন নয়: 'since' নির্দিষ্ট শুরু সময় বোঝায়; 'during' কোনো ঘটনা বা সময়ের ভেতরে সংঘটিত হওয়া বোঝায়; 'until' নির্দিষ্ট সময় পর্যন্ত বোঝায়।"
        },
        {
            q: "She is junior _____ me by three years.",
            options: ["than", "to", "from", "by"],
            ans: 1,
            exp: "'junior'-এর পরে তুলনায় 'to' বসে ('junior to')। বাকি অপশনগুলো কেন নয়: 'than', 'from' বা 'by' এখানে সঠিক preposition নয়।"
        },
        {
            q: "Please write your name _____ ink.",
            options: ["with", "in", "by", "on"],
            ans: 1,
            exp: "কালি বা মাধ্যম বোঝাতে 'in ink' ব্যবহৃত হয় (তবে কলম বা পেন্সিলের মতো যন্ত্র বোঝাতে 'with a pen/pencil' বসে)। বাকি অপশনগুলো কেন নয়: কালি বোঝাতে 'with ink' বা 'by ink' প্রমিত নয়।"
        },
        {
            q: "The man is accused _____ theft.",
            options: ["for", "of", "with", "about"],
            ans: 1,
            exp: "অভিযুক্ত হওয়া অর্থে 'accused of' বসে (পক্ষান্তরে 'charged with' হয়)। বাকি অপশনগুলো কেন নয়: 'accused for' বা 'accused with' ভুল collocation।"
        },
        {
            q: "They went to Cox's Bazar _____ train.",
            options: ["in", "on", "by", "with"],
            ans: 2,
            exp: "ভ্রমণের মাধ্যম বা যানবাহন বোঝাতে article ছাড়া 'by + vehicle' ('by train', 'by bus') বসে। বাকি অপশনগুলো কেন নয়: 'in' বা 'on' বসালে নির্ধারিত কাঠামো (যেমন: on a train/in a car) মেনে চলতে হয়।"
        },
        {
            q: "He congratulated me _____ my brilliant result.",
            options: ["for", "on", "at", "about"],
            ans: 1,
            exp: "অভিনন্দন জানানো অর্থে 'congratulate someone on something' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'congratulate on'-এর জায়গায় 'for' বা 'at' ভুল।"
        },
        {
            q: "Keep the medicine _____ the reach of children.",
            options: ["out", "beyond", "without", "beside"],
            ans: 1,
            exp: "নাগালের বাইরে রাখতে 'beyond the reach of' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'out' একা preposition হিসেবে 'the reach'-এর আগে আসে না; 'without' অর্থ 'ছাড়া'; 'beside' অর্থ 'পাশে'।"
        },
        {
            q: "The old man is suffering _____ fever.",
            options: ["of", "from", "with", "by"],
            ans: 1,
            exp: "রোগে ভোগা বোঝাতে 'suffer from' বসে। বাকি অপশনগুলো কেন নয়: 'suffer of' বা 'suffer with' প্রমিত নয়।"
        },
        {
            q: "She sat _____ me in the library.",
            options: ["besides", "beside", "beyond", "beneath"],
            ans: 1,
            exp: "'beside' অর্থ 'পাশে' বা 'নিকটে'। বাকি অপশনগুলো কেন নয়: 'besides' অর্থ 'এছাড়াও/পাশাপাশি আরও' (যা এখানে অর্থগতভাবে বেমানান); 'beyond' ও 'beneath' ভিন্ন অর্থ দেয়।"
        },
        {
            q: "We are looking forward _____ our upcoming semester break.",
            options: ["to see", "to seeing", "see", "seeing"],
            ans: 1,
            exp: "'look forward to' phrase-এ 'to' একটি preposition হওয়ায় এর পরে Verb + ing (Gerund) 'seeing' বসে। বাকি অপশনগুলো কেন নয়: 'to'-এর পর base verb 'see' বসা ভুল; 'seeing' একা বসলে 'look forward to'-এর অর্থ সম্পূর্ণ হয় না।"
        },
        {
            q: "He is confident _____ his success.",
            options: ["of", "for", "at", "in"],
            ans: 0,
            exp: "নিজের সাফল্য সম্পর্কে আত্মবিশ্বাসী বোঝাতে 'confident of' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'for', 'at' বা 'in' এখানে সঠিক নয়।"
        }
    ]
},
"Conjunctions & Interjections": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Coordinating Conjunction, Subordinating Conjunction এবং Correlative Conjunction-এর পার্থক্য উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "Work hard, _____ you will fail in the admission test.",
            options: ["and", "or", "yet", "so"],
            ans: 1,
            exp: "শর্ত বা সতর্কতা বোঝাতে ('কঠোর পরিশ্রম করো, নতুবা ভর্তি পরীক্ষায় ফেল করবে') 'or' বসে। বাকি অপশনগুলো কেন নয়: 'and' যোগ বা ফলাফল বোঝায়; 'yet' বৈপরীত্য বোঝায়; 'so' ফলাফল বোঝায়।"
        },
        {
            q: "He is not only intelligent _____ hardworking.",
            options: ["and", "but", "but also", "or"],
            ans: 2,
            exp: "'not only'-এর correlative pair হলো 'but also'। বাকি অপশনগুলো কেন নয়: 'and', 'but' বা 'or' 'not only'-এর সাথে সঠিক correlative জোড়া গঠন করে না।"
        },
        {
            q: "Scarcely had we reached the station _____ the train left.",
            options: ["than", "when", "then", "while"],
            ans: 1,
            exp: "'Scarcely ... when' correlative conjunction কাঠামোতে 'when' ব্যবহৃত হয় (যেমন 'Hardly ... when')। বাকি অপশনগুলো কেন নয়: 'than' সাধারণত 'No sooner'-এর সাথে আসে; 'then' বা 'while' এখানে প্রমিত নয়।"
        },
        {
            q: "No sooner had he seen the police _____ he ran away.",
            options: ["when", "then", "than", "as"],
            ans: 2,
            exp: "'No sooner ... than' correlative conjunction কাঠামোতে 'than' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'when', 'then' বা 'as' 'No sooner'-এর সাথে সঠিক নয়।"
        },
        {
            q: "_____! We have won the championship.",
            options: ["Alas", "Hurrah", "Fie", "Oh"],
            ans: 1,
            exp: "আনন্দ বা বিজয়ের আকস্মিক আবেগ প্রকাশে 'Hurrah!' interjection ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Alas' দুঃখ প্রকাশ করে; 'Fie' ঘৃণা বা ধিক্কার বোঝায়; 'Oh' সাধারণ বিস্ময় বা আক্ষেপ বোঝায়।"
        },
        {
            q: "Although he was ill, _____ he attended the lecture.",
            options: ["but", "yet", "so", "or"],
            ans: 1,
            exp: "'Although/Though'-যুক্ত clause-এর পর প্রধান clause-এ বৈপরীত্য জোর দিতে 'yet' (বা কোনো conjunction ছাড়াই) বসতে পারে, তবে আধুনিক প্রমিত ইংরেজিতে 'but' বসানো ভুল। বাকি অপশনগুলো কেন নয়: 'Although'-এর পর 'but' ব্যবহার করা অপ্রয়োজনীয় ও ত্রুটিপূর্ণ; 'so' বা 'or' এখানে অর্থগতভাবে মেলে না।"
        },
        {
            q: "Wait here _____ I return from the library.",
            options: ["unless", "until", "lest", "so that"],
            ans: 1,
            exp: "নির্দিষ্ট সময় পর্যন্ত অপেক্ষা বোঝাতে 'until' বসে। বাকি অপশনগুলো কেন নয়: 'unless' শর্ত ('যদি না') বোঝায়; 'lest' ভয়/আশঙ্কা বোঝায়; 'so that' উদ্দেশ্য বোঝায়।"
        },
        {
            q: "Walk carefully _____ you should stumble.",
            options: ["until", "unless", "lest", "though"],
            ans: 2,
            exp: "'নতুবা/পাছে এমন হয় যে' আশঙ্কা বোঝাতে 'lest' ব্যবহৃত হয় (যার সাথে প্রায়ই 'should' বা modal আসে)। বাকি অপশনগুলো কেন নয়: 'until', 'unless' ও 'though' এই আশঙ্কাসূচক অর্থে আসে না।"
        },
        {
            q: "_____! What a terrible tragedy!",
            options: ["Alas", "Bravo", "Aha", "Hush"],
            ans: 0,
            exp: "দুঃখ বা শোক প্রকাশে 'Alas!' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Bravo' প্রশংসা বোঝায়; 'Aha' উপলব্ধি/আনন্দ বোঝায়; 'Hush' চুপ থাকতে বলে।"
        },
        {
            q: "He will not pass _____ he studies regularly.",
            options: ["if", "unless", "since", "because"],
            ans: 1,
            exp: "'যদি না পড়ে তবে পাস করবে না'—এই নেতিবাচক শর্ত বোঝাতে 'unless' সঠিক। বাকি অপশনগুলো কেন নয়: 'if' ইতিবাচক শর্ত দেয়; 'since' ও 'because' কারণ বোঝায়।"
        },
        {
            q: "Both Rahim _____ Karim were present at the meeting.",
            options: ["or", "nor", "and", "but"],
            ans: 2,
            exp: "'Both ... and' correlative conjunction-এর সঠিক জোড়া হলো 'and'। বাকি অপশনগুলো কেন নয়: 'or', 'nor' ও 'but' 'Both'-এর সাথে প্রমিত নয়।"
        },
        {
            q: "Neither the teacher _____ the students knew the answer.",
            options: ["or", "nor", "and", "so"],
            ans: 1,
            exp: "'Neither ... nor' হলো সঠিক correlative conjunction জোড়া। বাকি অপশনগুলো কেন নয়: 'or' 'either'-এর সাথে আসে; 'and' বা 'so' এখানে সঠিক নয়।"
        },
        {
            q: "_____! You have done a wonderful job.",
            options: ["Bravo", "Alas", "Fie", "Ouch"],
            ans: 0,
            exp: "কারও সাফল্য বা ভালো কাজের প্রশংসা করতে 'Bravo!' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Alas' দুঃখ, 'Fie' ধিক্কার এবং 'Ouch' হঠাৎ ব্যথা প্রকাশ করে।"
        },
        {
            q: "He saves money _____ he can buy a reference book.",
            options: ["lest", "so that", "unless", "although"],
            ans: 1,
            exp: "উদ্দেশ্য ('যাতে কিনতে পারে') বোঝাতে 'so that' বসে। বাকি অপশনগুলো কেন নয়: 'lest' আশঙ্কা, 'unless' শর্ত এবং 'although' বৈপরীত্য প্রকাশ করে।"
        },
        {
            q: "I don't know _____ he will come today or tomorrow.",
            options: ["that", "whether", "what", "which"],
            ans: 1,
            exp: "দুটি বিকল্পের ('today or tomorrow') মধ্যে অনিশ্চয়তা বা দ্বিধা বোঝাতে 'whether' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'that' সাধারণত নিশ্চিত তথ্য বোঝায়; 'what' ও 'which' এখানে অর্থগতভাবে সঠিক নয়।"
        },
        {
            q: "_____! My finger is bleeding.",
            options: ["Hurrah", "Ouch", "Bravo", "Alas"],
            ans: 1,
            exp: "হঠাৎ শারীরিক ব্যথা বা যন্ত্রণা বোঝাতে 'Ouch!' interjection ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Hurrah' আনন্দ, 'Bravo' প্রশংসা এবং 'Alas' গভীর শোক প্রকাশ করে।"
        },
        {
            q: "He is poor, _____ he is honest.",
            options: ["and", "so", "yet", "or"],
            ans: 2,
            exp: "পরস্পরবিরোধী দুটি তথ্য ('গরিব' তবুও 'সৎ') যুক্ত করতে coordinating conjunction 'yet' (বা 'but') বসে। বাকি অপশনগুলো কেন নয়: 'and' সাধারণ সংযোগ, 'so' ফলাফল এবং 'or' বিকল্প বোঝায়।"
        },
        {
            q: "_____ he has apologized, I will forgive him.",
            options: ["Since", "Unless", "Lest", "Although"],
            ans: 0,
            exp: "কারণ ('যেহেতু সে ক্ষমা চেয়েছে') বোঝাতে 'Since' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Unless' শর্ত, 'Lest' আশঙ্কা এবং 'Although' বৈপরীত্য বোঝায়।"
        },
        {
            q: "You can take either tea _____ coffee.",
            options: ["nor", "and", "or", "but"],
            ans: 2,
            exp: "'Either ... or' correlative conjunction-এর সঠিক জোড়া হলো 'or'। বাকি অপশনগুলো কেন নয়: 'nor' 'neither'-এর সাথে আসে; 'and' বা 'but' এখানে ভুল।"
        },
        {
            q: "_____! Keep quiet in the reading room.",
            options: ["Hush", "Hurrah", "Aha", "Alas"],
            ans: 0,
            exp: "নীরবতা বা চুপ থাকতে আহ্বান জানাতে 'Hush!' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Hurrah' উল্লাস, 'Aha' হঠাৎ বোঝা/আনন্দ এবং 'Alas' দুঃখ প্রকাশ করে।"
        },
        {
            q: "As soon as the bell rang, _____ the students left the hall.",
            options: ["then", "than", "so", "none (no correlative needed)"],
            ans: 3,
            exp: "'As soon as'-যুক্ত clause-এর পর প্রধান clause-এ আলাদা কোনো correlative conjunction বসে না। বাকি অপশনগুলো কেন নয়: 'then', 'than' বা 'so' বসানো ব্যাকরণগতভাবে অপ্রয়োজনীয় ও ত্রুটিপূর্ণ।"
        },
        {
            q: "He behaves _____ he were a king.",
            options: ["like", "as if", "so that", "until"],
            ans: 1,
            exp: "অবাস্তব বা কাল্পনিক তুলনা ('যেন রাজা') বোঝাতে 'as if' (বা 'as though') এবং subjunctive 'were' বসে। বাকি অপশনগুলো কেন নয়: 'like' সাধারণত preposition হিসেবে noun-এর আগে বসে; 'so that' উদ্দেশ্য ও 'until' সময় বোঝায়।"
        },
        {
            q: "_____! What a shame!",
            options: ["Fie", "Hurrah", "Bravo", "Aha"],
            ans: 0,
            exp: "ধিক্কার, লজ্জা বা ঘৃণা প্রকাশে 'Fie!' interjection ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Hurrah' আনন্দ, 'Bravo' প্রশংসা এবং 'Aha' বিস্ময়/উপলব্ধি বোঝায়।"
        },
        {
            q: "He could not attend the class _____ he missed the train.",
            options: ["because", "although", "unless", "lest"],
            ans: 0,
            exp: "কাজ না করতে পারার কারণ বোঝাতে 'because' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'although' বৈপরীত্য, 'unless' শর্ত এবং 'lest' আশঙ্কা বোঝায়।"
        },
        {
            q: "They played well, _____ they lost the match.",
            options: ["so", "but", "or", "for"],
            ans: 1,
            exp: "বৈপরীত্য বোঝাতে ('ভালো খেলেছিল, কিন্তু ম্যাচ হেরেছিল') 'but' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'so' ফলাফল, 'or' বিকল্প এবং 'for' কারণ বোঝায়।"
        }
    ]
},
"Modifiers (Pre-modifiers & Post-modifiers)": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Pre-modifier ও Post-modifier কী এবং Participle, Infinitive, Appositive ও Prepositional Phrase কীভাবে Modifier হিসেবে কাজ করে তা উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "In 'A barking dog seldom bites,' 'barking' acts as a —",
            options: ["Post-modifier", "Pre-modifier (Present Participle)", "Appositive", "Complement"],
            ans: 1,
            exp: "'barking' শব্দটি Head Noun 'dog'-এর আগে বসে তার অবস্থা বোঝাচ্ছে, তাই এটি Present Participle Pre-modifier। বাকি অপশনগুলো কেন নয়: এটি noun-এর পরে বসেনি বলে Post-modifier নয়; সমান্তরাল ব্যাখ্যা নয় বলে Appositive নয়; Complement-ও নয়।"
        },
        {
            q: "In 'The book lying on the table is mine,' 'lying on the table' is a —",
            options: ["Pre-modifier", "Post-modifier (Participial Phrase)", "Subject", "Direct Object"],
            ans: 1,
            exp: "'lying on the table' phrase-টি Head Noun 'The book'-এর পরে বসে সেটিকে মডিফাই করছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: এটি noun-এর আগে বসেনি বলে Pre-modifier নয়; মূল Subject হলো 'The book lying on the table'-এর head 'book'।"
        },
        {
            q: "Identify the appositive post-modifier in: 'Rabindranath Tagore, a Nobel laureate, wrote Gitanjali.'",
            options: ["Rabindranath Tagore", "a Nobel laureate", "wrote", "Gitanjali"],
            ans: 1,
            exp: "'a Nobel laureate' noun phrase-টি 'Rabindranath Tagore'-এর ঠিক পরে বসে তার অতিরিক্ত পরিচয় দিচ্ছে, তাই এটি Appositive Post-modifier। বাকি অপশনগুলো কেন নয়: 'Rabindranath Tagore' মূল Subject; 'wrote' Verb এবং 'Gitanjali' Object।"
        },
        {
            q: "In 'He has a lot of work to do,' 'to do' functions as a —",
            options: ["Pre-modifier", "Post-modifier (Infinitive)", "Subject Complement", "Adjunct of time"],
            ans: 1,
            exp: "'to do' infinitive-টি 'work'-এর পরে বসে করণীয় কাজ বোঝাচ্ছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: এটি noun-এর আগে বসেনি বলে Pre-modifier নয়; Subject Complement বা সময়বাচক Adjunct-ও নয়।"
        },
        {
            q: "In 'They built a two-storied house,' what is 'two-storied'?",
            options: ["Post-modifier", "Compound Adjective as Pre-modifier", "Adverbial", "Clause"],
            ans: 1,
            exp: "'two-storied' একটি compound adjective যা 'house'-এর আগে বসে pre-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: এটি noun-এর পরে বসেনি বলে Post-modifier নয়; এটি কোনো clause বা adverbial নয়।"
        },
        {
            q: "In 'The boy sitting in the corner is my cousin,' 'sitting in the corner' modifies —",
            options: ["my cousin", "The boy", "is", "the corner"],
            ans: 1,
            exp: "'sitting in the corner' participial phrase-টি ঠিক আগের Noun 'The boy'-কে মডিফাই করে কোন ছেলেটি তা নির্দিষ্ট করছে। বাকি অপশনগুলো কেন নয়: এটি 'my cousin', 'is' বা 'the corner'-কে মডিফাই করছে না।"
        },
        {
            q: "In 'The broken glass lay on the floor,' 'broken' is a —",
            options: ["Past Participle Pre-modifier", "Gerund", "Post-modifier", "Adverb"],
            ans: 0,
            exp: "'broken' (break-এর past participle) Noun 'glass'-এর আগে বসে তার অবস্থা বোঝাচ্ছে, তাই এটি Past Participle Pre-modifier। বাকি অপশনগুলো কেন নয়: এটি noun হিসেবে কাজ করছে না বলে Gerund নয়; পরে বসেনি বলে Post-modifier নয়; Adverb-ও নয়।"
        },
        {
            q: "In 'Students who work hard succeed in life,' 'who work hard' is a —",
            options: ["Pre-modifier", "Post-modifier (Relative Clause)", "Noun Clause", "Adverbial Clause"],
            ans: 1,
            exp: "'who work hard' relative clause-টি 'Students'-এর পরে বসে তাদের বৈশিষ্ট্য নির্দেশ করছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: এটি noun-এর আগে বসেনি বলে Pre-modifier নয়; noun clause বা সময়/কারণবাচক adverbial clause নয়।"
        },
        {
            q: "In 'She bought some fresh vegetables from the market,' what is 'fresh'?",
            options: ["Pre-modifier (Adjective)", "Post-modifier", "Object Complement", "Pronoun"],
            ans: 0,
            exp: "'fresh' adjective-টি Noun 'vegetables'-এর আগে বসে তার গুণ বোঝাচ্ছে, তাই এটি Pre-modifier। বাকি অপশনগুলো কেন নয়: পরে বসেনি বলে Post-modifier নয়; Object Complement বা Pronoun নয়।"
        },
        {
            q: "In 'The man with a beard looked suspicious,' 'with a beard' is a —",
            options: ["Pre-modifier", "Post-modifier (Prepositional Phrase)", "Main Verb", "Subject"],
            ans: 1,
            exp: "'with a beard' prepositional phrase-টি 'The man'-এর পরে বসে লোকটির বৈশিষ্ট্য বোঝাচ্ছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: এটি noun-এর আগে বসেনি বলে Pre-modifier নয়; verb বা মূল subject নয়।"
        },
        {
            q: "In 'He came home smiling,' what is 'smiling'?",
            options: ["Pre-modifier", "Post-modifier / Participle describing subject", "Direct Object", "Noun"],
            ans: 1,
            exp: "'smiling' participle-টি বাক্যের শেষে এসে Subject 'He'-এর অবস্থা বা ভঙ্গি বোঝাচ্ছে। বাকি অপশনগুলো কেন নয়: এটি কোনো noun-এর আগে বসেনি বলে Pre-modifier নয়; 'came' intransitive হওয়ায় Object নেই।"
        },
        {
            q: "Which of the following contains a Noun Adjunct (Noun as Pre-modifier)?",
            options: ["A golden ring", "A college library", "A happy child", "A tall tree"],
            ans: 1,
            exp: "'college' একটি noun যা আরেকটি noun 'library'-এর আগে বসে pre-modifier হিসেবে কাজ করছে (Noun Adjunct)। বাকি অপশনগুলো কেন নয়: 'golden', 'happy' ও 'tall' মূলত adjective।"
        },
        {
            q: "In 'The decision taken yesterday was final,' 'taken yesterday' is a —",
            options: ["Pre-modifier", "Post-modifier (Past Participial Phrase)", "Subject", "Complement"],
            ans: 1,
            exp: "'taken yesterday' past participial phrase-টি 'The decision'-এর পরে বসে সেটিকে মডিফাই করছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; এটি subject বা complement নয়।"
        },
        {
            q: "In 'Only educated people can understand this,' 'Only' acts as a —",
            options: ["Pre-modifier (Intensifier/Limiting modifier)", "Post-modifier", "Verb", "Conjunction"],
            ans: 0,
            exp: "'Only' শব্দটি 'educated people'-এর আগে বসে সীমাবদ্ধতা বা বিশেষ জোর দিচ্ছে, তাই এটি Pre-modifier। বাকি অপশনগুলো কেন নয়: পরে বসেনি বলে Post-modifier নয়; verb বা conjunction নয়।"
        },
        {
            q: "In 'I have no time to waste,' 'to waste' modifies —",
            options: ["I", "have", "time", "no"],
            ans: 2,
            exp: "'to waste' infinitive phrase-টি 'time'-এর পরে বসে কোন সময় নষ্ট করার কথা বলা হচ্ছে তা বোঝাচ্ছে, তাই 'time'-কে মডিফাই করে। বাকি অপশনগুলো কেন নয়: এটি 'I', 'have' বা 'no'-কে মডিফাই করছে না।"
        },
        {
            q: "In 'Dhaka, the capital of Bangladesh, is a busy city,' 'the capital of Bangladesh' is a/an —",
            options: ["Pre-modifier", "Appositive Post-modifier", "Adverbial", "Direct Object"],
            ans: 1,
            exp: "'the capital of Bangladesh' noun phrase-টি 'Dhaka'-এর পরে বসে তার সমার্থক পরিচয় দিচ্ছে, তাই এটি Appositive Post-modifier। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; adverbial বা direct object নয়।"
        },
        {
            q: "In 'A well-known writer visited our campus,' 'well-known' is a —",
            options: ["Pre-modifier (Compound Adjective)", "Post-modifier", "Noun", "Preposition"],
            ans: 0,
            exp: "'well-known' compound adjective-টি 'writer'-এর আগে বসে pre-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: পরে বসেনি বলে Post-modifier নয়; noun বা preposition নয়।"
        },
        {
            q: "In 'The water in the pond is polluted,' 'in the pond' is a —",
            options: ["Pre-modifier", "Post-modifier (Prepositional Phrase)", "Verb", "Adjective"],
            ans: 1,
            exp: "'in the pond' prepositional phrase-টি 'The water'-এর পরে বসে পানির অবস্থান নির্দিষ্ট করছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; verb বা একক adjective নয়।"
        },
        {
            q: "In 'She wore a silk saree,' what is 'silk'?",
            options: ["Noun functioning as Pre-modifier", "Post-modifier", "Adverb", "Conjunction"],
            ans: 0,
            exp: "'silk' সাধারণত noun হলেও এখানে 'saree'-এর আগে বসে উপাদান বোঝাচ্ছে এবং Pre-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: পরে বসেনি বলে Post-modifier নয়; adverb বা conjunction নয়।"
        },
        {
            q: "In 'The man standing near the gate is a doctor,' 'standing near the gate' is a —",
            options: ["Pre-modifier", "Post-modifier (Present Participial Phrase)", "Complement", "Object"],
            ans: 1,
            exp: "'standing near the gate' present participial phrase-টি 'The man'-এর পরে বসে ব্যক্তিটিকে শনাক্ত করছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; complement বা object নয়।"
        },
        {
            q: "In 'He has enough courage to face danger,' 'to face danger' is a —",
            options: ["Post-modifier (Infinitive Phrase)", "Pre-modifier", "Subject", "Conjunction"],
            ans: 0,
            exp: "'to face danger' infinitive phrase-টি 'courage'-এর পরে বসে সাহসের প্রয়োগ বোঝাচ্ছে, তাই এটি Post-modifier। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; subject বা conjunction নয়।"
        },
        {
            q: "Which word serves as a pre-modifier in 'That old man walks slowly'?",
            options: ["walks", "slowly", "That and old", "man"],
            ans: 2,
            exp: "'That' (determiner) এবং 'old' (adjective) উভয়ই Head Noun 'man'-এর আগে বসে pre-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: 'walks' verb, 'slowly' verb-এর adverbial modifier এবং 'man' head noun।"
        },
        {
            q: "In 'The stars shining brightly at night look beautiful,' 'shining brightly at night' is a —",
            options: ["Post-modifier (Participial Phrase)", "Pre-modifier", "Direct Object", "Relative Clause"],
            ans: 0,
            exp: "'shining brightly at night' present participial phrase-টি 'The stars'-এর পরে বসে post-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; direct object নয়; finite verb না থাকায় relative clause নয় (reduced relative clause/participial phrase)।"
        },
        {
            q: "In 'His sudden arrival surprised us all,' 'sudden' is a —",
            options: ["Pre-modifier (Adjective)", "Post-modifier", "Adverb", "Verb"],
            ans: 0,
            exp: "'sudden' adjective-টি 'arrival'-এর আগে বসে pre-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: পরে বসেনি বলে Post-modifier নয়; 'suddenly' হলে adverb হতো; এটি verb নয়।"
        },
        {
            q: "In 'The problem solved by the committee was complex,' 'solved by the committee' is a —",
            options: ["Post-modifier (Past Participial Phrase)", "Pre-modifier", "Subject", "Conjunction"],
            ans: 0,
            exp: "'solved by the committee' past participial phrase-টি 'The problem'-এর পরে বসে post-modifier হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: আগে বসেনি বলে Pre-modifier নয়; subject বা conjunction নয়।"
        }
    ]
},
"Tense: Core Concepts and Applications": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Present Perfect ও Past Simple-এর পার্থক্য এবং Past Perfect ও Past Simple-এর সমন্বিত ব্যবহার উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "The sun _____ in the east.",
            options: ["rise", "rises", "is rising", "has risen"],
            ans: 1,
            exp: "চিরন্তন সত্য (Universal truth) বোঝাতে Present Simple Tense বসে এবং Subject 'The sun' third person singular হওয়ায় 'rises' হবে। বাকি অপশনগুলো কেন নয়: 'rise' plural/base form; 'is rising' বা 'has risen' চিরন্তন সত্য প্রকাশের সাধারণ নিয়মে সঠিক নয়।"
        },
        {
            q: "I _____ him since Monday last.",
            options: ["did not see", "have not seen", "do not see", "had not seen"],
            ans: 1,
            exp: "'since + অতীতের নির্দিষ্ট সময়' থাকলে বাক্যটি সাধারণত Present Perfect Tense হয়; তাই 'have not seen' সঠিক। বাকি অপশনগুলো কেন নয়: 'did not see' past simple; 'do not see' present simple; 'had not seen' past perfect।"
        },
        {
            q: "The patient _____ before the doctor arrived.",
            options: ["died", "has died", "had died", "was dying"],
            ans: 2,
            exp: "অতীতে দুটি কাজের মধ্যে যে কাজটি আগে ঘটেছিল সেটি Past Perfect Tense ('had died') এবং পরের কাজটি Past Simple ('arrived') হয়। বাকি অপশনগুলো কেন নয়: 'died' বা 'was dying' দিলে আগে ঘটার পূর্বাবস্থা স্পষ্ট হয় না; 'has died' present perfect।"
        },
        {
            q: "It is high time we _____ our bad habits.",
            options: ["change", "changed", "have changed", "will change"],
            ans: 1,
            exp: "'It is time / It is high time + Subject' কাঠামোতে বর্তমান বা আসন্ন কাজের জরুরিতা বোঝাতে Past Simple Verb ('changed') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'change', 'have changed' বা 'will change' এই কাঠামোতে প্রমিত নয়।"
        },
        {
            q: "He usually _____ to university by bus.",
            options: ["go", "goes", "is going", "went"],
            ans: 1,
            exp: "'usually' habitual action বা নিয়মিত অভ্যাস বোঝায়, যার জন্য Present Simple Tense ('goes') বসে। বাকি অপশনগুলো কেন নয়: 'go' singular subject-এর সাথে ভুল; 'is going' চলমানতা বোঝায়; 'went' অতীত নির্দেশ করে।"
        },
        {
            q: "When I reached the hall, the lecture _____ already.",
            options: ["started", "has started", "had started", "starts"],
            ans: 2,
            exp: "হলে পৌঁছানোর আগেই বক্তৃতা শুরু হয়ে গিয়েছিল—তাই আগে সম্পন্ন হওয়া কাজে Past Perfect ('had started') বসে। বাকি অপশনগুলো কেন নয়: 'started' বা 'starts' পূর্ববর্তী সমাপ্তি বোঝায় না; 'has started' present tense।"
        },
        {
            q: "They _____ football when it started to rain.",
            options: ["play", "played", "were playing", "have played"],
            ans: 2,
            exp: "অতীতে একটি কাজ চলমান থাকার সময় আরেকটি ঘটনা ঘটলে চলমান কাজটিতে Past Continuous ('were playing') বসে। বাকি অপশনগুলো কেন নয়: 'play' present; 'played' চলমানতা দেখায় না; 'have played' present perfect।"
        },
        {
            q: "I _____ this novel yesterday.",
            options: ["have finished", "finished", "had finished", "was finishing"],
            ans: 1,
            exp: "'yesterday' অতীতের নির্দিষ্ট সময় নির্দেশ করায় Past Simple Tense ('finished') বসে। বাকি অপশনগুলো কেন নয়: নির্দিষ্ট অতীত সময় উল্লেখ থাকলে Present Perfect ('have finished') বসে না; 'had finished' ও 'was finishing' এখানে অনুপযুক্ত।"
        },
        {
            q: "By next month, she _____ her graduation.",
            options: ["will complete", "will have completed", "completes", "completed"],
            ans: 1,
            exp: "'By + ভবিষ্যতের সময়' থাকলে ভবিষ্যতের কোনো নির্দিষ্ট সময়ের আগে কাজটি সম্পন্ন হবে বোঝাতে Future Perfect Tense ('will have completed') বসে। বাকি অপশনগুলো কেন নয়: 'will complete' সাধারণ ভবিষ্যৎ; 'completes' present এবং 'completed' past।"
        },
        {
            q: "Look! The bus _____.",
            options: ["comes", "is coming", "came", "has come"],
            ans: 1,
            exp: "'Look!' বা 'Listen!' দিয়ে বক্তৃতার মুহূর্তে চলমান দৃশ্য বা ঘটনা বোঝাতে Present Continuous Tense ('is coming') বসে। বাকি অপশনগুলো কেন নয়: 'comes' অভ্যাস বোঝায়; 'came' অতীত এবং 'has come' সম্পন্ন অবস্থা বোঝায়।"
        },
        {
            q: "We _____ here for five years.",
            options: ["live", "have been living", "are living", "were living"],
            ans: 1,
            exp: "অতীত থেকে শুরু হয়ে বর্তমানেও চলমান সময়কাল ('for five years') বোঝাতে Present Perfect Continuous ('have been living') বা Present Perfect ('have lived') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'live' সাধারণ অভ্যাস; 'are living' বা 'were living' সময়কালের ধারাবাহিকতা বোঝায় না।"
        },
        {
            q: "I wish I _____ a bird.",
            options: ["am", "was", "were", "will be"],
            ans: 2,
            exp: "অবাস্তব ইচ্ছা বা কল্পনা ('I wish...') বোঝাতে Subjunctive mood হিসেবে সব Subject-এর সাথেই 'were' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'am' বা 'will be' কাল্পনিক ইচ্ছায় প্রমিত নয়; formal grammar-এ 'was'-এর চেয়ে 'were' শ্রেয়।"
        },
        {
            q: "He _____ just _____ his dinner.",
            options: ["has / finished", "did / finish", "had / finished", "is / finishing"],
            ans: 0,
            exp: "'just' সাধারণত Present Perfect Tense-এর সাথে বসে কাজটি এইমাত্র শেষ হয়েছে বোঝায় ('has finished')। বাকি অপশনগুলো কেন নয়: 'did / finish' past simple; 'had / finished' past perfect; 'is / finishing' continuous।"
        },
        {
            q: "Water _____ at 100 degrees Celsius.",
            options: ["boil", "boils", "is boiling", "boiled"],
            ans: 1,
            exp: "বৈজ্ঞানিক সত্য (Scientific fact) বোঝাতে Present Simple Tense ('boils') বসে। বাকি অপশনগুলো কেন নয়: 'boil' plural/base রূপ; 'is boiling' বা 'boiled' বৈজ্ঞানিক সার্বজনীন সত্য বোঝাতে উপযুক্ত নয়।"
        },
        {
            q: "I _____ to Cox's Bazar next week.",
            options: ["am going", "went", "had gone", "was going"],
            ans: 0,
            exp: "নিকট ভবিষ্যতের পূর্বপরিকল্পিত বা নির্ধারিত ভ্রমণ বোঝাতে Present Continuous Tense ('am going') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'went' অতীত; 'had gone' past perfect এবং 'was going' past continuous।"
        },
        {
            q: "She _____ English for two hours before her mother called her.",
            options: ["studied", "had been studying", "has studied", "was study"],
            ans: 1,
            exp: "অতীতের একটি নির্দিষ্ট সময়ের ('before her mother called') আগে দীর্ঘ সময় ধরে চলমান কাজ বোঝাতে Past Perfect Continuous ('had been studying') বসে। বাকি অপশনগুলো কেন নয়: 'studied' সময়ের ধারাবাহিকতা দেখায় না; 'has studied' present; 'was study' ব্যাকরণগতভাবে ভুল।"
        },
        {
            q: "He _____ out twenty minutes ago.",
            options: ["has gone", "went", "had gone", "was going"],
            ans: 1,
            exp: "'ago' অতীতের নির্দিষ্ট সময় বোঝায়, তাই Past Simple ('went') বসে। বাকি অপশনগুলো কেন নয়: 'ago' থাকলে Present Perfect ('has gone') বসে না; 'had gone' ও 'was going' এখানে সঠিক নয়।"
        },
        {
            q: "If it rains, we _____ at home.",
            options: ["stay", "stayed", "will stay", "would stay"],
            ans: 2,
            exp: "First Conditional বাক্যে ('If + Present Simple, ...') ফলাফল clause-এ 'will + base verb' ('will stay') বসে। বাকি অপশনগুলো কেন নয়: 'stayed' past; 'would stay' second conditional-এর জন্য; 'stay' ভবিষ্যৎ সম্ভাবনার সাধারণ প্রকাশে কম উপযোগী।"
        },
        {
            q: "They _____ a new project at present.",
            options: ["develop", "are developing", "developed", "had developed"],
            ans: 1,
            exp: "'at present' বা 'now' চলমান সময় বোঝায়, তাই Present Continuous ('are developing') বসে। বাকি অপশনগুলো কেন নয়: 'develop' সাধারণ অবস্থা; 'developed' past এবং 'had developed' past perfect।"
        },
        {
            q: "He acted as if he _____ everything.",
            options: ["knows", "knew", "has known", "will know"],
            ans: 1,
            exp: "'as if/as though'-এর আগে Present Tense থাকলে পরবর্তী অবাস্তব বা কাল্পনিক ধারণায় Past Simple ('knew') বসে। বাকি অপশনগুলো কেন নয়: 'knows' present, 'has known' present perfect এবং 'will know' future।"
        },
        {
            q: "I _____ him for ten years before he moved to Canada.",
            options: ["know", "knew", "had known", "have known"],
            ans: 2,
            exp: "কানাডায় যাওয়ার ('moved') আগের সময় পর্যন্ত পরিচিত থাকার অবস্থা বোঝাতে Past Perfect ('had known') বসে। বাকি অপশনগুলো কেন নয়: 'know' ও 'have known' present; 'knew' পূর্ববর্তী সময়ের সম্পর্ক স্পষ্ট করে না।"
        },
        {
            q: "The train _____ before we reached the platform.",
            options: ["left", "has left", "had left", "leaves"],
            ans: 2,
            exp: "প্ল্যাটফর্মে পৌঁছানোর আগেই ট্রেন ছেড়ে যাওয়ায় আগে ঘটা কাজে Past Perfect ('had left') বসে। বাকি অপশনগুলো কেন নয়: 'left' ও 'leaves' পূর্ববর্তীতা বোঝায় না; 'has left' present perfect।"
        },
        {
            q: "She always _____ the truth.",
            options: ["speak", "speaks", "is speaking", "spoke"],
            ans: 1,
            exp: "'always' নিয়মিত অভ্যাস বা বৈশিষ্ট্য বোঝায়, তাই Present Simple ('speaks') বসে। বাকি অপশনগুলো কেন নয়: 'speak' base form; 'is speaking' চলমানতা এবং 'spoke' অতীত বোঝায়।"
        },
        {
            q: "We _____ our syllabus by the end of this month.",
            options: ["finish", "will have finished", "finished", "are finishing"],
            ans: 1,
            exp: "'by the end of this month' ভবিষ্যতের একটি সময়সীমার মধ্যে কাজ সম্পন্ন হওয়া বোঝায়, তাই Future Perfect ('will have finished') সঠিক। বাকি অপশনগুলো কেন নয়: 'finish' present; 'finished' past এবং 'are finishing' continuous।"
        },
        {
            q: "I _____ a letter when the phone rang.",
            options: ["write", "wrote", "was writing", "have written"],
            ans: 2,
            exp: "ফোন বাজার সময় চিঠি লেখার কাজটি চলমান ছিল বলে Past Continuous ('was writing') বসে। বাকি অপশনগুলো কেন নয়: 'write' present; 'wrote' চলমানতা দেখায় না; 'have written' present perfect।"
        }
    ]
},
"Sentence Types": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. অর্থগত (Assertive, Interrogative, Imperative, Optative, Exclamatory) এবং গঠনগত (Simple, Complex, Compound) শ্রেণিবিভাগ উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "Which of the following is an Imperative sentence?",
            options: ["May you live long.", "Please close the door.", "How clever the boy is!", "Does he know the truth?"],
            ans: 1,
            exp: "'Please close the door.' বাক্যে অনুরোধ বা আদেশ করা হয়েছে, তাই এটি Imperative sentence। বাকি অপশনগুলো কেন নয়: 'May you live long.' Optative; 'How clever the boy is!' Exclamatory এবং 'Does he know the truth?' Interrogative।"
        },
        {
            q: "'May Allah bless you.' is an example of —",
            options: ["Assertive sentence", "Imperative sentence", "Optative sentence", "Exclamatory sentence"],
            ans: 2,
            exp: "প্রার্থনা বা আশীর্বাদ প্রকাশ করায় এটি Optative sentence। বাকি অপশনগুলো কেন নয়: সাধারণ বিবৃতি হলে Assertive, আদেশ/অনুরোধ হলে Imperative এবং বিস্ময়/আবেগ হলে Exclamatory হতো।"
        },
        {
            q: "Identify the structure of: 'Although he tried hard, he could not succeed.'",
            options: ["Simple sentence", "Complex sentence", "Compound sentence", "Imperative sentence"],
            ans: 1,
            exp: "বাক্যে একটি Principal Clause ('he could not succeed') এবং একটি Subordinate Clause ('Although he tried hard') রয়েছে, তাই এটি Complex sentence। বাকি অপশনগুলো কেন নয়: Simple sentence-এ একটি মাত্র finite clause থাকে; Compound sentence-এ coordinating conjunction দিয়ে যুক্ত দুটি independent clause থাকে।"
        },
        {
            q: "'He is poor, but he is honest.' is a —",
            options: ["Simple sentence", "Complex sentence", "Compound sentence", "Optative sentence"],
            ans: 2,
            exp: "Coordinating conjunction 'but' দিয়ে দুটি স্বাধীন Clause ('He is poor' এবং 'he is honest') যুক্ত হওয়ায় এটি Compound sentence। বাকি অপশনগুলো কেন নয়: এটি Simple বা Complex নয়; প্রার্থনামূলকও নয়।"
        },
        {
            q: "Identify the structure of: 'In spite of his poverty, he is honest.'",
            options: ["Simple sentence", "Complex sentence", "Compound sentence", "Exclamatory sentence"],
            ans: 0,
            exp: "বাক্যে একটি মাত্র Finite Verb ('is') এবং একটি Clause আছে ('In spite of his poverty' একটি prepositional phrase), তাই এটি Simple sentence। বাকি অপশনগুলো কেন নয়: Subordinate clause না থাকায় Complex নয়; দুটি independent clause না থাকায় Compound নয়।"
        },
        {
            q: "'What a pity!' is a/an —",
            options: ["Assertive sentence", "Interrogative sentence", "Exclamatory sentence", "Imperative sentence"],
            ans: 2,
            exp: "আক্ষেপ বা বিস্ময়ের আবেগ প্রকাশ করায় এটি Exclamatory sentence। বাকি অপশনগুলো কেন নয়: বিবৃতি, প্রশ্ন বা আদেশ-অনুরোধ বোঝাচ্ছে না।"
        },
        {
            q: "Which sentence is a Complex sentence?",
            options: ["He came here and met me.", "I know the man who stole the bag.", "Having finished the work, he went home.", "Work hard or you will fail."],
            ans: 1,
            exp: "'I know the man who stole the bag.' বাক্যে Principal Clause ('I know the man') এবং Relative Subordinate Clause ('who stole the bag') থাকায় এটি Complex sentence। বাকি অপশনগুলো কেন নয়: প্রথম ও চতুর্থটি Compound; তৃতীয়টি participial phrase-যুক্ত Simple sentence।"
        },
        {
            q: "'Do not make a noise.' belongs to which type of sentence?",
            options: ["Assertive", "Imperative", "Optative", "Exclamatory"],
            ans: 1,
            exp: "নিষেধ বা আদেশ বোঝানোয় এটি Negative Imperative sentence। বাকি অপশনগুলো কেন নয়: সাধারণ বিবৃতি, প্রার্থনা বা বিস্ময় নয়।"
        },
        {
            q: "Identify the type of sentence: 'Where do you live?'",
            options: ["Declarative", "Interrogative", "Imperative", "Optative"],
            ans: 1,
            exp: "সরাসরি প্রশ্ন করায় এটি Interrogative sentence। বাকি অপশনগুলো কেন নয়: Declarative বিবৃতি দেয়, Imperative আদেশ/অনুরোধ করে এবং Optative প্রার্থনা বোঝায়।"
        },
        {
            q: "'To tell the truth, he is a generous person.' is a —",
            options: ["Simple sentence", "Complex sentence", "Compound sentence", "Interrogative sentence"],
            ans: 0,
            exp: "'To tell the truth' একটি infinitive phrase এবং বাক্যে একটি মাত্র finite clause ('he is a generous person') থাকায় এটি Simple sentence। বাকি অপশনগুলো কেন নয়: এতে subordinate clause বা দুটি independent clause নেই।"
        },
        {
            q: "Which of the following is a Compound sentence?",
            options: ["Because he was late, he missed the bus.", "He was late, so he missed the bus.", "Being late, he missed the bus.", "The boy who is late will be punished."],
            ans: 1,
            exp: "Coordinating conjunction 'so' দিয়ে দুটি স্বাধীন Clause ('He was late' ও 'he missed the bus') যুক্ত হওয়ায় এটি Compound sentence। বাকি অপশনগুলো কেন নয়: প্রথম ও চতুর্থটি Complex; তৃতীয়টি Simple sentence।"
        },
        {
            q: "'Long live our motherland!' is an example of —",
            options: ["Exclamatory sentence", "Optative sentence", "Assertive sentence", "Interrogative sentence"],
            ans: 1,
            exp: "শুভকামনা বা প্রার্থনা ('Long live...') প্রকাশ করায় এটি Optative sentence। বাকি অপশনগুলো কেন নয়: এটি সাধারণ বিবৃতি বা প্রশ্ন নয়; আবেগের চিহ্ন থাকলেও মূল ভাবটি কামনা/প্রার্থনার।"
        },
        {
            q: "In 'Read attentively or you cannot do well in the exam,' the sentence is —",
            options: ["Simple", "Complex", "Compound", "Optative"],
            ans: 2,
            exp: "Coordinating conjunction 'or' দিয়ে দুটি স্বাধীন clause যুক্ত হওয়ায় এটি Compound sentence। বাকি অপশনগুলো কেন নয়: Simple বা Complex নয়; প্রার্থনামূলকও নয়।"
        },
        {
            q: "Which sentence expresses a negative statement (Assertive)?",
            options: ["Never tell a lie.", "He never tells a lie.", "Did he tell a lie?", "How often does he lie?"],
            ans: 1,
            exp: "'He never tells a lie.' একটি তথ্য বা বিবৃতি দিচ্ছে, তাই এটি Negative Assertive sentence। বাকি অপশনগুলো কেন নয়: 'Never tell a lie.' Imperative; বাকি দুটি Interrogative।"
        },
        {
            q: "Identify the sentence type: 'If you work hard, you will shine in life.'",
            options: ["Simple", "Complex", "Compound", "Imperative"],
            ans: 1,
            exp: "Subordinating conjunction 'If'-যুক্ত dependent clause এবং প্রধান clause ('you will shine in life') থাকায় এটি Complex sentence। বাকি অপশনগুলো কেন নয়: একটি clause-এর Simple নয়; coordinating conjunction-এর Compound নয়।"
        },
        {
            q: "'Let us go for a walk.' is a/an —",
            options: ["Optative sentence", "Imperative sentence", "Assertive sentence", "Exclamatory sentence"],
            ans: 1,
            exp: "'Let us...' দিয়ে প্রস্তাব বা আহ্বান জানানো হয়, যা Imperative sentence-এর অন্তর্ভুক্ত। বাকি অপশনগুলো কেন নয়: এটি Optative, Assertive বা Exclamatory নয়।"
        },
        {
            q: "Which of the following is a Simple sentence?",
            options: ["I saw a bird flying in the sky.", "I saw a bird that was flying in the sky.", "I saw a bird and it was flying in the sky.", "Although I saw a bird, it flew away."],
            ans: 0,
            exp: "'I saw a bird flying in the sky.' বাক্যে একটি finite verb ('saw') এবং একটি clause আছে ('flying in the sky' participial phrase), তাই এটি Simple sentence। বাকি অপশনগুলো কেন নয়: দ্বিতীয় ও চতুর্থটি Complex; তৃতীয়টি Compound।"
        },
        {
            q: "'How beautifully she sings!' is a/an —",
            options: ["Interrogative sentence", "Exclamatory sentence", "Assertive sentence", "Imperative sentence"],
            ans: 1,
            exp: "বিস্ময় বা মুগ্ধতা প্রকাশ করায় এটি Exclamatory sentence। বাকি অপশনগুলো কেন নয়: এটি প্রশ্ন নয়, সাধারণ বিবৃতিও নয়, আদেশ বা অনুরোধও নয়।"
        },
        {
            q: "Identify the sentence structure: 'He is so weak that he cannot walk.'",
            options: ["Simple", "Complex", "Compound", "Optative"],
            ans: 1,
            exp: "'so ... that' কাঠামোতে Principal Clause ('He is so weak')-এর সাথে Subordinate Result Clause ('that he cannot walk') যুক্ত থাকায় এটি Complex sentence। বাকি অপশনগুলো কেন নয়: Simple বা Compound নয়; Optative-ও নয়।"
        },
        {
            q: "'Neither of the boys was present.' is an —",
            options: ["Affirmative Assertive sentence", "Negative Assertive sentence", "Interrogative sentence", "Imperative sentence"],
            ans: 1,
            exp: "'Neither' নেতিবাচক অর্থ প্রকাশ করায় এবং বাক্যটি একটি বিবৃতি দেওয়ায় এটি Negative Assertive sentence। বাকি অপশনগুলো কেন নয়: ইতিবাচক নয়; প্রশ্ন বা আদেশও নয়।"
        },
        {
            q: "Which conjunction forms a Compound sentence?",
            options: ["Although", "Because", "Yet", "Since"],
            ans: 2,
            exp: "'Yet' একটি Coordinating Conjunction (`FANBOYS`-এর অন্তর্ভুক্ত) যা দুটি স্বাধীন clause যুক্ত করে Compound sentence গঠন করে। বাকি অপশনগুলো কেন নয়: 'Although', 'Because' ও 'Since' Subordinating Conjunction যা Complex sentence গঠন করে।"
        },
        {
            q: "'Would that I were young again!' is a/an —",
            options: ["Interrogative sentence", "Optative / Wish sentence", "Imperative sentence", "Assertive sentence"],
            ans: 1,
            exp: "'Would that...' দিয়ে তীব্র ইচ্ছা বা কামনা প্রকাশ করায় এটি Optative/Wish sentence। বাকি অপশনগুলো কেন নয়: প্রশ্ন, আদেশ বা সাধারণ বিবৃতি নয়।"
        },
        {
            q: "Identify the sentence structure: 'The sun having set, we returned home.'",
            options: ["Simple sentence", "Complex sentence", "Compound sentence", "Interrogative sentence"],
            ans: 0,
            exp: "'The sun having set' একটি nominative absolute phrase এবং বাক্যে একটি মাত্র finite verb ('returned') ও একটি clause থাকায় এটি Simple sentence। বাকি অপশনগুলো কেন নয়: finite verb না থাকায় 'The sun having set' subordinate clause নয়, তাই Complex নয়; Compound-ও নয়।"
        },
        {
            q: "Which of the following is a Complex sentence?",
            options: ["He is rich yet miserable.", "I know where he lives.", "Get up early and walk.", "He is too weak to walk."],
            ans: 1,
            exp: "'where he lives' একটি subordinate noun clause যা 'know' ক্রিয়ার object হিসেবে কাজ করছে—তাই এটি Complex sentence। বাকি অপশনগুলো কেন নয়: প্রথম ও তৃতীয়টি Compound; চতুর্থটি infinitive phrase-যুক্ত Simple sentence।"
        },
        {
            q: "'Please do not disturb me.' is a/an —",
            options: ["Negative Imperative sentence", "Assertive sentence", "Exclamatory sentence", "Optative sentence"],
            ans: 0,
            exp: "অনুরোধ ও নিষেধ একসাথে বোঝানোয় এটি Negative Imperative sentence। বাকি অপশনগুলো কেন নয়: এটি Assertive, Exclamatory বা Optative নয়।"
        }
    ]
},
const englishGrammarQuestions = {
    "Verbs & Problems with Verbs": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Transitive, Intransitive এবং Linking Verb-এর পার্থক্য উদাহরণসহ ব্যাখ্যা করো এবং 'lie/lay', 'rise/raise', 'sit/set'-এর মতো বিভ্রান্তিকর ক্রিয়ার সঠিক ব্যবহার দেখাও।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Please _____ the book on the table carefully.",
                options: ["lie", "lay", "lain", "lying"],
                ans: 1,
                exp: "'lay' একটি Transitive Verb যার অর্থ 'কোনো কিছু রাখা/শোয়ানো', এবং এর সাথে Object ('the book') রয়েছে; তাই 'lay' সঠিক। বাকি অপশনগুলো কেন নয়: 'lie' (শোয়া/অবস্থান করা) Intransitive Verb; 'lain' past participle এবং 'lying' present participle।"
            },
            {
                q: "The sun _____ in the east every morning.",
                options: ["raises", "rises", "arises", "raising"],
                ans: 1,
                exp: "'rise' হলো Intransitive Verb যার নিজস্ব কোনো Object লাগে না ('সূর্য ওঠে')। বাকি অপশনগুলো কেন নয়: 'raises' Transitive Verb (কী বা কাকে তোলে/বাড়ায় বোঝাতে Object লাগে); 'arises' সাধারণত সমস্যা বা প্রশ্ন উত্থাপনের ক্ষেত্রে আসে; 'raising' participle/gerund।"
            },
            {
                q: "She has been _____ in bed since morning due to fever.",
                options: ["laying", "lying", "lain", "laid"],
                ans: 1,
                exp: "বিছানায় শুয়ে থাকা বা অবস্থান করা বোঝাতে 'lie' (present participle: 'lying') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'laying' বা 'laid' transitive verb 'lay'-এর রূপ; 'lain' past participle যা 'has been' + -ing চলমান অর্থের সাথে খাপ খায় না।"
            },
            {
                q: "Which of the following is a Linking Verb in 'The milk turned sour'?",
                options: ["The", "milk", "turned", "sour"],
                ans: 2,
                exp: "'turned' এখানে Subject 'The milk'-কে Subject Complement 'sour'-এর সাথে যুক্ত করছে, তাই এটি Linking Verb। বাকি অপশনগুলো কেন নয়: 'The' determiner; 'milk' subject; 'sour' adjective (subject complement)।"
            },
            {
                q: "He _____ his hand to ask a question in the class.",
                options: ["rose", "raised", "arose", "risen"],
                ans: 1,
                exp: "হাত তোলা অর্থে Object ('his hand') থাকায় Transitive Verb 'raised' সঠিক। বাকি অপশনগুলো কেন নয়: 'rose' ও 'risen' intransitive 'rise'-এর রূপ; 'arose' উদ্ভূত হওয়া অর্থে ব্যবহৃত হয়।"
            },
            {
                q: "Which verb is used as a Causative Verb in: 'The teacher made the students write an essay.'?",
                options: ["write", "made", "students", "essay"],
                ans: 1,
                exp: "'made' এখানে কাউকে দিয়ে কাজ করানো অর্থে Causative Verb হিসেবে কাজ করছে (যার পরে bare infinitive 'write' বসে)। বাকি অপশনগুলো কেন নয়: 'write' bare infinitive; 'students' object; 'essay' direct object।"
            },
            {
                q: "I had my laptop _____ yesterday.",
                options: ["repair", "repaired", "repairing", "to repair"],
                ans: 1,
                exp: "'have + object + past participle' causative কাঠামোতে ল্যাপটপটি নিজে মেরামত করে না বরং মেরামত করানো হয় বোঝাতে 'repaired' বসে। বাকি অপশনগুলো কেন নয়: 'repair' বা 'to repair' সক্রিয় অর্থ দেয়; 'repairing' চলমান সক্রিয়তা বোঝায়।"
            },
            {
                q: "She got the letter _____ before noon.",
                options: ["type", "typed", "typing", "to type"],
                ans: 1,
                exp: "'get + object + past participle' অর্থে চিঠিটি টাইপ করানো বোঝাতে 'typed' সঠিক। বাকি অপশনগুলো কেন নয়: 'type' base form; 'typing' চলমান অর্থ দেয়; 'to type' এখানে সঠিক passive causative রূপ নয়।"
            },
            {
                q: "A serious problem _____ during the meeting.",
                options: ["raised", "arose", "lifted", "laid"],
                ans: 1,
                exp: "সমস্যা বা প্রশ্ন দেখা দেওয়া/উত্থাপিত হওয়া বোঝাতে 'arise' (past: 'arose') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'raised' transitive verb যার object লাগে; 'lifted' ও 'laid' এখানে অর্থগতভাবে অনুপযুক্ত।"
            },
            {
                q: "He _____ on the sofa for an hour and then went out.",
                options: ["laid", "lay", "lied", "lain"],
                ans: 1,
                exp: "'lie' (শোয়া)-এর Past Simple রূপ হলো 'lay'। বাকি অপশনগুলো কেন নয়: 'laid' হলো 'lay' (রাখা)-এর past রূপ; 'lied' অর্থ মিথ্যা বলেছিল; 'lain' past participle।"
            },
            {
                q: "Which of the following verbs is strictly Intransitive in standard usage?",
                options: ["Discuss", "Arrive", "Mention", "Explain"],
                ans: 1,
                exp: "'Arrive' সাধারণত Intransitive Verb (যেমন: *arrive at/in*, সরাসরি object ছাড়া বসে)। বাকি অপশনগুলো কেন নয়: 'Discuss', 'Mention' এবং 'Explain' সাধারণত Transitive Verb হিসেবে Object গ্রহণ করে।"
            },
            {
                q: "Do not _____ about the past; focus on your present.",
                options: ["lie", "lay", "lied", "lain"],
                ans: 0,
                exp: "মিথ্যা বলা অর্থে verb হলো 'lie' (past: 'lied', past participle: 'lied')। বাকি অপশনগুলো কেন নয়: 'lay' রাখা বা 'lie'-এর past; 'lied' past tense; 'lain' past participle।"
            },
            {
                q: "They _____ a new monument in memory of the martyrs.",
                options: ["rose", "arose", "erected", "lay"],
                ans: 2,
                exp: "স্মৃতিস্তম্ভ বা ভবন নির্মাণ/স্থাপন করা অর্থে 'erected' সঠিক। বাকি অপশনগুলো কেন নয়: 'rose' ও 'arose' intransitive; 'lay' শুয়ে থাকা বা রাখা।"
            },
            {
                q: "In 'The soup tastes salty,' 'tastes' is a —",
                options: ["Transitive Verb", "Linking Verb", "Modal Verb", "Causative Verb"],
                ans: 1,
                exp: "'tastes' এখানে Subject 'The soup'-এর স্বাদ বা গুণ ('salty') বোঝাচ্ছে, তাই এটি Linking Verb। বাকি অপশনগুলো কেন নয়: এটি কোনো বস্তুর ওপর ক্রিয়া ফেলা transitive verb নয়; modal বা causative-ও নয়।"
            },
            {
                q: "The old man _____ down under the banyan tree.",
                options: ["laid", "lay", "lain", "lying"],
                ans: 1,
                exp: "গাছের নিচে শুয়ে পড়া অর্থে 'lie'-এর past tense 'lay' বসবে। বাকি অপশনগুলো কেন নয়: 'laid' রাখা অর্থে past; 'lain' past participle; 'lying' present participle।"
            },
            {
                q: "She made me _____ the truth.",
                options: ["tell", "to tell", "telling", "told"],
                ans: 0,
                exp: "Active বাক্যে 'make + object' এর পরে Bare Infinitive ('tell') বসে ('to' বসে না)। বাকি অপশনগুলো কেন নয়: 'to tell' active 'make'-এর পর ভুল; 'telling' বা 'told' এখানে সঠিক কাঠামো নয়।"
            },
            {
                q: "I was made _____ the whole incident by the committee.",
                options: ["explain", "to explain", "explaining", "explained"],
                ans: 1,
                exp: "'make' যখন Passive রূপে ('was made') ব্যবহৃত হয়, তখন এর পরে Full Infinitive ('to explain') বসে। বাকি অপশনগুলো কেন নয়: passive 'was made'-এর পর bare 'explain' ভুল; 'explaining' ও 'explained' সঠিক নয়।"
            },
            {
                q: "Prices of essential goods have _____ sharply this month.",
                options: ["raised", "risen", "aroused", "laid"],
                ans: 1,
                exp: "দাম বা মাত্রা নিজে নিজে বৃদ্ধি পাওয়া বোঝাতে intransitive 'rise'-এর past participle 'risen' বসে। বাকি অপশনগুলো কেন নয়: 'raised' transitive; 'aroused' অনুভূতি/আগ্রহ জাগানো অর্থে আসে; 'laid' অনুপযুক্ত।"
            },
            {
                q: "Please _____ the baby gently in the cradle.",
                options: ["lie", "lay", "rise", "arise"],
                ans: 1,
                exp: "শিশুটিকে দোলনায় রাখা/শোয়ানো অর্থে Object ('the baby') থাকায় 'lay' সঠিক। বাকি অপশনগুলো কেন নয়: 'lie', 'rise' ও 'arise' intransitive verb।"
            },
            {
                q: "What is the past participle form of 'lie' (মিথ্যা বলা)?",
                options: ["Lain", "Laid", "Lied", "Risen"],
                ans: 2,
                exp: "'lie' (মিথ্যা বলা)-এর principal parts হলো: lie – lied – lied। বাকি অপশনগুলো কেন নয়: 'Lain' হলো 'lie' (শোয়া)-এর past participle; 'Laid' হলো 'lay'-এর past/past participle; 'Risen' হলো 'rise'-এর past participle।"
            },
            {
                q: "What is the past tense of 'lie' (শোয়া/অবস্থান করা)?",
                options: ["Lied", "Laid", "Lay", "Lain"],
                ans: 2,
                exp: "'lie' (শোয়া)-এর principal parts হলো: lie – lay – lain; তাই এর past tense হলো 'lay'। বাকি অপশনগুলো কেন নয়: 'Lied' মিথ্যা বলার past; 'Laid' রাখার past; 'Lain' past participle।"
            },
            {
                q: "He let me _____ his bicycle for the afternoon.",
                options: ["use", "to use", "using", "used"],
                ans: 0,
                exp: "'let + object' এর পরে সর্বদা Bare Infinitive ('use') বসে। বাকি অপশনগুলো কেন নয়: 'to use', 'using' বা 'used' 'let'-এর পরে প্রমিত নয়।"
            },
            {
                q: "They _____ their luggage by the door.",
                options: ["lay", "laid", "lain", "lied"],
                ans: 1,
                exp: "মালপত্র রাখা অর্থে 'lay'-এর past tense হলো 'laid'। বাকি অপশনগুলো কেন নয়: 'lay' (শোয়া)-এর past হলেও এখানে 'luggage' object থাকায় রাখা অর্থে 'laid' সঠিক; 'lain' ও 'lied' ভুল।"
            },
            {
                q: "The fog _____ gradually in the late morning.",
                options: ["lifted", "raised", "laid", "arose"],
                ans: 0,
                exp: "কুয়াশা বা মেঘ সরে যাওয়া/ওঠা অর্থে 'lifted' (বা 'rose') ব্যবহৃত হয়, তবে প্রমিত ইংরেজিতে 'the fog lifted' অত্যন্ত স্বাভাবিক। বাকি অপশনগুলো কেন নয়: 'raised' সাধারণত কোনো কিছু উঁচু করা বা টাকা/প্রশ্ন তোলা বোঝায়; 'laid' ও 'arose' এখানে সঠিক নয়।"
            },
            {
                q: "In 'He became a doctor,' 'became' functions as a —",
                options: ["Transitive Verb", "Linking Verb", "Auxiliary Verb", "Non-finite Verb"],
                ans: 1,
                exp: "'became' Subject 'He'-কে Subject Complement 'a doctor'-এর সাথে যুক্ত করছে, তাই এটি Linking Verb। বাকি অপশনগুলো কেন নয়: এটি transitive object নেয় না; tense বা voice গঠনে সাহায্যকারী auxiliary নয়; এটি finite verb।"
            }
        ]
    },
    "Non-finite Verbs (Gerund, Participle, Infinitive)": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Gerund এবং Present Participle-এর পার্থক্য নির্ণয়ের কৌশল উদাহরণসহ ব্যাখ্যা করো এবং Infinitive-এর বিভিন্ন ফাংশন দেখাও।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "_____ is a good exercise in the morning.",
                options: ["Walk", "Walking", "Walked", "To walking"],
                ans: 1,
                exp: "'is' ক্রিয়ার Subject হিসেবে Noun-এর কাজ করায় 'Walking' হলো Gerund। বাকি অপশনগুলো কেন নয়: 'Walk' base verb; 'Walked' past form; 'To walking' ব্যাকরণগতভাবে ভুল।"
            },
            {
                q: "I saw a bird _____ on the branch of a tree.",
                options: ["sit", "sat", "sitting", "to sitting"],
                ans: 2,
                exp: "'a bird'-এর অবস্থা বা চলমান ক্রিয়া বোঝাতে Present Participle 'sitting' ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'sat' finite past tense; 'to sitting' ভুল।"
            },
            {
                q: "He is fond of _____ storybooks.",
                options: ["read", "reading", "to read", "reads"],
                ans: 1,
                exp: "Preposition 'of'-এর পরে Noun/Gerund বসে বলে 'reading' সঠিক। বাকি অপশনগুলো কেন নয়: preposition-এর পরে 'read' বা 'reads' বসে না; 'fond of'-এর সাথে সাধারণত gerund আসে।"
            },
            {
                q: "_____ his fault, he apologized to his teacher.",
                options: ["Realize", "Realizing", "Realized", "To realizing"],
                ans: 1,
                exp: "নিজের ভুল বুঝতে পেরে ক্ষমা চেয়েছিল—এই সক্রিয় কারণ বা পূর্বঘটনা বোঝাতে Present Participle 'Realizing' সঠিক। বাকি অপশনগুলো কেন নয়: 'Realize' base verb; 'Realized' একা participle phrase শুরু করলে অর্থগতভাবে অসম্পূর্ণ থাকে; 'To realizing' ভুল।"
            },
            {
                q: "_____ is human.",
                options: ["Err", "To err", "Erring", "Erred"],
                ans: 1,
                exp: "'To err' একটি Infinitive যা 'is' ক্রিয়ার Subject হিসেবে কাজ করছে। বাকি অপশনগুলো কেন নয়: শুধু 'Err' verb form; 'Erred' past; 'Erring' এখানে প্রচলিত প্রবাদের কাঠামো নয়।"
            },
            {
                q: "I have a lot of homework _____.",
                options: ["do", "to do", "doing", "did"],
                ans: 1,
                exp: "'homework' Noun-টিকে মডিফাই করে করণীয় কাজ বোঝাতে Infinitive 'to do' ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'do' বা 'did' এখানে সঠিক নয়; 'doing' দিয়ে করণীয় দায়িত্বের এই অর্থ হয় না।"
            },
            {
                q: "In 'A rolling stone gathers no moss,' 'rolling' is a —",
                options: ["Gerund", "Present Participle", "Past Participle", "Infinitive"],
                ans: 1,
                exp: "'rolling' Noun 'stone'-এর আগে বসে তার চলমান অবস্থা বোঝাচ্ছে (Adjective-এর কাজ করছে), তাই এটি Present Participle। বাকি অপশনগুলো কেন নয়: এটি noun হিসেবে কাজ করছে না বলে Gerund নয়; past participle বা infinitive-ও নয়।"
            },
            {
                q: "In 'Give me some drinking water,' 'drinking' is a —",
                options: ["Present Participle", "Gerund (for drinking)", "Past Participle", "Finite Verb"],
                ans: 1,
                exp: "'drinking water' অর্থ 'water for drinking' (পান করার জন্য পানি)—এখানে 'drinking' উদ্দেশ্য/শ্রেণি বোঝাচ্ছে এবং Gerund/verbal noun হিসেবে কাজ করে। বাকি অপশনগুলো কেন নয়: পানি নিজে পান করছে না বলে এটি চলমান participle নয়; past participle বা finite verb-ও নয়।"
            },
            {
                q: "_____ the work, he went to sleep.",
                options: ["Finish", "Finished", "Having finished", "To finishing"],
                ans: 2,
                exp: "একটি কাজ সম্পূর্ণরূপে শেষ করে আরেকটি কাজ শুরু করা বোঝাতে Perfect Participle 'Having finished' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Finish' base verb; 'Finished' দিয়ে 'কাজটি শেষ হয়ে গিয়েছিল' বোঝায় (সক্রিয় সমাপ্তি নয়); 'To finishing' ভুল।"
            },
            {
                q: "He avoids _____ crowded places.",
                options: ["visit", "to visit", "visiting", "visited"],
                ans: 2,
                exp: "'avoid' verb-এর পরে সর্বদা Gerund (Verb + ing) বসে; তাই 'visiting' সঠিক। বাকি অপশনগুলো কেন নয়: 'avoid'-এর পরে infinitive ('to visit') বা base/past রূপ বসে না।"
            },
            {
                q: "She decided _____ abroad for higher studies.",
                options: ["go", "going", "to go", "gone"],
                ans: 2,
                exp: "'decide' verb-এর পরে সাধারণত To-Infinitive ('to go') বসে। বাকি অপশনগুলো কেন নয়: 'decide'-এর পরে gerund ('going') বা 'go'/'gone' প্রমিত নয়।"
            },
            {
                q: "The window _____ by the storm was repaired today.",
                options: ["break", "breaking", "broken", "to break"],
                ans: 2,
                exp: "ঝড়ে ভেঙে যাওয়া জানালা (passive অর্থ) বোঝাতে Past Participle 'broken' ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'breaking' সক্রিয় অর্থ দেয়; 'break' ও 'to break' এখানে সঠিক নয়।"
            },
            {
                q: "I cannot help _____ when I remember that incident.",
                options: ["laugh", "to laugh", "laughing", "laughed"],
                ans: 2,
                exp: "'cannot help' phrase-এর পরে Gerund (Verb + ing) বসে ('cannot help laughing' = না হেসে পারি না)। বাকি অপশনগুলো কেন নয়: 'cannot help'-এর পর 'to laugh' বা 'laugh' প্রমিত নয় (তবে 'cannot help but + bare infinitive' হয়)।"
            },
            {
                q: "We went to the market _____ some books.",
                options: ["buy", "to buy", "buying", "bought"],
                ans: 1,
                exp: "উদ্দেশ্য ('কেনার জন্য') বোঝাতে Infinitive of purpose 'to buy' বসে। বাকি অপশনগুলো কেন নয়: শুধু 'buy', 'buying' বা 'bought' উদ্দেশ্য প্রকাশের এই কাঠামোতে সঠিক নয়।"
            },
            {
                q: "_____ is believing.",
                options: ["See", "Seeing", "Seen", "To seeing"],
                ans: 1,
                exp: "'Seeing is believing' প্রবাদে 'Seeing' Subject হিসেবে ব্যবহৃত Gerund (এবং 'believing' Subject Complement হিসেবে Gerund)। বাকি অপশনগুলো কেন নয়: 'See' base form; 'Seen' past participle; 'To seeing' ভুল।"
            },
            {
                q: "He is too weak _____.",
                options: ["walk", "to walk", "walking", "walked"],
                ans: 1,
                exp: "'too + adjective + to-infinitive' কাঠামোতে 'to walk' সঠিক। বাকি অপশনগুলো কেন নয়: 'walk', 'walking' বা 'walked' এই কাঠামো পূর্ণ করে না।"
            },
            {
                q: "I heard her _____ a song in the room.",
                options: ["sing", "sang", "sung", "to singing"],
                ans: 0,
                exp: "Perception verb ('heard') + object ('her')-এর পরে Bare Infinitive ('sing') বা Present Participle ('singing') বসে। বাকি অপশনগুলো কেন নয়: 'sang' past tense; 'sung' past participle; 'to singing' ভুল।"
            },
            {
                q: "_____ books is a noble hobby.",
                options: ["Read", "Reading", "Reads", "To reading"],
                ans: 1,
                exp: "'is' ক্রিয়ার Subject হিসেবে 'Reading' Gerund হিসেবে ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'Read' বা 'Reads' finite/base রূপ; 'To reading' ভুল।"
            },
            {
                q: "The man _____ beside me is a lawyer.",
                options: ["sit", "sat", "sitting", "to sitting"],
                ans: 2,
                exp: "'The man'-এর পরে বসে চলমান অবস্থান বোঝাতে Present Participle 'sitting' সঠিক। বাকি অপশনগুলো কেন নয়: 'sit' বা 'sat' এখানে সঠিক নয়; 'to sitting' ভুল।"
            },
            {
                q: "They enjoy _____ football in the afternoon.",
                options: ["play", "to play", "playing", "played"],
                ans: 2,
                exp: "'enjoy' verb-এর পরে সর্বদা Gerund ('playing') বসে। বাকি অপশনগুলো কেন নয়: 'enjoy'-এর পরে infinitive ('to play') বা 'play'/'played' ভুল।"
            },
            {
                q: "It is easy _____ others than to practice oneself.",
                options: ["criticize", "to criticize", "criticizing", "criticized"],
                ans: 1,
                exp: "'It is + adjective + to-infinitive' কাঠামোতে 'to criticize' সঠিক। বাকি অপশনগুলো কেন নয়: 'criticize', 'criticizing' বা 'criticized' এই কাঠামোতে প্রমিত নয়।"
            },
            {
                q: "_____ his name on the list, he felt relieved.",
                options: ["See", "Seeing", "Seen", "To seeing"],
                ans: 1,
                exp: "তালিকায় নিজের নাম দেখে স্বস্তি পেয়েছিল—এই সক্রিয় অনুভূতির কারণ বোঝাতে Present Participle 'Seeing' বসে। বাকি অপশনগুলো কেন নয়: 'See' base verb; 'Seen' passive past participle; 'To seeing' ভুল।"
            },
            {
                q: "He is accustomed to _____ early in the morning.",
                options: ["wake", "waking", "woke", "waken"],
                ans: 1,
                exp: "'accustomed to'-এর 'to' preposition হওয়ায় এর পরে Gerund 'waking' বসে। বাকি অপশনগুলো কেন নয়: preposition-এর পরে 'wake', 'woke' বা 'waken' সঠিক নয়।"
            },
            {
                q: "The letter _____ by him yesterday was urgent.",
                options: ["write", "writing", "written", "to write"],
                ans: 2,
                exp: "চিঠিটি লেখা হয়েছিল (passive অর্থ) বোঝাতে Past Participle 'written' ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'writing' সক্রিয় অর্থ দেয়; 'write' বা 'to write' এখানে সঠিক নয়।"
            },
            {
                q: "She promised _____ me with the project.",
                options: ["help", "helping", "to help", "helped"],
                ans: 2,
                exp: "'promise' verb-এর পরে To-Infinitive ('to help') বসে। বাকি অপশনগুলো কেন নয়: 'promise'-এর পরে 'helping' বা 'help'/'helped' সাধারণত প্রমিত নয়।"
            }
        ]
    },
    "Right Forms of Verbs": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Conditional Sentences, Subjunctive/Unreal Past ('It is high time', 'as if', 'I wish') এবং Preposition/Modal-এর পরে Verb-এর সঠিক রূপ নির্ণয়ের নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "If I _____ a bird, I would fly in the sky.",
                options: ["am", "was", "were", "will be"],
                ans: 2,
                exp: "Second Conditional ও অবাস্তব কল্পনায় 'If I were...' কাঠামোতে 'were' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'am' বা 'will be' অবাস্তব কল্পনায় প্রমিত নয়; formal grammar-এ 'was'-এর চেয়ে 'were' শুদ্ধ।"
            },
            {
                q: "If he had studied hard, he _____ the scholarship.",
                options: ["will get", "would get", "would have got", "gets"],
                ans: 2,
                exp: "Third Conditional ('If + had + past participle')-এর ফলাফল clause-এ 'would have + past participle' ('would have got') বসে। বাকি অপশনগুলো কেন নয়: 'will get' বা 'gets' প্রথম শর্ত/সাধারণ বর্তমানের জন্য; 'would get' second conditional-এর জন্য।"
            },
            {
                q: "He talks as if he _____ everything.",
                options: ["knows", "knew", "has known", "will know"],
                ans: 1,
                exp: "বর্তমানের অবাস্তব ভাবনা বোঝাতে 'talks as if' এর পরে Past Simple ('knew') বসে। বাকি অপশনগুলো কেন নয়: 'knows' present; 'has known' present perfect; 'will know' future।"
            },
            {
                q: "It is high time we _____ our country from corruption.",
                options: ["free", "freed", "have freed", "will free"],
                ans: 1,
                exp: "'It is high time + Subject' কাঠামোতে Past Simple Verb ('freed') বসে। বাকি অপশনগুলো কেন নয়: 'free', 'have freed' বা 'will free' এই কাঠামোতে সঠিক নয়।"
            },
            {
                q: "Would you mind _____ the window?",
                options: ["open", "to open", "opening", "opened"],
                ans: 2,
                exp: "'Would you mind'-এর পরে সর্বদা Gerund (Verb + ing) বসে; তাই 'opening' সঠিক। বাকি অপশনগুলো কেন নয়: 'open', 'to open' বা 'opened' 'Would you mind'-এর পরে ভুল।"
            },
            {
                q: "Each of the boys _____ given a gift.",
                options: ["were", "was", "are", "have"],
                ans: 1,
                exp: "'Each of the boys'-এর head word singular 'Each' হওয়ায় singular verb 'was' বসে। বাকি অপশনগুলো কেন নয়: 'were', 'are' এবং 'have' plural verb।"
            },
            {
                q: "No sooner had the bell rung _____ the students entered the room.",
                options: ["when", "than", "then", "before"],
                ans: 1,
                exp: "'No sooner had + subject + past participle ... than + past simple' কাঠামোতে 'than' বসে (এবং দ্বিতীয় অংশে past simple 'entered' থাকে)। বাকি অপশনগুলো কেন নয়: 'when', 'then' বা 'before' 'No sooner'-এর সাথে সঠিক নয়।"
            },
            {
                q: "I wish I _____ there to support you.",
                options: ["am", "were", "can be", "will be"],
                ans: 1,
                exp: "'I wish'-এর পরে অবাস্তব বা অনুপস্থিতির কল্পনা বোঝাতে 'were' বসে। বাকি অপশনগুলো কেন নয়: 'am', 'can be' বা 'will be' এই কাল্পনিক ইচ্ছায় সঠিক নয়।"
            },
            {
                q: "He can _____ English fluently.",
                options: ["speaks", "speaking", "speak", "spoke"],
                ans: 2,
                exp: "Modal auxiliary 'can'-এর পরে সর্বদা Verb-এর Base Form ('speak') বসে। বাকি অপশনগুলো কেন নয়: 'speaks', 'speaking' বা 'spoke' modal-এর পরে সরাসরি বসে না।"
            },
            {
                q: "The work _____ by evening.",
                options: ["will finish", "will be finished", "finishes", "finished"],
                ans: 1,
                exp: "কাজটি নিজে নিজে শেষ হবে না বরং অন্যের দ্বারা সম্পন্ন হবে (passive future) বোঝাতে 'will be finished' সঠিক। বাকি অপশনগুলো কেন নয়: 'will finish' সক্রিয় অর্থ দেয়; 'finishes' বা 'finished' ভবিষ্যৎ সমাপ্তি বোঝায় না।"
            },
            {
                q: "While _____ along the road, he found a lost purse.",
                options: ["walk", "walked", "walking", "to walk"],
                ans: 2,
                exp: "'While'-এর পরে Subject না থাকলে সরাসরি Verb + ing ('walking') বসে। বাকি অপশনগুলো কেন নয়: 'walk', 'walked' বা 'to walk' subject-হীন 'while'-এর পরে সঠিক নয়।"
            },
            {
                q: "It is no use _____ over spilt milk.",
                options: ["cry", "to cry", "crying", "cried"],
                ans: 2,
                exp: "'It is no use / It is no good'-এর পরে Gerund ('crying') বসে। বাকি অপশনগুলো কেন নয়: 'cry', 'to cry' বা 'cried' এই কাঠামোতে প্রমিত নয়।"
            },
            {
                q: "Had I known about the exam earlier, I _____ better.",
                options: ["will prepare", "would prepare", "would have prepared", "prepared"],
                ans: 2,
                exp: "'Had I known...' হলো Third Conditional-এর inverted রূপ, যার প্রধান clause-এ 'would have prepared' বসে। বাকি অপশনগুলো কেন নয়: 'will prepare', 'would prepare' ও 'prepared' অতীতের অবাস্তব শর্তের ফলাফলে সঠিক নয়।"
            },
            {
                q: "She is busy _____ for the upcoming test.",
                options: ["prepare", "to prepare", "preparing", "prepared"],
                ans: 2,
                exp: "'busy'-এর পরে সাধারণত Verb + ing ('preparing') বসে। বাকি অপশনগুলো কেন নয়: 'prepare', 'to prepare' বা 'prepared' 'busy'-এর পরে কম স্বাভাবিক/ভুল।"
            },
            {
                q: "He ought _____ his parents.",
                options: ["obey", "to obey", "obeying", "obeyed"],
                ans: 1,
                exp: "'ought' modal-এর পরে সর্বদা 'to' সহ infinitive ('to obey') বসে। বাকি অপশনগুলো কেন নয়: 'ought'-এর পরে 'to' ছাড়া 'obey', 'obeying' বা 'obeyed' সঠিক নয়।"
            },
            {
                q: "I am used to _____ late at night during exams.",
                options: ["study", "studying", "studied", "have studied"],
                ans: 1,
                exp: "'be used to' (= accustomed to)-এর 'to' preposition হওয়ায় এর পরে Gerund 'studying' বসে। বাকি অপশনগুলো কেন নয়: preposition-এর পরে 'study', 'studied' বা 'have studied' ভুল।"
            },
            {
                q: "If you heat ice, it _____.",
                options: ["melt", "melts", "melted", "will have melted"],
                ans: 1,
                exp: "Zero Conditional বা সাধারণ সত্য/নিয়মে ('If + Present Simple, ...') ফলাফল clause-এ Present Simple ('melts') বসে। বাকি অপশনগুলো কেন নয়: 'melt' singular 'it'-এর সাথে ভুল; 'melted' বা 'will have melted' সাধারণ নিয়ম বোঝায় না।"
            },
            {
                q: "He pretended not _____ me at the gathering.",
                options: ["see", "to see", "seeing", "seen"],
                ans: 1,
                exp: "'pretend'-এর পরে সাধারণত To-Infinitive ('not to see') বসে। বাকি অপশনগুলো কেন নয়: 'see', 'seeing' বা 'seen' 'pretend'-এর পরে সঠিক নয়।"
            },
            {
                q: "Many a student _____ failed in that difficult test.",
                options: ["have", "has", "are", "were"],
                ans: 1,
                exp: "'Many a + singular countable noun' কাঠামোতে verb সর্বদা Singular ('has') হয়। বাকি অপশনগুলো কেন নয়: 'have', 'are' এবং 'were' plural verb।"
            },
            {
                q: "I would rather _____ than beg.",
                options: ["die", "to die", "dying", "died"],
                ans: 0,
                exp: "'would rather'-এর পরে সর্বদা Bare Infinitive ('die') বসে। বাকি অপশনগুলো কেন নয়: 'would rather'-এর পরে 'to die', 'dying' বা 'died' প্রমিত নয়।"
            },
            {
                q: "The house needs _____ immediately.",
                options: ["repair", "repairing", "to repairing", "repaired"],
                ans: 1,
                exp: "'need/want/require + gerund' কাঠামোতে passive অর্থ প্রকাশ করতে 'repairing' (বা 'to be repaired') বসে। বাকি অপশনগুলো কেন নয়: 'repair' base form; 'to repairing' ও 'repaired' সঠিক নয়।"
            },
            {
                q: "She has been _____ on this research paper for months.",
                options: ["work", "worked", "working", "to work"],
                ans: 2,
                exp: "'has been' + চলমান কাজের জন্য Present Participle ('working') বসে। বাকি অপশনগুলো কেন নয়: 'work' base form; 'worked' passive/completed অর্থ দেয়; 'to work' ভুল।"
            },
            {
                q: "Unless you _____ hard, you will not get a good rank.",
                options: ["work", "worked", "will work", "had worked"],
                ans: 0,
                exp: "'Unless'-যুক্ত শর্তাধীন clause-এ ভবিষ্যৎ অর্থেও Present Simple ('work') বসে। বাকি অপশনগুলো কেন নয়: 'will work' conditional clause-এ সাধারণত বসে না; 'worked' ও 'had worked' অতীত শর্তের জন্য।"
            },
            {
                q: "They stopped _____ when the teacher entered the room.",
                options: ["talk", "to talk", "talking", "talked"],
                ans: 2,
                exp: "চলমান কাজ ('কথা বলা') বন্ধ করা বোঝাতে 'stop + gerund (talking)' ব্যবহৃত হয় (যেখানে 'stop to talk' মানে অন্য কাজ থামিয়ে কথা বলার জন্য থামা)। বাকি অপশনগুলো কেন নয়: 'talk' বা 'talked' সঠিক নয়; 'to talk' অর্থ বদলে দেয়।"
            },
            {
                q: "It has been a long time since I _____ him last.",
                options: ["meet", "met", "have met", "had met"],
                ans: 1,
                exp: "'It is / It has been + সময় + since + Subject + Past Simple' নিয়ম অনুযায়ী 'met' সঠিক। বাকি অপশনগুলো কেন নয়: 'meet', 'have met' বা 'had met' এই নির্দিষ্ট কাঠামোতে প্রমিত নয়।"
            }
        ]
    },
    "Subject-Verb Agreement": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Collective Noun, 'Either...or / Neither...nor', 'As well as / Along with' এবং 'A number of / The number of'-এর ক্ষেত্রে Subject-Verb Agreement-এর নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Either the captain or the players _____ responsible for the defeat.",
                options: ["is", "are", "was", "has"],
                ans: 1,
                exp: "'Either...or' বা 'Neither...nor' দিয়ে দুটি subject যুক্ত হলে Verb কাছের Subject ('the players', plural) অনুযায়ী বসে; তাই 'are' সঠিক। বাকি অপশনগুলো কেন নয়: 'is', 'was' এবং 'has' singular verb।"
            },
            {
                q: "Neither the players nor the captain _____ happy with the decision.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "এখানে কাছের Subject হলো singular 'the captain', তাই singular verb 'is' বসবে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural verb।"
            },
            {
                q: "The principal, along with his colleagues, _____ attending the seminar.",
                options: ["are", "is", "were", "have"],
                ans: 1,
                exp: "'along with', 'as well as', 'together with', 'accompanied by'-এর আগে থাকা মূল Subject ('The principal', singular) অনুযায়ী verb বসে; তাই 'is' সঠিক। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural 'colleagues'-এর সাথে সঙ্গতিপূর্ণ নয়।"
            },
            {
                q: "A number of applicants _____ called for the viva.",
                options: ["has been", "have been", "is", "was"],
                ans: 1,
                exp: "'A number of + plural noun' অর্থ 'অনেক/কয়েকটি' এবং এটি Plural হিসেবে গণ্য হয়ে plural verb ('have been') নেয়। বাকি অপশনগুলো কেন নয়: 'has been', 'is' এবং 'was' singular verb।"
            },
            {
                q: "The number of road accidents _____ increasing alarmingly.",
                options: ["are", "is", "were", "have"],
                ans: 1,
                exp: "'The number of + plural noun' অর্থ 'নির্দিষ্ট সংখ্যা' এবং এটি Singular হিসেবে গণ্য হয়ে singular verb ('is') নেয়। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural verb।"
            },
            {
                q: "Slow and steady _____ the race.",
                options: ["win", "wins", "are winning", "have won"],
                ans: 1,
                exp: "'Slow and steady' একটি একক ধারণা বা প্রবাদের ভাব প্রকাশ করায় Singular Verb ('wins') বসে। বাকি অপশনগুলো কেন নয়: 'win', 'are winning' এবং 'have won' plural।"
            },
            {
                q: "Bread and butter _____ my favorite breakfast.",
                options: ["are", "is", "were", "have been"],
                ans: 1,
                exp: "'Bread and butter' একত্রে একটি খাবার বা সকালের নাস্তা বোঝালে Singular Verb ('is') বসে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have been' plural।"
            },
            {
                q: "Time and tide _____ for none.",
                options: ["waits", "wait", "is waiting", "has waited"],
                ans: 1,
                exp: "'Time and tide' দুটি স্বতন্ত্র বিষয়কে বোঝায় এবং প্রবাদের প্রমিত রূপ অনুযায়ী plural verb ('wait') নেয়। বাকি অপশনগুলো কেন নয়: 'waits', 'is waiting' এবং 'has waited' singular।"
            },
            {
                q: "Ten miles _____ a long distance to walk.",
                options: ["are", "is", "were", "have"],
                ans: 1,
                exp: "দূরত্ব, সময়, পরিমাণ বা অর্থের সমষ্টি একটি একক একক হিসেবে বিবেচিত হলে Singular Verb ('is') বসে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural।"
            },
            {
                q: "Each boy and each girl _____ given a new book.",
                options: ["were", "was", "are", "have"],
                ans: 1,
                exp: "'and' দিয়ে যুক্ত singular noun-গুলোর আগে 'each' বা 'every' থাকলে Verb সর্বদা Singular ('was') হয়। বাকি অপশনগুলো কেন নয়: 'were', 'are' এবং 'have' plural।"
            },
            {
                q: "One of the books _____ missing from the shelf.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'One of the + plural noun'-এর মূল Subject হলো singular 'One', তাই singular verb 'is' বসবে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural verb।"
            },
            {
                q: "Physics _____ my favorite subject at university.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'Physics' দেখতে plural হলেও একটি বিষয়ের নাম হিসেবে Singular Verb ('is') গ্রহণ করে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural।"
            },
            {
                q: "The cattle _____ grazing in the field.",
                options: ["is", "was", "are", "has"],
                ans: 2,
                exp: "'Cattle' সর্বদা Plural Noun এবং এর সাথে plural verb ('are') বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' এবং 'has' singular।"
            },
            {
                q: "None of the information _____ accurate.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'information' uncountable singular noun হওয়ায় 'None of the information'-এর সাথে singular verb ('is') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural।"
            },
            {
                q: "Neither of the answers _____ correct.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'Neither of + plural noun' কাঠামোতে প্রমিত ব্যাকরণে singular verb ('is') বসে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural verb।"
            },
            {
                q: "A bouquet of red roses _____ on the table.",
                options: ["lie", "lies", "are lying", "were lying"],
                ans: 1,
                exp: "মূল Subject হলো singular 'A bouquet' (ফুলের তোড়া), তাই singular verb 'lies' বসবে। বাকি অপশনগুলো কেন নয়: 'lie', 'are lying' এবং 'were lying' plural।"
            },
            {
                q: "The rich _____ not always content with what they have.",
                options: ["is", "was", "are", "has"],
                ans: 2,
                exp: "'The + adjective' ('The rich') সমগ্র plural শ্রেণিকে বোঝায় বলে plural verb ('are') বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' এবং 'has' singular।"
            },
            {
                q: "There _____ many reasons behind his sudden resignation.",
                options: ["is", "was", "are", "has"],
                ans: 2,
                exp: "Introductory 'There'-যুক্ত বাক্যে Verb পরের Subject ('many reasons', plural) অনুযায়ী বসে; তাই 'are' সঠিক। বাকি অপশনগুলো কেন নয়: 'is', 'was' এবং 'has' singular।"
            },
            {
                q: "The committee _____ unanimously approved the proposal.",
                options: ["have", "has", "are", "were"],
                ans: 1,
                exp: "'unanimously' (সর্বসম্মতিক্রমে) বোঝাচ্ছে কমিটি এককভাবে সিদ্ধান্ত নিয়েছে, তাই singular verb 'has' সঠিক। বাকি অপশনগুলো কেন নয়: 'have', 'are' এবং 'were' plural।"
            },
            {
                q: "Every student and every teacher _____ invited to the ceremony.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'every' যুক্ত থাকায় verb singular ('is') হবে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural।"
            },
            {
                q: "More than one candidate _____ applied for the position.",
                options: ["have", "has", "are", "were"],
                ans: 1,
                exp: "'More than one + singular noun' কাঠামোতে verb singular ('has') হয়। বাকি অপশনগুলো কেন নয়: 'have', 'are' এবং 'were' plural।"
            },
            {
                q: "More than two students _____ absent yesterday.",
                options: ["was", "is", "were", "has"],
                ans: 2,
                exp: "'More than two + plural noun' কাঠামোতে verb plural ('were') হয়। বাকি অপশনগুলো কেন নয়: 'was', 'is' এবং 'has' singular।"
            },
            {
                q: "The quality of these mangoes _____ not good.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "মূল Subject হলো singular 'The quality' ('these mangoes' prepositional phrase-এর object), তাই singular verb 'is' বসবে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural 'mangoes' দেখে ভুলভাবে নির্বাচিত হয়।"
            },
            {
                q: "My spectacles _____ broken.",
                options: ["is", "was", "are", "has"],
                ans: 2,
                exp: "'Spectacles' (চশমা) সর্বদা plural হিসেবে গণ্য হয় এবং plural verb ('are') নেয়। বাকি অপশনগুলো কেন নয়: 'is', 'was' এবং 'has' singular।"
            },
            {
                q: "All that glitters _____ not gold.",
                options: ["are", "were", "is", "have"],
                ans: 2,
                exp: "'All' যখন সামগ্রিক একক অর্থে ('সবকিছুই') ব্যবহৃত হয়, তখন singular verb 'is' বসে। বাকি অপশনগুলো কেন নয়: 'are', 'were' এবং 'have' plural।"
            }
        ]
    },
"Causative Verbs": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Causative Verb কী এবং Active ও Passive অর্থে 'make', 'have', 'get', 'let' ও 'help'-এর গঠনগত পার্থক্য উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "The teacher made the students _____ the passage twice.",
            options: ["read", "to read", "reading", "readed"],
            ans: 0,
            exp: "Active বাক্যে 'make + person + bare infinitive' কাঠামো ব্যবহৃত হয়, তাই 'read' সঠিক। বাকি অপশনগুলো কেন নয়: active 'make'-এর পর 'to read' বসে না; 'reading' continuous/gerund রূপ; 'readed' কোনো প্রমিত verb form নয়।"
        },
        {
            q: "I had my hair _____ at the salon yesterday.",
            options: ["cut", "cuts", "cutting", "to cut"],
            ans: 0,
            exp: "'have + object + past participle' passive causative কাঠামোতে চুল নিজে কাটে না বরং কাটা হয় বোঝাতে past participle 'cut' (cut-cut-cut) বসে। বাকি অপশনগুলো কেন নয়: 'cuts' singular present; 'cutting' সক্রিয় অর্থ দেয়; 'to cut' এই passive causative কাঠামোতে প্রমিত নয়।"
        },
        {
            q: "She got the mechanic _____ the engine before the trip.",
            options: ["check", "to check", "checking", "checked"],
            ans: 1,
            exp: "Active causative অর্থে 'get + person + to-infinitive' ('to check') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'get'-এর পরে ব্যক্তি থাকলে সাধারণত bare 'check' না বসে 'to check' বসে; 'checking' চলমান অর্থ দেয়; 'checked' past participle (যা বস্তুর ওপর প্রয়োগ হয়)।"
        },
        {
            q: "She got her car _____ before the trip.",
            options: ["wash", "to wash", "washing", "washed"],
            ans: 3,
            exp: "'get + thing/object + past participle' passive causative কাঠামোতে গাড়িটি ধোয়া হয় বোঝাতে 'washed' বসে। বাকি অপশনগুলো কেন নয়: 'wash' বা 'to wash' সক্রিয় কাজ বোঝায়; 'washing' চলমানতা দেখায়।"
        },
        {
            q: "He let me _____ his notes for the exam.",
            options: ["borrow", "to borrow", "borrowing", "borrowed"],
            ans: 0,
            exp: "'let + person + bare infinitive' কাঠামো অনুযায়ী 'borrow' সঠিক। বাকি অপশনগুলো কেন নয়: 'let'-এর পরে 'to borrow', 'borrowing' বা 'borrowed' প্রমিত নয়।"
        },
        {
            q: "They had a mason _____ a new wall around the yard.",
            options: ["build", "to build", "built", "building"],
            ans: 0,
            exp: "Active causative অর্থে 'have + person + bare infinitive' ('build') বসে। বাকি অপশনগুলো কেন নয়: 'have'-এর পরে ব্যক্তি থাকলে 'to build' বসে না; 'built' past participle; 'building' চলমান রূপ।"
        },
        {
            q: "I must have this document _____ by a notary public.",
            options: ["sign", "to sign", "signing", "signed"],
            ans: 3,
            exp: "নথিটি স্বাক্ষরিত করানো (passive causative) বোঝাতে 'have + object + past participle' ('signed') বসে। বাকি অপশনগুলো কেন নয়: 'sign' বা 'to sign' সক্রিয় অর্থ দেয়; 'signing' চলমান রূপ।"
        },
        {
            q: "The manager got the report _____ on time.",
            options: ["submit", "to submit", "submitting", "submitted"],
            ans: 3,
            exp: "রিপোর্টটি জমা দেওয়ানো (passive causative) বোঝাতে past participle 'submitted' বসে। বাকি অপশনগুলো কেন নয়: 'submit' ও 'to submit' সক্রিয় অর্থ দেয়; 'submitting' present participle।"
        },
        {
            q: "His father made him _____ his mistake.",
            options: ["realize", "to realize", "realizing", "realized"],
            ans: 0,
            exp: "Active 'make + object'-এর পরে 'to' ছাড়া verb-এর base form ('realize') বসে। বাকি অপশনগুলো কেন নয়: active-এ 'to realize' ভুল; 'realizing' ও 'realized' এখানে প্রমিত নয়।"
        },
        {
            q: "The students were made _____ the rules strictly.",
            options: ["follow", "to follow", "following", "followed"],
            ans: 1,
            exp: "'make' যখন Passive রূপে ('were made') ব্যবহৃত হয়, তখন এর পরে Full Infinitive ('to follow') বসে। বাকি অপশনগুলো কেন নয়: passive 'were made'-এর পর bare 'follow' ভুল; 'following' ও 'followed' সঠিক নয়।"
        },
        {
            q: "Can you help me _____ this heavy bag upstairs?",
            options: ["carry", "carrying", "carried", "to carrying"],
            ans: 0,
            exp: "'help + object'-এর পরে Bare Infinitive ('carry') বা To-Infinitive ('to carry') উভয়ই শুদ্ধ; অপশন অনুযায়ী 'carry' সঠিক। বাকি অপশনগুলো কেন নয়: 'carried' past participle; 'to carrying' ব্যাকরণগতভাবে ভুল।"
        },
        {
            q: "We will get the plumber _____ the leaking pipe tomorrow.",
            options: ["fix", "to fix", "fixing", "fixed"],
            ans: 1,
            exp: "'get + person (the plumber) + to-infinitive' ('to fix') সঠিক causative গঠন। বাকি অপশনগুলো কেন নয়: 'get + person'-এর পর bare 'fix' সাধারণত আসে না; 'fixing' চলমান এবং 'fixed' বস্তুর ওপর passive অর্থ দেয়।"
        },
        {
            q: "She had her portrait _____ by a famous artist.",
            options: ["paint", "to paint", "painting", "painted"],
            ans: 3,
            exp: "প্রতিকৃতিটি আঁকানো বোঝাতে 'have + object + past participle' ('painted') বসে। বাকি অপশনগুলো কেন নয়: 'paint' বা 'to paint' সক্রিয় অর্থ দেয়; 'painting' চলমান রূপ।"
        },
        {
            q: "Don't let the milk _____ over.",
            options: ["boil", "to boil", "boiling", "boiled"],
            ans: 0,
            exp: "'let + object + bare infinitive' ('boil') নিয়ম অনুযায়ী 'boil' সঠিক। বাকি অপশনগুলো কেন নয়: 'to boil', 'boiling' বা 'boiled' 'let'-এর পরে প্রমিত নয়।"
        },
        {
            q: "The boss had his assistant _____ all the emails.",
            options: ["reply", "to reply", "replied", "relying"],
            ans: 0,
            exp: "Active causative 'have + person + bare infinitive' ('reply') ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'to reply' active 'have'-এর পর বসে না; 'replied' past participle; 'relying' অর্থগতভাবে ভিন্ন।"
        },
        {
            q: "I need to get my shoes _____ before the interview.",
            options: ["polish", "to polish", "polishing", "polished"],
            ans: 3,
            exp: "জুতা পালিশ করানো (passive) বোঝাতে past participle 'polished' বসবে। বাকি অপশনগুলো কেন নয়: 'polish' ও 'to polish' সক্রিয় অর্থ দেয়; 'polishing' চলমানতা বোঝায়।"
        },
        {
            q: "He made his brother _____ the room.",
            options: ["clean", "to clean", "cleaning", "cleaned"],
            ans: 0,
            exp: "Active 'make + object + bare infinitive' ('clean') নিয়ম অনুযায়ী 'clean' সঠিক। বাকি অপশনগুলো কেন নয়: 'to clean', 'cleaning' বা 'cleaned' active 'make'-এর পর প্রমিত নয়।"
        },
        {
            q: "They got the roof _____ before the monsoon started.",
            options: ["repair", "to repair", "repairing", "repaired"],
            ans: 3,
            exp: "ছাদ মেরামত করানো বোঝাতে 'get + thing + past participle' ('repaired') বসে। বাকি অপশনগুলো কেন নয়: 'repair' বা 'to repair' সক্রিয় অর্থ দেয়; 'repairing' চলমান রূপ।"
        },
        {
            q: "The guard would not let us _____ the restricted area.",
            options: ["enter", "to enter", "entering", "entered"],
            ans: 0,
            exp: "'let + object + bare infinitive' ('enter') কাঠামোতে 'enter' সঠিক। বাকি অপশনগুলো কেন নয়: 'to enter', 'entering' বা 'entered' 'let'-এর পরে ভুল।"
        },
        {
            q: "She always gets her groceries _____ at home.",
            options: ["deliver", "to deliver", "delivering", "delivered"],
            ans: 3,
            exp: "মুদিপণ্য বাসায় পৌঁছে দেওয়ানো (passive causative) বোঝাতে past participle 'delivered' বসে। বাকি অপশনগুলো কেন নয়: 'deliver' ও 'to deliver' সক্রিয় অর্থ দেয়; 'delivering' চলমান রূপ।"
        },
        {
            q: "What caused the delay? Here 'caused' is a —",
            options: ["Transitive Verb", "Modal Verb", "Linking Verb", "Intransitive Verb"],
            ans: 0,
            exp: "'caused' ক্রিয়ার Direct Object ('the delay') থাকায় এটি সাধারণ Transitive Verb। বাকি অপশনগুলো কেন নয়: এটি modal, linking বা object-হীন intransitive verb নয়।"
        },
        {
            q: "I had the technician _____ the router properly.",
            options: ["configure", "to configure", "configured", "configuring"],
            ans: 0,
            exp: "Active causative 'have + person + bare infinitive' ('configure') নিয়ম অনুযায়ী 'configure' সঠিক। বাকি অপশনগুলো কেন নয়: 'to configure' active 'have'-এর পর আসে না; 'configured' past participle; 'configuring' চলমান রূপ।"
        },
        {
            q: "She got her eyesight _____ last month.",
            options: ["test", "to test", "testing", "tested"],
            ans: 3,
            exp: "দৃষ্টিশক্তি পরীক্ষা করানো (passive) বোঝাতে past participle 'tested' বসে। বাকি অপশনগুলো কেন নয়: 'test' ও 'to test' সক্রিয় অর্থ দেয়; 'testing' চলমান রূপ।"
        },
        {
            q: "The comedian made the audience _____ loudly.",
            options: ["laugh", "to laugh", "laughing", "laughed"],
            ans: 0,
            exp: "Active 'make + object + bare infinitive' ('laugh') নিয়ম অনুযায়ী 'laugh' সঠিক। বাকি অপশনগুলো কেন নয়: 'to laugh', 'laughing' বা 'laughed' active 'make'-এর পর প্রমিত নয়।"
        },
        {
            q: "Let me _____ you a piece of advice.",
            options: ["give", "to give", "giving", "given"],
            ans: 0,
            exp: "'Let + me + bare infinitive' ('give') কাঠামোতে 'give' সঠিক। বাকি অপশনগুলো কেন নয়: 'to give', 'giving' বা 'given' এখানে প্রমিত নয়।"
        }
    ]
},
"The Subjunctive Mood": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Subjunctive Mood কী এবং Mandative Subjunctive (demand, suggest, insist, recommend, essential) ও Unreal/Hypothetical Subjunctive ('were', 'had')-এর নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "The committee recommended that the rule _____ enforced immediately.",
            options: ["is", "be", "was", "being"],
            ans: 1,
            exp: "'recommend that...' mandative subjunctive কাঠামোতে verb-এর bare/base form ('be') বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' বা 'being' mandative subjunctive-এর প্রমিত base form নয়।"
        },
        {
            q: "I wish I _____ taller than I am.",
            options: ["am", "was", "were", "will be"],
            ans: 2,
            exp: "'I wish'-যুক্ত অবাস্তব বা কাল্পনিক ইচ্ছায় Subjunctive mood হিসেবে 'were' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'am' বা 'will be' অবাস্তব কল্পনায় প্রমিত নয়; formal/standard subjunctive-এ 'were' শুদ্ধ।"
        },
        {
            q: "It is essential that every candidate _____ the instructions carefully.",
            options: ["reads", "read", "is reading", "has read"],
            ans: 1,
            exp: "'It is essential that + subject + base verb' mandative subjunctive নিয়মে third person singular subject 'every candidate'-এর সাথেও base form 'read' বসে। বাকি অপশনগুলো কেন নয়: 'reads' indicative singular; 'is reading' ও 'has read' subjunctive base form নয়।"
        },
        {
            q: "He speaks as if he _____ the boss here.",
            options: ["is", "was", "were", "will be"],
            ans: 2,
            exp: "বর্তমানের অবাস্তব বা কাল্পনিক তুলনা ('as if he were...') বোঝাতে subjunctive 'were' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'is' বা 'will be' কাল্পনিক ভাব প্রকাশে কম স্বাভাবিক; formal subjunctive-এ 'were' উত্তম।"
        },
        {
            q: "The doctor insisted that the patient _____ complete rest.",
            options: ["takes", "take", "took", "has taken"],
            ans: 1,
            exp: "'insist that...' mandative subjunctive কাঠামোতে base verb 'take' বসে। বাকি অপশনগুলো কেন নয়: 'takes' indicative singular; 'took' indicative past; 'has taken' present perfect।"
        },
        {
            q: "Had I _____ wings, I would fly to my hometown.",
            options: ["have", "has", "had", "having"],
            ans: 2,
            exp: "Inverted unreal conditional ('Had I had wings...')-এ 'had' auxiliary এবং 'had' main/past participle হিসেবে বসে। বাকি অপশনগুলো কেন নয়: 'have', 'has' বা 'having' এই past unreal কাঠামোতে প্রমিত নয়।"
        },
        {
            q: "God _____ the king! (Traditional subjunctive)",
            options: ["save", "saves", "saved", "saving"],
            ans: 0,
            exp: "কামনা বা প্রার্থনা প্রকাশক ঐতিহ্যবাহী subjunctive-এ 'God' singular হওয়া সত্ত্বেও base verb 'save' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'saves' indicative; 'saved' past এবং 'saving' participle।"
        },
        {
            q: "They demanded that the manager _____ an explanation.",
            options: ["gives", "give", "gave", "is giving"],
            ans: 1,
            exp: "'demand that...' mandative subjunctive নিয়মে base verb 'give' বসে। বাকি অপশনগুলো কেন নয়: 'gives', 'gave' এবং 'is giving' এখানে subjunctive base form নয়।"
        },
        {
            q: "Suppose he _____ late, what would you do?",
            options: ["is", "were", "will be", "has been"],
            ans: 1,
            exp: "অনুমান বা কাল্পনিক শর্ত ('Suppose he were late...') বোঝাতে subjunctive 'were' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'is', 'will be' বা 'has been' এই hypothetical অনুমানে প্রমিত নয়।"
        },
        {
            q: "It is vital that she _____ present at the hearing.",
            options: ["is", "be", "was", "has been"],
            ans: 1,
            exp: "'It is vital that...' mandative subjunctive কাঠামোতে base form 'be' বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' এবং 'has been' subjunctive base form নয়।"
        },
        {
            q: "If she _____ more careful, she would not have made that error.",
            options: ["is", "were", "had been", "has been"],
            ans: 2,
            exp: "অতীতের অবাস্তব শর্ত ও ফলাফলে ('would not have made') 'If she had been...' বসে। বাকি অপশনগুলো কেন নয়: 'is' বা 'has been' present; 'were' সাধারণত present/future unreal condition-এ আসে।"
        },
        {
            q: "He proposed that we _____ the meeting until Monday.",
            options: ["postpone", "postpones", "postponed", "are postponing"],
            ans: 0,
            exp: "'propose that...' mandative subjunctive কাঠামোতে base verb 'postpone' বসে। বাকি অপশনগুলো কেন নয়: 'postpones', 'postponed' বা 'are postponing' subjunctive base form নয়।"
        },
        {
            q: "_____ that I could see my grandmother once more!",
            options: ["If", "Would", "Should", "Could"],
            ans: 1,
            exp: "তীব্র আকাঙ্ক্ষা বা কামনা প্রকাশে 'Would that...' কাঠামো ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'If', 'Should' বা 'Could' দিয়ে এই নির্দিষ্ট wish/optative বাক্যের সূচনা প্রমিত নয়।"
        },
        {
            q: "The law requires that every citizen _____ taxes honestly.",
            options: ["pays", "pay", "paid", "is paying"],
            ans: 1,
            exp: "'require that...' mandative subjunctive নিয়মে base form 'pay' বসে। বাকি অপশনগুলো কেন নয়: 'pays' indicative singular; 'paid' past; 'is paying' continuous।"
        },
        {
            q: "He acted as though he _____ all the facts.",
            options: ["knows", "knew", "has known", "will know"],
            ans: 1,
            exp: "'as though'-এর আগে past tense 'acted' থাকায় অবাস্তব/কাল্পনিক ধারণায় past subjunctive 'knew' বসে। বাকি অপশনগুলো কেন নয়: 'knows' present; 'has known' present perfect; 'will know' future।"
        },
        {
            q: "It is necessary that he _____ informed in advance.",
            options: ["is", "be", "was", "being"],
            ans: 1,
            exp: "'It is necessary that...' mandative subjunctive কাঠামোতে passive base form 'be' বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' বা 'being' সঠিক নয়।"
        },
        {
            q: "If I _____ you, I would accept the offer.",
            options: ["am", "was", "were", "will be"],
            ans: 2,
            exp: "'If I were you' একটি সুপরিচিত Subjunctive idiom যার অর্থ 'আমি যদি তোমার জায়গায় থাকতাম'। বাকি অপশনগুলো কেন নয়: 'am' বা 'will be' ভুল; formal grammar-এ 'was'-এর চেয়ে 'were' শুদ্ধ।"
        },
        {
            q: "They suggested that the seminar _____ held online.",
            options: ["is", "be", "are", "was"],
            ans: 1,
            exp: "'suggest that...' mandative subjunctive কাঠামোতে base verb 'be' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'is', 'are' এবং 'was' indicative রূপ।"
        },
        {
            q: "Long _____ the people's solidarity!",
            options: ["lives", "live", "lived", "living"],
            ans: 1,
            exp: "প্রার্থনা বা শুভকামনা প্রকাশক subjunctive বাক্যে ('Long live...') base verb 'live' বসে। বাকি অপশনগুলো কেন নয়: 'lives', 'lived' বা 'living' সঠিক নয়।"
        },
        {
            q: "She wishes she _____ how to swim.",
            options: ["knows", "knew", "has known", "will know"],
            ans: 1,
            exp: "বর্তমানে না জানা সত্ত্বেও জানার অবাস্তব ইচ্ছা বোঝাতে 'wishes she knew' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'knows' বাস্তব বর্তমান বোঝায়; 'has known' ও 'will know' এই wish কাঠামোতে অনুপযুক্ত।"
        },
        {
            q: "It is imperative that everyone _____ punctual.",
            options: ["is", "be", "was", "will be"],
            ans: 1,
            exp: "'It is imperative that...' mandative subjunctive কাঠামোতে 'be' বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' বা 'will be' mandative subjunctive-এর base form নয়।"
        },
        {
            q: "Were he _____ here, he could solve the dispute.",
            options: ["be", "to be", "been", "being"],
            ans: 0,
            exp: "'Were he here' (অর্থাৎ 'If he were here')-এ 'Were' ইতোমধ্যে verb হিসেবে থাকায় এর পরে সরাসরি 'here' বসে—কিন্তু কোনো verb চাইলে base form 'be' হয়। বাকি অপশনগুলো কেন নয়: 'to be', 'been' বা 'being' এখানে প্রমিত নয়।"
        },
        {
            q: "The judge ordered that the witness _____ heard.",
            options: ["is", "be", "was", "are"],
            ans: 1,
            exp: "'order that...' mandative subjunctive কাঠামোতে passive base form 'be' ('be heard') বসে। বাকি অপশনগুলো কেন নয়: 'is', 'was' বা 'are' subjunctive base form নয়।"
        },
        {
            q: "I would rather you _____ smoking inside the room.",
            options: ["stop", "stopped", "have stopped", "will stop"],
            ans: 1,
            exp: "'would rather + subject + past verb' কাঠামোতে বর্তমান বা ভবিষ্যতের কোনো কাজ না করার অনুরোধ/ইচ্ছা বোঝাতে Past Simple ('stopped') বসে। বাকি অপশনগুলো কেন নয়: 'stop', 'have stopped' বা 'will stop' এই subject-পরিবর্তিত 'would rather' কাঠামোতে প্রমিত নয়।"
        },
        {
            q: "Heaven _____ us all!",
            options: ["protects", "protect", "protected", "protecting"],
            ans: 1,
            exp: "প্রার্থনা বা কামনাসূচক subjunctive বাক্যে 'Heaven' singular হলেও base verb 'protect' বসে। বাকি অপশনগুলো কেন নয়: 'protects', 'protected' বা 'protecting' সঠিক নয়।"
        }
    ]
},
"Phrase & Clause (Identification & Functions)": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Phrase ও Clause-এর মৌলিক পার্থক্য এবং Noun, Adjective ও Adverbial Clause/Phrase কীভাবে বাক্যে কাজ করে তা উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "Identify the underlined clause: 'I know where he lives.'",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause", "Principal Clause"],
            ans: 0,
            exp: "'where he lives' অংশটি 'know' transitive verb-এর Object ('কী জানি?') হিসেবে কাজ করছে, তাই এটি Noun Clause। বাকি অপশনগুলো কেন নয়: কোনো noun-কে মডিফাই করছে না বলে Adjective Clause নয়; সময়-স্থান-কারণ বোঝাচ্ছে না বলে Adverbial Clause নয়; নিজে স্বাধীনভাবে দাঁড়াতে পারে না বলে Principal Clause নয়।"
        },
        {
            q: "This is the house that Jack built. Here 'that Jack built' is a/an —",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause", "Independent Clause"],
            ans: 1,
            exp: "'that Jack built' clause-টি antecedent Noun 'the house'-কে মডিফাই করছে, তাই এটি Adjective Clause। বাকি অপশনগুলো কেন নয়: verb-এর object/subject হিসেবে বসেনি বলে Noun Clause নয়; ক্রিয়াকে মডিফাই করছে না বলে Adverbial Clause নয়; 'that' থাকায় এটি subordinate।"
        },
        {
            q: "Identify the type of clause: 'Call me when you reach home.'",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause of Time", "Principal Clause"],
            ans: 2,
            exp: "'when you reach home' অংশটি 'Call' ক্রিয়াকে কখন ডাকতে হবে (সময়) তা বোঝাচ্ছে, তাই এটি Adverbial Clause of Time। বাকি অপশনগুলো কেন নয়: noun-এর কাজ করছে না বলে Noun Clause নয়; কোনো noun-কে মডিফাই করছে না বলে Adjective Clause নয়।"
        },
        {
            q: "What is the key structural difference between a Phrase and a Clause?",
            options: ["A phrase always has a finite verb", "A clause contains a subject and a finite verb, whereas a phrase does not", "A phrase is always a complete sentence", "A clause never has a verb"],
            ans: 1,
            exp: "Clause-এ Subject এবং Finite Verb থাকে, কিন্তু Phrase-এ কোনো Finite Verb থাকে না। বাকি অপশনগুলো কেন নয়: phrase-এ finite verb থাকে না; phrase পূর্ণ বাক্য নয়; clause-এ verb থাকে।"
        },
        {
            q: "In 'Reading books is a good habit,' what is 'Reading books'?",
            options: ["Noun Phrase", "Adjective Phrase", "Adverbial Phrase", "Subordinate Clause"],
            ans: 0,
            exp: "'Reading books' অংশে কোনো finite verb নেই এবং এটি 'is' ক্রিয়ার Subject (Noun-এর কাজ) হিসেবে বসছে, তাই এটি Noun Phrase। বাকি অপশনগুলো কেন নয়: adjective বা adverbial কাজ করছে না; finite verb না থাকায় এটি Clause নয়।"
        },
        {
            q: "In 'The man with a long beard is a scholar,' 'with a long beard' is a/an —",
            options: ["Adjective Phrase", "Adverbial Phrase", "Noun Clause", "Principal Clause"],
            ans: 0,
            exp: "'with a long beard' prepositional phrase-টি Noun 'The man'-কে মডিফাই করছে, তাই এটি Adjective Phrase। বাকি অপশনগুলো কেন নয়: এটি ক্রিয়াকে নয় বরং noun-কে মডিফাই করছে বলে Adverbial Phrase নয়; finite verb না থাকায় Clause নয়।"
        },
        {
            q: "In 'He fought with great courage,' what is 'with great courage'?",
            options: ["Adjective Phrase", "Adverbial Phrase of Manner", "Noun Phrase", "Relative Clause"],
            ans: 1,
            exp: "'with great courage' অংশটি 'fought' ক্রিয়াকে কীভাবে লড়েছিল (manner) তা বোঝাচ্ছে, তাই এটি Adverbial Phrase। বাকি অপশনগুলো কেন নয়: noun মডিফাই করছে না বলে Adjective Phrase নয়; finite verb না থাকায় Clause নয়।"
        },
        {
            q: "Identify the clause: 'That he is honest is known to all.'",
            options: ["Adjective Clause", "Adverbial Clause", "Noun Clause (Subject)", "Coordinating Clause"],
            ans: 2,
            exp: "'That he is honest' পুরো clause-টি 'is known' ক্রিয়ার Subject হিসেবে কাজ করছে, তাই এটি Noun Clause। বাকি অপশনগুলো কেন নয়: কোনো noun বা verb মডিফাই করছে না বলে Adjective বা Adverbial Clause নয়; coordinating conjunction দিয়ে যুক্ত নয়।"
        },
        {
            q: "In 'I do not know the reason why he resigned,' 'why he resigned' is a/an —",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause of Purpose", "Principal Clause"],
            ans: 1,
            exp: "'why he resigned' clause-টি পূর্ববর্তী Noun 'the reason'-কে মডিফাই করে কোন কারণ তা নির্দিষ্ট করছে, তাই এটি Adjective Clause। বাকি অপশনগুলো কেন নয়: এটি 'know'-এর সরাসরি object না হয়ে 'the reason'-এর modifier হিসেবে আছে।"
        },
        {
            q: "Identify the type of clause: 'If you work hard, you will prosper.'",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause of Condition", "Principal Clause"],
            ans: 2,
            exp: "'If you work hard' শর্ত বোঝাচ্ছে এবং 'will prosper' ক্রিয়ার শর্তাধীন প্রেক্ষাপট দিচ্ছে, তাই এটি Adverbial Clause of Condition। বাকি অপশনগুলো কেন নয়: noun বা adjective clause নয়; প্রধান অংশ হলো 'you will prosper'।"
        },
        {
            q: "In 'A stitch in time saves nine,' 'in time' is a/an —",
            options: ["Adverbial Phrase", "Adjective Phrase", "Noun Clause", "Subordinate Clause"],
            ans: 1,
            exp: "'in time' phrase-টি 'A stitch'-এর সাথে যুক্ত হয়ে উপযুক্ত সময়ের সেলাই বোঝাচ্ছে এবং noun/noun phrase-কে মডিফাই করছে (Adjective Phrase)। বাকি অপশনগুলো কেন নয়: finite verb না থাকায় এটি Clause নয়।"
        },
        {
            q: "What is the function of the clause in: 'My belief is that he will succeed.'?",
            options: ["Subject of a verb", "Subject Complement (Noun Clause)", "Object of a preposition", "Adverbial modifier"],
            ans: 1,
            exp: "Linking verb 'is'-এর পরে বসে 'that he will succeed' Subject 'My belief'-এর পরিচয়/ব্যাখ্যা দিচ্ছে, তাই এটি Subject Complement হিসেবে Noun Clause। বাকি অপশনগুলো কেন নয়: এটি subject বা preposition-এর object নয়; adverbial modifier-ও নয়।"
        },
        {
            q: "In 'He walked at a brisk pace,' 'at a brisk pace' is a/an —",
            options: ["Adverbial Phrase", "Adjective Phrase", "Noun Phrase", "Independent Clause"],
            ans: 0,
            exp: "'at a brisk pace' ক্রিয়ার ('walked') গতি বা ধরন বোঝাচ্ছে, তাই এটি Adverbial Phrase। বাকি অপশনগুলো কেন নয়: noun মডিফাই করছে না; finite verb না থাকায় Clause নয়।"
        },
        {
            q: "Identify the clause: 'Although he was tired, he kept working.'",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause of Concession/Contrast", "Principal Clause"],
            ans: 2,
            exp: "'Although he was tired' বৈপরীত্য বা concession প্রকাশ করছে, তাই এটি Adverbial Clause of Concession। বাকি অপশনগুলো কেন নয়: noun বা adjective clause নয়; 'he kept working' হলো Principal Clause।"
        },
        {
            q: "In 'The boy wearing a blue shirt is my brother,' 'wearing a blue shirt' is a —",
            options: ["Participial Phrase (Post-modifier)", "Noun Clause", "Adverbial Clause", "Finite Clause"],
            ans: 0,
            exp: "'wearing a blue shirt'-এ finite verb নেই এবং এটি 'The boy'-কে মডিফাই করছে, তাই এটি Participial Phrase। বাকি অপশনগুলো কেন নয়: finite verb না থাকায় এটি Clause নয়।"
        },
        {
            q: "In 'We depend on what he decides,' 'what he decides' is a —",
            options: ["Noun Clause (Object of preposition 'on')", "Adjective Clause", "Adverbial Clause", "Adjective Phrase"],
            ans: 0,
            exp: "Preposition 'on'-এর Object হিসেবে 'what he decides' ব্যবহৃত হয়েছে, তাই এটি Noun Clause। বাকি অপশনগুলো কেন নয়: এটি কোনো noun-কে মডিফাই করছে না; finite verb থাকায় এটি Phrase নয়।"
        },
        {
            q: "In 'He ran as fast as he could,' 'as fast as he could' is a/an —",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause of Manner/Degree", "Noun Phrase"],
            ans: 2,
            exp: "'ran' ক্রিয়া কত দ্রুত বা কীভাবে ঘটেছিল তা বোঝাচ্ছে, তাই এটি Adverbial Clause। বাকি অপশনগুলো কেন নয়: noun বা adjective clause নয়; finite verb থাকায় phrase নয়।"
        },
        {
            q: "Identify the phrase in: 'In the end, truth prevails.'",
            options: ["Noun Phrase", "Adverbial Phrase of Time", "Adjective Clause", "Principal Clause"],
            ans: 1,
            exp: "'In the end' সময়বাচক অতিরিক্ত তথ্য দিচ্ছে এবং এতে কোনো finite verb নেই, তাই এটি Adverbial Phrase। বাকি অপশনগুলো কেন নয়: finite verb না থাকায় Clause নয়।"
        },
        {
            q: "In 'I met a girl who can speak five languages,' 'who can speak five languages' is a/an —",
            options: ["Noun Clause", "Adjective Clause", "Adverbial Clause", "Noun Phrase"],
            ans: 1,
            exp: "'who can speak five languages' clause-টি 'a girl'-কে মডিফাই করছে, তাই এটি Adjective Clause। বাকি অপশনগুলো কেন নয়: noun বা adverbial clause নয়।"
        },
        {
            q: "Which of the following is a Noun Phrase functioning as Direct Object?",
            options: ["He arrived late.", "She bought a leather bag.", "They play in the field.", "Birds fly high."],
            ans: 1,
            exp: "'a leather bag' একটি Noun Phrase যা 'bought' ক্রিয়ার Direct Object হিসেবে ব্যবহৃত হয়েছে। বাকি অপশনগুলো কেন নয়: 'late' ও 'high' adverb; 'in the field' adverbial phrase।"
        },
        {
            q: "In 'She spoke so softly that nobody could hear her,' 'that nobody could hear her' is a/an —",
            options: ["Adverbial Clause of Result", "Noun Clause", "Adjective Clause", "Adjective Phrase"],
            ans: 0,
            exp: "'so ... that' কাঠামোতে 'that nobody could hear her' ফলাফল (result) প্রকাশ করছে, তাই এটি Adverbial Clause of Result। বাকি অপশনগুলো কেন নয়: noun বা adjective clause নয়।"
        },
        {
            q: "In 'To tell a lie is a great sin,' 'To tell a lie' is a/an —",
            options: ["Infinitive Phrase (Noun Phrase as Subject)", "Adjective Phrase", "Adverbial Clause", "Relative Clause"],
            ans: 0,
            exp: "'To tell a lie'-এ finite verb নেই এবং এটি 'is' ক্রিয়ার Subject হিসেবে Noun-এর কাজ করছে, তাই এটি Infinitive/Noun Phrase। বাকি অপশনগুলো কেন নয়: adjective বা clause নয়।"
        },
        {
            q: "Identify the clause: 'Whatever you say will be recorded.'",
            options: ["Adjective Clause", "Adverbial Clause", "Noun Clause (Subject)", "Prepositional Phrase"],
            ans: 2,
            exp: "'Whatever you say' পুরো clause-টি 'will be recorded' ক্রিয়ার Subject হিসেবে কাজ করছে, তাই এটি Noun Clause। বাকি অপশনগুলো কেন নয়: কোনো noun বা verb মডিফাই করছে না; prepositional phrase নয়।"
        },
        {
            q: "In 'The sun having risen, the fog dispersed,' 'The sun having risen' is a —",
            options: ["Nominative Absolute Phrase", "Subordinate Clause", "Noun Clause", "Adjective Clause"],
            ans: 0,
            exp: "নিজস্ব subject ('The sun') ও non-finite participle ('having risen') থাকলেও finite verb না থাকায় এটি Nominative Absolute Phrase। বাকি অপশনগুলো কেন নয়: finite verb না থাকায় এটি Clause নয়।"
        },
        {
            q: "In 'He stayed home because he had a headache,' 'because he had a headache' is a/an —",
            options: ["Adverbial Clause of Reason", "Noun Clause", "Adjective Clause", "Noun Phrase"],
            ans: 0,
            exp: "'because he had a headache' বাড়িতে থাকার কারণ বোঝাচ্ছে, তাই এটি Adverbial Clause of Reason। বাকি অপশনগুলো কেন নয়: noun বা adjective clause নয়।"
        }
    ]
},
"Completing Sentences & Sentence Connectors": {
    status: "live",
    examEndDate: "2026-12-31T23:59:59",
    driveChecklistPdfUrl: "",
    writtenQuestions: [
        {
            question: "১. Completing Sentence-এর গুরুত্বপূর্ণ কাঠামো ('so...that', 'too...to', 'lest', 'as soon as', 'provided/providing that') এবং Sentence Connectors-এর (কারণ, ফলাফল, বৈপরীত্য, সংযোজন) ব্যবহার উদাহরণসহ ব্যাখ্যা করো।",
            marks: "৫ নম্বর"
        }
    ],
    questions: [
        {
            q: "He is so weak _____.",
            options: ["to walk", "that he cannot walk", "for walking", "as to walk"],
            ans: 1,
            exp: "'so + adjective + that + clause' কাঠামো অনুযায়ী 'that he cannot walk' সঠিক। বাকি অপশনগুলো কেন নয়: 'too + adjective + to walk' হয়, কিন্তু 'so...that' এর সাথে 'to walk' বসে না; 'for walking' বা 'as to walk' এখানে ভুল।"
        },
        {
            q: "Walk fast lest _____.",
            options: ["you will miss the train", "you should miss the train", "you can miss the train", "you missed the train"],
            ans: 1,
            exp: "'lest'-যুক্ত clause-এ সাধারণত 'should' (বা base verb) বসে আশঙ্কা বোঝায়; তাই 'you should miss the train' সঠিক। বাকি অপশনগুলো কেন নয়: 'lest'-এর সাথে সাধারণত 'will' বা 'can' বসা প্রমিত নয়; 'missed' অতীত অর্থ দেয়।"
        },
        {
            q: "He failed in the exam. _____, he did not lose heart.",
            options: ["Therefore", "However", "Moreover", "Consequently"],
            ans: 1,
            exp: "পরীক্ষায় ফেল করা সত্ত্বেও সাহস না হারানো—এই বৈপরীত্য বোঝাতে connector 'However' বসে। বাকি অপশনগুলো কেন নয়: 'Therefore' ও 'Consequently' ফলাফল বোঝায়; 'Moreover' অতিরিক্ত তথ্য যোগ করে।"
        },
        {
            q: "The weather was very rough. _____, the boatmen set out for the river.",
            options: ["Thus", "Nevertheless", "In addition", "For example"],
            ans: 1,
            exp: "বৈরী আবহাওয়া সত্ত্বেও যাত্রা করা—এই বিপরীতধর্মী ধারাবাহিকতা বোঝাতে 'Nevertheless' সঠিক। বাকি অপশনগুলো কেন নয়: 'Thus' ফলাফল/উপসংহার, 'In addition' সংযোজন এবং 'For example' উদাহরণ বোঝায়।"
        },
        {
            q: "Scarcely had we entered the hall _____.",
            options: ["than the program began", "when the program began", "then the program began", "so the program began"],
            ans: 1,
            exp: "'Scarcely had ... when ...' কাঠামো অনুযায়ী 'when the program began' সঠিক। বাকি অপশনগুলো কেন নয়: 'than' সাধারণত 'No sooner'-এর সাথে আসে; 'then' বা 'so' এখানে প্রমিত নয়।"
        },
        {
            q: "He worked hard; _____, he stood first in the merit list.",
            options: ["otherwise", "consequently", "meanwhile", "instead"],
            ans: 1,
            exp: "কঠোর পরিশ্রমের ফলাফল হিসেবে প্রথম হওয়া বোঝাতে 'consequently' ('ফলস্বরূপ') বসে। বাকি অপশনগুলো কেন নয়: 'otherwise' শর্ত/বিকল্প, 'meanwhile' সমসাময়িকতা এবং 'instead' পরিবর্তে অর্থে আসে।"
        },
        {
            q: "I will lend you the book provided that _____.",
            options: ["you return it on time", "you returned it on time", "you will return it on time", "you returning it"],
            ans: 0,
            exp: "'provided that' শর্ত বোঝায় এবং ভবিষ্যৎ শর্তে Present Simple ('you return it on time') বসে। বাকি অপশনগুলো কেন নয়: 'returned' past এবং 'you will return' conditional clause-এ সাধারণত প্রমিত নয়; 'you returning' অসম্পূর্ণ।"
        },
        {
            q: "She is not only a good writer _____.",
            options: ["and a fine speaker", "but also a fine speaker", "or a fine speaker", "yet a fine speaker"],
            ans: 1,
            exp: "'not only ... but also ...' কাঠামো অনুযায়ী 'but also a fine speaker' সঠিক। বাকি অপশনগুলো কেন নয়: 'and', 'or' বা 'yet' 'not only'-এর সঠিক correlative জোড়া নয়।"
        },
        {
            q: "First, boil the water. _____, add tea leaves and sugar.",
            options: ["Next", "However", "Although", "Whereas"],
            ans: 0,
            exp: "ধাপ বা ক্রম বোঝাতে ('প্রথমে পানি ফোটাও। এরপর/তারপর...') 'Next' connector বসে। বাকি অপশনগুলো কেন নয়: 'However' বৈপরীত্য, 'Although' ও 'Whereas' তুলনা/বৈপরীত্য বোঝায়।"
        },
        {
            q: "It is high time we _____.",
            options: ["start our preparation", "started our preparation", "will start our preparation", "have started our preparation"],
            ans: 1,
            exp: "'It is high time + subject + past simple verb' নিয়ম অনুযায়ী 'started our preparation' সঠিক। বাকি অপশনগুলো কেন নয়: 'start', 'will start' বা 'have started' এই কাঠামোতে প্রমিত নয়।"
        },
        {
            q: "He missed the bus; _____, he arrived late for the interview.",
            options: ["as a result", "on the other hand", "in contrast", "similarly"],
            ans: 0,
            exp: "বাস মিস করার ফলস্বরূপ দেরিতে পৌঁছানো বোঝাতে 'as a result' বসে। বাকি অপশনগুলো কেন নয়: 'on the other hand' ও 'in contrast' বৈপরীত্য এবং 'similarly' সাদৃশ্য বোঝায়।"
        },
        {
            q: "No sooner had the thief seen the police _____.",
            options: ["when he fled", "than he fled", "then he fled", "before he fled"],
            ans: 1,
            exp: "'No sooner had ... than ...' কাঠামো অনুযায়ী 'than he fled' সঠিক। বাকি অপশনগুলো কেন নয়: 'when', 'then' বা 'before' 'No sooner'-এর সাথে সঠিক নয়।"
        },
        {
            q: "Solar energy is clean and renewable. _____, it helps reduce carbon emissions.",
            options: ["Moreover", "Conversely", "Instead", "Otherwise"],
            ans: 0,
            exp: "আগে বলা ইতিবাচক তথ্যের সাথে আরেকটি ইতিবাচক তথ্য যোগ করতে 'Moreover' ('তাছাড়া') বসে। বাকি অপশনগুলো কেন নয়: 'Conversely' ও 'Instead' বৈপরীত্য এবং 'Otherwise' বিকল্প শর্ত বোঝায়।"
        },
        {
            q: "Had I seen him earlier, _____.",
            options: ["I will inform him", "I would inform him", "I would have informed him", "I inform him"],
            ans: 2,
            exp: "'Had I seen...' Third Conditional হওয়ায় প্রধান clause-এ 'would have + past participle' ('I would have informed him') বসে। বাকি অপশনগুলো কেন নয়: 'will inform', 'would inform' ও 'inform' অতীতের অবাস্তব শর্তের সাথে মেলে না।"
        },
        {
            q: "Some people prefer urban life, _____ others enjoy the peace of rural areas.",
            options: ["whereas", "therefore", "consequently", "thus"],
            ans: 0,
            exp: "দুটি বিপরীত পছন্দ বা অবস্থার তুলনা করতে 'whereas' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'therefore', 'consequently' ও 'thus' ফলাফল বোঝায়।"
        },
        {
            q: "I cannot afford to buy a new car _____.",
            options: ["so I save money", "because I have limited savings", "although I have enough money", "unless I am rich"],
            ans: 1,
            exp: "নতুন গাড়ি কেনার সামর্থ্য না থাকার কারণ হিসেবে 'because I have limited savings' অর্থগতভাবে সবচেয়ে যৌক্তিক। বাকি অপশনগুলো কেন নয়: 'although I have enough money' অর্থগতভাবে সাংঘর্ষিক; অন্যগুলো এখানে কম স্বাভাবিক।"
        },
        {
            q: "He studied day and night; _____, he could not secure a top rank.",
            options: ["even so", "accordingly", "for instance", "likewise"],
            ans: 0,
            exp: "দিনরাত পড়াশোনা করা সত্ত্বেও শীর্ষ স্থান না পাওয়া—এই বৈপরীত্য বোঝাতে 'even so' বসে। বাকি অপশনগুলো কেন নয়: 'accordingly' ফল, 'for instance' উদাহরণ এবং 'likewise' সাদৃশ্য বোঝায়।"
        },
        {
            q: "Since he was unwell, _____.",
            options: ["he attended the class", "he stayed at home", "he won the race", "he celebrated loudly"],
            ans: 1,
            exp: "অসুস্থ থাকার স্বাভাবিক ফল হিসেবে 'he stayed at home' যুক্তিসঙ্গত। বাকি অপশনগুলো কেন নয়: অসুস্থ অবস্থায় দৌড়ে জেতা বা হইচই করা স্বাভাবিক ফলাফল নয়।"
        },
        {
            q: "You must submit the form before Friday; _____, your application will not be accepted.",
            options: ["otherwise", "moreover", "similarly", "indeed"],
            ans: 0,
            exp: "সময়মতো ফর্ম জমা না দিলে আবেদন গৃহীত হবে না—এই বিকল্প/সতর্কতা বোঝাতে 'otherwise' ('নতুবা/অন্যথায়') বসে। বাকি অপশনগুলো কেন নয়: 'moreover' সংযোজন, 'similarly' সাদৃশ্য এবং 'indeed' নিশ্চয়তা বোঝায়।"
        },
        {
            q: "As soon as the rain stopped, _____.",
            options: ["we resumed our journey", "we have resumed our journey", "we resuming our journey", "than we resumed"],
            ans: 0,
            exp: "অতীতের দুটি ঘটনার দ্রুত ধারাবাহিকতায় ('stopped') 'we resumed our journey' Past Simple-এ শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'we have resumed' tense অসঙ্গতিপূর্ণ; 'we resuming' অসম্পূর্ণ; 'than we resumed' ভুল।"
        },
        {
            q: "Many students face vocabulary problems. _____, regular reading can solve this issue.",
            options: ["However", "Because", "Since", "While"],
            ans: 0,
            exp: "সমস্যার বিপরীতে সমাধানের পথ দেখাতে 'However' connector সবচেয়ে মানানসই। বাকি অপশনগুলো কেন নয়: 'Because', 'Since' ও 'While' বাক্যের এই সংযোগে প্রমিত নয়।"
        },
        {
            q: "He talks as if _____.",
            options: ["he knows everything", "he knew everything", "he will know everything", "he knowing everything"],
            ans: 1,
            exp: "'talks as if'-এর পরে অবাস্তব বা অতিরঞ্জিত ভঙ্গি বোঝাতে Past Simple ('he knew everything') বসে। বাকি অপশনগুলো কেন নয়: 'knows' বাস্তব বর্তমান, 'will know' ভবিষ্যৎ এবং 'he knowing' অসম্পূর্ণ।"
        },
        {
            q: "Online learning is flexible. _____, it requires strong self-discipline.",
            options: ["At the same time", "As a result", "In conclusion", "For example"],
            ans: 0,
            exp: "নমনীয়তার পাশাপাশি আত্মনিয়ন্ত্রণের প্রয়োজনীয়তা—এই বাড়তি বাস্তবতা বা বৈপরীত্য বোঝাতে 'At the same time' সঠিক। বাকি অপশনগুলো কেন নয়: 'As a result' ফল, 'In conclusion' উপসংহার এবং 'For example' উদাহরণ বোঝায়।"
        },
        {
            q: "Hardly had the teacher entered the classroom _____.",
            options: ["than the students stood up", "when the students stood up", "so the students stood up", "then the students stood up"],
            ans: 1,
            exp: "'Hardly had ... when ...' কাঠামো অনুযায়ী 'when the students stood up' সঠিক। বাকি অপশনগুলো কেন নয়: 'than', 'so' বা 'then' 'Hardly'-এর সাথে প্রমিত নয়।"
        },
        {
            q: "In conclusion, _____.",
            options: ["consistency is key to success", "because consistency is key", "if consistency is key", "although consistency"],
            ans: 0,
            exp: "'In conclusion,'-এর পরে একটি পূর্ণ স্বাধীন Clause ('consistency is key to success') থাকা আবশ্যক। বাকি অপশনগুলো কেন নয়: 'because...', 'if...' বা 'although consistency' অসম্পূর্ণ subordinate clause বা fragment।"
        }
    ]
},
const advancedGrammarQuestions = {
    "Conditionals (Zero, First, Second, Third & Mixed)": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Zero, First, Second, Third এবং Mixed Conditional-এর কালগত (Tense) ও অর্থগত পার্থক্য উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "If you heat water to 100°C, it _____.",
                options: ["boil", "boils", "will boil", "would boil"],
                ans: 1,
                exp: "বৈজ্ঞানিক বা সার্বজনীন সত্য বোঝাতে Zero Conditional ('If + Present Simple, Present Simple') ব্যবহৃত হয়; তাই 'boils' সঠিক। বাকি অপশনগুলো কেন নয়: 'boil' singular 'it'-এর সাথে ভুল; 'will boil' বা 'would boil' সার্বজনীন ধ্রুব সত্য প্রকাশের সাধারণ নিয়মে কম স্বাভাবিক।"
            },
            {
                q: "If it rains tomorrow, we _____ the picnic.",
                options: ["postpone", "will postpone", "would postpone", "would have postponed"],
                ans: 1,
                exp: "ভবিষ্যতের সম্ভাব্য শর্তে First Conditional ('If + Present Simple, will + base verb') ব্যবহৃত হয়; তাই 'will postpone' সঠিক। বাকি অপশনগুলো কেন নয়: 'would postpone' second conditional এবং 'would have postponed' third conditional-এর জন্য।"
            },
            {
                q: "If I _____ the prime minister, I would reform the education system.",
                options: ["am", "was", "were", "had been"],
                ans: 2,
                exp: "বর্তমানের অবাস্তব বা কাল্পনিক অবস্থায় Second Conditional ('If + were, would + base verb') ব্যবহৃত হয়; তাই 'were' সঠিক। বাকি অপশনগুলো কেন নয়: 'am' বাস্তব বর্তমান বোঝায়; 'was' প্রমিত formal subjunctive-এ কম শুদ্ধ; 'had been' অতীতের অবাস্তব শর্ত বোঝায়।"
            },
            {
                q: "If she had caught the early bus, she _____ the exam on time.",
                options: ["will attend", "would attend", "would have attended", "attends"],
                ans: 2,
                exp: "অতীতের অবাস্তব শর্তে Third Conditional ('If + had + past participle, would have + past participle') বসে; তাই 'would have attended' সঠিক। বাকি অপশনগুলো কেন নয়: 'will attend' ও 'attends' বর্তমান/ভবিষ্যতের জন্য; 'would attend' দ্বিতীয় শর্তের জন্য।"
            },
            {
                q: "If I had taken my umbrella this morning, I _____ wet now.",
                options: ["would not get", "would not have got", "will not get", "did not get"],
                ans: 0,
                exp: "এটি একটি Mixed Conditional: অতীতের কাজ ('had taken') না করার কারণে বর্তমান ফলাফল ('would not get wet now') বোঝাচ্ছে, তাই 'would not get' সঠিক। বাকি অপশনগুলো কেন নয়: 'would not have got' অতীতের ফলাফল বোঝায়; 'will not get' ও 'did not get' এই কাল্পনিক ফলাফল প্রকাশ করে না।"
            },
            {
                q: "Unless you _____ hard, you cannot succeed in a competitive exam.",
                options: ["work", "worked", "will work", "had worked"],
                ans: 0,
                exp: "'Unless'-যুক্ত শর্তাধীন clause-এ সাধারণত Present Simple ('work') বসে। বাকি অপশনগুলো কেন নয়: 'will work' conditional clause-এ সাধারণত বসে না; 'worked' ও 'had worked' অতীত শর্তের রূপ।"
            },
            {
                q: "Had he informed me earlier, I _____ him.",
                options: ["will help", "would help", "would have helped", "helped"],
                ans: 2,
                exp: "'Had he informed...' হলো Third Conditional-এর inverted রূপ, যার প্রধান clause-এ 'would have helped' বসে। বাকি অপশনগুলো কেন নয়: 'will help', 'would help' ও 'helped' অতীতের অপূর্ণ শর্তের ফলাফলে ভুল।"
            },
            {
                q: "If you mix red and blue, you _____ purple.",
                options: ["get", "got", "would get", "would have got"],
                ans: 0,
                exp: "রঙ মিশ্রণের স্থায়ী ফল বা Zero Conditional অনুযায়ী Present Simple ('get') সঠিক। বাকি অপশনগুলো কেন নয়: 'got' past; 'would get' ও 'would have got' কাল্পনিক বা অতীত শর্ত নির্দেশ করে।"
            },
            {
                q: "What would you do if you _____ a wallet full of money on the street?",
                options: ["find", "found", "had found", "will find"],
                ans: 1,
                exp: "প্রধান clause-এ 'would do' থাকায় এটি Second Conditional ('If + Past Simple')—তাই 'found' সঠিক। বাকি অপশনগুলো কেন নয়: 'find' ও 'will find' প্রথম শর্তের জন্য; 'had found' তৃতীয় শর্তের জন্য।"
            },
            {
                q: "If he were more disciplined, he _____ his time like this.",
                options: ["will not waste", "would not waste", "would not have wasted", "does not waste"],
                ans: 1,
                exp: "বর্তমানের অবাস্তব শর্ত ('If he were...') অনুযায়ী প্রধান clause-এ 'would not waste' বসে। বাকি অপশনগুলো কেন নয়: 'will not waste' ও 'does not waste' বাস্তব ভবিষ্যৎ/বর্তমানের জন্য; 'would not have wasted' অতীতের জন্য।"
            },
            {
                q: "If they had left earlier, they _____ in this traffic jam now.",
                options: ["would not be stuck", "would not have been stuck", "will not be stuck", "are not stuck"],
                ans: 0,
                exp: "অতীতের শর্ত ('had left earlier')-এর বর্তমান ফলাফল ('now') বোঝাতে Mixed Conditional-এ 'would not be stuck' বসে। বাকি অপশনগুলো কেন নয়: 'would not have been stuck' অতীতের অবস্থায় আটকে না থাকার কথা বলে; 'will not be stuck' ও 'are not stuck' এই কাল্পনিক বর্তমানের সাথে মেলে না।"
            },
            {
                q: "If I had enough money, I _____ that reference book yesterday.",
                options: ["would buy", "would have bought", "will buy", "bought"],
                ans: 1,
                exp: "এখানে শর্তটি সাধারণ/বর্তমান মনে হলেও ফলাফলটি গতকালের ('yesterday') অতীত ঘটনা—বাক্যের সামঞ্জস্য ও মানসম্মত conditional গঠনে 'would have bought' দিয়ে অতীতের ফলাফল বোঝানো হয়। বাকি অপশনগুলো কেন নয়: 'would buy' বর্তমান/ভবিষ্যৎ বোঝায়; 'will buy' ও 'bought' সঠিক নয়।"
            },
            {
                q: "If you don't hurry, you _____ the train.",
                options: ["miss", "will miss", "would miss", "missed"],
                ans: 1,
                exp: "First Conditional ('If + Present Simple, will + verb') অনুযায়ী 'will miss' সঠিক। বাকি অপশনগুলো কেন নয়: 'would miss' দ্বিতীয় শর্ত এবং 'missed' অতীত কাল নির্দেশ করে।"
            },
            {
                q: "Were I in your position, I _____ that risk.",
                options: ["will not take", "would not take", "would not have taken", "do not take"],
                ans: 1,
                exp: "'Were I in your position' Second Conditional-এর inverted রূপ, যার সাথে 'would not take' বসে। বাকি অপশনগুলো কেন নয়: 'will not take', 'would not have taken' ও 'do not take' এখানে প্রমিত নয়।"
            },
            {
                q: "If the train had not been delayed, we _____ by noon.",
                options: ["will arrive", "would arrive", "would have arrived", "arrive"],
                ans: 2,
                exp: "Third Conditional ('If + had not been..., would have arrived') নিয়ম অনুযায়ী 'would have arrived' সঠিক। বাকি অপশনগুলো কেন নয়: 'will arrive', 'would arrive' ও 'arrive' অতীতের অবাস্তব শর্তের ফলাফলে ভুল।"
            },
            {
                q: "Suppose you _____ the lottery, how would you spend it?",
                options: ["win", "won", "had won", "will win"],
                ans: 1,
                exp: "'how would you spend' থাকায় এটি Second Conditional অনুমান; তাই 'won' সঠিক। বাকি অপশনগুলো কেন নয়: 'win' ও 'will win' first conditional; 'had won' third conditional।"
            },
            {
                q: "If plants do not get sunlight, they _____.",
                options: ["die", "died", "would die", "would have died"],
                ans: 0,
                exp: "Zero Conditional বা প্রাকৃতিক সত্য অনুযায়ী Present Simple ('die') সঠিক। বাকি অপশনগুলো কেন নয়: 'died' past; 'would die' ও 'would have died' কাল্পনিক বা অতীত শর্ত বোঝায়।"
            },
            {
                q: "If she had accepted the job offer, she _____ in London now.",
                options: ["would live", "would have lived", "will live", "lives"],
                ans: 0,
                exp: "অতীতের সিদ্ধান্ত ('had accepted') না নেওয়ার বর্তমান পরিণতি ('now') বোঝাতে Mixed Conditional-এ 'would live' বসে। বাকি অপশনগুলো কেন নয়: 'would have lived' অতীতে বসবাসের কথা বলে; 'will live' ও 'lives' সঠিক নয়।"
            },
            {
                q: "In case it _____, take an umbrella with you.",
                options: ["rain", "rains", "rained", "will rain"],
                ans: 1,
                exp: "'In case'-যুক্ত clause-এ ভবিষ্যৎ আশঙ্কার ক্ষেত্রে Present Simple ('rains') বসে। বাকি অপশনগুলো কেন নয়: 'rain' singular 'it'-এর সাথে ভুল; 'rained' past এবং 'will rain' সাধারণত 'in case'-এর পর বসে না।"
            },
            {
                q: "If I knew his phone number, I _____ him right now.",
                options: ["will call", "would call", "would have called", "call"],
                ans: 1,
                exp: "বর্তমানে না জানার অবাস্তব শর্তে ('knew') 'right now' ফলাফলের জন্য 'would call' বসে। বাকি অপশনগুলো কেন নয়: 'will call' বাস্তব ভবিষ্যতের সম্ভাবনা; 'would have called' অতীতের ফলাফল বোঝায়।"
            },
            {
                q: "If you had practiced regularly, you _____ so nervous today.",
                options: ["would not feel", "would not have felt", "will not feel", "do not feel"],
                ans: 0,
                exp: "অতীতে অনুশীলন না করার বর্তমান অনুভূতি ('today') বোঝাতে Mixed Conditional-এ 'would not feel' বসে। বাকি অপশনগুলো কেন নয়: 'would not have felt' অতীতের অনুভূতি বোঝায়; 'will not feel' ও 'do not feel' এই কাল্পনিক বর্তমানের সাথে সঙ্গতিপূর্ণ নয়।"
            },
            {
                q: "Should he _____ again, tell him to wait outside.",
                options: ["come", "comes", "came", "coming"],
                ans: 0,
                exp: "'Should + subject + base verb' হলো First Conditional-এর inverted রূপ ('If he should come...')—তাই 'come' সঠিক। বাকি অপশনগুলো কেন নয়: 'comes', 'came' বা 'coming' 'Should'-এর পরে প্রমিত নয়।"
            },
            {
                q: "If iron is exposed to moist air, it _____.",
                options: ["rust", "rusts", "rusted", "would rust"],
                ans: 1,
                exp: "Zero Conditional / বৈজ্ঞানিক সত্য অনুযায়ী Present Simple ('rusts') সঠিক। বাকি অপশনগুলো কেন নয়: 'rust' base/plural; 'rusted' past এবং 'would rust' কাল্পনিক অর্থ দেয়।"
            },
            {
                q: "If I had not forgotten my key, I _____ locked out.",
                options: ["will not be", "would not be", "would not have been", "am not"],
                ans: 2,
                exp: "Third Conditional ('If + had not forgotten..., would not have been') নিয়ম অনুযায়ী 'would not have been' সঠিক। বাকি অপশনগুলো কেন নয়: 'will not be', 'would not be' ও 'am not' অতীতের অবাস্তব ঘটনার সাথে মেলে না।"
            },
            {
                q: "Provided that you _____ the rules, you can join the club.",
                options: ["follow", "followed", "will follow", "had followed"],
                ans: 0,
                exp: "'Provided that' শর্ত প্রকাশক সংযোজক এবং এর সাথে Present Simple ('follow') বসে। বাকি অপশনগুলো কেন নয়: 'followed' ও 'had followed' অতীত শর্তের জন্য; 'will follow' conditional clause-এ সাধারণত প্রমিত নয়।"
            }
        ]
    },
    "Voice Change (Active & Passive)": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Active থেকে Passive Voice-এ রূপান্তরের কালগত (Tense) পরিবর্তন, Imperative ও Interrogative বাক্যের নিয়ম এবং 'by' ছাড়া অন্য Preposition বসার ক্ষেত্রগুলো উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Change the voice: 'The manager has signed the contract.'",
                options: ["The contract has been signed by the manager.", "The contract was signed by the manager.", "The contract is signed by the manager.", "The contract had been signed by the manager."],
                ans: 0,
                exp: "Present Perfect Active ('has signed')-এর Passive রূপ হলো 'has/have been + past participle' ('has been signed')। বাকি অপশনগুলো কেন নয়: 'was signed' past simple, 'is signed' present simple এবং 'had been signed' past perfect passive।"
            },
            {
                q: "Passive voice of: 'Open the door.' is —",
                options: ["Let the door be opened.", "The door is opened.", "Let the door opened.", "The door was opened."],
                ans: 0,
                exp: "Imperative Active বাক্যের Passive রূপ সাধারণত 'Let + object + be + past participle' হয় ('Let the door be opened.')। বাকি অপশনগুলো কেন নয়: 'The door is opened.' সাধারণ বর্তমান বিবৃতি; 'Let the door opened.'-এ 'be' অনুপস্থিত; 'The door was opened.' অতীত কাল নির্দেশ করে।"
            },
            {
                q: "His behavior annoyed me. (Passive form)",
                options: ["I was annoyed by his behavior.", "I was annoyed with his behavior.", "I am annoyed with his behavior.", "I had been annoyed by his behavior."],
                ans: 1,
                exp: "'annoy' ক্রিয়ার Passive-এ ব্যক্তির ক্ষেত্রে 'annoyed with' ব্যবহৃত হয় (এবং আচরণ/ঘটনায় 'annoyed at/with' প্রচলিত; প্রমিত ব্যাকরণে 'annoyed with' বহুল স্বীকৃত)। বাকি অপশনগুলো কেন নয়: 'annoyed by' সাধারণত এজেন্ট/যন্ত্র বা শাব্দিক রূপে কম শুদ্ধ; 'am annoyed' present এবং 'had been annoyed' past perfect।"
            },
            {
                q: "Change the voice: 'Who taught you English?'",
                options: ["By whom were you taught English?", "Who was taught English by you?", "By whom you were taught English?", "Whom were you taught English by?"],
                ans: 0,
                exp: "'Who'-যুক্ত Interrogative Active বাক্যের Passive শুরু হয় 'By whom' দিয়ে, এরপর auxiliary verb 'were' + subject 'you' + past participle 'taught' + 'English' ('By whom were you taught English?')। বাকি অপশনগুলো কেন নয়: অর্থ ও কর্তা-কর্ম বিপরীত হয়ে গেছে; 'you were' ভুল interrogative word order; 'Whom ... by' কম প্রমিত।"
            },
            {
                q: "Passive form of: 'People speak English all over the world.'",
                options: ["English is spoken all over the world.", "English was spoken all over the world.", "English has been spoken all over the world.", "English is being spoken all over the world."],
                ans: 0,
                exp: "Present Simple Active ('speak')-এর Passive রূপ 'is spoken', এবং অনির্দিষ্ট subject 'People' সাধারণত বাদ দেওয়া হয়। বাকি অপশনগুলো কেন নয়: 'was spoken' past, 'has been spoken' present perfect এবং 'is being spoken' present continuous passive।"
            },
            {
                q: "Change the voice: 'They are building a new bridge.'",
                options: ["A new bridge is built by them.", "A new bridge is being built by them.", "A new bridge was being built by them.", "A new bridge has been built by them."],
                ans: 1,
                exp: "Present Continuous Active ('are building')-এর Passive হলো 'am/is/are + being + past participle' ('is being built')। বাকি অপশনগুলো কেন নয়: 'is built' present simple, 'was being built' past continuous এবং 'has been built' present perfect passive।"
            },
            {
                q: "The news shocked everybody. (Passive form)",
                options: ["Everybody was shocked by the news.", "Everybody was shocked at the news.", "Everybody is shocked at the news.", "Everybody had shocked by the news."],
                ans: 1,
                exp: "খবর বা ঘটনায় বিস্মিত/হতবাক হওয়া বোঝাতে 'shocked at' (বা 'by') ব্যবহৃত হয়; প্রমিত ব্যাকরণে 'shocked at the news' অত্যন্ত শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'is shocked' present tense এবং 'had shocked' ভুল passive গঠন।"
            },
            {
                q: "Change the voice: 'Do not pluck flowers.'",
                options: ["Let not flowers be plucked.", "Let flowers not be plucked.", "Flowers are not plucked.", "Let not be flowers plucked."],
                ans: 1,
                exp: "Negative Imperative-এর Passive রূপ হলো 'Let + object + not + be + past participle' ('Let flowers not be plucked.')। বাকি অপশনগুলো কেন নয়: 'Let not...' কম প্রমিত; 'Flowers are not plucked.' সাধারণ বিবৃতি; চতুর্থটি ভুল word order।"
            },
            {
                q: "Passive form of: 'I know him very well.'",
                options: ["He is known to me very well.", "He is known by me very well.", "He was known to me very well.", "He has been known to me very well."],
                ans: 0,
                exp: "'know'-এর Passive-এ 'by'-এর পরিবর্তে 'to' বসে ('known to')। বাকি অপশনগুলো কেন নয়: 'known by' প্রমিত নয়; 'was known' past এবং 'has been known' present perfect।"
            },
            {
                q: "Change the voice: 'Someone has stolen my bicycle.'",
                options: ["My bicycle was stolen.", "My bicycle has been stolen.", "My bicycle is stolen.", "My bicycle had been stolen."],
                ans: 1,
                exp: "Present Perfect Active ('has stolen')-এর Passive হলো 'has been stolen', এবং অনির্দিষ্ট 'Someone' বাদ যায়। বাকি অপশনগুলো কেন নয়: 'was stolen' past, 'is stolen' present এবং 'had been stolen' past perfect।"
            },
            {
                q: "Which sentence is in the Passive Voice?",
                options: ["The boy is reading a book.", "A book is being read by the boy.", "The boy has read a book.", "The boy will read a book."],
                ans: 1,
                exp: "'A book is being read by the boy.' বাক্যে Subject ('A book') নিজে কাজ করছে না বরং ক্রিয়ার শিকার হচ্ছে এবং 'be + being + past participle' আছে, তাই এটি Passive। বাকি অপশনগুলো কেন নয়: সবগুলোতেই Subject সক্রিয়ভাবে কাজ করছে (Active)।"
            },
            {
                q: "Change the voice: 'We must obey traffic rules.'",
                options: ["Traffic rules must be obeyed.", "Traffic rules must obeyed be.", "Traffic rules should be obeyed.", "Traffic rules are obeyed."],
                ans: 0,
                exp: "Modal verb ('must')-এর Passive কাঠামো হলো 'modal + be + past participle' ('must be obeyed')। বাকি অপশনগুলো কেন নয়: 'must obeyed be' ভুল word order; 'should be obeyed' modal পরিবর্তন করে; 'are obeyed' present simple।"
            },
            {
                q: "Smoke filled the room. (Passive form)",
                options: ["The room was filled by smoke.", "The room was filled with smoke.", "The room is filled with smoke.", "The room had been filled with smoke."],
                ans: 1,
                exp: "কোনো কিছু দিয়ে পূর্ণ হওয়া বোঝাতে 'filled with' ব্যবহৃত হয় ('was filled with smoke')। বাকি অপশনগুলো কেন নয়: 'filled by' কম প্রমিত; 'is filled' present এবং 'had been filled' past perfect।"
            },
            {
                q: "Change the voice: 'Did you complete the task?'",
                options: ["Was the task completed by you?", "Is the task completed by you?", "Has the task been completed by you?", "Were the task completed by you?"],
                ans: 0,
                exp: "Past Simple Interrogative ('Did you complete...')-এর Passive হয় 'Was/Were + subject + past participle' ('Was the task completed by you?')। বাকি অপশনগুলো কেন নয়: tense-এর সাথে সঙ্গতিপূর্ণ নয়; 'the task' singular হওয়ায় 'Were' ভুল।"
            },
            {
                q: "Passive form of: 'Honey tastes sweet.'",
                options: ["Honey is sweet when it is tasted.", "Honey was sweet when tasted.", "Honey is tasted sweet.", "Honey has been sweet."],
                ans: 0,
                exp: "Quasi-passive verb ('tastes sweet')-এর প্রমিত ব্যাখ্যা বা রূপান্তর হলো 'Honey is sweet when it is tasted.'। বাকি অপশনগুলো কেন নয়: 'was sweet' অতীত কাল নির্দেশ করে; 'is tasted sweet' প্রমিত গঠন নয়; 'has been sweet' অর্থ পরিবর্তন করে।"
            },
            {
                q: "Change the voice: 'They had finished the work before sunset.'",
                options: ["The work was finished before sunset.", "The work had been finished before sunset.", "The work has been finished before sunset.", "The work is finished before sunset."],
                ans: 1,
                exp: "Past Perfect Active ('had finished')-এর Passive রূপ হলো 'had been finished'। বাকি অপশনগুলো কেন নয়: অন্যান্য অপশনগুলোতে tense সঠিকভাবে রক্ষিত হয়নি।"
            },
            {
                q: "His success pleased us all. (Passive form)",
                options: ["We were all pleased by his success.", "We were all pleased with his success.", "We are all pleased with his success.", "We had been pleased with his success."],
                ans: 1,
                exp: "সন্তুষ্ট বা আনন্দিত হওয়া বোঝাতে 'pleased with' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'are pleased' present এবং 'had been pleased' past perfect।"
            },
            {
                q: "Change the voice: 'Please help me.'",
                options: ["You are requested to help me.", "Let me be helped.", "I am requested to help.", "You are ordered to help me."],
                ans: 0,
                exp: "'Please'-যুক্ত অনুরোধসূচক Imperative বাক্যের Passive রূপ হলো 'You are requested to + base verb' ('You are requested to help me.')। বাকি অপশনগুলো কেন নয়: 'Let me be helped.' দিয়ে 'আমাকে সাহায্য করা হোক' বোঝায়; 'ordered' অনুরোধের বদলে আদেশ বোঝায়।"
            },
            {
                q: "Passive form of: 'The teacher gave me a pen.'",
                options: ["I was given a pen by the teacher.", "A pen was given to me by the teacher.", "Both A and B are correct.", "None of these."],
                ans: 2,
                exp: "Ditransitive verb ('gave')-এর দুটি Object ('me' ও 'a pen') থাকায় যেকোনো একটিকে Subject করে Passive করা যায় ('I was given a pen...' এবং 'A pen was given to me...')। বাকি অপশনগুলো কেন নয়: একটিকে সঠিক ধরে অন্যটিকে বাদ দিলে অসম্পূর্ণ হয়।"
            },
            {
                q: "Change the voice: 'Why did he scold you?'",
                options: ["Why were you scolded by him?", "Why was you scolded by him?", "Why you were scolded by him?", "Why are you scolded by him?"],
                ans: 0,
                exp: "'Why did he scold you?'-এর Passive হয় 'Why were you scolded by him?'। বাকি অপশনগুলো কেন নয়: 'you'-এর সাথে 'was' ভুল; 'you were' ভুল word order; 'are' present tense।"
            },
            {
                q: "Passive form of: 'One should keep one's promise.'",
                options: ["A promise should be kept.", "One's promise should kept be.", "A promise must be kept.", "Promises are kept."],
                ans: 0,
                exp: "'should keep'-এর Passive হলো 'should be kept' এবং অনির্দিষ্ট 'One' সাধারণত বাদ দেওয়া হয়। বাকি অপশনগুলো কেন নয়: 'should kept be' ভুল গঠন; 'must' বাধ্যবাধকতা বাড়ায়; 'are kept' tense বদলে দেয়।"
            },
            {
                q: "Change the voice: 'I saw him crossing the road.'",
                options: ["He was seen crossing the road by me.", "He is seen crossing the road by me.", "He had seen crossing the road.", "Crossing the road was seen by him."],
                ans: 0,
                exp: "Past Simple Active ('saw')-এর Passive হলো 'was seen', এবং participle 'crossing the road' অপরিবর্তিত থাকে। বাকি অপশনগুলো কেন নয়: 'is seen' present; 'had seen' active/past perfect; চতুর্থটি অর্থ বিকৃত করে।"
            },
            {
                q: "The book interests me. (Passive form)",
                options: ["I am interested by the book.", "I am interested in the book.", "I was interested in the book.", "I have been interested in the book."],
                ans: 1,
                exp: "'interest'-এর Passive-এ সাধারণত 'in' বসে ('interested in')। বাকি অপশনগুলো কেন নয়: 'interested by' প্রমিত নয়; 'was interested' past এবং 'have been interested' present perfect।"
            },
            {
                q: "Change the voice: 'They will inaugurate the project next week.'",
                options: ["The project will be inaugurated next week.", "The project will inaugurate next week.", "The project is inaugurated next week.", "The project would be inaugurated next week."],
                ans: 0,
                exp: "Future Simple Active ('will inaugurate')-এর Passive রূপ হলো 'will be inaugurated'। বাকি অপশনগুলো কেন নয়: 'will inaugurate' active; 'is inaugurated' present এবং 'would be inaugurated' conditional/past future।"
            },
            {
                q: "Passive form of: 'Let him do the work.'",
                options: ["Let the work be done by him.", "Let the work done by him.", "The work is done by him.", "Let him be done the work."],
                ans: 0,
                exp: "'Let + object1 + verb + object2' কাঠামোর Passive রূপ হলো 'Let + object2 + be + past participle + by + object1' ('Let the work be done by him.')। বাকি অপশনগুলো কেন নয়: 'be' বাদ দেওয়া বা ভুল শব্দক্রম প্রমিত নয়।"
            }
        ]
    },
    "Narration (Direct & Indirect Speech)": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Direct থেকে Indirect Speech-এ রূপান্তরের Tense, Pronoun, Time/Place Adverb এবং Interrogative, Imperative, Optative ও Exclamatory বাক্যের নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "He said to me, 'I am reading a book now.' (Indirect speech)",
                options: ["He told me that he was reading a book then.", "He told me that he is reading a book then.", "He told me that he was reading a book now.", "He asked me that he was reading a book then."],
                ans: 0,
                exp: "Reporting verb অতীত হওয়ায় 'am reading'  'was reading' এবং 'now'  'then' হয়। বাকি অপশনগুলো কেন নয়: 'is reading' tense পরিবর্তন করেনি; 'now' পরিবর্তন করেনি; 'asked' প্রশ্নবোধক বাক্যে আসে।"
            },
            {
                q: "The teacher said to the students, 'The earth moves round the sun.' (Indirect speech)",
                options: ["The teacher told the students that the earth moved round the sun.", "The teacher told the students that the earth moves round the sun.", "The teacher asked the students that the earth moves round the sun.", "The teacher told the students that the earth had moved round the sun."],
                ans: 1,
                exp: "Reported speech-এ চিরন্তন সত্য থাকলে Reporting verb অতীত হলেও Tense অপরিবর্তিত থাকে ('moves')। বাকি অপশনগুলো কেন নয়: 'moved' বা 'had moved' চিরন্তন সত্যের ক্ষেত্রে tense পরিবর্তনের নিয়মের পরিপন্থী; 'asked' ভুল reporting verb।"
            },
            {
                q: "She said to me, 'Where do you live?' (Indirect speech)",
                options: ["She asked me where I lived.", "She asked me where did I live.", "She asked me where I live.", "She told me where I lived."],
                ans: 0,
                exp: "Wh-প্রশ্নের Indirect speech-এ 'asked' বসে, 'where' connector হয়, এবং প্রশ্নবোধক inversion না হয়ে Assertive word order ('I lived') বসে। বাকি অপশনগুলো কেন নয়: 'where did I live' ভুল interrogative order; 'I live' tense পরিবর্তন করেনি; 'told' সঠিক reporting verb নয়।"
            },
            {
                q: "He said to me, 'Are you going to the library?' (Indirect speech)",
                options: ["He asked me if I was going to the library.", "He asked me if was I going to the library.", "He asked me that I was going to the library.", "He told me if I was going to the library."],
                ans: 0,
                exp: "Yes/No প্রশ্নের Indirect speech-এ 'if' বা 'whether' বসে এবং 'are going'  'was going' ও assertive word order ('I was going') হয়। বাকি অপশনগুলো কেন নয়: 'was I going' inverted; 'that' yes/no প্রশ্নে প্রমিত নয়; 'told' ভুল।"
            },
            {
                q: "Father said to me, 'Do not waste your time.' (Indirect speech)",
                options: ["Father advised me not to waste my time.", "Father advised me to not waste my time.", "Father ordered me don't waste my time.", "Father told me that do not waste my time."],
                ans: 0,
                exp: "Negative Imperative-এর প্রমিত Indirect রূপ হলো 'advised/ordered/told + object + not to + base verb' ('not to waste my time')। বাকি অপশনগুলো কেন নয়: 'to not' split infinitive/কম প্রমিত; 'don't waste' বা 'that do not waste' ভুল।"
            },
            {
                q: "He said, 'Alas! I am undone.' (Indirect speech)",
                options: ["He exclaimed with sorrow that he was undone.", "He exclaimed with joy that he was undone.", "He said with sorrow that he is undone.", "He asked with sorrow that he was undone."],
                ans: 0,
                exp: "'Alas!' দুঃখ বোঝায় বলে 'exclaimed with sorrow that', 'I'  'he' এবং 'am undone'  'was undone' হবে। বাকি অপশনগুলো কেন নয়: 'with joy' বিপরীত আবেগ; 'is undone' tense পরিবর্তন করেনি; 'asked' ভুল।"
            },
            {
                q: "She said, 'Hurrah! We have won the match.' (Indirect speech)",
                options: ["She exclaimed with joy that they had won the match.", "She exclaimed with sorrow that they had won the match.", "She exclaimed with joy that they have won the match.", "She told that they had won the match."],
                ans: 0,
                exp: "'Hurrah!' আনন্দ বোঝায় বলে 'exclaimed with joy that', 'We'  'they' এবং 'have won'  'had won' হবে। বাকি অপশনগুলো কেন নয়: 'with sorrow' ভুল; 'have won' tense পরিবর্তন করেনি।"
            },
            {
                q: "He said to me, 'I saw him yesterday.' (Indirect speech)",
                options: ["He told me that he had seen him the previous day.", "He told me that he saw him yesterday.", "He told me that he had seen him yesterday.", "He told me that he has seen him the previous day."],
                ans: 0,
                exp: "Past Simple ('saw')  Past Perfect ('had seen') এবং 'yesterday'  'the previous day' (বা 'the day before') হয়। বাকি অপশনগুলো কেন নয়: tense বা 'yesterday' অপরিবর্তিত রাখা ভুল।"
            },
            {
                q: "The teacher said, 'Honesty is the best policy.' (Indirect speech)",
                options: ["The teacher said that honesty is the best policy.", "The teacher said that honesty was the best policy.", "The teacher asked that honesty is the best policy.", "The teacher told that honesty had been the best policy."],
                ans: 0,
                exp: "নীতিবাক্য বা প্রবাদবাক্যের Indirect speech-এ Tense অপরিবর্তিত থাকে ('is')। বাকি অপশনগুলো কেন নয়: 'was' বা 'had been' নীতিবাক্যে tense পরিবর্তনের ভুল; 'asked' অনুপযুক্ত।"
            },
            {
                q: "He said to me, 'Please lend me your pen.' (Indirect speech)",
                options: ["He requested me to lend him my pen.", "He ordered me to lend him my pen.", "He told me that lend him my pen.", "He asked me lend him my pen."],
                ans: 0,
                exp: "'Please' থাকায় 'requested me to lend him my pen' সঠিক। বাকি অপশনগুলো কেন নয়: 'ordered' অনুরোধের বদলে আদেশ বোঝায়; বাকি দুটিতে 'to' অনুপস্থিত।"
            },
            {
                q: "She said, 'May you live long.' (Indirect speech)",
                options: ["She prayed that I might live long.", "She asked that I might live long.", "She prayed that I may live long.", "She told that I might live long."],
                ans: 0,
                exp: "Optative বাক্যে 'prayed/wished that' বসে এবং 'may'  'might' হয়। বাকি অপশনগুলো কেন নয়: 'asked' বা 'told' ভুল reporting verb; 'may' past reporting verb-এর পর 'might' হওয়া উচিত।"
            },
            {
                q: "He said, 'I will come tomorrow.' (Indirect speech)",
                options: ["He said that he would come the next day.", "He said that he will come tomorrow.", "He said that he would come tomorrow.", "He said that he can come the next day."],
                ans: 0,
                exp: "'will'  'would' এবং 'tomorrow'  'the next day' (বা 'the following day') হয়। বাকি অপশনগুলো কেন নয়: 'will' বা 'tomorrow' অপরিবর্তিত রাখা ভুল; 'can' ভুল modal।"
            },
            {
                q: "Rina said to Mina, 'Why are you late today?' (Indirect speech)",
                options: ["Rina asked Mina why she was late that day.", "Rina asked Mina why was she late that day.", "Rina asked Mina why she is late today.", "Rina told Mina why she was late that day."],
                ans: 0,
                exp: "'asked Mina why', 'you'  'she', 'are'  'was', 'today'  'that day' এবং assertive word order ('she was late') হবে। বাকি অপশনগুলো কেন নয়: 'was she late' inverted; 'is'/'today' পরিবর্তিত হয়নি; 'told' ভুল।"
            },
            {
                q: "They said, 'Let us go out for a walk.' (Indirect speech)",
                options: ["They proposed that they should go out for a walk.", "They ordered that they should go out for a walk.", "They asked that they might go out for a walk.", "They said that they went out for a walk."],
                ans: 0,
                exp: "'Let us...' প্রস্তাব বোঝালে 'proposed/suggested that + subject + should + base verb' হয়। বাকি অপশনগুলো কেন নয়: 'ordered' বা 'asked' প্রস্তাবের ভাব প্রকাশ করে না; 'went' সঠিক modal/verb গঠন নয়।"
            },
            {
                q: "He said, 'I have finished my work.' (Indirect speech)",
                options: ["He said that he had finished his work.", "He said that he has finished his work.", "He said that he finished his work.", "He told that he had finished his work."],
                ans: 0,
                exp: "Present Perfect ('have finished')  Past Perfect ('had finished') এবং 'my'  'his' হয়। বাকি অপশনগুলো কেন নয়: 'has finished' বা 'finished' tense পরিবর্তনের মানসম্মত নিয়মে কম শুদ্ধ; 'told'-এর পর সাধারণত object থাকে।"
            },
            {
                q: "The boy said, 'I can solve this sum.' (Indirect speech)",
                options: ["The boy said that he could solve that sum.", "The boy said that he can solve this sum.", "The boy said that he could solve this sum.", "The boy asked that he could solve that sum."],
                ans: 0,
                exp: "'can'  'could' এবং 'this'  'that' হয়। বাকি অপশনগুলো কেন নয়: 'can' বা 'this' অপরিবর্তিত রাখা ভুল; 'asked' প্রশ্ন নয়।"
            },
            {
                q: "She said to him, 'Do you know my address?' (Indirect speech)",
                options: ["She asked him if he knew her address.", "She asked him if he knows her address.", "She asked him if did he know her address.", "She told him if he knew her address."],
                ans: 0,
                exp: "'asked him if', 'you'  'he', 'do know' (present simple)  'knew' (past simple) এবং 'my'  'her' হয়। বাকি অপশনগুলো কেন নয়: 'knows' tense পরিবর্তন করেনি; 'did he know' ভুল word order; 'told' ভুল।"
            },
            {
                q: "He said, 'What a pity!' (Indirect speech)",
                options: ["He exclaimed with sorrow that it was a great pity.", "He exclaimed with joy that it was a pity.", "He asked that it was a pity.", "He said that it is a pity."],
                ans: 0,
                exp: "'What a pity!' আক্ষেপ/দুঃখ প্রকাশ করে, তাই 'exclaimed with sorrow that it was a great pity' শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'with joy' ভুল; 'asked' প্রশ্ন নয়; 'is' tense পরিবর্তন করেনি।"
            },
            {
                q: "Teacher said to Rahim, 'Stand up.' (Indirect speech)",
                options: ["Teacher ordered Rahim to stand up.", "Teacher asked Rahim that stand up.", "Teacher requested Rahim to stand up.", "Teacher proposed Rahim to stand up."],
                ans: 0,
                exp: "শিক্ষক ছাত্রকে 'Stand up' বলা আদেশ বোঝায়, তাই 'ordered Rahim to stand up' সঠিক। বাকি অপশনগুলো কেন নয়: 'that stand up' ভুল; 'requested' বা 'proposed' এই আদেশসূচক ভঙ্গিতে অনুপযুক্ত।"
            },
            {
                q: "He said, 'I was writing a letter.' (Indirect speech)",
                options: ["He said that he had been writing a letter.", "He said that he was writing a letter.", "He said that he has been writing a letter.", "He said that he wrote a letter."],
                ans: 0,
                exp: "Past Continuous ('was writing')  Past Perfect Continuous ('had been writing') হয়। বাকি অপশনগুলো কেন নয়: 'was writing' tense পরিবর্তন করেনি; 'has been writing' present perfect continuous; 'wrote' past simple।"
            },
            {
                q: "She said to me, 'Good morning!' (Indirect speech)",
                options: ["She wished me good morning.", "She told me good morning.", "She asked me good morning.", "She prayed me good morning."],
                ans: 0,
                exp: "সম্ভাষণ বা শুভেচ্ছা ('Good morning') বোঝাতে 'wished' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'told', 'asked' বা 'prayed' সম্ভাষণে প্রমিত নয়।"
            },
            {
                q: "He said, 'Let me have a cup of tea.' (Indirect speech)",
                options: ["He wished that he might have a cup of tea.", "He ordered that he might have a cup of tea.", "He asked that he might have a cup of tea.", "He said that he had a cup of tea."],
                ans: 0,
                exp: "'Let me...' দিয়ে ব্যক্তিগত ইচ্ছা বা অনুরোধ বোঝালে 'wished/requested that he might have...' কাঠামো ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'ordered' বা 'asked' এখানে সঠিক নয়; 'had' modal-এর অনুপস্থিতিতে সঠিক অর্থ দেয় না।"
            },
            {
                q: "The captain said, 'Bravo! We have played well.' (Indirect speech)",
                options: ["The captain applauded them saying that they had played well.", "The captain exclaimed with sorrow that they had played well.", "The captain told them that they have played well.", "The captain asked them that they had played well."],
                ans: 0,
                exp: "'Bravo!' প্রশংসা বোঝায় বলে 'applauded ... saying that' এবং 'have played'  'had played' হয়। বাকি অপশনগুলো কেন নয়: 'with sorrow' ভুল; 'have played' tense পরিবর্তন করেনি; 'asked' ভুল।"
            },
            {
                q: "He said to me, 'Don't go there.' (Indirect speech)",
                options: ["He forbade me to go there.", "He forbade me not to go there.", "He told me to go there.", "He asked me don't go there."],
                ans: 0,
                exp: "'forbid' নিজেই নেতিবাচক অর্থ ('নিষেধ করা') বহন করে বলে 'forbade me to go there' শুদ্ধ (দুইবার না-বোধক 'forbade ... not to' এড়ানো হয়)। বাকি অপশনগুলো কেন নয়: 'forbade ... not to' double negative-এর কারণে প্রমিত নয়; 'told me to go' অর্থ উল্টে দেয়।"
            },
            {
                q: "She said, 'I had reached home before it rained.' (Indirect speech)",
                options: ["She said that she had reached home before it rained.", "She said that she had had reached home before it rained.", "She said that she reached home before it rained.", "She said that she has reached home before it rained."],
                ans: 0,
                exp: "Reported speech ইতোমধ্যে Past Perfect ('had reached')-এ থাকলে Indirect speech-এ আর কোনো tense পরিবর্তন হয় না ('had reached')। বাকি অপশনগুলো কেন নয়: 'had had reached' ভুল; 'reached' বা 'has reached' tense বিকৃত করে।"
            }
        ]
    },
    "Transformation of Sentences (Meaning, Degree, and Structure based)": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. অর্থ অপরিবর্তিত রেখে Simple, Complex ও Compound Sentence-এর রূপান্তর, Degree পরিবর্তন এবং Affirmative-Negative রূপান্তরের প্রধান নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Transform into Complex: 'In spite of his hard work, he could not succeed.'",
                options: ["Although he worked hard, he could not succeed.", "He worked hard, but he could not succeed.", "Because he worked hard, he could not succeed.", "If he worked hard, he could not succeed."],
                ans: 0,
                exp: "'In spite of + noun phrase'-যুক্ত Simple বাক্যকে Complex করতে 'Although/Though + clause' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'but' দিয়ে যুক্ত করলে Compound হয়; 'Because' কারণ বোঝায়; 'If' শর্ত বোঝায়।"
            },
            {
                q: "Transform into Compound: 'Because of his illness, he could not attend class.'",
                options: ["He was ill, so he could not attend class.", "Since he was ill, he could not attend class.", "Being ill, he could not attend class.", "Although he was ill, he could not attend class."],
                ans: 0,
                exp: "কারণ-ফলাফলের Compound বাক্য গঠনে coordinating conjunction 'so' ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Since' ও 'Although' Complex sentence গঠন করে; 'Being ill' Simple sentence।"
            },
            {
                q: "Transform into Simple: 'He is so weak that he cannot walk.'",
                options: ["He is too weak to walk.", "He is very weak and cannot walk.", "He is weak, so he cannot walk.", "Although he is weak, he cannot walk."],
                ans: 0,
                exp: "'so ... that + cannot'-যুক্ত Complex বাক্যকে Simple বাক্যে রূপান্তর করতে 'too ... to-infinitive' ('too weak to walk') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'and' ও 'so' Compound এবং 'Although' Complex sentence তৈরি করে।"
            },
            {
                q: "Change into Comparative: 'No other boy in the class is as tall as Rakib.'",
                options: ["Rakib is taller than any other boy in the class.", "Rakib is taller than all other boys in the class.", "Rakib is the tallest boy in the class.", "No other boy is taller than Rakib."],
                ans: 0,
                exp: "'No other + singular noun + as ... as'-এর Comparative রূপ হলো '... er than any other + singular noun' ('Rakib is taller than any other boy in the class.')। বাকি অপশনগুলো কেন নয়: 'all other boys' plural; 'the tallest' superlative; 'No other boy is taller...' অর্থগতভাবে ভুল।"
            },
            {
                q: "Change into Negative without changing meaning: 'Only Allah can help us.'",
                options: ["None but Allah can help us.", "No one Allah can help us.", "Nothing but Allah can help us.", "Allah cannot help us."],
                ans: 0,
                exp: "ব্যক্তির ক্ষেত্রে 'Only/Alone'-এর Negative রূপ হলো 'None but' ('None but Allah can help us.')। বাকি অপশনগুলো কেন নয়: 'Nothing but' সাধারণত বস্তুর ক্ষেত্রে আসে; 'Allah cannot help us.' অর্থ উল্টে দেয়।"
            },
            {
                q: "Transform into Simple: 'When the sun set, we returned home.'",
                options: ["The sun having set, we returned home.", "The sun sets and we returned home.", "After the sun had set, we returned home.", "We returned home because the sun set."],
                ans: 0,
                exp: "দুটি ভিন্ন subject-যুক্ত সময়বাচক Complex বাক্যকে Simple করতে Nominative Absolute ('The sun having set, ...') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'and' Compound এবং 'After/because' Complex sentence গঠন করে।"
            },
            {
                q: "Change into Superlative: 'Very few cities in the world are as large as Tokyo.'",
                options: ["Tokyo is one of the largest cities in the world.", "Tokyo is the largest city in the world.", "No other city is as large as Tokyo.", "Tokyo is larger than any other city."],
                ans: 0,
                exp: "'Very few ... as ... as'-এর Superlative রূপ হলো 'one of the + superlative + plural noun' ('Tokyo is one of the largest cities in the world.')। বাকি অপশনগুলো কেন নয়: 'the largest city' বা 'any other city' একমাত্র সেরা বোঝায়, যা 'Very few'-এর অর্থের সাথে মেলে না।"
            },
            {
                q: "Transform into Complex: 'He confessed his guilt.'",
                options: ["He confessed that he was guilty.", "He was guilty and he confessed it.", "He confessed his guiltiness.", "In spite of being guilty, he confessed."],
                ans: 0,
                exp: "'his guilt' noun phrase-কে subordinate noun clause ('that he was guilty')-এ রূপান্তর করলে Complex sentence হয়। বাকি অপশনগুলো কেন নয়: 'and' দিয়ে যুক্ত করলে Compound হয়; বাকিগুলো Simple।"
            },
            {
                q: "Change into Affirmative: 'There is no smoke without fire.'",
                options: ["Where there is smoke, there is fire.", "Every smoke has fire.", "Smoke is without fire.", "There is smoke with fire."],
                ans: 0,
                exp: "'There is no ... without ...'-এর অর্থপূর্ণ রূপান্তরে সম্পর্ক বা শর্ত বোঝাতে 'Where there is smoke, there is fire.' প্রচলিত ও যথাযথ। বাকি অপশনগুলো কেন নয়: 'Every smoke has fire' বা 'There is smoke with fire' প্রবাদটির স্বাভাবিক অর্থ প্রকাশ করে না।"
            },
            {
                q: "Transform into Compound: 'Although he is rich, he is not happy.'",
                options: ["He is rich, yet he is not happy.", "In spite of being rich, he is not happy.", "He is rich because he is not happy.", "If he is rich, he is not happy."],
                ans: 0,
                exp: "'Although'-যুক্ত Complex বাক্যকে Compound করতে 'yet' বা 'but' ('He is rich, yet he is not happy.') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'In spite of...' Simple এবং 'because/if' Complex sentence।"
            },
            {
                q: "Change into Positive: 'Dhaka is bigger than most other cities in Bangladesh.'",
                options: ["Very few cities in Bangladesh are as big as Dhaka.", "No other city in Bangladesh is as big as Dhaka.", "Dhaka is the biggest city in Bangladesh.", "Most other cities are bigger than Dhaka."],
                ans: 0,
                exp: "'... er than most other + plural noun'-এর Positive রূপ শুরু হয় 'Very few + plural noun + are as ... as' দিয়ে ('Very few cities in Bangladesh are as big as Dhaka.')। বাকি অপশনগুলো কেন নয়: 'No other' 'any other'-এর সাথে আসে; 'the biggest' superlative।"
            },
            {
                q: "Transform into Simple: 'As soon as the thief saw the police, he ran away.'",
                options: ["Seeing the police, the thief ran away.", "The thief saw the police and ran away.", "No sooner had the thief seen the police than he ran away.", "When the thief saw the police, he ran away."],
                ans: 0,
                exp: "একই subject-যুক্ত দ্রুত ধারাবাহিকতার Complex বাক্যকে Simple করতে Present Participle ('Seeing the police, ...') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'and' Compound এবং 'No sooner/When' Complex sentence।"
            },
            {
                q: "Change into Negative: 'As soon as I reached the station, the train left.'",
                options: ["No sooner had I reached the station than the train left.", "Hardly had I reached the station than the train left.", "I did not reach the station when the train left.", "No sooner I reached the station than the train left."],
                ans: 0,
                exp: "'As soon as'-এর নেতিবাচক রূপান্তরে 'No sooner had + subject + past participle ... than + past simple' ('No sooner had I reached the station than the train left.') সঠিক। বাকি অপশনগুলো কেন নয়: 'Hardly'-এর সাথে 'when' বসে; 'No sooner I reached' inversion ছাড়া অপ্রমিত।"
            },
            {
                q: "Transform into Complex: 'A rolling stone gathers no moss.'",
                options: ["A stone that rolls gathers no moss.", "A stone rolls and gathers no moss.", "A stone rolling gathers no moss.", "If a stone rolls, it gathers no moss."],
                ans: 0,
                exp: "'rolling' participle-কে relative clause ('that rolls')-এ রূপান্তর করলে Complex sentence ('A stone that rolls gathers no moss.') হয়। বাকি অপশনগুলো কেন নয়: 'and' Compound এবং 'A stone rolling...' Simple sentence।"
            },
            {
                q: "Change into Interrogative: 'Everybody wishes to be happy.'",
                options: ["Who does not wish to be happy?", "Who wishes to be happy?", "Does everybody wish to be happy?", "Why does everybody wish to be happy?"],
                ans: 0,
                exp: "'Everybody'-যুক্ত Affirmative বাক্যকে অর্থ ঠিক রেখে Interrogative করতে 'Who does not + base verb...?' ('Who does not wish to be happy?') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Who wishes...' অর্থগতভাবে 'কেউই চায় না' এমন ইঙ্গিত দেয়; 'Does everybody...' সাধারণ হ্যাঁ/না প্রশ্ন।"
            },
            {
                q: "Transform into Simple: 'He is so honest that he cannot accept a bribe.'",
                options: ["He is too honest to accept a bribe.", "He is honest, so he cannot accept a bribe.", "Although he is honest, he cannot accept a bribe.", "He is honest and cannot accept a bribe."],
                ans: 0,
                exp: "'so ... that + cannot'-এর Simple রূপ হলো 'too ... to-infinitive' ('too honest to accept a bribe')। বাকি অপশনগুলো কেন নয়: 'so' ও 'and' Compound এবং 'Although' Complex sentence।"
            },
            {
                q: "Change into Comparative: 'Iron is more useful than most other metals.'",
                options: ["Iron is more useful than most other metals.", "Most other metals are not more useful than iron.", "Very few metals are as useful as iron.", "Iron is one of the most useful metals."],
                ans: 1,
                exp: "বাক্যটি ইতোমধ্যে Comparative-এ আছে; 'Most other metals are not more useful than iron.' অর্থগত সামঞ্জস্য বজায় রাখে (প্রথমটি প্রশ্নবাক্যের পুনরাবৃত্তি, তৃতীয়টি Positive এবং চতুর্থটি Superlative) — তবে প্রশ্নের মূল কাঠামো অনুযায়ী সঠিক রূপান্তরে 'Most other metals are not more useful than iron.' অর্থ ঠিক রাখে। বাকি অপশনগুলো কেন নয়: তৃতীয়টি Positive এবং চতুর্থটি Superlative।"
            },
            {
                q: "Transform into Complex: 'I know his name.'",
                options: ["I know what his name is.", "I know his name and it is known.", "Knowing his name, I spoke.", "His name is known to me."],
                ans: 0,
                exp: "'his name' noun phrase-কে noun clause ('what his name is')-এ রূপান্তর করলে Complex sentence হয়। বাকি অপশনগুলো কেন নয়: অন্যগুলো Simple বা Compound/Passive রূপ।"
            },
            {
                q: "Change into Exclamatory: 'It is a very wonderful sight.'",
                options: ["What a wonderful sight it is!", "How wonderful sight it is!", "What a wonderful sight is it!", "How a wonderful sight it is!"],
                ans: 0,
                exp: "'a + adjective + noun' থাকলে Exclamatory বাক্য 'What a/an + adjective + noun + subject + verb!' ('What a wonderful sight it is!') দিয়ে শুরু হয়। বাকি অপশনগুলো কেন নয়: 'How wonderful sight' ভুল; 'is it' interrogative order; 'How a...' ভুল।"
            },
            {
                q: "Transform into Compound: 'If you do not read attentively, you will fail.'",
                options: ["Read attentively or you will fail.", "Unless you read attentively, you will fail.", "By reading attentively, you will not fail.", "You will fail if you do not read."],
                ans: 0,
                exp: "শর্তাধীন নেতিবাচক Complex বাক্যকে Compound করতে Imperative + 'or' ('Read attentively or you will fail.') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'Unless/if' Complex এবং 'By reading...' Simple sentence।"
            },
            {
                q: "Change into Affirmative: 'He is not a dishonest man.'",
                options: ["He is an honest man.", "He is a very dishonest man.", "He is not honest.", "Is he a dishonest man?"],
                ans: 0,
                exp: "বিপরীত শব্দ ('dishonest'-এর বিপরীত 'honest') বসিয়ে 'not' তুলে দিলে অর্থ অপরিবর্তিত রেখে Affirmative হয় ('He is an honest man.')। বাকি অপশনগুলো কেন নয়: 'very dishonest' বা 'not honest' অর্থ বিকৃত করে; চতুর্থটি প্রশ্নবোধক।"
            },
            {
                q: "Transform into Simple: 'The boy who is industrious can prosper in life.'",
                options: ["An industrious boy can prosper in life.", "The boy is industrious and he can prosper.", "If the boy is industrious, he can prosper.", "The boy can prosper because he is industrious."],
                ans: 0,
                exp: "Relative clause ('who is industrious')-কে adjective pre-modifier ('An industrious boy')-এ রূপান্তর করলে Simple sentence হয়। বাকি অপশনগুলো কেন নয়: 'and' Compound এবং 'If/because' Complex sentence।"
            },
            {
                q: "Change into Comparative: 'He is as brave as a lion.'",
                options: ["A lion is not braver than he is.", "He is braver than a lion.", "A lion is braver than him.", "He is not braver than a lion."],
                ans: 0,
                exp: "সমান সাহসিকতা বোঝানো বাক্যের Comparative রূপান্তরে অর্থ ঠিক রাখতে 'A lion is not braver than he is.' (বা 'He is not less brave than a lion.') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'He is braver than a lion.' অর্থ পরিবর্তন করে; 'than him' formal grammar-এ কম শুদ্ধ।"
            },
            {
                q: "Transform into Complex: 'He is too weak to carry the load.'",
                options: ["He is so weak that he cannot carry the load.", "He is weak and cannot carry the load.", "Being weak, he cannot carry the load.", "He is weak enough to carry the load."],
                ans: 0,
                exp: "'too ... to'-যুক্ত Simple বাক্যকে Complex করতে 'so ... that + cannot' ('so weak that he cannot carry the load') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'and' Compound, 'Being weak...' Simple এবং 'enough to' বিপরীত অর্থ দেয়।"
            },
            {
                q: "Change into Assertive: 'Who does not love his country?'",
                options: ["Everybody loves his country.", "Nobody loves his country.", "Does everybody love his country?", "Who loves his country?"],
                ans: 0,
                exp: "'Who does not + verb...?' নেতিবাচক প্রশ্নবাক্যের অর্থপূর্ণ Assertive রূপ হলো 'Everybody + verb...' ('Everybody loves his country.')। বাকি অপশনগুলো কেন নয়: 'Nobody...' অর্থ উল্টে দেয়; বাকি দুটি প্রশ্নবোধক।"
            }
        ]
    }
},
const advancedSyntaxQuestions = {
    "Embedded Questions & Tag Questions": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Embedded Question-এ স্বাভাবিক বিবৃতিমূলক (Declarative) শব্দক্রম কেন ব্যবহৃত হয় এবং Tag Question-এর (Negative/Positive polarity, 'Let's', Imperative, 'I am', 'Everyone/Nobody') নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Could you tell me where _____?",
                options: ["is the nearest post office", "the nearest post office is", "does the nearest post office lie", "was the nearest post office"],
                ans: 1,
                exp: "Embedded question-এ প্রশ্নবোধক inversion না হয়ে Assertive word order ('subject + verb', অর্থাৎ 'the nearest post office is') বসে। বাকি অপশনগুলো কেন নয়: 'is the nearest post office' বা 'does ... lie' সরাসরি প্রশ্নের word order; 'was' কালগতভাবে অপ্রয়োজনীয়।"
            },
            {
                q: "She knows why he _____ absent yesterday.",
                options: ["was", "were", "is", "has"],
                ans: 0,
                exp: "Embedded clause-এ 'he' singular এবং 'yesterday' অতীত সময় বোঝাচ্ছে, তাই 'was' সঠিক (এবং word order 'he was' assertive)। বাকি অপশনগুলো কেন নয়: 'were' plural/subjunctive; 'is' present; 'has' এখানে সঠিক নয়।"
            },
            {
                q: "Let's go for a walk in the afternoon, _____?",
                options: ["will we", "shall we", "don't we", "do we"],
                ans: 1,
                exp: "'Let's...' প্রস্তাবসূচক বাক্যের Tag Question সাধারণত 'shall we?' হয়। বাকি অপশনগুলো কেন নয়: 'will we' সাধারণত 'Let me/him/them'-যুক্ত imperative-এ আসে; 'don't we' বা 'do we' 'Let's'-এর Tag নয়।"
            },
            {
                q: "I am a regular student of this batch, _____?",
                options: ["am I", "amn't I", "aren't I", "isn't I"],
                ans: 2,
                exp: "Positive 'I am...'-এর প্রমিত Tag Question হলো 'aren't I?' (কারণ 'amn't' কোনো প্রমিত contraction নয়)। বাকি অপশনগুলো কেন নয়: 'am I' positive বাক্যের পর সাধারণত আসে না; 'amn't I' অপ্রমিত; 'isn't I' subject 'I'-এর সাথে মেলে না।"
            },
            {
                q: "Nobody attended the seminar, _____?",
                options: ["did they", "didn't they", "does he", "did he"],
                ans: 0,
                exp: "'Nobody' নেতিবাচক অর্থ বহন করায় Tag হবে Positive, এবং 'Nobody/Everybody'-এর pronoun হিসেবে 'they' ব্যবহৃত হয় ('did they?')। বাকি অপশনগুলো কেন নয়: 'didn't they' negative tag; 'does he' present tense; 'did he' gender/number-এর একমুখী সীমাবদ্ধতা তৈরি করে।"
            },
            {
                q: "Do you know what time _____?",
                options: ["the train arrives", "does the train arrive", "arrives the train", "did the train arrived"],
                ans: 0,
                exp: "Embedded question-এ 'what time'-এর পর Assertive word order ('the train arrives') বসে। বাকি অপশনগুলো কেন নয়: 'does the train arrive' ও 'arrives the train' interrogative word order; 'did the train arrived' ব্যাকরণগতভাবে ভুল।"
            },
            {
                q: "Please open the window, _____?",
                options: ["will you", "don't you", "shall we", "do you"],
                ans: 0,
                exp: "সাধারণ Imperative বাক্যের Tag Question হিসেবে 'will you?' (বা 'won't you?') ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'don't you' বা 'do you' imperative-এর স্বাভাবিক tag নয়; 'shall we' 'Let's'-এর জন্য।"
            },
            {
                q: "He seldom speaks in class, _____?",
                options: ["doesn't he", "does he", "is he", "isn't he"],
                ans: 1,
                exp: "'seldom' একটি semi-negative adverb ('প্রায় না'), তাই বাক্যটি নেতিবাচক অর্থের; ফলে Tag হবে Positive ('does he?')। বাকি অপশনগুলো কেন নয়: 'doesn't he' negative tag যা 'seldom'-এর নেতিবাচক ভাবের সাথে দ্বন্দ্ব তৈরি করে; 'is/isn't' এখানে সঠিক auxiliary নয়।"
            },
            {
                q: "I wonder if she _____ the message.",
                options: ["has received", "have received", "did received", "receiving"],
                ans: 0,
                exp: "'if'-যুক্ত embedded clause-এ singular 'she'-এর সাথে 'has received' এবং assertive word order সঠিক। বাকি অপশনগুলো কেন নয়: 'have received' plural; 'did received' ভুল; 'receiving' finite verb নয়।"
            },
            {
                q: "Everything looks fine, _____?",
                options: ["doesn't it", "don't they", "does it", "aren't they"],
                ans: 0,
                exp: "'Everything' singular হওয়ায় এর pronoun হয় 'it', এবং বাক্যটি positive হওয়ায় Tag হবে 'doesn't it?'। বাকি অপশনগুলো কেন নয়: 'don't they' বা 'aren't they' plural pronoun ব্যবহার করছে; 'does it' positive tag।"
            },
            {
                q: "Can you explain how this machine _____?",
                options: ["works", "does it work", "work", "is working"],
                ans: 0,
                exp: "Embedded question-এ 'how this machine works' assertive word order-এ থাকে এবং singular 'this machine'-এর সাথে 'works' বসে। বাকি অপশনগুলো কেন নয়: 'does it work' interrogative order; 'work' singular subject-এর সাথে ভুল।"
            },
            {
                q: "There are many books on the shelf, _____?",
                options: ["aren't there", "are there", "don't they", "isn't there"],
                ans: 0,
                exp: "Introductory 'There'-যুক্ত বাক্যের Tag Question-এ subject হিসেবে 'there'-ই ব্যবহৃত হয় এবং 'are'-এর negative form 'aren't there?' বসে। বাকি অপশনগুলো কেন নয়: 'are there' positive; 'don't they' ও 'isn't there' subject/number-এর সাথে মেলে না।"
            },
            {
                q: "I don't know whether he _____ tomorrow.",
                options: ["will come", "will he come", "does he come", "coming"],
                ans: 0,
                exp: "'whether'-যুক্ত embedded clause-এ assertive word order ('he will come') বসে। বাকি অপশনগুলো কেন নয়: 'will he come' ও 'does he come' interrogative word order; 'coming' অসম্পূর্ণ।"
            },
            {
                q: "You have finished your homework, _____?",
                options: ["haven't you", "have you", "didn't you", "don't you"],
                ans: 0,
                exp: "Positive 'have finished'-এর Tag Question হলো 'haven't you?'। বাকি অপশনগুলো কেন নয়: 'have you' positive; 'didn't you' past simple এবং 'don't you' present simple-এর জন্য।"
            },
            {
                q: "Nobody knows who _____ the bell first.",
                options: ["rang", "did ring", "does ring", "ringing"],
                ans: 0,
                exp: "যখন 'who' নিজেই embedded clause-এর Subject হিসেবে কাজ করে, তখন word order এমনিতেই 'who + verb' ('who rang') থাকে। বাকি অপশনগুলো কেন নয়: 'did ring' বা 'does ring' সাধারণত প্রশ্ন/জোরের ক্ষেত্রে আসে, সহজ অতীত বর্ণনায় 'rang' সবচেয়ে স্বাভাবিক; 'ringing' finite verb নয়।"
            },
            {
                q: "Don't make noise in the library, _____?",
                options: ["will you", "do you", "shall we", "can't you"],
                ans: 0,
                exp: "Negative Imperative-এর Tag Question সাধারণত 'will you?' হয়। বাকি অপশনগুলো কেন নয়: 'do you' বা 'shall we' এখানে প্রমিত নয়; 'can't you' কম স্বাভাবিক।"
            },
            {
                q: "They hardly ever visit their village, _____?",
                options: ["do they", "don't they", "did they", "aren't they"],
                ans: 0,
                exp: "'hardly ever' নেতিবাচক অর্থ প্রকাশ করায় Tag হবে Positive ('do they?')। বাকি অপশনগুলো কেন নয়: 'don't they' negative tag; 'did they' past tense; 'aren't they' সঠিক auxiliary নয়।"
            },
            {
                q: "Please tell me whose bag _____.",
                options: ["this is", "is this", "this are", "are these"],
                ans: 0,
                exp: "Embedded clause-এ 'whose bag this is' assertive word order ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: 'is this' interrogative order; 'this are' ও 'are these' number-এর ভুল।"
            },
            {
                q: "I am not late today, _____?",
                options: ["am I", "aren't I", "was I", "do I"],
                ans: 0,
                exp: "Negative 'I am not...'-এর Tag Question হলো 'am I?'। বাকি অপশনগুলো কেন নয়: 'aren't I' positive বাক্যের জন্য; 'was I' past; 'do I' ভুল auxiliary।"
            },
            {
                q: "Let them finish their meal, _____?",
                options: ["will you", "shall we", "don't they", "do they"],
                ans: 0,
                exp: "'Let them...' (অনুমতি বা আদেশমূলক imperative)-এর Tag Question সাধারণত 'will you?' হয়। বাকি অপশনগুলো কেন নয়: 'shall we' 'Let's'-এর জন্য; 'don't they' ও 'do they' সঠিক নয়।"
            },
            {
                q: "She asked me where I _____ the previous evening.",
                options: ["had gone", "have gone", "will go", "am going"],
                ans: 0,
                exp: "Reporting verb 'asked' past tense হওয়ায় এবং 'the previous evening' অতীত বোঝানোয় embedded clause-এ 'had gone' ও assertive order ('I had gone') সঠিক। বাকি অপশনগুলো কেন নয়: 'have gone' present perfect; 'will go' future; 'am going' present continuous।"
            },
            {
                q: "This is a wonderful idea, _____?",
                options: ["isn't it", "is it", "aren't they", "doesn't it"],
                ans: 0,
                exp: "'This' singular হওয়ায় Tag-এ 'it' আসে এবং positive 'is'-এর negative tag হলো 'isn't it?'। বাকি অপশনগুলো কেন নয়: 'is it' positive; 'aren't they' plural; 'doesn't it' মূল verb 'is'-এর সাথে মেলে না।"
            },
            {
                q: "Do you know why _____?",
                options: ["he resigned", "did he resign", "resigned he", "does he resigned"],
                ans: 0,
                exp: "Embedded question-এ 'why he resigned' assertive word order ('subject + verb') অনুসরণ করে। বাকি অপশনগুলো কেন নয়: 'did he resign' ও 'resigned he' interrogative/inverted order; 'does he resigned' ব্যাকরণগতভাবে ভুল।"
            },
            {
                q: "Everyone cheered loudly, _____?",
                options: ["didn't they", "did they", "don't they", "doesn't it"],
                ans: 0,
                exp: "Positive past 'cheered'-এর Tag হবে Negative ('didn't') এবং 'Everyone'-এর pronoun হবে 'they' ('didn't they?')। বাকি অপশনগুলো কেন নয়: 'did they' positive; 'don't they' present; 'doesn't it' singular/present।"
            },
            {
                q: "We should respect our elders, _____?",
                options: ["shouldn't we", "should we", "don't we", "mustn't we"],
                ans: 0,
                exp: "Positive 'should'-যুক্ত বাক্যের Tag Question হলো 'shouldn't we?'। বাকি অপশনগুলো কেন নয়: 'should we' positive; 'don't we' বা 'mustn't we' মূল modal 'should'-এর সাথে মেলে না।"
            }
        ]
    },
    "Positive & Negative Agreement": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Positive Agreement ('So + auxiliary + subject' / 'Subject + auxiliary + too') এবং Negative Agreement ('Neither/Nor + auxiliary + subject' / 'Subject + negative auxiliary + either')-এর গঠন ও শব্দক্রম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Rahim likes classical music, and _____.",
                options: ["so does Karim", "so Karim does", "neither does Karim", "Karim does either"],
                ans: 0,
                exp: "ইতিবাচক বাক্যের সাথে একমত হতে 'and + so + auxiliary + subject' কাঠামো বসে; 'likes' present simple হওয়ায় 'so does Karim' সঠিক। বাকি অপশনগুলো কেন নয়: 'so Karim does' প্রশ্ন/agreement-এর প্রমিত inverted রূপ নয়; 'neither does Karim' negative agreement; 'either' negative বাক্যে আসে।"
            },
            {
                q: "I cannot swim in deep water, and _____.",
                options: ["so can my brother", "neither can my brother", "my brother can too", "nor my brother can"],
                ans: 1,
                exp: "নেতিবাচক বাক্যের ('cannot') সাথে একমত হতে 'and + neither/nor + auxiliary + subject' কাঠামো বসে; তাই 'neither can my brother' সঠিক। বাকি অপশনগুলো কেন নয়: 'so can...' positive agreement; 'too' positive বাক্যে আসে; 'nor my brother can' inversion ছাড়া অপ্রমিত।"
            },
            {
                q: "She has completed the assignment, and I _____.",
                options: ["have too", "have either", "do too", "did too"],
                ans: 0,
                exp: "Positive agreement-এর আরেকটি রূপ হলো 'subject + auxiliary + too'; এখানে 'has completed' থাকায় 'have too' সঠিক। বাকি অপশনগুলো কেন নয়: 'either' negative বাক্যে আসে; 'do too' বা 'did too' tense/auxiliary-এর সাথে মেলে না।"
            },
            {
                q: "He did not attend the meeting yesterday, and _____.",
                options: ["so did I", "neither did I", "I did too", "neither I did"],
                ans: 1,
                exp: "Past negative বাক্যের সাথে একমত হতে 'and + neither + did + I' ('neither did I') সঠিক। বাকি অপশনগুলো কেন নয়: 'so did I' ও 'I did too' positive agreement; 'neither I did' inversion ছাড়া সঠিক নয়।"
            },
            {
                q: "They are going to the book fair today, and _____.",
                options: ["so am I", "neither am I", "so I am", "I am either"],
                ans: 0,
                exp: "Positive 'are going'-এর সাথে একমত হতে 'so + am + I' ('so am I') সঠিক। বাকি অপশনগুলো কেন নয়: 'neither am I' negative; 'so I am' inverted নয়; 'either' negative-এর জন্য।"
            },
            {
                q: "She does not eat fast food, and her sister _____.",
                options: ["doesn't either", "does too", "doesn't too", "is either"],
                ans: 0,
                exp: "Negative agreement-এর 'subject + negative auxiliary + either' কাঠামো অনুযায়ী 'doesn't either' সঠিক। বাকি অপশনগুলো কেন নয়: 'does too' positive; 'doesn't too' ভুল; 'is either' auxiliary অসঙ্গতিপূর্ণ।"
            },
            {
                q: "Which of the following correctly expresses negative agreement with 'He has never visited Sylhet'?",
                options: ["Neither has his friend.", "So has his friend.", "His friend has too.", "Nor his friend has."],
                ans: 0,
                exp: "'never' নেতিবাচক অর্থ দেয় এবং tense হলো present perfect ('has'), তাই 'Neither has his friend.' সঠিক। বাকি অপশনগুলো কেন নয়: 'So has...' ও '... has too' positive; 'Nor his friend has.' inversion ছাড়া সঠিক নয়।"
            },
            {
                q: "Rina plays the violin well, and _____.",
                options: ["so does Mina", "neither does Mina", "Mina doesn't either", "so is Mina"],
                ans: 0,
                exp: "Present simple 'plays'-এর positive agreement হলো 'so does Mina' (বা 'Mina does too')। বাকি অপশনগুলো কেন নয়: 'neither does Mina' ও 'Mina doesn't either' negative; 'so is Mina' ভুল auxiliary।"
            },
            {
                q: "I will not be present at the party, and _____.",
                options: ["neither will he", "so will he", "he will too", "neither he will"],
                ans: 0,
                exp: "Negative future 'will not'-এর সাথে একমত হতে 'neither will he' (বা 'he won't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so will he' ও 'he will too' positive; 'neither he will' inversion ছাড়া ভুল।"
            },
            {
                q: "The train arrived on time, and _____.",
                options: ["so did the bus", "neither did the bus", "the bus didn't either", "so was the bus"],
                ans: 0,
                exp: "Past simple 'arrived'-এর positive agreement হলো 'so did the bus' (বা 'the bus did too')। বাকি অপশনগুলো কেন নয়: 'neither...' ও '... didn't either' negative; 'so was...' ভুল auxiliary।"
            },
            {
                q: "He wasn't interested in the offer, and _____.",
                options: ["neither was I", "so was I", "I was too", "neither I was"],
                ans: 0,
                exp: "Past negative 'wasn't'-এর সাথে একমত হতে 'neither was I' (বা 'I wasn't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so was I' ও 'I was too' positive; 'neither I was' inversion ছাড়া ভুল।"
            },
            {
                q: "We should follow the syllabus strictly, and _____.",
                options: ["so should they", "neither should they", "they shouldn't either", "so do they"],
                ans: 0,
                exp: "Positive 'should'-এর সাথে একমত হতে 'so should they' (বা 'they should too') সঠিক। বাকি অপশনগুলো কেন নয়: 'neither should they' ও 'they shouldn't either' negative; 'so do they' ভুল modal/auxiliary।"
            },
            {
                q: "She doesn't know French, and I _____.",
                options: ["don't either", "do too", "don't too", "am either"],
                ans: 0,
                exp: "Negative present simple-এর সাথে 'don't either' (বা 'neither do I') সঠিক। বাকি অপশনগুলো কেন নয়: 'do too' positive; 'don't too' ভুল; 'am either' ভুল verb।"
            },
            {
                q: "They had left before we arrived, and _____.",
                options: ["so had we", "neither had we", "we hadn't either", "so did we"],
                ans: 0,
                exp: "Past perfect 'had left'-এর positive agreement হলো 'so had we' (বা 'we had too')। বাকি অপশনগুলো কেন নয়: 'neither...' ও '... hadn't either' negative; 'so did we' ভুল auxiliary।"
            },
            {
                q: "I haven't seen that movie yet, and _____.",
                options: ["neither has she", "so has she", "she has too", "neither she has"],
                ans: 0,
                exp: "Negative present perfect 'haven't seen'-এর সাথে 'neither has she' (বা 'she hasn't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so has she' ও 'she has too' positive; 'neither she has' inversion ছাড়া ভুল।"
            },
            {
                q: "Identify the grammatical error in: 'He is a good writer, and so does his brother.'",
                options: ["'so does' should be 'so is'", "'He is' should be 'He does'", "'a good writer' is wrong", "No error"],
                ans: 0,
                exp: "মূল বাক্যে auxiliary/linking verb হলো 'is', তাই agreement-এ 'so does'-এর বদলে 'so is his brother' হবে। বাকি অপশনগুলো কেন নয়: 'He is' ও 'a good writer' শুদ্ধ।"
            },
            {
                q: "Identify the grammatical error in: 'I don't like tea, and neither do my parents either.'",
                options: ["'neither do' and 'either' together create a double negative/redundant agreement", "'I don't like' should be 'I am not liking'", "'tea' should be plural", "No error"],
                ans: 0,
                exp: "একই agreement-এ 'neither do my parents' (inverted negative agreement) এবং 'either' (non-inverted negative agreement) একসাথে বসানো হয় না; হয় 'and neither do my parents' নয়তো 'and my parents don't either' হবে। বাকি অপশনগুলো কেন নয়: মূল অংশগুলো ঠিক আছে।"
            },
            {
                q: "Rahim can speak Arabic fluently, and _____.",
                options: ["so can Tariq", "neither can Tariq", "Tariq can't either", "so does Tariq"],
                ans: 0,
                exp: "Positive 'can'-এর সাথে একমত হতে 'so can Tariq' সঠিক। বাকি অপশনগুলো কেন নয়: 'neither can...' ও '... can't either' negative; 'so does Tariq' ভুল auxiliary।"
            },
            {
                q: "She didn't buy any book yesterday, and _____.",
                options: ["neither did I", "so did I", "I did too", "neither I did"],
                ans: 0,
                exp: "Past negative 'didn't buy'-এর সাথে 'neither did I' (বা 'I didn't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so did I' ও 'I did too' positive; 'neither I did' inversion ছাড়া ভুল।"
            },
            {
                q: "The students were attentive in class, and _____.",
                options: ["so was the monitor", "neither was the monitor", "the monitor wasn't either", "so did the monitor"],
                ans: 0,
                exp: "Positive 'were'-এর সাথে singular subject 'the monitor'-এর জন্য 'so was the monitor' সঠিক। বাকি অপশনগুলো কেন নয়: 'neither...' ও '... wasn't either' negative; 'so did...' ভুল verb।"
            },
            {
                q: "He won't join the tour, and _____.",
                options: ["neither will I", "so will I", "I will too", "neither I will"],
                ans: 0,
                exp: "Negative 'won't join'-এর সাথে 'neither will I' (বা 'I won't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so will I' ও 'I will too' positive; 'neither I will' inversion ছাড়া ভুল।"
            },
            {
                q: "I enjoy reading historical novels, and my wife _____.",
                options: ["does too", "is too", "doesn't either", "did too"],
                ans: 0,
                exp: "Present simple 'enjoy'-এর positive agreement-এ 'subject + does + too' ('does too') সঠিক। বাকি অপশনগুলো কেন নয়: 'is too' ভুল auxiliary; 'doesn't either' negative; 'did too' past tense।"
            },
            {
                q: "They haven't replied to the email yet, and _____.",
                options: ["neither have we", "so have we", "we have too", "neither we have"],
                ans: 0,
                exp: "Negative 'haven't replied'-এর সাথে 'neither have we' (বা 'we haven't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so have we' ও 'we have too' positive; 'neither we have' inversion ছাড়া ভুল।"
            },
            {
                q: "Karim works hard every day, and _____.",
                options: ["so does Rahim", "neither does Rahim", "Rahim doesn't either", "so is Rahim"],
                ans: 0,
                exp: "Present simple 'works'-এর positive agreement হলো 'so does Rahim' (বা 'Rahim does too')। বাকি অপশনগুলো কেন নয়: 'neither...' ও '... doesn't either' negative; 'so is Rahim' ভুল verb।"
            },
            {
                q: "She could not solve the puzzle, and _____.",
                options: ["neither could I", "so could I", "I could too", "neither I could"],
                ans: 0,
                exp: "Negative 'could not'-এর সাথে 'neither could I' (বা 'I couldn't either') সঠিক। বাকি অপশনগুলো কেন নয়: 'so could I' ও 'I could too' positive; 'neither I could' inversion ছাড়া ভুল।"
            }
        ]
    },
    "Inversion of Verbs": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Subject-Verb Inversion কী এবং Negative/Restrictive Adverb ('Never', 'Seldom', 'Hardly', 'Scarcely', 'No sooner', 'Only'), Place Adverbial ও Conditional Inversion-এর নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Never _____ such an inspiring speech before.",
                options: ["I have heard", "have I heard", "I heard", "did heard I"],
                ans: 1,
                exp: "বাক্যের শুরুতে negative adverb 'Never' বসলে Auxiliary Verb Subject-এর আগে আসে ('have I heard')। বাকি অপশনগুলো কেন নয়: 'I have heard' বা 'I heard' inversion ছাড়া প্রমিত নয়; 'did heard I' ভুল tense/word order।"
            },
            {
                q: "Not only _____ intelligent, but she is also very compassionate.",
                options: ["she is", "is she", "she was", "does she"],
                ans: 1,
                exp: "'Not only' বাক্যের শুরুতে বসলে প্রথম clause-এ Subject-Verb inversion হয়; present tense হওয়ায় 'is she' সঠিক। বাকি অপশনগুলো কেন নয়: 'she is' inversion ছাড়া ভুল; 'she was' past; 'does she' সঠিক auxiliary নয়।"
            },
            {
                q: "Seldom _____ to such a calm place in the city.",
                options: ["we go", "do we go", "we went", "goes we"],
                ans: 1,
                exp: "বাক্যের শুরুতে 'Seldom' থাকায় 'do + subject + base verb' ('do we go') inversion বসে। বাকি অপশনগুলো কেন নয়: 'we go' বা 'we went' inversion ছাড়া প্রমিত নয়; 'goes we' ভুল verb/word order।"
            },
            {
                q: "_____ he called me, I would have helped him immediately.",
                options: ["If had", "Had", "Should", "Were"],
                ans: 1,
                exp: "Third conditional-এ 'If' বাদ দিয়ে inversion করলে 'Had + subject + past participle' ('Had he called...') হয়। বাকি অপশনগুলো কেন নয়: 'If had' ভুল; 'Should' first conditional-এর জন্য; 'Were' present/state unreal conditional-এর জন্য।"
            },
            {
                q: "Only by working consistently _____ achieve top merit.",
                options: ["you can", "can you", "you will", "does you"],
                ans: 1,
                exp: "'Only + prepositional/adverbial phrase' বাক্যের শুরুতে বসলে মূল clause-এ inversion হয় ('can you achieve')। বাকি অপশনগুলো কেন নয়: 'you can' বা 'you will' inversion ছাড়া প্রমিত নয়; 'does you' ভুল।"
            },
            {
                q: "Hardly _____ the station when the train pulled in.",
                options: ["we had reached", "had we reached", "we reached", "did we reached"],
                ans: 1,
                exp: "'Hardly' বাক্যের শুরুতে বসায় 'had we reached' inversion কাঠামো সঠিক। বাকি অপশনগুলো কেন নয়: 'we had reached' বা 'we reached' inversion ছাড়া ভুল; 'did we reached' ব্যাকরণগতভাবে ত্রুটিপূর্ণ।"
            },
            {
                q: "Down the hill _____ the children with great excitement.",
                options: ["ran", "did run", "running", "runs"],
                ans: 0,
                exp: "স্থান বা দিক নির্দেশক adverbial ('Down the hill') বাক্যের শুরুতে এলে এবং subject noun হলে প্রায়ই পূর্ণ inversion ('ran the children') ঘটে। বাকি অপশনগুলো কেন নয়: 'did run' এই বর্ণনামূলক স্থান-ইনভার্সনে কম স্বাভাবিক; 'running' non-finite; 'runs' present tense।"
            },
            {
                q: "Little _____ what difficulties lay ahead of him.",
                options: ["he knew", "did he know", "he knows", "does he knew"],
                ans: 1,
                exp: "বাক্যের শুরুতে 'Little' ('মোটেও না/খুব কমই') নেতিবাচক অর্থে ব্যবহৃত হওয়ায় 'did he know' inversion বসে। বাকি অপশনগুলো কেন নয়: 'he knew' বা 'he knows' inversion ছাড়া সঠিক নয়; 'does he knew' ভুল।"
            },
            {
                q: "_____ you need any assistance, please let me know.",
                options: ["Should", "Had", "Were", "Did"],
                ans: 0,
                exp: "First conditional-এর inverted রূপে ('If you should need...') 'Should' শুরুতে বসে। বাকি অপশনগুলো কেন নয়: 'Had' third conditional; 'Were' state/unreal; 'Did' এই শর্তাধীন অর্থে প্রমিত নয়।"
            },
            {
                q: "No sooner _____ the gate than the dog began to bark.",
                options: ["he opened", "had he opened", "he had opened", "did he opened"],
                ans: 1,
                exp: "'No sooner' শুরুতে বসলে 'had he opened ... than ...' inversion কাঠামো সঠিক। বাকি অপশনগুলো কেন নয়: 'he opened' বা 'he had opened' inversion ছাড়া অপ্রমিত; 'did he opened' ভুল।"
            },
            {
                q: "Under no circumstances _____ enter this restricted zone without permission.",
                options: ["visitors must", "must visitors", "visitors can", "do visitors"],
                ans: 0,
                exp: "'Under no circumstances' negative phrase শুরুতে বসলে 'must visitors enter' inversion সঠিক। বাকি অপশনগুলো কেন নয়: 'visitors must' inversion ছাড়া প্রমিত নয়; 'visitors can' অনুমতি দিচ্ছে যা অর্থের সাথে সাংঘর্ষিক; 'do visitors' সঠিক auxiliary নয়।"
            },
            {
                q: "_____ I a bird, I would fly across the river.",
                options: ["Were", "Was", "Had", "Should"],
                ans: 0,
                exp: "Unreal/hypothetical 'If I were...' -এর inverted রূপ হলো 'Were I a bird...'। বাকি অপশনগুলো কেন নয়: 'Was' formal subjunctive-এ কম শুদ্ধ; 'Had' বা 'Should' এখানে অর্থগতভাবে সঠিক নয়।"
            },
            {
                q: "At no time _____ he shown any sign of dishonesty.",
                options: ["has", "have", "is", "was"],
                ans: 0,
                exp: "'At no time' শুরুতে বসায় inversion হয় এবং singular 'he'-এর সাথে present perfect 'has' বসে ('has he shown')। বাকি অপশনগুলো কেন নয়: 'have' plural; 'is' ও 'was' 'shown' past participle-এর সাথে সঠিক নয়।"
            },
            {
                q: "Here _____ the bus you have been waiting for.",
                options: ["comes", "come", "is come", "coming"],
                ans: 0,
                exp: "'Here' দিয়ে বাক্য শুরু হলে এবং subject singular noun ('the bus') হলে 'Here comes the bus' inversion স্বাভাবিক। বাকি অপশনগুলো কেন নয়: 'come' singular-এর সাথে ভুল; 'is come' ও 'coming' এখানে সঠিক নয়।"
            },
            {
                q: "Not until yesterday _____ the truth about the matter.",
                options: ["I realized", "did I realize", "I had realized", "realized I"],
                ans: 1,
                exp: "'Not until + time' বাক্যের শুরুতে বসলে মূল clause-এ 'did I realize' inversion ঘটে। বাকি অপশনগুলো কেন নয়: 'I realized' inversion ছাড়া প্রমিত নয়; 'realized I' auxiliary ছাড়া প্রশ্ন/inversion-এ কম স্বাভাবিক।"
            },
            {
                q: "Scarcely _____ the room when the lights went out.",
                options: ["she had entered", "had she entered", "she entered", "did she entered"],
                ans: 1,
                exp: "'Scarcely' শুরুতে বসায় 'had she entered ... when ...' inversion সঠিক। বাকি অপশনগুলো কেন নয়: 'she had entered' বা 'she entered' inversion ছাড়া ভুল; 'did she entered' ত্রুটিপূর্ণ।"
            },
            {
                q: "In front of the library _____ a tall banyan tree.",
                options: ["stands", "stand", "standing", "is stand"],
                ans: 0,
                exp: "স্থানবাচক adverbial 'In front of the library' শুরুতে আসায় এবং subject singular 'a tall banyan tree' হওয়ায় 'stands' সঠিক। বাকি অপশনগুলো কেন নয়: 'stand' plural; 'standing' finite verb নয়; 'is stand' ভুল।"
            },
            {
                q: "So tired _____ that she fell asleep on the chair.",
                options: ["she was", "was she", "she is", "did she"],
                ans: 1,
                exp: "'So + adjective' বাক্যের শুরুতে জোর দেওয়ার জন্য বসলে মূল verb/auxiliary subject-এর আগে আসে ('So tired was she that...')। বাকি অপশনগুলো কেন নয়: 'she was' inversion ছাড়া কম প্রমিত; 'she is' present; 'did she' ভুল verb।"
            },
            {
                q: "Rarely _____ such dedication among young learners.",
                options: ["one sees", "does one see", "one saw", "sees one"],
                ans: 1,
                exp: "Frequency/negative adverb 'Rarely' শুরুতে বসলে 'does one see' inversion বসে। বাকি অপশনগুলো কেন নয়: 'one sees' বা 'one saw' inversion ছাড়া ভুল; 'sees one' প্রমিত নয়।"
            },
            {
                q: "_____ he worked a bit harder, he would have passed easily.",
                options: ["Had", "Should", "Were", "Did"],
                ans: 0,
                exp: "'would have passed' থাকায় এটি third conditional; তাই 'Had he worked...' inversion সঠিক। বাকি অপশনগুলো কেন নয়: 'Should', 'Were' বা 'Did' অতীতের অবাস্তব শর্তের সাথে মেলে না।"
            },
            {
                q: "Nowhere else _____ find such a peaceful reading environment.",
                options: ["you can", "can you", "you will", "does you"],
                ans: 1,
                exp: "Negative adverb 'Nowhere' শুরুতে বসায় 'can you find' inversion সঠিক। বাকি অপশনগুলো কেন নয়: 'you can' বা 'you will' inversion ছাড়া প্রমিত নয়; 'does you' ভুল।"
            },
            {
                q: "Neither _____ interested in joining the debate club.",
                options: ["Rahim nor Karim is", "is Rahim nor Karim", "Rahim nor Karim are", "are Rahim nor Karim"],
                ans: 0,
                exp: "এখানে 'Neither...nor' বাক্যের শুরুতে subject হিসেবে যুক্ত হয়েছে, তাই 'Rahim nor Karim is' স্বাভাবিক word order (inversion নয়)। বাকি অপশনগুলো কেন নয়: 'is Rahim nor Karim' অস্বাভাবিক; 'are' singular subjects-এর সাথে কম প্রমিত।"
            },
            {
                q: "Only when the rain stopped _____ resume our journey.",
                options: ["we could", "could we", "we can", "did we can"],
                ans: 1,
                exp: "'Only when...' শুরুতে বসলে মূল clause-এ 'could we resume' inversion হয়। বাকি অপশনগুলো কেন নয়: 'we could' বা 'we can' inversion ছাড়া প্রমিত নয়; 'did we can' ব্যাকরণগতভাবে ভুল।"
            },
            {
                q: "Out of the classroom _____ the students as soon as the bell rang.",
                options: ["rushed", "did rush", "rushing", "rushes"],
                ans: 0,
                exp: "স্থান/দিক নির্দেশক adverbial শুরুতে আসায় এবং plural subject 'the students' থাকায় 'rushed the students' সঠিক। বাকি অপশনগুলো কেন নয়: 'did rush' কম স্বাভাবিক; 'rushing' non-finite; 'rushes' singular/present।"
            },
            {
                q: "_____ they available, we would discuss the matter today.",
                options: ["Were", "Had", "Should", "Are"],
                ans: 0,
                exp: "বর্তমানের কাল্পনিক অবস্থায় ('If they were available...') 'Were they available...' inversion সঠিক। বাকি অপশনগুলো কেন নয়: 'Had' past unreal; 'Should' first conditional; 'Are' বাস্তব বর্তমান বোঝায়।"
            }
        ]
    },
    "Dangling / Misplaced Modifiers": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Dangling Modifier ও Misplaced Modifier-এর পার্থক্য কী এবং Participial/Infinitive Phrase-এর কর্তা (Subject) নির্ভুল রেখে বাক্য সংশোধনের নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Which sentence contains a Dangling Modifier?",
                options: ["Walking along the garden, I saw a colorful bird.", "Walking along the garden, a colorful bird bit him.", "Having finished his homework, Rahim went to bed.", "Tired after the long journey, she slept soundly."],
                ans: 1,
                exp: "'Walking along the garden' কাজটি করছে 'him', কিন্তু মূল clause-এর subject হলো 'a colorful bird'—ফলে বোঝাচ্ছে পাখিটি বাগানে হাঁটছিল! এটি একটি Dangling Modifier। বাকি অপশনগুলো কেন নয়: এগুলোতে participial phrase-এর কর্তা মূল clause-এর subject-এর সাথে সঙ্গতিপূর্ণ।"
            },
            {
                q: "Identify the correct sentence free from dangling modifiers:",
                options: ["Running to catch the bus, my bag fell on the road.", "Running to catch the bus, I dropped my bag on the road.", "Having cooked dinner, the guests were served by her.", "Exhausted from work, the bed looked inviting to him."],
                ans: 1,
                exp: "'Running to catch the bus' কাজটি 'I' করেছে এবং মূল clause-এর subject-ও 'I' ('I dropped my bag...')। বাকি অপশনগুলো কেন নয়: প্রথমটিতে bag দৌড়াচ্ছিল; তৃতীয়টিতে guests রান্না করেছিল; চতুর্থটিতে bed ক্লান্ত ছিল।"
            },
            {
                q: "Which sentence has a Misplaced Modifier?",
                options: ["She almost read the entire book in one night.", "She read almost the entire book in one night.", "The man wearing a cap is my uncle.", "He bought a fresh mango from the market."],
                ans: 0,
                exp: "'almost read' বললে বোঝায় সে প্রায় পড়েইনি, অথচ অর্থ হলো সে প্রায় পুরো বইটি পড়েছে ('read almost the entire book')—তাই 'almost'-এর অবস্থান এখানে misplaced/ambiguous। বাকি অপশনগুলো কেন নয়: এগুলোতে modifier সঠিক অবস্থানে আছে।"
            },
            {
                q: "Choose the most logical correction for: 'Waiting for the train, rain started falling heavily.'",
                options: ["Waiting for the train, heavy rain started falling.", "Waiting for the train, we got caught in heavy rain.", "Waiting for the train, the umbrella was opened.", "Waiting for the train, the platform was crowded."],
                ans: 1,
                exp: "ট্রেনের জন্য অপেক্ষা করছিল 'we', তাই মূল clause-এর subject 'we' ('we got caught in heavy rain') রাখলে modifier-টি dangling থাকে না। বাকি অপশনগুলো কেন নয়: rain, umbrella বা platform ট্রেনের জন্য অপেক্ষা করে না।"
            },
            {
                q: "Which sentence is grammatically clear and well-modified?",
                options: ["He only told me about the meeting, not anyone else.", "He told only me about the meeting, not anyone else.", "He told me only about the meeting, nothing else.", "Both B and C are clear in their respective meanings."],
                ans: 3,
                exp: "'only'-এর অবস্থান অনুযায়ী অর্থ নির্ধারিত হয়: 'told only me' মানে কেবল আমাকেই বলেছে, আর 'told me only about the meeting' মানে কেবল মিটিংয়ের কথাই বলেছে—উভয়টিই স্পষ্ট। বাকি অপশনগুলো কেন নয়: 'He only told me' কথ্য হলেও formal precision-এ কম নির্দিষ্ট।"
            },
            {
                q: "Identify the dangling modifier in: 'To score high in the exam, regular practice is essential.'",
                options: ["To score high in the exam", "regular practice", "is essential", "None of these"],
                ans: 0,
                exp: "'To score high in the exam' infinitive phrase-এর কর্তা হলো শিক্ষার্থী/পরীক্ষার্থী, কিন্তু মূল subject হলো 'regular practice' (regular practice নিজে পরীক্ষা দেয় না)। বাকি অপশনগুলো কেন নয়: 'regular practice' মূল subject এবং 'is essential' predicate।"
            },
            {
                q: "How do you correct: 'Having entered the room, the fan was switched on.'?",
                options: ["Having entered the room, he switched on the fan.", "Having entered the room, the fan switched on.", "Entering the room, the fan was on.", "Having entered the room, light was switched on."],
                ans: 0,
                exp: "ঘরে প্রবেশ করেছিল ব্যক্তি ('he'), তাই মূল clause-এর subject 'he' ('he switched on the fan') বসালে dangling modifier দূর হয়। বাকি অপশনগুলো কেন নয়: fan বা light ঘরে প্রবেশ করে না।"
            },
            {
                q: "Which sentence contains a Squinting/Misplaced Modifier?",
                options: ["The students who study regularly often get good grades.", "Driving carefully, she reached home safely.", "She promised after the class to help me.", "After the class, she promised to help me."],
                ans: 2,
                exp: "'She promised after the class to help me' বাক্যে 'after the class' কখন প্রতিশ্রুতি দেওয়া হয়েছিল নাকি কখন সাহায্য করা হবে তা নিয়ে অস্পষ্টতা তৈরি করে (misplaced modifier)। বাকি অপশনগুলো কেন নয়: এগুলোতে অর্থ ও অবস্থান স্পষ্ট।"
            },
            {
                q: "Select the sentence without a dangling participle:",
                options: ["Looking out of the window, a beautiful rainbow was seen.", "Looking out of the window, we saw a beautiful rainbow.", "Looking out of the window, the garden looked green.", "Looking out of the window, a bird flew past."],
                ans: 1,
                exp: "জানালার বাইরে তাকিয়েছিল 'we', তাই 'we saw a beautiful rainbow' সঠিক। বাকি অপশনগুলো কেন নয়: rainbow, garden বা bird জানালার বাইরে তাকাচ্ছিল না।"
            },
            {
                q: "In 'He saw a man riding a bicycle with one eye,' what is the error?",
                options: ["'with one eye' is misplaced, making it sound like the bicycle has one eye", "'riding a bicycle' is wrong", "'saw' should be 'seen'", "No error"],
                ans: 0,
                exp: "'with one eye' modifier-টি 'a bicycle'-এর কাছে চলে আসায় অর্থ দাঁড়ায় একচোখা সাইকেল—আসলে এটি 'a man'-এর modifier হওয়া উচিত ('He saw a one-eyed man riding a bicycle')। বাকি অপশনগুলো কেন নয়: 'riding' ও 'saw' এখানে ঠিক আছে।"
            },
            {
                q: "Which sentence avoids a dangling modifier?",
                options: ["Before leaving for Dhaka, his mother packed his bag.", "Before leaving for Dhaka, he packed his bag with his mother's help.", "Before leaving for Dhaka, the ticket was booked.", "Before leaving for Dhaka, rain began."],
                ans: 1,
                exp: "ঢাকার উদ্দেশ্যে রওনা দিচ্ছিল 'he', তাই মূল clause-এর subject 'he' ('he packed his bag...') থাকায় modifier-টি শুদ্ধ। বাকি অপশনগুলো কেন নয়: mother, ticket বা rain ঢাকার উদ্দেশ্যে রওনা দিচ্ছিল না।"
            },
            {
                q: "Which of the following is a corrected version of: 'Young and inexperienced, the job seemed difficult to him.'?",
                options: ["Young and inexperienced, he found the job difficult.", "Young and inexperienced, the job was difficult.", "Young and inexperienced, difficult seemed the job.", "Young and inexperienced, there was a difficult job."],
                ans: 0,
                exp: "'Young and inexperienced' গুণটি 'he'-এর, 'the job'-এর নয়—তাই 'he found the job difficult' সঠিক। বাকি অপশনগুলো কেন নয়: চাকরিটি young/inexperienced নয়।"
            },
            {
                q: "Identify the misplaced modifier in: 'She bought a puppy for her child named Snowy.'",
                options: ["'named Snowy' appears to modify 'her child' instead of 'a puppy'", "'bought' is wrong", "'for her child' is wrong", "No error"],
                ans: 0,
                exp: "'named Snowy' ঠিক 'her child'-এর পাশে বসায় অস্পষ্টতা তৈরি হয়েছে; 'She bought a puppy named Snowy for her child.' লিখলে অর্থ স্পষ্ট হয়। বাকি অপশনগুলো কেন নয়: 'bought' ও 'for her child' সঠিক।"
            },
            {
                q: "Which sentence has NO dangling modifier?",
                options: ["Relying on guesswork, the answer was incorrect.", "Relying on guesswork, the candidate gave an incorrect answer.", "Relying on guesswork, mistakes were made.", "Relying on guesswork, the test was tough."],
                ans: 1,
                exp: "অনুমানের ওপর নির্ভর করেছিল 'the candidate', তাই 'the candidate gave an incorrect answer' সঠিক। বাকি অপশনগুলো কেন নয়: answer, mistakes বা test অনুমানের ওপর নির্ভর করে না।"
            },
            {
                q: "Choose the correct sentence:",
                options: ["Having lost his wallet, his journey became difficult.", "Having lost his wallet, he faced difficulty in his journey.", "Having lost his wallet, the wallet was missed.", "Having lost his wallet, difficulties arose."],
                ans: 1,
                exp: "ওয়ালেট হারিয়েছিল 'he', তাই মূল clause-এর subject 'he' ('he faced difficulty...') বসানো সঠিক। বাকি অপশনগুলো কেন নয়: journey, wallet বা difficulties ওয়ালেট হারায়নি।"
            },
            {
                q: "Which sentence contains a dangling infinitive phrase?",
                options: ["To understand law clearly, cases must be analyzed carefully.", "To understand law clearly, a student must analyze cases carefully.", "To understand law clearly, read the statutory provisions attentively.", "Both B and C are acceptable."],
                ans: 3,
                exp: "'a student must analyze...' বা imperative 'read...' ব্যবহার করলে infinitive phrase-এর কর্তা স্পষ্ট থাকে। বাকি অপশনগুলো কেন নয়: প্রথম বাক্যে 'cases' নিজে আইন বোঝে না বলে dangling modifier তৈরি হয়।"
            },
            {
                q: "Identify the error in: 'While walking in the park, a snake bit her.'",
                options: ["Dangling participle ('Walking in the park' has 'a snake' as its implied subject)", "'While' cannot be used with walking", "'bit' should be 'bitten'", "No error"],
                ans: 0,
                exp: "পার্কে হাঁটছিল 'she', কিন্তু মূল subject 'a snake' হওয়ায় dangling modifier হয়েছে ('While she was walking in the park, a snake bit her.' হলে শুদ্ধ হয়)। বাকি অপশনগুলো কেন নয়: 'While' ও 'bit' এখানে ব্যাকরণগতভাবে ভুল নয়।"
            },
            {
                q: "Which sentence places the modifier correctly?",
                options: ["He served hot tea to the guests in a cup.", "He served tea in a hot cup to the guests.", "He served hot tea to the guests.", "He served tea hot to the guests in a cup."],
                ans: 2,
                exp: "'He served hot tea to the guests.' বাক্যে 'hot' ('tea'-এর গুণ) এবং 'to the guests' যথাযথভাবে বসেছে। বাকি অপশনগুলো কেন নয়: প্রথম ও চতুর্থটিতে 'in a cup' হাস্যকর/অস্পষ্ট অর্থ দেয়; দ্বিতীয়টিতে cup গরম বোঝায়।"
            },
            {
                q: "Which sentence is free from modifier errors?",
                options: ["Frightened by the loud noise, the baby started crying.", "Frightened by the loud noise, the room became silent.", "Frightened by the loud noise, a loud sound was heard.", "Frightened by the loud noise, the door rattled."],
                ans: 0,
                exp: "উচ্চ শব্দে ভয় পেয়েছিল 'the baby', তাই 'the baby started crying' সঠিক। বাকি অপশনগুলো কেন নয়: room, sound বা door ভয় পায় না।"
            },
            {
                q: "Why is 'She almost drove five hundred miles yesterday' potentially problematic in formal grammar?",
                options: ["'almost' before 'drove' can be misinterpreted as nearly driving rather than nearly five hundred miles", "'drove' is past tense", "'yesterday' is misplaced", "It is completely wrong in tense"],
                ans: 0,
                exp: "Formal style-এ 'almost' যদি verb 'drove'-এর আগে বসে তবে 'প্রায় চালিয়েছিল' এমন বিভ্রান্তি আসতে পারে; অথচ অর্থ হলো 'প্রায় পাঁচশ মাইল' ('drove almost five hundred miles')। বাকি অপশনগুলো কেন নয়: tense বা 'yesterday' এখানে মূল সমস্যা নয়।"
            },
            {
                q: "Select the grammatically sound sentence:",
                options: ["Walking through the rain, his clothes got soaked.", "Walking through the rain, he got his clothes soaked.", "Walking through the rain, umbrella was forgotten.", "Walking through the rain, mud splashed."],
                ans: 1,
                exp: "বৃষ্টির ভেতর দিয়ে হাঁটছিল 'he', তাই 'he got his clothes soaked' সঠিক। বাকি অপশনগুলো কেন নয়: clothes, umbrella বা mud হাঁটে না।"
            },
            {
                q: "Which sentence shows a properly placed participial phrase?",
                options: ["Covered with snow, we saw the mountain peak.", "Covered with snow, the mountain peak looked majestic.", "Covered with snow, the climber took a photo.", "Covered with snow, the camera clicked."],
                ans: 1,
                exp: "বরফে ঢাকা ছিল 'the mountain peak', তাই 'the mountain peak looked majestic' সঠিক। বাকি অপশনগুলো কেন নয়: we, the climber বা the camera বরফে ঢাকা থাকার মূল subject নয়।"
            },
            {
                q: "Identify the dangling modifier in: 'After reading the book, the film seemed less exciting.'",
                options: ["After reading the book", "the film", "seemed less exciting", "None of these"],
                ans: 0,
                exp: "বইটি পড়েছিল পাঠক/দর্শক, কিন্তু মূল subject হলো 'the film' (সিনেমা নিজে বই পড়ে না)—তাই 'After reading the book' একটি dangling modifier। বাকি অপশনগুলো কেন নয়: 'the film' subject এবং 'seemed less exciting' predicate।"
            },
            {
                q: "Which sentence fixes 'After reading the book, the film seemed less exciting' correctly?",
                options: ["After reading the book, he found the film less exciting.", "After reading the book, the film was less exciting.", "After reading the book, less exciting was the film.", "After reading the book, the book seemed exciting."],
                ans: 0,
                exp: "বই পড়া এবং সিনেমার মূল্যায়ন করার কর্তা 'he' যুক্ত করায় ('he found the film less exciting') modifier-টি dangling থাকে না। বাকি অপশনগুলো কেন নয়: অন্যান্য বাক্যে subject-এর সাথে 'reading the book'-এর সামঞ্জস্য নেই।"
            },
            {
                q: "Which sentence is completely clear and unambiguous?",
                options: ["The professor delivered a lecture on constitutional law in the hall.", "The professor delivered a lecture in the hall on constitutional law.", "Both A and B are clear, though A is slightly tighter.", "None of these is correct."],
                ans: 2,
                exp: "উভয় বাক্যেই অর্থ স্পষ্ট ('constitutional law' বিষয় এবং 'in the hall' স্থান), তবে 'A' ('a lecture on constitutional law in the hall') বেশি স্বাভাবিক ও গোছানো। বাকি অপশনগুলো কেন নয়: বাক্য দুটি ব্যাকরণগতভাবে অশুদ্ধ নয়।"
            }
        ]
    }
},
const styleAndRhetoricQuestions = {
    "Parallelism": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Parallelism (সমান্তরাল গঠন) কী এবং Correlative Conjunction ('not only...but also', 'either...or', 'neither...nor', 'both...and'), তালিকা ও তুলনায় কীভাবে সমান্তরাল রূপ রক্ষা করা হয় তা উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Which sentence maintains proper parallelism?",
                options: ["She likes reading, writing, and to paint.", "She likes reading, writing, and painting.", "She likes to read, writing, and painting.", "She likes read, write, and painting."],
                ans: 1,
                exp: "তালিকার সবগুলো পদ Gerund ('reading, writing, and painting') হওয়ায় সমান্তরাল গঠন বজায় আছে। বাকি অপশনগুলো কেন নয়: প্রথম ও তৃতীয়টিতে gerund ও infinitive মিশ্রিত হয়েছে; চতুর্থটিতে bare verb form ব্যবহৃত হয়েছে যা 'likes'-এর সাথে অসামঞ্জস্যপূর্ণ।"
            },
            {
                q: "He is not only good at English _____.",
                options: ["but also excels in mathematics", "but also good at mathematics", "and also good in mathematics", "but good in mathematics also"],
                ans: 1,
                exp: "'not only' এর পরে Adjective phrase 'good at English' থাকায় 'but also'-এর পরেও সমান্তরাল Adjective phrase 'good at mathematics' বসানো সবচেয়ে শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'excels in mathematics' verb phrase হওয়ায় সমান্তরালতা ভেঙে যায়; 'and also' বা 'but ... also' প্রমিত correlative জোড়া নয়।"
            },
            {
                q: "Identify the sentence with a parallelism error:",
                options: ["The candidate was honest, punctual, and hardworking.", "He came to the city to study law and for finding a job.", "They worked steadily, patiently, and carefully.", "Both the teacher and the student agreed on the plan."],
                ans: 1,
                exp: "'to study law' (infinitive phrase) এবং 'for finding a job' (prepositional phrase + gerund) পরস্পর সমান্তরাল নয় ('to find a job' হলে সমান্তরাল হতো)। বাকি অপশনগুলো কেন নয়: এগুলোতে পদ বা কাঠামোর সমান্তরালতা রক্ষিত হয়েছে।"
            },
            {
                q: "You can either submit the assignment today _____.",
                options: ["or submitting it tomorrow", "or submit it tomorrow", "nor submit it tomorrow", "and submit it tomorrow"],
                ans: 1,
                exp: "'either' এর পরে base verb 'submit' থাকায় 'or'-এর পরেও সমান্তরাল base verb 'submit' বসবে। বাকি অপশনগুলো কেন নয়: 'submitting' gerund/participle; 'nor' 'neither'-এর সাথে আসে; 'and' বিকল্প বোঝায় না।"
            },
            {
                q: "Choose the grammatically parallel sentence:",
                options: ["Reading is to the mind what exercise is to the body.", "Reading is to the mind what exercising is to the body.", "To read is to the mind what exercise is to the body.", "Reading is for the mind what exercise does to the body."],
                ans: 0,
                exp: "'Reading ... to the mind' এবং 'exercise ... to the body' উভয় অংশে noun/gerund-noun ও 'to + noun' কাঠামো সমান্তরালভাবে মিলেছে। বাকি অপশনগুলো কেন নয়: অন্যান্য বাক্যে দুটি অংশের রূপ বা ক্রিয়াগত সঙ্গতি সমান্তরাল নয়।"
            },
            {
                q: "Neither the manager nor the directors _____ willing to compromise.",
                options: ["was", "were", "is", "has been"],
                ans: 1,
                exp: "'Neither...nor' দিয়ে যুক্ত দুটি noun phrase-এর নিকটতম plural subject 'the directors' অনুযায়ী plural verb 'were' বসে এবং উভয় পাশে সমান্তরাল noun phrase রয়েছে। বাকি অপশনগুলো কেন নয়: 'was', 'is' ও 'has been' singular।"
            },
            {
                q: "Which sentence is correctly parallel in a series of verbs?",
                options: ["The speaker analyzed the data, interpreted the results, and drew a conclusion.", "The speaker analyzed the data, interpreting the results, and drew a conclusion.", "The speaker analyzing the data, interpreted the results, and drew a conclusion.", "The speaker analyzed the data, interpreted the results, and drawing a conclusion."],
                ans: 0,
                exp: "তিনটি মূল ক্রিয়াই Past Simple ('analyzed, interpreted, and drew') হওয়ায় সমান্তরালতা সম্পূর্ণ ঠিক আছে। বাকি অপশনগুলো কেন নয়: 'interpreting', 'analyzing' বা 'drawing' বসালে finite verb-এর ধারাবাহিকতা ভেঙে যায়।"
            },
            {
                q: "She prefers walking in the morning _____.",
                options: ["than to run in the evening", "to running in the evening", "rather than to run in the evening", "over to run in the evening"],
                ans: 1,
                exp: "'prefer + gerund + to + gerund' কাঠামো অনুযায়ী 'walking ... to running' সমান্তরাল ও শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'prefer'-এর সাথে সাধারণত 'than' বা 'over' প্রমিত নয় এবং 'to run' gerund 'walking'-এর সাথে সমান্তরাল নয়।"
            },
            {
                q: "Identify the parallel structure in: 'Ask not what your country can do for you—ask what you can do for your country.'",
                options: ["Parallel imperative clauses with antithetical balance", "Parallel noun phrases only", "Parallel prepositional phrases only", "There is no parallelism"],
                ans: 0,
                exp: "উভয় অংশেই 'ask what ... can do for ...' কাঠামোর প্রতিসম ও সমান্তরাল পুনরাবৃত্তি রয়েছে। বাকি অপশনগুলো কেন নয়: এটি কেবল noun বা prepositional phrase নয় এবং সমান্তরালতা স্পষ্টভাবে বিদ্যমান।"
            },
            {
                q: "Which sentence fixes: 'The course aims at teaching grammar, vocabulary, and how to write essays'?",
                options: ["The course aims at teaching grammar, vocabulary, and essay writing.", "The course aims at teaching grammar, vocabulary, and essays.", "The course aims at teaching grammar, vocabulary, and to write essays.", "The course aims at teach grammar, vocabulary, and writing essays."],
                ans: 0,
                exp: "'grammar', 'vocabulary', এবং 'essay writing'—তিনটিই Noun/Noun phrase হওয়ায় সমান্তরাল রূপ পূর্ণ হয়। বাকি অপশনগুলো কেন নয়: 'how to write essays' বা 'to write essays' noun তালিকায় অসামঞ্জস্যপূর্ণ; 'essays' একা 'essay writing'-এর সমার্থক নয়; 'teach' preposition 'at'-এর পর ভুল।"
            },
            {
                q: "Both her sincerity _____ her perseverance earned her success.",
                options: ["or", "nor", "and", "but"],
                ans: 2,
                exp: "'Both ... and' correlative জোড়া দুটি সমজাতীয় abstract noun ('her sincerity' ও 'her perseverance')-কে সমান্তরালভাবে যুক্ত করে। বাকি অপশনগুলো কেন নয়: 'or', 'nor' বা 'but' 'Both'-এর সাথে সঠিক নয়।"
            },
            {
                q: "Which sentence maintains parallelism in comparison?",
                options: ["The climate of Dhaka is hotter than Chattogram.", "The climate of Dhaka is hotter than that of Chattogram.", "The climate of Dhaka is hotter than Chattogram is hot.", "The climate of Dhaka is hotter than Chattogram's weather is."],
                ans: 1,
                exp: "তুলনায় 'The climate of Dhaka'-এর সমান্তরাল রূপ হলো 'that of Chattogram' (জলবায়ুর সাথে জলবায়ুর তুলনা, শহরের সাথে নয়)। বাকি অপশনগুলো কেন নয়: প্রথম বাক্যে জলবায়ুর সাথে শহরের তুলনা হয়ে যায়; তৃতীয় ও চতুর্থটি কম প্রমিত।"
            },
            {
                q: "He promised _____ on time and _____ all instructions.",
                options: ["to arrive / to follow", "arriving / to follow", "to arrive / following", "arrive / follow"],
                ans: 0,
                exp: "'promised'-এর পরে উভয় ক্রিয়াই To-Infinitive ('to arrive / to follow') হওয়ায় সমান্তরালতা রক্ষিত হয়েছে। বাকি অপশনগুলো কেন নয়: infinitive ও gerund মিশ্রিত করা বা শুধু bare verb বসানো এখানে সঠিক নয়।"
            },
            {
                q: "Which sentence has faulty parallelism?",
                options: ["Success depends on preparation, discipline, and confidence.", "He enjoys swimming in the river, cycling in the park, and to read novels.", "The report was clear, concise, and accurate.", "We need leaders who are honest, visionary, and courageous."],
                ans: 1,
                exp: "'swimming' ও 'cycling' gerund হলেও 'to read novels' infinitive হওয়ায় এখানে সমান্তরালতা ভেঙে গেছে। বাকি অপশনগুলো কেন নয়: সবগুলোতে সমজাতীয় পদ সমান্তরালভাবে ব্যবহৃত হয়েছে।"
            },
            {
                q: "To err is human; _____.",
                options: ["to forgive divine", "forgiving is divine", "to forgive is divine", "forgive divine"],
                ans: 2,
                exp: "'To err is human'-এর সমান্তরাল কাঠামোতে 'to forgive is divine' (infinitive + linking verb + adjective) সুষম ও শুদ্ধ। বাকি অপশনগুলো কেন নয়: 'to forgive divine'-এ 'is' অনুপস্থিত; 'forgiving is divine' infinitive-এর সাথে পুরোপুরি সমান্তরাল নয়; 'forgive divine' ব্যাকরণগতভাবে ত্রুটিপূর্ণ।"
            },
            {
                q: "They decided not only to expand the library _____.",
                options: ["but also to upgrade the computer lab", "but also upgrading the computer lab", "but also computer lab upgrade", "and also to upgrade the computer lab"],
                ans: 0,
                exp: "'not only to expand...' এর সমান্তরাল রূপ হিসেবে 'but also to upgrade...' (to-infinitive) সঠিক। বাকি অপশনগুলো কেন নয়: 'upgrading' gerund; 'computer lab upgrade' অপ্রমিত; 'and also' ভুল correlative।"
            },
            {
                q: "Which of the following is parallel in prepositional phrases?",
                options: ["He looked for his keys in the drawer, under the bed, and inside his bag.", "He looked for his keys in the drawer, under the bed, and his bag had them.", "He looked for his keys in the drawer, bed under, and inside bag.", "He looked for his keys drawer, bed, and bag."],
                ans: 0,
                exp: "'in the drawer, under the bed, and inside his bag'—তিনটিই স্থানবাচক Prepositional Phrase হওয়ায় সমান্তরাল। বাকি অপশনগুলো কেন নয়: অন্যান্য বিকল্পে clause ভাঙা বা phrase-এর গঠন নষ্ট হয়েছে।"
            },
            {
                q: "Identify the error in: 'Either you must study hard or failing in the exam.'",
                options: ["'failing' should be 'fail' to match 'study'", "'Either' should be 'Neither'", "'hard' should be 'hardly'", "No error"],
                ans: 0,
                exp: "'must study' base verb-এর সাথে সমান্তরাল রাখতে 'or failing'-এর বদলে 'or fail' হবে। বাকি অপশনগুলো কেন নয়: 'Either' ও 'hard' এখানে ঠিক আছে।"
            },
            {
                q: "Which sentence is parallel in adjectives?",
                options: ["The lecture was informative, engaging, and well-structured.", "The lecture was informative, engaging, and structure well.", "The lecture was informative, to engage, and well-structured.", "The lecture was inform, engaging, and well-structured."],
                ans: 0,
                exp: "'informative', 'engaging', এবং 'well-structured'—তিনটিই Adjective/Adjectival রূপ হওয়ায় সমান্তরাল। বাকি অপশনগুলো কেন নয়: অন্যান্য বিকল্পে verb বা infinitive ঢুকে সমান্তরালতা নষ্ট করেছে।"
            },
            {
                q: "She is neither lazy _____.",
                options: ["or careless", "nor careless", "and careless", "but careless"],
                ans: 1,
                exp: "'neither ... nor' correlative জোড়া অনুযায়ী 'nor careless' সঠিক এবং 'lazy'-এর সাথে সমান্তরাল adjective। বাকি অপশনগুলো কেন নয়: 'or', 'and' বা 'but' 'neither'-এর সাথে প্রমিত নয়।"
            }
        ]
    },
    "Redundancy & Wordiness": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Redundancy (পুনরাবৃত্তিদোষ) ও Wordiness (অপ্রয়োজনীয় শব্দবহুলতা) কী এবং প্রমিত ইংরেজিতে সংক্ষিপ্ত ও নির্ভুল বাক্য গঠনের নিয়ম উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Which phrase is redundant in standard English?",
                options: ["Return back", "Brief summary", "Final decision", "Future plan"],
                ans: 0,
                exp: "'Return' শব্দের মধ্যেই 'back' (ফিরে আসা) অর্থ নিহিত আছে, তাই 'return back' একটি Redundancy (পুনরাবৃত্তি)। বাকি অপশনগুলো কেন নয়: এগুলো সাধারণ ও স্বতন্ত্র অর্থবহ শব্দগুচ্ছ।"
            },
            {
                q: "Identify the redundant expression:",
                options: ["Repeat again", "New policy", "Strict rule", "Clear explanation"],
                ans: 0,
                exp: "'Repeat' মানেই 'আবার বলা বা করা', তাই এর সাথে 'again' যোগ করা অপ্রয়োজনীয় পুনরাবৃত্তি। বাকি অপশনগুলো কেন নয়: এগুলোতে কোনো পুনরাবৃত্তি নেই।"
            },
            {
                q: "Which sentence is concise and free from redundancy?",
                options: ["In my opinion, I think that the plan is good.", "I think the plan is good.", "In my personal opinion, I think the plan is good.", "The plan is good in my own personal opinion, I think."],
                ans: 1,
                exp: "'I think the plan is good.' বাক্যে অপ্রয়োজনীয় 'In my opinion', 'personal' বা 'I think'-এর দ্বৈত ব্যবহার নেই; এটি সংক্ষিপ্ত ও স্পষ্ট। বাকি অপশনগুলো কেন নয়: এগুলোতে একই ভাব একাধিকবার শব্দবহুলভাবে বলা হয়েছে।"
            },
            {
                q: "Which of the following is a classic example of redundancy?",
                options: ["Consensus of opinion", "Public transport", "Annual report", "Digital library"],
                ans: 0,
                exp: "'Consensus' নিজেই 'সাধারণ মতামত বা ঐকমত্য' বোঝায়, তাই 'of opinion' যোগ করা redundant। বাকি অপশনগুলো কেন নয়: এগুলো প্রমিত ও পুনরাবৃত্তিহীন noun phrase।"
            },
            {
                q: "Choose the non-redundant phrase:",
                options: ["Collaborate together", "Free gift", "Advance planning", "Unexpected surprise"],
                ans: 2,
                exp: "'Advance planning' (আগাম পরিকল্পনা) স্বাভাবিক ও প্রমিত। বাকি অপশনগুলো কেন নয়: 'collaborate' মানে একসাথে কাজ করা ('together' বাড়তি), 'gift' এমনিতেই বিনামূল্যের অর্থে আসে ('free' বাড়তি) এবং 'surprise' নিজেই অপ্রত্যাশিত ('unexpected' বাড়তি)।"
            },
            {
                q: "Which phrase contains unnecessary repetition?",
                options: ["Revert back", "Close proximity", "Past history", "All of these"],
                ans: 3,
                exp: "'revert back' (revert = ফিরে যাওয়া), 'close proximity' (proximity = নৈকট্য) এবং 'past history' (history = অতীতের ঘটনা)—তিনটিই redundant। বাকি অপশনগুলো কেন নয়: কোনো একটিকে বেছে নিলে বাকি দুটি পুনরাবৃত্তি বাদ পড়ে।"
            },
            {
                q: "Replace the wordy phrase 'Due to the fact that' with a concise equivalent:",
                options: ["Because", "Although", "Unless", "Until"],
                ans: 0,
                exp: "'Due to the fact that' হলো চার শব্দের wordy expression, যার সংক্ষিপ্ত ও প্রমিত রূপ হলো 'Because'। বাকি অপশনগুলো কেন নয়: 'Although' বৈপরীত্য, 'Unless' শর্ত এবং 'Until' সময় বোঝায়।"
            },
            {
                q: "Which sentence avoids wordiness?",
                options: ["At this point in time, we are unable to attend.", "Currently, we cannot attend.", "At the present moment in time, we are not able to attend.", "Due to the fact that it is late, we cannot attend at this point in time."],
                ans: 1,
                exp: "'Currently, we cannot attend.' সবচেয়ে সংক্ষিপ্ত, প্রাঞ্জল ও শব্দবহুলতামুক্ত। বাকি অপশনগুলো কেন নয়: 'At this point in time' বা 'At the present moment in time' অহেতুক দীর্ঘ ও wordy।"
            },
            {
                q: "Identify the redundant word in: 'He joined together with his friends.'",
                options: ["together", "joined", "with", "friends"],
                ans: 0,
                exp: "'joined' বা 'joined with' এর সাথে 'together' যোগ করা অপ্রয়োজনীয় পুনরাবৃত্তি। বাকি অপশনগুলো কেন নয়: বাকি শব্দগুলো বাক্যের মূল অর্থের জন্য প্রয়োজনীয়।"
            },
            {
                q: "Which of the following is redundant?",
                options: ["Final outcome", "Basic fundamentals", "Main objective", "Core skill"],
                ans: 1,
                exp: "'Fundamentals' নিজেই মৌলিক বিষয় বোঝায়, তাই 'Basic' যোগ করা redundant ('Basic fundamentals' বা 'Fundamental basics' পুনরাবৃত্তিদোষযুক্ত)। বাকি অপশনগুলো কেন নয়: 'Final outcome', 'Main objective' ও 'Core skill' প্রমিত।"
            },
            {
                q: "Choose the most concise expression for 'In order to pass':",
                options: ["To pass", "For the purpose of passing", "With the aim of passing", "In order to be able to pass"],
                ans: 0,
                exp: "অর্থ ঠিক রেখে সবচেয়ে সংক্ষিপ্ত ও প্রমিত রূপ হলো 'To pass'। বাকি অপশনগুলো কেন নয়: এগুলো তুলনামূলকভাবে বেশি শব্দবহুল (wordy)।"
            },
            {
                q: "Which sentence has a redundancy error?",
                options: ["The meeting ended at 5 p.m.", "She wrote her autobiography of her own life.", "They discussed the syllabus in detail.", "He submitted the application yesterday."],
                ans: 1,
                exp: "'Autobiography' মানেই নিজের জীবনের ইতিহাস, তাই 'of her own life' যোগ করা স্পষ্ট redundancy। বাকি অপশনগুলো কেন নয়: এগুলোতে কোনো পুনরাবৃত্তি নেই।"
            },
            {
                q: "Which phrase is NOT redundant?",
                options: ["Exact same", "True fact", "Essential requirement", "Mutual cooperation"],
                ans: 2,
                exp: "'Essential requirement' (অত্যাবশ্যক চাহিদা) প্রমিত ও গ্রহণযোগ্য। বাকি অপশনগুলো কেন নয়: 'same' নিজেই অভিন্ন, 'fact' নিজেই সত্য এবং 'cooperation' নিজেই পারস্পরিক সহযোগিতা বোঝায়—তাই 'exact', 'true' ও 'mutual' বাড়তি পুনরাবৃত্তি।"
            },
            {
                q: "Which wordy phrase can be replaced by 'Now'?",
                options: ["At this point in time", "In the near future", "A long time ago", "Once upon a time"],
                ans: 0,
                exp: "'At this point in time'-এর সংক্ষিপ্ত ও সরাসরি প্রতিশব্দ হলো 'Now'। বাকি অপশনগুলো কেন নয়: এগুলো ভবিষ্যৎ বা অতীত সময় বোঝায়।"
            },
            {
                q: "Identify the redundant pair:",
                options: ["End result", "Smart phone", "Open book", "Study table"],
                ans: 0,
                exp: "'Result' নিজেই শেষ ফল বা পরিণতি বোঝায়, তাই 'End' যোগ করা redundant। বাকি অপশনগুলো কেন নয়: এগুলো স্বাভাবিক ও পুনরাবৃত্তিহীন।"
            }
        ]
    },
    "Punctuation & Capitalization": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Comma, Semicolon, Colon, Apostrophe ও Capitalization-এর প্রধান নিয়ম উদাহরণসহ ব্যাখ্যা করো এবং 'its' বনাম 'it's'-এর পার্থক্য দেখাও।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Which sentence uses punctuation and capitalization correctly?",
                options: ["dhaka is the capital of bangladesh.", "Dhaka is the capital of Bangladesh.", "Dhaka is the Capital of bangladesh.", "dhaka is the Capital of Bangladesh."],
                ans: 1,
                exp: "বাক্যের প্রথম শব্দ এবং Proper Noun ('Dhaka', 'Bangladesh') Capitalized হয় এবং বাক্যের শেষে Period (.) বসে। বাকি অপশনগুলো কেন নয়: এগুলোতে proper noun বা বাক্যের শুরুতে capitalization-এর ভুল রয়েছে।"
            },
            {
                q: "Choose the correct form: 'The cat licked _____ paw.'",
                options: ["it's", "its", "its'", "it is"],
                ans: 1,
                exp: "মালিকানা বা possessive বোঝাতে apostrophe ছাড়া 'its' বসে ('its paw' = তার থাবা)। বাকি অপশনগুলো কেন নয়: 'it's' হলো 'it is' বা 'it has'-এর contraction; 'its'' কোনো প্রমিত ইংরেজি শব্দ নয়।"
            },
            {
                q: "Which punctuation mark is used to join two closely related independent clauses without a coordinating conjunction?",
                options: ["Comma (,)", "Semicolon (;)", "Hyphen (-)", "Apostrophe (')"],
                ans: 1,
                exp: "সমন্বয়কারী conjunction ছাড়া দুটি ঘনিষ্ঠ সম্পর্কযুক্ত independent clause যুক্ত করতে Semicolon (;) ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: শুধু comma দিলে comma splice হয়; hyphen শব্দ/অংশ যুক্ত করে; apostrophe possessive বা contraction-এ বসে।"
            },
            {
                q: "Identify the correctly punctuated sentence:",
                options: ["He said, \"I will study hard.\"", "He said \"I will study hard.\"", "He said, \"I will study hard\".", "He said: I will study hard?"],
                ans: 0,
                exp: "Reporting clause-এর পর comma বসে, quotation mark-এর ভেতরে প্রথম অক্ষর capital হয় এবং পূর্ণচ্ছেদ (.) quotation mark-এর ভেতরে থাকে। বাকি অপশনগুলো কেন নয়: এগুলোতে comma, capitalization বা period অবস্থানের ত্রুটি আছে।"
            },
            {
                q: "Which of the following is correctly capitalized?",
                options: ["She studies Law at the University of Dhaka in summer.", "She studies law at the university of dhaka in Summer.", "She studies law at the University of Dhaka in summer.", "She studies Law at the university of Dhaka in summer."],
                ans: 2,
                exp: "নির্দিষ্ট প্রতিষ্ঠানের নাম ('University of Dhaka') capitalized হয়, কিন্তু সাধারণ বিষয় ('law') এবং ঋতুর নাম ('summer') সাধারণত lowercase থাকে। বাকি অপশনগুলো কেন নয়: এগুলোতে proper noun বা common/season শব্দের capitalization-এ ভুল আছে।"
            },
            {
                q: "Which sentence correctly uses the apostrophe for plural possessive?",
                options: ["The boys' hostel is near the campus.", "The boy's hostel is near the campus (for multiple boys).", "The boys hostel is near the campus.", "The boys's hostel is near the campus."],
                ans: 0,
                exp: "Plural noun ('boys')-এর শেষে 's' থাকায় plural possessive করতে কেবল apostrophe (') যোগ হয় ('boys''). বাকি অপশনগুলো কেন নয়: 'boy's' singular বোঝায়; 'boys hostel'-এ possessive চিহ্ন নেই; 'boys's' অপ্রমিত।"
            },
            {
                q: "Which punctuation mark introduces a list, explanation, or elaboration after a complete clause?",
                options: ["Colon (:)", "Comma (,)", "Exclamation mark (!)", "Question mark (?)"],
                ans: 0,
                exp: "একটি পূর্ণ clause-এর পরে তালিকা বা ব্যাখ্যা শুরু করতে Colon (:) ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: comma, exclamation mark বা question mark এই নির্দিষ্ট ভূমিকা পালন করে না।"
            },
            {
                q: "Identify the correctly capitalized sentence:",
                options: ["We visited Cox's Bazar in december.", "We visited cox's bazar in December.", "We visited Cox's Bazar in December.", "We visited Cox's bazar in December."],
                ans: 2,
                exp: "নির্দিষ্ট স্থানের নাম ('Cox's Bazar') এবং মাসের নাম ('December') উভয়ই Capitalized হবে। বাকি অপশনগুলো কেন নয়: এগুলোতে স্থান বা মাসের নামের capitalization-এ ভুল রয়েছে।"
            },
            {
                q: "Which sentence avoids a comma splice?",
                options: ["He worked hard, he passed the exam.", "He worked hard, so he passed the exam.", "He worked hard he passed the exam.", "He worked hard; he passed the exam, and he was happy."],
                ans: 1,
                exp: "দুটি independent clause-কে comma ও coordinating conjunction 'so' দিয়ে যুক্ত করায় comma splice হয়নি। বাকি অপশনগুলো কেন নয়: প্রথমটি comma splice এবং তৃতীয়টি run-on/fused sentence।"
            },
            {
                q: "Choose the correct usage of 'it's':",
                options: ["It's raining heavily outside.", "The bird built it's nest on the tree.", "It's color is bright red.", "The book lost it's cover."],
                ans: 0,
                exp: "'It's' হলো 'It is'-এর contraction, তাই 'It's raining heavily outside.' সঠিক। বাকি অপশনগুলো কেন নয়: possessive অর্থে 'its' ('its nest', 'its color', 'its cover') বসানো উচিত ছিল।"
            },
            {
                q: "Which punctuation mark is used in compound modifiers before a noun like 'well-known'?",
                options: ["Hyphen (-)", "Semicolon (;)", "Colon (:)", "Parentheses ()"],
                ans: 0,
                exp: "Noun-এর আগে বসা compound modifier ('well-known writer') যুক্ত করতে Hyphen (-) ব্যবহৃত হয়। বাকি অপশনগুলো কেন নয়: semicolon, colon বা parentheses এই কাজ করে না।"
            },
            {
                q: "Identify the sentence with correct capitalization:",
                options: ["Professor Rahman teaches constitutional law on monday.", "Professor Rahman teaches Constitutional Law on Monday.", "Professor Rahman teaches constitutional law on Monday.", "professor rahman teaches constitutional law on Monday."],
                ans: 2,
                exp: "ব্যক্তির নাম ও উপাধি ('Professor Rahman') এবং বারের নাম ('Monday') capitalized হয়, আর সাধারণ বিষয় ('constitutional law') lowercase থাকে। বাকি অপশনগুলো কেন নয়: এগুলোতে capitalization-এর ত্রুটি রয়েছে।"
            },
            {
                q: "Which sentence uses a comma after an introductory dependent clause correctly?",
                options: ["When the bell rang the students left.", "When the bell rang, the students left.", "When, the bell rang the students left.", "When the bell rang; the students left."],
                ans: 1,
                exp: "বাক্যের শুরুতে Subordinate/Dependent clause থাকলে প্রধান clause-এর আগে Comma (,) বসানো প্রমিত। বাকি অপশনগুলো কেন নয়: comma না দিলে পঠনে অস্পষ্টতা আসে; ভুল স্থানে comma বা semicolon ব্যবহার করা হয়েছে।"
            },
            {
                q: "Which word should be capitalized in: 'she read bangla literature in class.'?",
                options: ["she, bangla, class", "She and Bangla", "Only bangla", "Only class"],
                ans: 1,
                exp: "বাক্যের প্রথম শব্দ ('She') এবং ভাষার নাম ('Bangla') Capitalized হবে; 'literature' ও 'class' সাধারণ শব্দ হওয়ায় lowercase থাকবে। বাকি অপশনগুলো কেন নয়: 'literature' ও 'class' proper noun নয়।"
            },
            {
                q: "Which sentence correctly uses a semicolon with a conjunctive adverb?",
                options: ["It was raining heavily, however we went out.", "It was raining heavily; however, we went out.", "It was raining heavily; however we went out.", "It was raining heavily, however, we went out."],
                ans: 1,
                exp: "দুটি independent clause-কে conjunctive adverb ('however') দিয়ে যুক্ত করতে আগে Semicolon (;) এবং পরে Comma (,) বসে। বাকি অপশনগুলো কেন নয়: আগে শুধু comma দিলে comma splice হয়; 'however'-এর পর comma না দিলে ছন্দ ও প্রমিত নিয়ম বিঘ্নিত হয়।"
            }
        ]
    },
    "Literary Devices & Figures of Speech": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. Simile, Metaphor, Personification, Alliteration, Oxymoron এবং Irony-এর পার্থক্য উদাহরণসহ ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "In 'He fought as brave as a lion' (or 'as brave as a lion'), which figure of speech is used?",
                options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
                ans: 1,
                exp: "'as ... as' (বা 'like') ব্যবহার করে দুটি ভিন্ন জিনিসের মধ্যে স্পষ্ট তুলনা করায় এটি Simile। বাকি অপশনগুলো কেন নয়: 'as/like' ছাড়া সরাসরি তুলনা করলে Metaphor হতো; মানবিক গুণ আরোপ করলে Personification এবং অতিশয়োক্তি করলে Hyperbole হতো।"
            },
            {
                q: "In 'Time is a thief,' what figure of speech is employed?",
                options: ["Simile", "Metaphor", "Alliteration", "Onomatopoeia"],
                ans: 1,
                exp: "'as' বা 'like' ছাড়াই সময়কে সরাসরি 'চোর'-এর সাথে তুলনা করায় এটি Metaphor। বাকি অপশনগুলো কেন নয়: তুলনাসূচক শব্দ না থাকায় Simile নয়; ধ্বনিসাম্য বা শব্দের অনুকরণ নয়।"
            },
            {
                q: "In 'The wind whispered secrets through the trees,' 'whispered' is an example of —",
                options: ["Alliteration", "Personification", "Oxymoron", "Pun"],
                ans: 1,
                exp: "জড়বস্তু বা প্রকৃতির ('The wind') ওপর মানুষের আচরণ ('whispered secrets') আরোপ করায় এটি Personification। বাকি অপশনগুলো কেন নয়: এটি পরস্পরবিরোধী শব্দের যুগল নয় (Oxymoron নয়) এবং শব্দের কৌতুকপূর্ণ দ্বৈত অর্থও নয় (Pun নয়)।"
            },
            {
                q: "Which figure of speech is illustrated by: 'Peter Piper picked a peck of pickled peppers'?",
                options: ["Metaphor", "Alliteration", "Irony", "Simile"],
                ans: 1,
                exp: "পাশাপাশি বা কাছাকাছি শব্দগুলোর শুরুতে একই ব্যঞ্জনধ্বনি ('p')-এর পুনরাবৃত্তি ঘটায় এটি Alliteration (অনুপ্রাস)। বাকি অপশনগুলো কেন নয়: এটি তুলনা নয় (Simile/Metaphor নয়) এবং বিপরীত অর্থের বিদ্রূপও নয় (Irony নয়)।"
            },
            {
                q: "In 'Open secret' or 'Living death,' which figure of speech is used?",
                options: ["Simile", "Oxymoron", "Personification", "Alliteration"],
                ans: 1,
                exp: "পরস্পরবিরোধী দুটি শব্দ ('open' ও 'secret', বা 'living' ও 'death') পাশাপাশি বসে একটি বিশেষ অর্থ তৈরি করায় এটি Oxymoron। বাকি অপশনগুলো কেন নয়: এগুলো simile, personification বা alliteration নয়।"
            },
            {
                q: "The buzz of the bees filled the garden. 'Buzz' is an example of —",
                options: ["Onomatopoeia", "Hyperbole", "Metaphor", "Irony"],
                ans: 0,
                exp: "যে শব্দ প্রাকৃতিক বা বস্তুর ধ্বনি অনুকরণ করে ('buzz'), তাকে Onomatopoeia বলে। বাকি অপশনগুলো কেন নয়: এটি অতিশয়োক্তি (Hyperbole), রূপক (Metaphor) বা বিদ্রূপ (Irony) নয়।"
            },
            {
                q: "In 'I have told you a million times to be punctual,' which device is used?",
                options: ["Understatement", "Hyperbole", "Simile", "Personification"],
                ans: 1,
                exp: "কোনো বিষয়কে বাস্তবের চেয়ে অনেক বাড়িয়ে বা অতিরঞ্জিত করে বলায় ('a million times') এটি Hyperbole (অতিশয়োক্তি)। বাকি অপশনগুলো কেন নয়: এটি ক্ষুদ্রাকরণ নয় (Understatement নয়) এবং simile বা personification-ও নয়।"
            },
            {
                q: "A fire station burns down. This situation is an example of —",
                options: ["Simile", "Situational Irony", "Alliteration", "Metaphor"],
                ans: 1,
                exp: "যেখানে আগুন নেভানোর কথা, সেখানেই আগুন লাগা—প্রত্যাশার বিপরীত বাস্তবতা বোঝানোয় এটি Situational Irony। বাকি অপশনগুলো কেন নয়: এটি simile, alliteration বা metaphor নয়।"
            },
            {
                q: "In 'All the world's a stage,' what figure of speech is used?",
                options: ["Simile", "Metaphor", "Personification", "Oxymoron"],
                ans: 1,
                exp: "পৃথিবীকে সরাসরি একটি মঞ্চ ('a stage') হিসেবে অভিহিত করায় এটি Metaphor। বাকি অপশনগুলো কেন নয়: 'as' বা 'like' নেই বলে Simile নয়; oxymoron বা personification-ও নয়।"
            },
            {
                q: "Which of the following is an example of Simile?",
                options: ["Her eyes were shining stars.", "She is as busy as a bee.", "The stars danced in the night sky.", "Deafening silence filled the room."],
                ans: 1,
                exp: "'as busy as a bee' বাক্যে 'as ... as' দিয়ে স্পষ্ট তুলনা করায় এটি Simile। বাকি অপশনগুলো কেন নয়: 'eyes were shining stars' Metaphor; 'stars danced' Personification; 'Deafening silence' Oxymoron।"
            },
            {
                q: "In 'Deafening silence,' what figure of speech is present?",
                options: ["Oxymoron", "Simile", "Hyperbole", "Onomatopoeia"],
                ans: 0,
                exp: "'Deafening' (কান ফাটানো শব্দ) এবং 'silence' (নীরবতা)—বিপরীতধর্মী শব্দ পাশাপাশি আসায় এটি Oxymoron। বাকি অপশনগুলো কেন নয়: simile, hyperbole বা onomatopoeia নয়।"
            },
            {
                q: "When a speaker says 'What a lovely day!' during a severe storm, it is an example of —",
                options: ["Verbal Irony", "Alliteration", "Metaphor", "Simile"],
                ans: 0,
                exp: "বক্তার কথার আক্ষরিক অর্থ ('lovely day') এবং প্রকৃত অবস্থার ('severe storm') বিপরীত হওয়ায় এটি Verbal Irony। বাকি অপশনগুলো কেন নয়: এটি alliteration, metaphor বা simile নয়।"
            },
            {
                q: "In 'The pen is mightier than the sword,' 'pen' and 'sword' stand for —",
                options: ["Metonymy", "Onomatopoeia", "Oxymoron", "Simile"],
                ans: 0,
                exp: "'pen' দিয়ে লেখা/বুদ্ধি/সাংবাদিকতা এবং 'sword' দিয়ে সামরিক শক্তি/সহিংসতা বোঝানোয় (সংশ্লিষ্ট বস্তুর নামে ধারণার প্রতিস্থাপন) এটি Metonymy। বাকি অপশনগুলো কেন নয়: এটি ধ্বনিসাম্য, পরস্পরবিরোধী যুগল বা simile নয়।"
            },
            {
                q: "Which figure of speech involves repeating initial consonant sounds in close succession?",
                options: ["Alliteration", "Metaphor", "Irony", "Personification"],
                ans: 0,
                exp: "কাছাকাছি শব্দের শুরুতে একই consonant sound-এর পুনরাবৃত্তিকে Alliteration বলে। বাকি অপশনগুলো কেন নয়: metaphor তুলনা, irony বিপরীত অর্থ এবং personification মানবায়ন বোঝায়।"
            },
            {
                q: "In 'The leaves danced in the autumn breeze,' 'danced' is an example of —",
                options: ["Personification", "Simile", "Oxymoron", "Alliteration"],
                ans: 0,
                exp: "পাতাগুলোকে ('The leaves') মানুষের মতো নাচার ('danced') বৈশিষ্ট্য দেওয়ায় এটি Personification। বাকি অপশনগুলো কেন নয়: এটি simile, oxymoron বা alliteration নয়।"
            }
        ]
    }
},
const englishLiteratureQuestions = {
    "History of English Literature (Major Periods)": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. ইংরেজি সাহিত্যের প্রধান যুগগুলোর (Old English, Middle English, Renaissance/Elizabethan, Neoclassical, Romantic, Victorian, Modern) কালসীমা ও মূল বৈশিষ্ট্য সংক্ষেপে আলোচনা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Which literary period is traditionally associated with Geoffrey Chaucer?",
                options: ["Old English Period", "Middle English Period", "Romantic Period", "Victorian Period"],
                ans: 1,
                exp: "Geoffrey Chaucer (রচিত 'The Canterbury Tales') Middle English Period-এর সবচেয়ে গুরুত্বপূর্ণ কবি ও লেখক। বাকি অপশনগুলো কেন নয়: Old English Period ছিল Anglo-Saxon সময় (c. 450–1066); Romantic ও Victorian যুগ অনেক পরের।"
            },
            {
                q: "The Romantic Period in English literature is generally dated from 1798 to —",
                options: ["1837", "1660", "1901", "1700"],
                ans: 0,
                exp: "১৭৯৮ সালে 'Lyrical Ballads' প্রকাশের মধ্য দিয়ে Romantic Period শুরু হয় এবং ১৮৩৭ সালে Queen Victoria-এর সিংহাসনে আরোহণের পূর্ব পর্যন্ত স্থায়ী হয়। বাকি অপশনগুলো কেন নয়: ১৬৬০ Restoration যুগ শুরু; ১৯০১ Victorian যুগের সমাপ্তি; ১৭০০ Augustan/Neoclassical যুগের অংশ।"
            },
            {
                q: "Which period is often called the 'Golden Age' of English drama?",
                options: ["The Victorian Age", "The Elizabethan Age", "The Restoration Age", "The Modern Age"],
                ans: 1,
                exp: "Elizabethan Age (1558–1603)-এ Marlowe, Shakespeare ও Ben Jonson-এর মতো নাট্যকারদের কারণে ইংরেজি নাটক স্বর্ণশিখরে পৌঁছায়। বাকি অপশনগুলো কেন নয়: অন্যান্য যুগে নাটকের তুলনায় উপন্যাস, কবিতা বা সমালোচনা বেশি প্রাধান্য পেয়েছে।"
            },
            {
                q: "The Restoration Period in English literary history began in —",
                options: ["1660", "1789", "1832", "1914"],
                ans: 0,
                exp: "১৬৬০ সালে রাজতন্ত্র পুনরুদ্ধারের ('Restoration') মাধ্যমে এই যুগের সূচনা হয় (John Dryden এর প্রধান প্রতিনিধি)। বাকি অপশনগুলো কেন নয়: ১৭৮৯ ফরাসি বিপ্লবের বছর; ১৮৩২ First Reform Act; ১৯১৪ প্রথম বিশ্বযুদ্ধ শুরুর বছর।"
            },
            {
                q: "Who is regarded as the 'Father of English Poetry'?",
                options: ["John Milton", "Geoffrey Chaucer", "Edmund Spenser", "William Wordsworth"],
                ans: 1,
                exp: "Geoffrey Chaucer-কে ইংরেজি কবিতার জনক ('Father of English Poetry') বলা হয়। বাকি অপশনগুলো কেন নয়: John Milton epic poet; Edmund Spenser 'Poets' Poet'; Wordsworth Romantic কবি।"
            },
            {
                q: "Queen Victoria reigned from 1837 to —",
                options: ["1890", "1901", "1918", "1850"],
                ans: 1,
                exp: "Victorian Period-এর কালসীমা সাধারণত ১৮৩৭ থেকে ১৯০১ সাল পর্যন্ত ধরা হয়। বাকি অপশনগুলো কেন নয়: ১৮৯০ বা ১৮৫০ মধ্য-ভিক্টোরীয় সময়; ১৯১৮ প্রথম বিশ্বযুদ্ধ শেষ হওয়ার বছর।"
            },
            {
                q: "'Beowulf' belongs to which period of English literature?",
                options: ["Middle English Period", "Old English (Anglo-Saxon) Period", "Jacobean Period", "Neoclassical Period"],
                ans: 1,
                exp: "'Beowulf' হলো Old English বা Anglo-Saxon যুগের সবচেয়ে বিখ্যাত মহাকাব্য। বাকি অপশনগুলো কেন নয়: এটি Middle English, Jacobean বা Neoclassical যুগের রচনা নয়।"
            },
            {
                q: "Which movement/period emphasized reason, order, decorum, and classical imitation?",
                options: ["The Romantic Period", "The Neoclassical Period", "The Old English Period", "The Postmodern Period"],
                ans: 1,
                exp: "Neoclassical Period (1660–1798)-এ যুক্তিবাদ, শৃঙ্খলা, সংযম ও ধ্রুপদি আদর্শের অনুকরণ বিশেষ গুরুত্ব পায়। বাকি অপশনগুলো কেন নয়: Romantic যুগ কল্পনা, আবেগ ও প্রকৃতিকে প্রাধান্য দেয়।"
            },
            {
                q: "The publication of 'Lyrical Ballads' in 1798 is a landmark event of the —",
                options: ["Victorian Age", "Romantic Age", "Caroline Age", "Jacobean Age"],
                ans: 1,
                exp: "Wordsworth ও Coleridge-এর 'Lyrical Ballads' (1798) প্রকাশকে Romantic Age-এর সূচনাবিন্দু হিসেবে ধরা হয়। বাকি অপশনগুলো কেন নয়: এটি Victorian, Caroline বা Jacobean যুগের সূচনা নয়।"
            },
            {
                q: "The Jacobean Period corresponds to the reign of —",
                options: ["Queen Elizabeth I", "King James I", "King Charles II", "Queen Anne"],
                ans: 1,
                exp: "Jacobean Period (1603–1625) ছিল King James I-এর শাসনামল। বাকি অপশনগুলো কেন নয়: Elizabeth I ছিলেন Elizabethan যুগে; Charles II Restoration যুগে এবং Queen Anne Augustan যুগের প্রারম্ভে।"
            },
            {
                q: "Which period is characterized by stream of consciousness, fragmentation, and disillusionment after World War I?",
                options: ["The Modern Period", "The Elizabethan Period", "The Anglo-Saxon Period", "The Augustan Period"],
                ans: 0,
                exp: "Modern Period (বিশেষত প্রথম বিশ্বযুদ্ধোত্তর সময়)-এ Stream of Consciousness, খণ্ডিত বাস্তবতা ও যুদ্ধোত্তর হতাশা সাহিত্যের প্রধান বৈশিষ্ট্য হয়ে ওঠে। বাকি অপশনগুলো কেন নয়: এগুলো আধুনিক যুগের বৈশিষ্ট্য নয়।"
            },
            {
                q: "Alexander Pope and Jonathan Swift are prominent figures of the —",
                options: ["Romantic Age", "Augustan / Neoclassical Age", "Victorian Age", "Old English Age"],
                ans: 1,
                exp: "Alexander Pope ও Jonathan Swift অষ্টাদশ শতাব্দীর Augustan/Neoclassical যুগের শীর্ষস্থানীয় লেখক। বাকি অপশনগুলো কেন নয়: এরা Romantic, Victorian বা Old English যুগের লেখক নন।"
            },
            {
                q: "Which of the following is a major Victorian poet?",
                options: ["Alfred, Lord Tennyson", "John Donne", "Christopher Marlowe", "Philip Sidney"],
                ans: 0,
                exp: "Alfred, Lord Tennyson ভিক্টোরীয় যুগের অন্যতম প্রধান কবি। বাকি অপশনগুলো কেন নয়: John Donne Metaphysical কবি; Marlowe ও Sidney Elizabethan যুগের।"
            },
            {
                q: "Metaphysical poetry is closely associated with the early 17th century and poets like —",
                options: ["John Donne and Andrew Marvell", "P.B. Shelley and John Keats", "Thomas Hardy and Charles Dickens", "T.S. Eliot and W.B. Yeats"],
                ans: 0,
                exp: "John Donne ও Andrew Marvell সপ্তদশ শতাব্দীর Metaphysical কবি হিসেবে সুপরিচিত। বাকি অপশনগুলো কেন নয়: Shelley ও Keats Romantic; Hardy ও Dickens Victorian; Eliot ও Yeats Modern।"
            },
            {
                q: "The Renaissance in England reached its height during the —",
                options: ["Sixteenth and early seventeenth centuries", "Nineteenth century", "Eleventh century", "Eighteenth century"],
                ans: 0,
                exp: "ইংল্যান্ডে Renaissance-এর বিকাশ ও শীর্ষরূপ মূলত ষোড়শ এবং সপ্তদশ শতাব্দীর শুরুতে দেখা যায়। বাকি অপশনগুলো কেন নয়: এগুলো রেনেসাঁর মূল স্বর্ণসময় নয়।"
            }
        ]
    },
    "Prominent Authors and Their Masterpieces": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. ইংরেজি সাহিত্যের প্রধান লেখক (Shakespeare, Milton, Wordsworth, Dickens, T.S. Eliot) ও তাঁদের অমর সৃষ্টিসমূহের একটি সংক্ষিপ্ত পরিচিতি দাও।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "Who wrote the epic poem 'Paradise Lost'?",
                options: ["William Shakespeare", "John Milton", "Edmund Spenser", "John Keats"],
                ans: 1,
                exp: "'Paradise Lost' হলো John Milton-এর রচিত বিশ্ববিখ্যাত মহাকাব্য। বাকি অপশনগুলো কেন নয়: Shakespeare নাট্যকার ও সনেটকার; Spenser 'The Faerie Queene'-এর রচয়িতা; Keats Romantic কবি।"
            },
            {
                q: "'Macbeth', 'Othello', and 'King Lear' are tragedies written by —",
                options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
                ans: 1,
                exp: "এই তিনটি বিখ্যাত ট্র্যাজেডিই William Shakespeare-এর রচনা। বাকি অপশনগুলো কেন নয়: Marlowe 'Doctor Faustus' ও 'Tamburlaine'-এর রচয়িতা; Ben Jonson comedy of humours-এর জন্য বিখ্যাত।"
            },
            {
                q: "Who is the author of the novel 'Great Expectations'?",
                options: ["Thomas Hardy", "Charles Dickens", "Jane Austen", "George Eliot"],
                ans: 1,
                exp: "'Great Expectations', 'Oliver Twist' ও 'David Copperfield'-এর রচয়িতা হলেন Charles Dickens। বাকি অপশনগুলো কেন নয়: এগুলো অন্য ঔপন্যাসিকদের সৃষ্টি।"
            },
            {
                q: "Who wrote 'Pride and Prejudice'?",
                options: ["Charlotte Bronte", "Jane Austen", "Emily Bronte", "Virginia Woolf"],
                ans: 1,
                exp: "'Pride and Prejudice' ও 'Sense and Sensibility' উপন্যাসের লেখক হলেন Jane Austen। বাকি অপশনগুলো কেন নয়: Charlotte Bronte 'Jane Eyre' এবং Emily Bronte 'Wuthering Heights' লিখেছেন; Virginia Woolf আধুনিক ঔপন্যাসিক।"
            },
            {
                q: "Who is the author of 'The Waste Land'?",
                options: ["W.B. Yeats", "T.S. Eliot", "Wilfred Owen", "Dylan Thomas"],
                ans: 1,
                exp: "১৯২২ সালে প্রকাশিত আধুনিক কবিতার মাইলফলক 'The Waste Land' লিখেছেন T.S. Eliot। বাকি অপশনগুলো কেন নয়: এগুলো অন্য কবিদের রচনা।"
            },
            {
                q: "'Ode to a Nightingale' and 'Ode on a Grecian Urn' were written by —",
                options: ["P.B. Shelley", "Lord Byron", "John Keats", "William Wordsworth"],
                ans: 2,
                exp: "এই বিখ্যাত Ode-গুলো Romantic কবি John Keats-এর রচনা। বাকি অপশনগুলো কেন নয়: Shelley 'Ode to the West Wind' লিখেছেন; Byron ও Wordsworth-এর রচনা ভিন্ন।"
            },
            {
                q: "Who wrote the satirical work 'Gulliver's Travels'?",
                options: ["Daniel Defoe", "Jonathan Swift", "Henry Fielding", "Samuel Richardson"],
                ans: 1,
                exp: "'Gulliver's Travels' হলো Jonathan Swift-এর বিখ্যাত ব্যঙ্গাত্মক (satirical) রচনা। বাকি অপশনগুলো কেন নয়: Daniel Defoe 'Robinson Crusoe' লিখেছেন।"
            },
            {
                q: "Who is the author of 'Animal Farm' and '1984'?",
                options: ["Aldous Huxley", "George Orwell", "H.G. Wells", "Graham Greene"],
                ans: 1,
                exp: "রাজনৈতিক রূপক উপন্যাস 'Animal Farm' এবং ডিস্টোপিয়ান উপন্যাস '1984' লিখেছেন George Orwell। বাকি অপশনগুলো কেন নয়: Aldous Huxley 'Brave New World' এবং H.G. Wells 'The Time Machine' লিখেছেন।"
            },
            {
                q: "'The Canterbury Tales' is a masterpiece by —",
                options: ["Geoffrey Chaucer", "William Langland", "John Gower", "Thomas Malory"],
                ans: 0,
                exp: "'The Canterbury Tales' হলো Geoffrey Chaucer-এর শ্রেষ্ঠ কীর্তি। বাকি অপশনগুলো কেন নয়: Langland 'Piers Plowman' এবং Malory 'Le Morte d'Arthur' লিখেছেন।"
            },
            {
                q: "Who wrote the novel 'Tess of the d'Urbervilles'?",
                options: ["Charles Dickens", "Thomas Hardy", "D.H. Lawrence", "Joseph Conrad"],
                ans: 1,
                exp: "'Tess of the d'Urbervilles' ও 'The Return of the Native' উপন্যাসের লেখক হলেন Thomas Hardy। বাকি অপশনগুলো কেন নয়: এগুলো অন্য ঔপন্যাসিকদের সৃষ্টি।"
            },
            {
                q: "Who is the author of 'Doctor Faustus'?",
                options: ["William Shakespeare", "Christopher Marlowe", "Thomas Kyd", "Robert Greene"],
                ans: 1,
                exp: "'The Tragical History of Doctor Faustus' লিখেছেন Elizabethan নাট্যকার Christopher Marlowe। বাকি অপশনগুলো কেন নয়: Kyd 'The Spanish Tragedy' লিখেছেন।"
            },
            {
                q: "'To the Lighthouse' and 'Mrs. Dalloway' are novels by —",
                options: ["Jane Austen", "Virginia Woolf", "George Eliot", "Mary Shelley"],
                ans: 1,
                exp: "Stream of consciousness কৌশলে লেখা 'To the Lighthouse' ও 'Mrs. Dalloway'-এর লেখক Virginia Woolf। বাকি অপশনগুলো কেন নয়: Mary Shelley 'Frankenstein' লিখেছেন।"
            },
            {
                q: "Who wrote 'Lyrical Ballads' jointly with Samuel Taylor Coleridge?",
                options: ["John Keats", "William Wordsworth", "Lord Byron", "Robert Southey"],
                ans: 1,
                exp: "১৭৯৮ সালে William Wordsworth এবং S.T. Coleridge যৌথভাবে 'Lyrical Ballads' প্রকাশ করেন। বাকি অপশনগুলো কেন নয়: এটি তাদের যৌথ প্রকাশনা নয়।"
            },
            {
                q: "'Robinson Crusoe' was written by —",
                options: ["Jonathan Swift", "Daniel Defoe", "Samuel Johnson", "Oliver Goldsmith"],
                ans: 1,
                exp: "'Robinson Crusoe' উপন্যাসের রচয়িতা হলেন Daniel Defoe। বাকি অপশনগুলো কেন নয়: Samuel Johnson অভিধান ও সমালোচনার জন্য এবং Goldsmith 'The Vicar of Wakefield'-এর জন্য পরিচিত।"
            },
            {
                q: "Who wrote 'The Faerie Queene'?",
                options: ["Edmund Spenser", "John Milton", "Alexander Pope", "Alfred Tennyson"],
                ans: 0,
                exp: "Allegorical মহাকাব্য 'The Faerie Queene' লিখেছেন Edmund Spenser। বাকি অপশনগুলো কেন নয়: এগুলো অন্য কবিদের সৃষ্টি।"
            }
        ]
    },
    "Famous Quotations & Characters": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. ইংরেজি সাহিত্যের বিখ্যাত উক্তি ('To be, or not to be...', 'A thing of beauty is a joy for ever') ও অবিস্মরণীয় চরিত্রসমূহের (Hamlet, Macbeth, Shylock, Pip, Elizabeth Bennet) তাৎপর্য ব্যাখ্যা করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "'To be, or not to be, that is the question:' — this famous soliloquy occurs in which play?",
                options: ["Othello", "Hamlet", "Macbeth", "The Tempest"],
                ans: 1,
                exp: "এই বিখ্যাত উক্তিটি Shakespeare-এর 'Hamlet' নাটকের রাজকুমার Hamlet-এর একলাপ (soliloquy)। বাকি অপশনগুলো কেন নয়: এটি Othello, Macbeth বা The Tempest নাটকের উক্তি নয়।"
            },
            {
                q: "Who is the tragic hero in Shakespeare's 'Macbeth'?",
                options: ["Duncan", "Macduff", "Macbeth", "Banquo"],
                ans: 2,
                exp: "'Macbeth' নাটকের মূল চরিত্র ও tragic hero হলেন Macbeth (যার hamartia বা tragic flaw হলো উচ্চাভিলাষ / vaulting ambition)। বাকি অপশনগুলো কেন নয়: এগুলো পার্শ্ব বা প্রতিপক্ষ চরিত্র।"
            },
            {
                q: "'A thing of beauty is a joy for ever:' — who wrote this famous line?",
                options: ["William Wordsworth", "John Keats", "P.B. Shelley", "Lord Byron"],
                ans: 1,
                exp: "এই বিখ্যাত পঙ্‌ক্তিটি John Keats-এর 'Endymion' কাব্যের সূচনাংশ থেকে নেওয়া। বাকি অপশনগুলো কেন নয়: এটি Wordsworth, Shelley বা Byron-এর পঙ্‌ক্তি নয়।"
            },
            {
                q: "Shylock is a memorable character in which Shakespearean play?",
                options: ["As You Like It", "The Merchant of Venice", "Twelfth Night", "Much Ado About Nothing"],
                ans: 1,
                exp: "Shylock হলো 'The Merchant of Venice' নাটকের একটি জটিল ও বিখ্যাত চরিত্র। বাকি অপশনগুলো কেন নয়: এগুলো অন্য নাটকের শিরোনাম।"
            },
            {
                q: "Pip and Miss Havisham are famous characters from which novel?",
                options: ["David Copperfield", "Great Expectations", "Oliver Twist", "Hard Times"],
                ans: 1,
                exp: "Pip ও Miss Havisham হলেন Charles Dickens-এর 'Great Expectations' উপন্যাসের প্রধান চরিত্র। বাকি অপশনগুলো কেন নয়: এগুলো ভিন্ন উপন্যাসের চরিত্র।"
            },
            {
                q: "Elizabeth Bennet and Mr. Darcy appear in —",
                options: ["Emma", "Pride and Prejudice", "Jane Eyre", "Wuthering Heights"],
                ans: 1,
                exp: "Elizabeth Bennet এবং Mr. Darcy হলেন Jane Austen-এর 'Pride and Prejudice' উপন্যাসের নায়ক-নায়িকা। বাকি অপশনগুলো কেন নয়: এগুলো অন্য উপন্যাস।"
            },
            {
                q: "'All the world's a stage, / And all the men and women merely players:' — from which play is this quoted?",
                options: ["Hamlet", "As You Like It", "Julius Caesar", "King Lear"],
                ans: 1,
                exp: "Jacques-এর এই বিখ্যাত বক্তব্যটি Shakespeare-এর 'As You Like It' নাটকের অংশ। বাকি অপশনগুলো কেন নয়: এটি Hamlet, Julius Caesar বা King Lear-এর সংলাপ নয়।"
            },
            {
                q: "Who is the protagonist of 'Robinson Crusoe'?",
                options: ["Friday", "Robinson Crusoe", "Gulliver", "Tom Jones"],
                ans: 1,
                exp: "উপন্যাসের কেন্দ্রীয় চরিত্র হলেন Robinson Crusoe (এবং তার সঙ্গী হলো Friday)। বাকি অপশনগুলো কেন নয়: Gulliver 'Gulliver's Travels'-এর চরিত্র।"
            },
            {
                q: "'If Winter comes, can Spring be far behind?' — who wrote this line?",
                options: ["John Keats", "P.B. Shelley", "William Wordsworth", "Alfred Tennyson"],
                ans: 1,
                exp: "এই বিখ্যাত পঙ্‌ক্তিটি P.B. Shelley-এর 'Ode to the West Wind' কবিতার সমাপ্তিতে রয়েছে। বাকি অপশনগুলো কেন নয়: এটি Keats, Wordsworth বা Tennyson-এর রচনা নয়।"
            },
            {
                q: "Lady Macbeth is associated with which literary work?",
                options: ["Romeo and Juliet", "Macbeth", "Antony and Cleopatra", "The Merchant of Venice"],
                ans: 1,
                exp: "Lady Macbeth হলেন 'Macbeth' নাটকের অন্যতম প্রভাবশালী চরিত্র। বাকি অপশনগুলো কেন নয়: এগুলো অন্য নাটক।"
            },
            {
                q: "'Frailty, thy name is woman!' — who speaks this line in 'Hamlet'?",
                options: ["Claudius", "Polonius", "Hamlet", "Horatio"],
                ans: 2,
                exp: "মায়ের দ্রুত পুনর্বিবাহে হতাশ হয়ে Hamlet এই উক্তিটি করেন। বাকি অপশনগুলো কেন নয়: এটি Claudius, Polonius বা Horatio-এর উক্তি নয়।"
            },
            {
                q: "Santiago and the old fisherman appear in Ernest Hemingway's —",
                options: ["A Farewell to Arms", "The Old Man and the Sea", "For Whom the Bell Tolls", "The Sun Also Rises"],
                ans: 1,
                exp: "বৃদ্ধ জেলে Santiago হলো Hemingway-এর 'The Old Man and the Sea' উপন্যাসের কেন্দ্রীয় চরিত্র। বাকি অপশনগুলো কেন নয়: এগুলো Hemingway-এর ভিন্ন উপন্যাস।"
            },
            {
                q: "'Better to reign in Hell, than serve in Heav'n.' — who says this in 'Paradise Lost'?",
                options: ["Adam", "Raphael", "Satan", "Michael"],
                ans: 2,
                exp: "'Paradise Lost'-এর প্রথম বইয়ে পতনের পর Satan এই বিখ্যাত উক্তিটি করে। বাকি অপশনগুলো কেন নয়: Adam, Raphael বা Michael এই উক্তি করেনি।"
            },
            {
                q: "Desdemona and Iago are major characters in —",
                options: ["Othello", "King Lear", "Macbeth", "Measure for Measure"],
                ans: 0,
                exp: "Desdemona এবং ষড়যন্ত্রকারী Iago হলেন 'Othello' ট্র্যাজেডির প্রধান চরিত্র। বাকি অপশনগুলো কেন নয়: এগুলো অন্য নাটক।"
            },
            {
                q: "'Child is the father of Man.' — who wrote this famous line?",
                options: ["John Keats", "William Wordsworth", "Samuel Taylor Coleridge", "Robert Browning"],
                ans: 1,
                exp: "এই বিখ্যাত পঙ্‌ক্তিটি William Wordsworth-এর 'My Heart Leaps Up' কবিতার অংশ। বাকি অপশনগুলো কেন নয়: এটি Keats, Coleridge বা Browning-এর পঙ্‌ক্তি নয়।"
            }
        ]
    },
    "Miscellaneous": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "১. ইংরেজি সাহিত্যের প্রধান সাহিত্যরূপসমূহ (Epic, Lyric, Elegy, Sonnet, Tragedy, Comedy, Satire, Novel) উদাহরণসহ সংজ্ঞায়িত করো।",
                marks: "৫ নম্বর"
            }
        ],
        questions: [
            {
                q: "A sonnet traditionally consists of how many lines?",
                options: ["12 lines", "14 lines", "16 lines", "18 lines"],
                ans: 1,
                exp: "একটি প্রচলিত Sonnet (চতুর্দশপদী কবিতা) ১৪ লাইনের হয়ে থাকে। বাকি অপশনগুলো কেন নয়: ১২, ১৬ বা ১৮ লাইন sonnet-এর প্রমিত গঠন নয়।"
            },
            {
                q: "A poem written to mourn the death of someone is called an —",
                options: ["Ode", "Elegy", "Ballad", "Epic"],
                ans: 1,
                exp: "কারও মৃত্যুতে শোক প্রকাশ করে লেখা কবিতাকে Elegy (শোককাব্য) বলে। বাকি অপশনগুলো কেন নয়: Ode সম্ভাষণ বা উচ্চভাবের কবিতা; Ballad লোককাহিনিমূলক গীতিকা; Epic দীর্ঘ মহাকাব্য।"
            },
            {
                q: "Which of the following is a long narrative poem on a grand or heroic scale?",
                options: ["Sonnet", "Epic", "Limerick", "Haiku"],
                ans: 1,
                exp: "মহৎ বা বীরত্বব্যঞ্জক বিষয়বস্তু নিয়ে লেখা দীর্ঘ আখ্যানকাব্যকে Epic (মহাকাব্য) বলে। বাকি অপশনগুলো কেন নয়: Sonnet ১৪ লাইনের কবিতা; Limerick হাস্যরসাত্মক ৫ লাইনের ছড়া; Haiku জাপানি সংক্ষিপ্ত কবিতা।"
            },
            {
                q: "What is a 'Soliloquy' in drama?",
                options: ["A dialogue between two characters", "A speech delivered by a character alone on stage revealing inner thoughts", "A humorous song at the end of a play", "A summary of the plot"],
                ans: 1,
                exp: "মঞ্চে একাকী থেকে চরিত্র যখন নিজের মনের গোপন চিন্তা বা অনুভূতি দর্শকের উদ্দেশ্যে প্রকাশ করে, তখন তাকে Soliloquy বলে। বাকি অপশনগুলো কেন নয়: সংলাপ, গান বা কাহিনির সারসংক্ষেপ soliloquy নয়।"
            },
            {
                q: "Which literary genre uses humor, irony, or ridicule to expose human folly or vice?",
                options: ["Satire", "Elegy", "Pastoral", "Romance"],
                ans: 0,
                exp: "মানুষের ত্রুটি, ভণ্ডামি বা সমাজের অসংগতি ব্যঙ্গ, বিদ্রূপ ও হাস্যরসের মাধ্যমে তুলে ধরার ধারাকে Satire বলে। বাকি অপশনগুলো কেন নয়: Elegy শোকগাথা; Pastoral গ্রামীণ জীবনকেন্দ্রিক; Romance রোমান্সধর্মী আখ্যান।"
            },
            {
                q: "What is the rhyme scheme of a Shakespearean (English) sonnet?",
                options: ["ABBAABBA CDECDE", "ABAB CDCD EFEF GG", "AABB CCDD EEFF GG", "ABAB BCDC CDCD EE"],
                ans: 1,
                exp: "Shakespearean sonnet-এর প্রচলিত rhyme scheme হলো তিনটি quatrain (ABAB CDCD EFEF) এবং শেষে একটি couplet (GG)। বাকি অপশনগুলো কেন নয়: ABBAABBA CDECDE সাধারণত Petrarchan/Italian sonnet-এর ধারা; বাকিগুলো প্রমিত নয়।"
            },
            {
                q: "A 'Tragic Flaw' in a tragic hero is classically known as —",
                options: ["Catharsis", "Hamartia", "Soliloquy", "Foil"],
                ans: 1,
                exp: "অ্যারিস্টটলীয় ট্র্যাজেডিতে নায়কের চারিত্রিক ত্রুটি বা ভুল সিদ্ধান্তকে 'Hamartia' বলে। বাকি অপশনগুলো কেন নয়: Catharsis হলো দর্শকের আবেগের বিশুদ্ধি; Soliloquy একলাপ; Foil হলো বিপরীতধর্মী চরিত্র।"
            },
            {
                q: "'Catharsis' refers to —",
                options: ["The climax of a novel", "Purgation or cleansing of emotions (pity and fear) in the audience", "A type of rhyme", "A comic relief scene"],
                ans: 1,
                exp: "ট্র্যাজেডি দেখে দর্শকের মনে করুণা ও ভয়ের সঞ্চার হয়ে আবেগের যে ভারসাম্য বা পরিশোধন ঘটে, তাকে Catharsis বলে। বাকি অপশনগুলো কেন নয়: এটি চরম মুহূর্ত, ছন্দ বা কৌতুক দৃশ্য নয়।"
            },
            {
                q: "A 'Protagonist' in a story or play is the —",
                options: ["Villain", "Main or central character", "Narrator outside the story", "Minor comic character"],
                ans: 1,
                exp: "কাহিনি বা নাটকের প্রধান বা কেন্দ্রীয় চরিত্রকে Protagonist বলে। বাকি অপশনগুলো কেন নয়: খলনায়ককে Antagonist বলা হয়।"
            },
            {
                q: "Which of the following is a 'Pastoral Elegy'?",
                options: ["John Milton's 'Lycidas'", "Shakespeare's 'Sonnet 18'", "T.S. Eliot's 'The Love Song of J. Alfred Prufrock'", "Jane Austen's 'Emma'"],
                ans: 0,
                exp: "John Milton-এর 'Lycidas' (Edward King-এর স্মৃতিতে রচিত) ইংরেজি সাহিত্যের অন্যতম বিখ্যাত Pastoral Elegy। বাকি অপশনগুলো কেন নয়: এগুলো pastoral elegy নয়।"
            },
            {
                q: "An 'Autobiography' is an account of a person's life written by —",
                options: ["Someone else", "That person themselves", "A fictional character", "A historian only"],
                ans: 1,
                exp: "নিজের জীবনকাহিনি নিজে লিখলে তাকে Autobiography (আত্মজীবনী) বলে, আর অন্য কেউ লিখলে তাকে Biography বলে। বাকি অপশনগুলো কেন নয়: অন্যের লেখা জীবনী হলো Biography।"
            },
            {
                q: "What is an 'Allegory'?",
                options: ["A story with a surface meaning and a deeper symbolic or moral meaning", "A short humorous poem", "A stage direction", "A list of characters"],
                ans: 0,
                exp: "যে কাহিনি বা রচনায় বাহ্যিক গল্পের আড়ালে গভীর প্রতীকী, নৈতিক বা রাজনৈতিক অর্থ লুকিয়ে থাকে, তাকে Allegory বলে (যেমন: 'Animal Farm', 'The Pilgrim's Progress')। বাকি অপশনগুলো কেন নয়: এগুলো allegory-এর সংজ্ঞা নয়।"
            },
            {
                q: "Which term describes a word or phrase that is polite, mild, or indirect used to replace a harsh or unpleasant one?",
                options: ["Euphemism", "Epitaph", "Epigraph", "Epilogue"],
                ans: 0,
                exp: "কঠোর, অপ্রীতিকর বা সরাসরি বেদনাদায়ক শব্দের বদলে কোমল বা মার্জিত শব্দ ব্যবহারকে Euphemism বলে (যেমন: 'passed away' for 'died')। বাকি অপশনগুলো কেন নয়: Epitaph সমাধিলিপি; Epigraph রচনার শুরুতে উদ্ধৃত পঙ্‌ক্তি; Epilogue সমাপনী অংশ।"
            },
            {
                q: "A short concluding section at the end of a literary work is called an —",
                options: ["Prologue", "Epilogue", "Aside", "Monologue"],
                ans: 1,
                exp: "সাহিত্যকর্ম বা নাটকের শেষে যুক্ত সংক্ষিপ্ত সমাপনী অংশকে Epilogue বলে (আর শুরুতে থাকলে Prologue)। বাকি অপশনগুলো কেন নয়: Prologue শুরুতে বসে; Aside মঞ্চে দর্শকের উদ্দেশ্যে সংক্ষিপ্ত মন্তব্য; Monologue একক দীর্ঘ বক্তব্য।"
            },
            {
                q: "Who is considered the 'National Poet of Bangladesh'?",
                options: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Jasimuddin", "Michael Madhusudan Dutt"],
                ans: 1,
                exp: "বিদ্রোহী কবি কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি। বাকি অপশনগুলো কেন নয়: রবীন্দ্রনাথ ঠাকুর বিশ্বকবি ও গীতাঞ্জলির জন্য নোবেলজয়ী; জসীমউদ্‌দীন পল্লীকবি; মাইকেল মধুসূদন দত্ত বাংলা সনেট ও অমিত্রাক্ষর ছন্দের প্রবর্তক।"
            }
        ]
    }
}
