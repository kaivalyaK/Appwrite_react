import { Account, Client, Databases } from 'appwrite';

// // // Create an Appwrite client for connecting to the server.
// // const appwriteClient = new Client();
// // const appwriteAccount = new Account(appwriteClient);

// // // Assign the server's API endpoint and the project ID.
// // appwriteClient
// //     .setEndpoint('https://cloud.appwrite.io/v1')
// //     .setProject('6486e29686cdff16b887');

// // // Use the credentials of the react-app-user to connect
// // // to the Appwrite API. Replace `example-password` with
// // // the password you used when creating the user.
// // const appwriteAccountPromise = appwriteAccount.createEmailSession('kaivalyacse06@gmail.com', '49760032');

// // // Have the response printed to the JavaScript console
// // // for debugging. You can remove this later.
// // appwriteAccountPromise.then(function (response) {
// //     console.log(response);
// // }, function (error) {
// //     console.log(error);
// // });

// // // Establish the database to use via its ID. Then
// // // export the database object so that it can be
// // // imported by other parts of the React project.
// // export const appwriteDatabase = new Databases(appwriteClient, '6486e33bd2d0bf039d12');


// import { Account, Client, Databases} from "appwrite";
// const appwriteClient = new Client();
// const appwriteAccount = new Account(appwriteClient);

// const client = new Client();
//     client.setEndpoint("https://cloud.appwrite.io/v1").setProject("648f1eac05048d88aa72")

//     // const appwriteAccountPromise = appwriteAccount.createEmailSession('kaivalya@datazeneral.com', 'Kaivalya@237');

//     // appwriteAccount.then(function (response) {
//     //         console.log(response);
//     //     }, function (error) {
//     //         console.log(error);
//     //     });

// // export const database = new Databases(client, '648f1f29be758e67216a');
// export const client;
// // let promise = database.listDocuments(
// //     '648f1f29be758e67216a',
// // );

// // promise.then(function (response) {
// //     console.log(response.length);
// // }, function (error) {
// //     console.log(error);
// // });


export const Server = {
    endpoint: process.env.REACT_APP_ENDPOINT,
    project: process.env.REACT_APP_PROJECT,
    collectionID: process.env.REACT_APP_COLLECTION_ID
  };

