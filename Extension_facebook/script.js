const clock = document.createElement("div");
clock.classList.add("clock_extension");
setInterval(updateClock, 1000);
document.body.append(clock);

function updateClock() {
  const date = new Date();
  const time = new Intl.DateTimeFormat("ru-Ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
  console.log(date, time);
  // console.log("date", date);
  // console.log("time", time);
  clock.innerText = time;
}

// "content_scripts": [
//   {
//     "js": ["script.js"],
//     "css": ["style.css"],
//     "matches": ["<all_urls>"]
//   }
// ],
// "permissions": ["storage"],
// "host_permissions": ["<all_urls>"]

/////////////////
// "action": {
//   "default_popup": "index.html",
//   "default_icon": "hello_extensions.png"
// }
