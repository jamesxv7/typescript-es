var num = [1, "test"];
//var num1:NumberStringPair = ["test",1];
//var num.push
var roomInfo;
roomInfo = [1, "test"]; // Ok
//roomInfo = ["test",1] // Type Error (fine)
roomInfo.push("test", 1); // Ok (I was specting a type error)
