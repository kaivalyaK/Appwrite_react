// import { Query } from 'appwrite';
// import React, { Component } from 'react';
// import { appwriteDatabase } from './utils';

// // Create the Films class, which extends component.
// class Categories extends Component {
//     // Establish the component's state variables.
//     state = {
//         code: '',
       
//     }

//     // Have the component call the `fetchFilms`
//     // function when the component loads.
//     componentDidMount() {
//         this.fetchCategories();
//     }
//      // Fetch the lists of films, assigning them to
//     // the component's appropriate state variables.
//     fetchCategories = () => {
//         // Clear the films lists to start.
//         this.setState({
//             code: '',
//         });

//         // Query the database for films where `status`
//         // is `To Watch`.
//         const promisecategory = appwriteDatabase.listDocuments('6486e33bd2d0bf039d12', '6486e3453a566f4d52b1', [
//             Query.equal('code')
//         ]);

//         // Handle the query's promise. Update the
//         // state variable based on the results.
//         promisecategory.then( (response) => {
//             if (response.documents && response.documents.length > 0) {
//                 this.setState({ ...this.state,Categories: response.documents });
//             } else {
//                 this.setState({ ...this.state, code:'' });
//             }
//         }, function (error) {
//             console.log(error);
//         });

       
//     } 

//     // Render the Films component display.
//     render () {
//         return (
//             <div>
//                 <div style={{ display: 'grid', columnGap: '.5em', rowGap: '1em', padding: '3em' }}>
//                     <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
//                         <h2>Films to Watch</h2>
//                         <div>{ this.renderFilmsList(this.state.filmsToWatchList) }</div>
//                     </div>
//                     <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
//                         <h2>Films Watched</h2>
//                         <div>{ this.renderFilmsList(this.state.filmsWatchedList) }</div>
//                     </div>
//                 </div>
//                 <div style={{ width: '50%', margin: 'auto' }}>
//                     <h2>Add New Film</h2>
//                     <div>
//                         <input type="text" onChange={ (e) => { this.setState({ ...this.state, newFilmName: e.target.value }) } } />
//                         <button onClick={this.addNewFilm}>Add</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Categories;