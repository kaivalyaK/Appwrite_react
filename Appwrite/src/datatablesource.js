import { data } from "jquery";
import {useState, useEffect } from "react";

import { api } from './api/api';

import React from 'react';



export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "categories",
    headerName: "Categories",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "image",
    headerName: "Image",
    width: 200,
  },

  {
    field: "code",
    headerName: "Code",
    width: 100,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
// function category(){
//   return userRows= () =>{const getData=database.get()
//   getData.then(
//     function(response){
//       userRows(response)
//     },
//   function(error){
//     console.log(error);
//   }
//   ),[]}}

//   export default userRows;

  






// export const userRows = () =>{

//     const Categories = async (code, name, type, image, status) => {
//       const response = await database.category_master({
//         query : `mutation ($code:String!,
//           $name: String!,
//           $type: String!,
//           $image:String!,
//           $status: String!)
//           {addCategory()
//             code: $code,
//             name:$name,
//           type: $type,
//         image: $image,
//       status:$status){_id}}`,
//       variables: {
//         name: name,
//         type: type,
//         image: image,
//         status: status,
//         code:code
//       }
//       });

//     }
// }


// export const userRows = () =>{
//   componentDidMount() {
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }
// }



export const userRows = [
  {
    
    id: 1,
    Mobile: "1234567890",
    img: "",
    status: "active",
    email: "1snow@gmail.com",

  }];
  // {
  //   id: 1,
  //   username: "Snow",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   status: "active",
  //   email: "1snow@gmail.com",
  //   age: 35,
  // },
  // {
  //   id: 2,
  //   username: "Jamie Lannister",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "2snow@gmail.com",
  //   status: "passive",
  //   age: 42,
  // },
  // {
  //   id: 3,
  //   username: "Lannister",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "3snow@gmail.com",
  //   status: "pending",
  //   age: 45,
  // },
  // {
  //   id: 4,
  //   username: "Stark",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "4snow@gmail.com",
  //   status: "active",
  //   age: 16,
  // },
  // {
  //   id: 5,
  //   username: "Targaryen",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "5snow@gmail.com",
  //   status: "passive",
  //   age: 22,
  // },
  // {
  //   id: 6,
  //   username: "Melisandre",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "6snow@gmail.com",
  //   status: "active",
  //   age: 15,
  // },
  // {
  //   id: 7,
  //   username: "Clifford",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "7snow@gmail.com",
  //   status: "passive",
  //   age: 44,
  // },
  // {
  //   id: 8,
  //   username: "Frances",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "8snow@gmail.com",
  //   status: "active",
  //   age: 36,
  // },
  // {
  //   id: 9,
  //   username: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "snow@gmail.com",
  //   status: "pending",
  //   age: 65,
  // },
  // {
  //   id: 10,
  //   username: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "snow@gmail.com",
  //   status: "active",
  //   age: 65,
  // },
// ];