// Return Example

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return state;
//     case "CREATE":
//       return state;
//     default:
//       return state; 
//   }
// };

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
