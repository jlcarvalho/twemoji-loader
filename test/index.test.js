const compiler = require("./compiler.js");

test("Replaces emojis with twemojis images", async () => {
  const stats = await compiler("example.js");
  const output = stats.toJson().modules[0].source;

  expect(output).toBe(`'<h1>To the infinity and beyond <img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.3/72x72/1f680.png"/></h1>'`);
});

test("Replaces emojis with twemojis images using options", async () => {
  const opts = {
    folder: 'svg',
    ext: '.svg'
  };
  const stats = await compiler("example.js", opts);
  const output = stats.toJson().modules[0].source;

  expect(output).toBe(`'<h1>To the infinity and beyond <img class="emoji" draggable="false" alt="🚀" src="https://twemoji.maxcdn.com/v/12.1.3/svg/1f680.svg"/></h1>'`);
});
