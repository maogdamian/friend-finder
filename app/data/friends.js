// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Abe Lincoln",
    photo:
      "https://www.encyclopedia.com/sites/default/files/4/2793330.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
  },
  {
    name: "Elon Musk",
    photo:
      "https://amp.businessinsider.com/images/5ab16de1e72a031a008b45ff-750-563.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  },
  {
    name: "Chris Hemsworth",
    photo: "https://vignette.wikia.nocookie.net/marvelmovies/images/7/73/Chris_Hemsworth.jpg/revision/latest?cb=20170325120656",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
  },
  {
    name: "Ice Cube",
    photo:
      "https://www.thefamouspeople.com/profiles/images/ice-cube-3.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
  },
  {
    name: "Chris Pratt",
    photo:
      "http://cdn.skim.gs/images/c_fill,dpr_1.0,f_auto,fl_lossy,h_391,q_auto,w_695/chris-pratt-shallow-actors/chris-pratt-reveals-in-gq-interview-how-shallow-famous-people-are",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
  },
  {
    name: "Emma Stone",
    photo:
      "https://images1.phoenixnewtimes.com/imager/u/745xauto/9000974/emma-stone-denis_makarenko-shutterstock.com.jpg",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
  },
  {
    name: "Emily Blunt",
    photo: "https://media.brides.com/photos/580e35f3373709e11243fdb2/1:1/w_767/blogs-aisle-say-emily-blunt-makeup-th.jpg",
    scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;