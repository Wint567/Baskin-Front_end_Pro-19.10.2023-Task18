function power(num, degree) {
    if (degree === 0) {
      return 1;
    }
    
    return num * power(num, degree - 1);
  }
  
  const result = power(2, 3);
  console.log(result);
  