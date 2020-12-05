/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCs7SK6CKv1UBxod6Pnfk5r-cjL1s_vbcs',
  authDomain: 'fir-messaging-5d3d6.firebaseapp.com',
  projectId: 'fir-messaging-5d3d6',
  storageBucket: 'fir-messaging-5d3d6.appspot.com',
  messagingSenderId: '519134207473',
  appId: '1:519134207473:web:a894576c343eba76e67850',
});

firebase.messaging();
