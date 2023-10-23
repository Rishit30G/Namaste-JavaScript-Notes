const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Resolved Value 1!!");
    }, 1000);
  });
  
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Resolved Value 2!!");
    }, 10000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise Rejected Value 3!!");
    }, 2000);
  });
  
  async function handlePromise() {
    const result = await Promise.race([p1, p2, p3]);
    console.log(result);
  }
  
  handlePromise();