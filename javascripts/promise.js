

//Promises
//--------
//pending
//fulfilled
//rejected
//--------

$(document).ready(function(){

  function writeDom(){
    var dinoString = "";
    for(var i=0;i<dinosaurs.length;i++){
      dinoString += `<h1>${dinosaurs[i].type}</h1>`;
    }
    $(".promises").append(dinoString);
  }


// //------------- 1 ---------------- //
//
//   var dinosaurs = [];
//   $.ajax("./db/dinosaurs1.json").done(function(data1){
//     console.log("data1", data1.dinosaurs1);
//     dinosaurs = data1.dinosaurs1;
//     writeDom();
//
//     //---------------- 2 --------------- //
//       $.ajax("./db/dinosaurs2.json").done(function(data2){
//         console.log("data2", data2.dinosaurs2);
//         dinosaurs = data2.dinosaurs2;
//
//         // data2.dinosaurs2.forEach(function(dino){
//         //   dinosaurs.push(dino);
//         // })
//
//         writeDom();
//
//         //-------------------- 3 -------------------- //
//         $.ajax("./db/dinosaurs3.json").done(function(data3){
//           console.log("data3", data3.dinosaurs3);
//           dinosaurs = data3.dinosaurs3;
//
//           // data2.dinosaurs2.forEach(function(dino){
//           //   dinosaurs.push(dino);
//           // })
//
//           writeDom();
//         }).fail(function(error3){
//           console.log("You failed.");
//         });
//         // ------------- end 3 ----------------- //
//
//
//       }).fail(function(error2){
//         console.log("You failed.");
//       });
//     // -------------- end 2 ------------------- //
//
//   }).fail(function(error1){
//     console.log("You failed.");
//   });
//
// // --------------- end 1 --------------- //






  var firstDinoJSON = function(){
    return new Promise(function(resolve, reject){
      $.ajax("./db/dinosaurs1.json").done(function(data1){
        resolve(data1.dinosaurs1);
      }).fail(function(error){
        reject(error1);
        alert("AJAX failure");
      });
    });
  };

  // firstDinoJSON().then(function(jsonData1){
  //   console.log(jsonData1);
  //   dinosaurs = jsonData1;
  //   writeDOM();
  // }).catch(function(jsonDataFail1){
  //   console.log(jsonDataFail1);
  // });

  firstDinoJSON().then(function(jsonData1){
    console.log(jsonData1);
    dinosaurs = jsonData1;
    writeDOM();
  }).catch(function(jsonDataFail1){
      console.log(jsonDataFail1);
  });
  // .catch for errors - safety net







  // var dinosaurs = [];
  //
  //
  //   function writeDOM(){
  //       var domString = "";
  //       for(var i=0; i<dinosaurs.length; i++){
  //           domString += `<h1>${dinosaurs[i].type}</h1>`;
  //       }
  //       $("#promises").append(domString);
  //   }
  //
  //
  //   $.ajax("./db/dinosaurs1.json").done(function(data1){
  //       console.log("data1", data1.dinosaurs1);
  //       dinosaurs = data1.dinosaurs1
  //       $.ajax("./db/dinosaurs2.json").done(function(data2){
  //           console.log("data2", data2.dinosaurs2);
  //           data2.dinosaurs2.forEach(function(dino){
  //               dinosaurs.push(dino);
  //           })
  //           $.ajax("./db/dinosaurs3.json").done(function(data3){
  //           console.log("data3", data3.dinosaurs3);
  //           data3.dinosaurs3.forEach(function(dino){
  //               dinosaurs.push(dino);
  //           })
  //           writeDOM();
  //       }).fail(function(error3){
  //           console.log(error3);
  //       })
  //       }).fail(function(error2){
  //           console.log(error2);
  //       })
  //   }).fail(function(error1){
  //       console.log(error1);
  //   })








});
