// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

const {
  data: [
    {
      bookDetails: { name },
    },
  ],
} = data2;
console.log(name);

const {
  data: [, { bookCategory }],
} = data2;
console.log(bookCategory);

const adda = data2.data[0].bookDetails.name;
console.log("This adda is ", adda);
console.log(data2.data[1].bookCategory);
