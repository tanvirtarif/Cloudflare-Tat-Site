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
    }
    });
