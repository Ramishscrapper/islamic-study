//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyCJsPaBDDzgrqIkmow1x_ZWn-mUBnyQKFQ",
  authDomain: "islamic-study-54752.firebaseapp.com",
  projectId: "islamic-study-54752",
  storageBucket: "islamic-study-54752.appspot.com",
  messagingSenderId: "639884945679",
  appId: "1:639884945679:web:b364dce8fc756e9aaa367a",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("formData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let senderName = document.getElementById("name").value;
  let senderEmail = document.getElementById("email").value;
  let topic = document.getElementById("subject").value;
  let senderMessage = document.getElementById("message").value;

  firestore
    .collection("formData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (senderName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      name: senderName,
      email: senderEmail,
      subject: topic,
      message: senderMessage,
    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm();
});
