import axios from "axios";

async function getData(id) {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const completeData = { ...user, posts: posts };
  console.log(completeData);
}

export default getData;
