// code your solution here
// code your solution here
const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    //...
  ];
  
  const superbowlWin = (collection) => {
    for (const element of collection) {
      if (element .result === "W") {
        return element.year;
      }
    }
  };