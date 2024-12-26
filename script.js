function validEmail(str) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

console.log(validEmail('abc@example.com'));
console.log(validEmail('xyz@abc.com.in'));
console.log(validEmail('john.doe@com.'));
console.log(validEmail('@example.com'));
console.log(validEmail(''));

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
