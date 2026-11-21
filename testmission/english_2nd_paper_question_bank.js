// =========================================================================
// English 2nd Paper — Question Bank (questions-english2.js)
// নির্দেশনা:
// ১. প্রশ্ন যোগ করার পর যখন পরীক্ষা চালু করতে চাইবেন তখন status: "live" লিখবেন।
// ২. examEndDate-এ দেওয়া তারিখ ও সময় পার হয়ে গেলে এটি অটোমেটিক Archive হয়ে যাবে।
// ৩. status: "live" না লিখলে প্রশ্ন এড থাকলেও টপিকটি গ্রে (Soon) অবস্থায় থাকবে।
// =========================================================================
window.TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB || {};

Object.assign(window.TOPIC_EXAMS_DB, {
    "Tense: Core Concepts and Applications": {
        // পরীক্ষা চালু করতে নিচের লাইনটি আনকমেন্ট করুন বা status: "live" লিখুন:
        // status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            // { question: "1. Write a short paragraph on...", marks: "5 Marks" }
        ],
        questions: [
            // এখানে "Tense: Core Concepts and Applications" টপিকের ৩০-৪০টি প্রশ্ন বসান:
            // {
            //     q: "Question text here?",
            //     options: ["Option A", "Option B", "Option C", "Option D"],
            //     ans: 0,
            //     exp: "Explanation here."
            // }
        ]
    },

    "Right Forms of Verbs": {
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: []
    }
});
