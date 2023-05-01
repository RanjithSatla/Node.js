import fs from "fs";

//Reading a file: Synchronous , Blocking way
const textIn = fs.readFileSync("../txt/input.txt", "utf-8");

const outputText = `This is what is knew about mangoes.${textIn} \n created on ${Date.now()}`;
console.log(outputText);

//Writing to a file :
const test = "Hey Hie How are you";
fs.writeFileSync("../txt/input.txt", test); // Clears the entire files and rewrites this

fs.writeFileSync("../txt/output.txt", outputText);

// // Reading File asynchrunously, Non-blocking way :

fs.readFile("../txt/start.txt", "utf-8", (err, data1) => {
  console.log(data1);
  fs.readFile(`../txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("../txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      // Write data2 and data3 to final.txt
      fs.writeFile("../txt/final", `${data2} \n ${data3}`, (err) => {
        console.log(err);
      });
    });
  });
});
console.log("reading file");
