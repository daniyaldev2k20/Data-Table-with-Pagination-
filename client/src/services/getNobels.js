import axios from "axios";

export async function getList(limit) {
  let params = new URLSearchParams();
  // params.append("page", page);
  params.append("limit", limit);
  const queryParams = {
    params,
  };
  try {
    const { data: results } = await axios.get(
      "https://paginationmedexam.herokuapp.com/api/v1/nobel/allNobels",
      queryParams
    );
    return results.data.nobels;
  } catch (e) {
    return console.error(e);
  }
}
