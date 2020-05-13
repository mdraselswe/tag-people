export const comparer = (otherArray) => {
  return function (current) {
    return (
      otherArray.filter(function (other) {
        return other.id == current.id;
      }).length == 0
    );
  };
};
