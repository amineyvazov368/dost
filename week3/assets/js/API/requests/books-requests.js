// import API_URL from "../base_url.js";
const endpoint = "suppliers";
//get All Songs - void
export async function getAllSupplier(url) {
  let suppliers = null;
  let error = null;
  await axios
    .get(url + endpoint)
    .then((result) => {
        suppliers = result.data;
    })
    .catch((err) => {
      error = err;
    });

  return {
    suppliers: suppliers,
    error: error,
  };
}
export async function postSupplier(url, newSupplier) {
    const response = null;
    await axios.post(url + endpoint, newSupplier).then((res) => {
      response = res;
    });
    return response;
  }