// =========================================================================
// বাংলা ২য় পত্র — প্রশ্ন ব্যাংক (questions-bangla2.js)
// নির্দেশনা:
// ১. প্রশ্ন যোগ করার পর যখন পরীক্ষা চালু করতে চাইবেন তখন status: "live" লিখবেন।
// ২. examEndDate-এ দেওয়া তারিখ ও সময় পার হয়ে গেলে এটি অটোমেটিক Archive হয়ে যাবে।
// ৩. status: "live" না লিখলে প্রশ্ন এড থাকলেও টপিকটি গ্রে (Soon) অবস্থায় থাকবে।
// =========================================================================
window.TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB || {};

Object.assign(window.TOPIC_EXAMS_DB, {
    "ধ্বনি ও বর্ণ": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: [
            {
                q: "বাংলা বর্ণমালায় মোট বর্ণ কয়টি?",
                options: ["৪৯টি", "৫০টি", "৫১টি", "৫২টি"],
                ans: 1,
                exp: "বাংলা বর্ণমালায় মোট ৫০টি বর্ণ রয়েছে (স্বরবর্ণ ১১টি ও ব্যঞ্জনবর্ণ ৩৯টি)।"
            }
        ]
    }
});

    "সমাস": {
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: []
    }
});
