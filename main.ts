enum Students {
    Names = "balisa",
    story = "baby on the rock",
    date = "10 august 2024",
};

let J : string = Students.story;

enum Students1 {Names = 1 , story , date = 3,}
let q : string = Students1[2];

console.log(q);

enum Students2 {Names = 1 , story = 2 , date = 3 };
let q2   = Students2 ["Names"];
console.log(q2);











