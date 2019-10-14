console.log('This is the content.js file speaking to you.');

const nodelist = document.querySelectorAll(".rc");
const results = Array.from(nodelist)
console.log(results);

const firstResult = results.slice(0, 1);
console.log(results);
console.log(firstResult);
firstResult.forEach((item) => {
  const link = item.getElementsByTagName('a');
  console.log(link[0].attributes.href.value);
  const url = link[0].attributes.href.value;
  chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});
});
