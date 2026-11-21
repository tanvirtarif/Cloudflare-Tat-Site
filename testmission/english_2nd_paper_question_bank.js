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
        examEndDate: "2026-12-31T23:59:59",
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
