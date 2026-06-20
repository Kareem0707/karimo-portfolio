const fs = require('fs');
const readline = require('readline');
const path = "C:\\Users\\10\\.gemini\\antigravity\\brain\\d70f90c8-06e4-40fd-b09d-4599ade266ef\\.system_generated\\logs\\transcript_full.jsonl";

async function run() {
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  let userInputs = "";
  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.type === "USER_INPUT") {
        userInputs += obj.content + "\n-----\n";
      }
    } catch(e) {}
  }
  
  fs.writeFileSync("i:\\My Web\\Protfolio\\user_inputs.txt", userInputs);
  console.log("Wrote user_inputs.txt");
}
run();
