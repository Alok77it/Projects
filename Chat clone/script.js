const threadItem = document.getElementById("thread");
const threadDisplay = document.getElementById("thread-1");
const sentItem = document.getElementById("sent");
const sentDisplay = document.getElementById("sent-1");
const announcementItem = document.getElementById("announcement");
const announcementDisplay = document.getElementById("announcement-1");
const generalItem = document.getElementById("general");
const generalDisplay = document.getElementById("general-1");
const demoChannelItem = document.getElementById("demoChannel");
const demoChannelDisplay = document.getElementById("demoChannel-1");
const channelsItem = document.getElementById("channels");
const channelsDisplay = document.getElementById("channels-1");
const demoProfile1Item = document.getElementById("demoProfile1");
const demoProfile1Display = document.getElementById("demoProfile1-1");
const demoProfile2Item = document.getElementById("demoProfile2");
const demoProfile2Display = document.getElementById("demoProfile2-1");
const workerItem = document.getElementById("worker");
const workerDisplay = document.getElementById("worker-1");
const demoApp1Item = document.getElementById("demoApp1");
const demoApp1Display = document.getElementById("demoApp1-1");
const pluginsItem = document.getElementById("plugins");
const pluginsDisplay = document.getElementById("plugins-1");

threadDisplay.style.display = "none";

threadItem.addEventListener("click", () => {
  threadDisplay.style.display = "block";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  channelsDisplay.style.display = "none";
  demoProfile1Display.style.display = "none";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  workerDisplay.style.display = "none";
});

sentItem.addEventListener("click", () => {
  sentDisplay.style.display = "block";
  announcementDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  channelsDisplay.style.display = "none";
  demoProfile1Display.style.display = "none";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  threadDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

announcementItem.addEventListener("click", () => {
  announcementDisplay.style.display = "block";
  generalDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  channelsDisplay.style.display = "none";
  demoProfile1Display.style.display = "none";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

generalItem.addEventListener("click", () => {
  generalDisplay.style.display = "block";
  demoChannelDisplay.style.display = "none";
  channelsDisplay.style.display = "none";
  demoProfile1Display.style.display = "none";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

demoChannelItem.addEventListener("click", () => {
  demoChannelDisplay.style.display = "block";
  channelsDisplay.style.display = "none";
  demoProfile1Display.style.display = "none";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

channelsItem.addEventListener("click", () => {
  channelsDisplay.style.display = "block";
  demoProfile1Display.style.display = "none";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  demoChannelDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

demoProfile1Item.addEventListener("click", () => {
  demoProfile1Display.style.display = "block";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  channelsDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

demoProfile2Item.addEventListener("click", () => {
  demoProfile2Display.style.display = "block";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile1Display.style.display = "none";
  channelsDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

workerItem.addEventListener("click", () => {
  workerDisplay.style.display = "block";
  pluginsDisplay.style.display = "none";
  demoApp1Display.style.display = "none";
  demoProfile1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  channelsDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
});

demoApp1Item.addEventListener("click", () => {
  demoApp1Display.style.display = "block";
  pluginsDisplay.style.display = "none";
  demoProfile1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  channelsDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});

pluginsItem.addEventListener("click", () => {
  pluginsDisplay.style.display = "block";
  demoApp1Display.style.display = "none";
  demoProfile1Display.style.display = "none";
  demoProfile2Display.style.display = "none";
  channelsDisplay.style.display = "none";
  demoChannelDisplay.style.display = "none";
  generalDisplay.style.display = "none";
  threadDisplay.style.display = "none";
  sentDisplay.style.display = "none";
  announcementDisplay.style.display = "none";
  workerDisplay.style.display = "none";
});
