process.stdout.write(
  require("yaml").stringify(
    JSON.parse(require("fs").readFileSync("action.json", "utf8"))
  ) + "\n"
);
