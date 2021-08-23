import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import AuthProvider from "./AuthProvider";
import { firestore } from "./firebase";
import { useEffect } from "react";

let App = () => {
  // useEffect(() => {
  // insert to collection
  // firestore.collection("users").add({ body: "this is val 2" });

  //getting data from collections
  // async function f() {
  //   let querySnapshot = await firestore.collection("users").get();
  //   for (let i = 0; i < querySnapshot.docs.length; i++) {
  //     console.log(querySnapshot.docs[i].data());
  //   }
  // }
  // f();

  // get single document
  // this gives us a document refrence
  // let f = async () => {
  //   let docRef = firestore.collection("users").doc("5FsTsvyg3IPlV1YdIHJW");

  //   let document = await docRef.get();
  //   console.log(document.data());
  // };
  // f();
  // }, []);
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
