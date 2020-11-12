const keys = [
  "/dist/",
  "/dist/js/",
  "/index.html",
  "/image/screenshots/ios/ipad/temp/",
  "/dist/js/main.js",
  "/dist/css/main.css",
  "/image/hero_2x.png",
  "/image/screenshots/web/dashboard_2x.png"
];

function parse(input) {
  let folders = {};
  for (var i = 0; i < input.length; i++) {
    let path = input[i].split("/");
    path.shift();
    //[ 'dist', 'js', 'main.js' ]
    dfs(path, folders);
  }
  function dfs(input, current) {
    let currObj = input.shift();
    if (currObj == "" || currObj == null) return;
    if (!current[currObj]) {
      current[currObj] = {};
    }
    dfs(input,current[currObj]);
  }
  return folders;
}
console.log(parse(keys));

/* split keys
[ '', 'dist', '' ]
[ '', 'dist', 'js', '' ]
[ '', 'index.html' ]
[ '', 'image', 'screenshots', 'ios', 'ipad', 'temp', '' ]
[ '', 'dist', 'js', 'main.js' ]
[ '', 'dist', 'css', 'main.css' ]
[ '', 'image', 'hero_2x.png' ]
[ '', 'image', 'screenshots', 'web', 'dashboard_2x.png' ]
*/

/*
RESULT:
{
  dist: {
    js: { 'main.js': {} },
    css: { 'main.css': {} }
  },
  'index.html': {},
  image: {
    screenshots: { ios: [Object], web: [Object] },
    'hero_2x.png': {}
  }
}
*/
// console.log(JSON.stringify(keysToObjects(keys), null, 2));


// function keysToObjects(input) {
//   let folders = {};

//   for (let i = 0 ; i < input.length; i++) {
//     let path = input[i].split("/");
//     path.shift();
//     parseFolders(path, folders);
//   }


//   function parseFolders(input, current, index) {
//     console.log(input)
//     // //base
//     let currObj = input.shift();

//     if (currObj == "" || currObj == undefined) {
//       return;
//     }

//     if (!current[currObj]) {
//       current[currObj] = {}
//     }
//     parseFolders(input, current[currObj])
//   }


//   return folders;
// }
