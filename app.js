function handleNumber(n) {
  if (n === 2) {
    return true;
  } else if (n > 1) {
    for (var i = 2; i < n; i++) {
      if (n % i !== 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
