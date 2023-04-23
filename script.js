// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxXqkte_-ZtvWnyMGJFPQ0oFmfCHBQxI",
  authDomain: "project2-55c6b.firebaseapp.com",
  databaseURL: "https://project2-55c6b-default-rtdb.firebaseio.com",
  projectId: "project2-55c6b",
  storageBucket: "project2-55c6b.appspot.com",
  messagingSenderId: "772092113396",
  appId: "1:772092113396:web:ffc8ed77770d206dde49a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

$(document).ready(function(){
	
	
	var data;
	
	$(".pp").click(function(){
		var firebaseRef = firebase.database().ref().child("data");
		if(data == "1"){
			firebaseRef.set("0");
			data = "0";
		} else {
			firebaseRef.set("1");
			data = "1";
		}
	})
	
});
