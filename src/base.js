import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpnS7ucqQZVHw5Cr3wXRdEJoT3AtReafc",
    authDomain: "cat-rodeo.firebaseapp.com",
    databaseURL: "https://cat-rodeo.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
