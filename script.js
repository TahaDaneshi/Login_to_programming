const html = document.documentElement;
const body = document.getElementById('body');
const Lessons = [
  {
    Name: ["مقدمه", 'Intro'],
    Date: "1404/08/11"
  },
  {
    Name: ["برنامه نویسی چیست؟", "Whats Programming"],
    Date: "1404/08/11"
  },
  {
    Name: ["شاخه های برنامه نویسی", "Programming Branches"],
    Date: "1404/08/12"
  },
  {
    Name: ["ارتباط ریاضی و زبان انگلیسی در یادگیری", "Math and English"],
    Date: "1404/08/13"
  },
  {
    Name: ["آینده شغلی برنامه نویسی و مسیرهای درآمدزایی", "coding career"],
    Date: "1404/08/13"
  },
  {
    Name: ["مدت زمان مورد نیاز برای یادگیری و روش های یادگیری", "How to Learn"],
    Date: "1404/08/13"
  },
  {
    Name: ["دوره آموزشی که میبینیم چه ویژگی هایی داشته باشه؟ ریسرچربودن چیه؟", "Research and Choose Course"],
    Date: "1404/08/13"
  },
  {
    Name: ["واقعیت های ناگفته دنیای برنامه نویسی", "Programming Reality"],
    Date: "1404/08/15"
  },
  {
    Name: ["بزرگ ترین اشتباح تازه کارها! دانشگاه بریم یا نریم؟", "Big Mistake University"],
    Date: "1404/08/15"
  }
];
let href = [];
function Page(language) {
  let lang = language === 'Fa' ? 0 : 1;
  Lessons.forEach((element, index) => {
    let test = element.Name[1].replaceAll(' ', '_');
    href.push();
    body.insertAdjacentHTML('beforeend', `
    <a href="./${++index}_${test}/${test}.html">
    <div>
      <h2>${index}: ${element.Name[lang]}</h2>
      <p>${element.Date}</p>
    </div>
  </a>`)
  });
};
Page('Fa');