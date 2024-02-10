import axios from "axios";

const fetchStatsIage = async () => {
  let response;
  try {
    response = await axios.get(
      "https://github-readme-personal.vercel.app/api/top-langs?username=Priyankthakur3&show_icons=true&locale=en&layout=compact&theme=material-palenight"
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching stats Image:", error);
    return error;
  }
};

export default fetchStatsIage;
