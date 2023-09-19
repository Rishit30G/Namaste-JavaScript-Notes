const API_URL = "https://api.github.com/users/Rishit30G";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
