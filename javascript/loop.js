const nums = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < nums.length; index++) {
  const element = nums[index];
  console.log(element);
}

nums.forEach((element) => {
  console.log(element);
});

for (const iterator of nums) {
  console.log(iterator);
}
