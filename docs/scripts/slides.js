function schoolSlides() {
  return [
    '00-school/00-Presentation.md',
    '00-school/01-speaker-thomas.md'
  ];
}

function schoolIntro() {
  let slides = [];
  for (let i = 48; i < 51; i++) {
    slides.push("01-intro/" + ('0' + String.fromCharCode(i)).substr(-2) + "-Introduction.md");
  }
  return slides;
}

function schooldWebAnalyse() {
  let slides = [];
  for (let i = 48; i < 52; i++) {
    slides.push("02-web-analyse/" + ('0' + String.fromCharCode(i)).substr(-2) + "-Web-Analyse.md");
  }
  return slides;
}

function schoolGoogleAnalytics() {
  let slides = [];
  for (let i = 48; i < 51; i++) {
    slides.push("03-google-analytics/" + ('0' + String.fromCharCode(i)).substr(-2) + "-Google-Analytics.md");
  }
  return slides;
}

function schoolConfiguration() {
  let slides = [];
  for (let i = 48; i < 52; i++) {
    slides.push("04-configuration/" + ('0' + String.fromCharCode(i)).substr(-2) + "-Configuration.md");
  }
  return slides;
}

function formation() {
  return [
    //
    ...schoolSlides(),
    ...schoolIntro(),
    ...schooldWebAnalyse(),
    ...schoolGoogleAnalytics(),
    ...schoolConfiguration(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
