var Students;
(function (Students) {
    Students["Names"] = "balisa";
    Students["story"] = "baby on the rock";
    Students["date"] = "10 august 2024";
})(Students || (Students = {}));
;
var J = Students.story;
var Students1;
(function (Students1) {
    Students1[Students1["Names"] = 1] = "Names";
    Students1[Students1["story"] = 2] = "story";
    Students1[Students1["date"] = 3] = "date";
})(Students1 || (Students1 = {}));
var q = Students1[2];
console.log(q);
var Students2;
(function (Students2) {
    Students2[Students2["Names"] = 1] = "Names";
    Students2[Students2["story"] = 2] = "story";
    Students2[Students2["date"] = 3] = "date";
})(Students2 || (Students2 = {}));
;
var q2 = Students2["Names"];
console.log(q2);
