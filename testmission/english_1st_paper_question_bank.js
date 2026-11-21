// =========================================================================
// English 1st Paper — Question Bank (questions-english1.js)
// নির্দেশনা:
// ১. প্রশ্ন যোগ করার পর যখন পরীক্ষা চালু করতে চাইবেন তখন status: "live" লিখবেন।
// ২. examEndDate-এ দেওয়া তারিখ ও সময় পার হয়ে গেলে এটি অটোমেটিক Archive হয়ে যাবে।
// ৩. status: "live" না লিখলে প্রশ্ন এড থাকলেও টপিকটি গ্রে (Soon) অবস্থায় থাকবে।
// =========================================================================
window.TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB || {};

Object.assign(window.TOPIC_EXAMS_DB, {
    "Unit One: Education and Life": {
        status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [
            {
                question: "1. Write a short paragraph on the role of education in developing critical thinking and human values.",
                marks: "5 Marks"
            }
        ],
        questions: [
            {
                q: "According to the text, true education helps a learner to —",
                options: [
                    "think independently and critically",
                    "memorize facts only",
                    "avoid social responsibilities",
                    "ignore cultural values"
                ],
                ans: 0,
                exp: "Education develops independent and critical thinking abilities."
            }
        ]
    },

    "Unit Two: Art and Craft": {
        // পরীক্ষা চালু করতে নিচের লাইনটি আনকমেন্ট করুন:
        // status: "live",
        examEndDate: "2026-12-31T23:59:59",
        driveChecklistPdfUrl: "",
        writtenQuestions: [],
        questions: []
    }
});
