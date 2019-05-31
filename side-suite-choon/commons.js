const utils = require("./utils.js");
const tests = {};
tests["Untitled"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL("/playlists/0ie6ufwq294/wolf-richards-best-of", BASE_URL)).href);
  await driver.manage().window().setRect({
    width: 1282,
    height: 682
  });
  await driver.wait(until.elementLocated(By.css(`.ch-track-list__row:nth-child(1) > td > .ch-icon > path:nth-child(2)`)), configuration.timeout);
  await driver.findElement(By.css(`.ch-track-list__row:nth-child(1) > td > .ch-icon > path:nth-child(2)`)).then(element => {
    return element.click();
  });
  throw new Error("Unknown command wait");
  await driver.wait(until.elementLocated(By.css(`.ch-track-list__row:nth-child(2) > td > .ch-icon > path:nth-child(2)`)), configuration.timeout);
  await driver.findElement(By.css(`.ch-track-list__row:nth-child(2) > td > .ch-icon > path:nth-child(2)`)).then(element => {
    return element.click();
  });
  await driver.close();
}
module.exports = tests;