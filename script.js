// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9Te2A_WF37ekq4B03X0kfmL__5i8KuFc",
    authDomain: "proj1-da9f6.firebaseapp.com",
    databaseURL: "https://proj1-da9f6-default-rtdb.firebaseio.com",
    projectId: "proj1-da9f6",
    storageBucket: "proj1-da9f6.appspot.com",
    messagingSenderId: "440403215752",
    appId: "1:440403215752:web:5ec68668e406d44174e63d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	
	const container = document.querySelector('.container')
container.addEventListener('animationend', () => {
  container.classList.remove('active');
});
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