const puppeteer = require("puppeteer");
const id = "gecapay358@rphinfo.com";
const pw = "789456123";

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then(function (browser) {
    console.log("browser is opened !");
    return browser.pages();
  })
  .then(function (pages) {
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
  })
  .then(function () {
    return tab.type("#input-1", id);
  })
  .then(function () {
    return tab.type("#input-2", pw);
  })
  .then(function () {
    return tab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
  })
  .then(function () {
    return tab.click("#base-card-1-link");
  })
  .then(function () {
    console.log("logged in !!!");
  });
