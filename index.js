console.log("resoultion organizer");
import fs from "node:fs/promises";

// try {
//   const filePath = new URL("./package.json", import.meta.url);
//   const contents = await fs.readFile(filePath, { encoding: "utf8" });
//   console.log(contents);
// } catch (err) {
//   console.error(err.message);
// }

const flattenArrayOfObject = (arr) => {
  // console.log("flattenArrayOfObject");
  // console.log(arr);
  const flattened = [];
  // console.log("array forEach");
  arr.forEach((obj) => {
    // console.log("obj");
    // console.log(obj.length);
    // console.log(obj);
    for (const property in obj) {
      // console.log("each obj");
      // console.log(`${property}: ${obj[property]}`);
      flattened.push(`{${property}: ${obj[property]}}`);
    }
  });

  return flattened;
};

(async () => {
  try {
    const files = await fs.readdir("helix-demo-v6/package-resolutions");
    // console.log(files);
    var resolutionsArr = [];
    for (var i = 0; i < files.length; i++) {
      // console.log(files[i]);
      const contents = await fs.readFile(
        "helix-demo-v6/package-resolutions/" + files[i],
        { encoding: "utf8" }
      );
      const resolutions = JSON.parse(contents);
      for (let key in resolutions) {
        if (resolutions.hasOwnProperty(key)) {
          // console.log(key);
          var obj = {
            alphaVersion: {
              alphaFile: key,
              version: resolutions[key],
            },
          };
          resolutionsArr.push(obj);
        }
      }
    }
    console.log("END");
    console.log(resolutionsArr.length);
    // console.log(resolutionsArr);
    resolutionsArr.filter((item) => {
      console.log("item here");
      console.log(item);
      console.log(item.alphaVersion.alphaFile);
      // console.log("RESOLUTIONS ARRAY START");
      // console.log(resolutionsArr);
      // console.log("RESOLUTIONS ARRAY END");
      for (var i = 0; i < resolutionsArr.length; i++) {
        console.log("EACH RESOULTION START");
        console.log(resolutionsArr[i]);
        if (
          item.alphaVersion.alphaFile ===
          resolutionsArr[i].alphaVersion.alphaFile
        ) {
          console.log("OMG THESE ARE THE SAME CHECK THEM");
          console.log(`item version: ${item.alphaVersion.version}`);
          console.log(
            `array version: ${resolutionsArr[i].alphaVersion.version}`
          );
        }
        console.log("EACH RESOULTION END");
      }
    });
  } catch (e) {
    console.error("ERROR: ", e);
  }
})(); // Wrap in parenthesis and call now
// const writeFile = async () => {
//   const newFile = new URL("./demo.js", import.meta.url).pathname;
//   await fs.writeFile(newFile, `console.log('yooo');`);
// };
// writeFile();
// loop over all resolutions files and get objects,

// jason.resolutions
// {
//    "@sparta.global.helpers/checkbox-helper": "1.0.0-alpha.0"
// }
// greg.resolutions
// {
//    "@sparta.global.helpers/checkbox-helper": "1.0.0-alpha.1"
// }

// // filter by key, if multiple keys are the same in the array, check which value is a higher version and push it to a new array
// // use that new array of objects (our final resolutions) and push it as an object to a main resolutions file

// // final output has the object with the latest alpha version in it
// // main.resolutions
// // {
// //    "@sparta.global.helpers/checkbox-helper": "1.0.0-alpha.1"
// // }
