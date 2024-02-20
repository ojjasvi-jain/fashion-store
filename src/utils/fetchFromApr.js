let BASEURL = "https://fakestoreapi.com";

async function fetchFromApi(path) {
  const res = await fetch(`${BASEURL}/${path}`);
  const data = await res.json();
  return data;
}

export default fetchFromApi;
