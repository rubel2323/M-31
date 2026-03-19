let data = {
  hospital: {
    id: 101,
    departments: [
      {
        cardiology: [{ doctor_name: "Dr. Smith" }, { room: "A-12" }],
      },
      {
        neurology: [{ doctor_name: "Dr. Adams" }, { room: "B-07" }],
      },
    ],
  },
};

const {
  hospital: {
    departments: [
      ,
      {
        neurology: [, { room }],
      },
    ],
  },
} = data;
console.log(room);

// ```

// ---

// ### Task 1 — Dot Notation
// ```
// console.log the room of the neurology department
// ```

// ### Task 2 — Destructuring
// ```
// destructure all the way down to the neurology room
// and console.log it
// ```

// ---

// ### Expected Output
// ```
// "B-07"
