export const makeTimeOptions = (type) => {
  if (type === "ampm") {
    return [
      { value: "AM", label: "AM" },
      { value: "PM", label: "PM" },
    ];
  } else {
    let array = [];
    let n = type === "hours" ? 0 : -1;
    const max = type === "hours" ? 12 : 59;

    while (n < max) {
      n++;
      n = n.toString();
      if (n.length < 2) {
        n = "0" + n;
      }
      array.push({ value: n, label: n });
    }

    return array;
  }
};
