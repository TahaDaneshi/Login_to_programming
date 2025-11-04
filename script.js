const html = document.documentElement;
const body = document.getElementsByTagName('body')[0];
const Lessons = [
  { Name: ["مقدمه", 'Intro'], Date: "1404/08/11" },
  { Name: ["برنامه نویسی چیست؟", "Whats Programming"], Date: "1404/08/11" },
  { Name: ["شاخه های برنامه نویسی", "Programming Branches"], Date: "1404/08/12" },
  { Name: ["ارتباط ریاضی و زبان انگلیسی در یادگیری", "Math and English"], Date: "1404/08/13" },
  { Name: ["", "coding career"], Date: "1404/08/13" },
  { Name: ["", "How to Learn"], Date: "1404/08/13" },
  { Name: ["", "Research and Choose Course"], Date: "1404/08/13" },
  { Name: ["", "Programming Reality"], Date: "1404/08/15" },
  { Name: ["", "Big Mistake University"], Date: "1404/08/15" }
];
let href = [];
/*
  <a>
    <div>
      <h2>${index++}: ${lang.name}</h2>
      <p>${lang.date}</p>
    </div>
  </a>
*/
mainPage('Fa');
function Page(language) {
  let lang = language === 'Fa' ? 0 : 1;
};
Page('Fa');