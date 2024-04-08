import fetch from "node-fetch";

export default async (req, res) => {
  try {
    const response = await fetch(
      "https://playvalorant.com/page-data/id-id/news/page-data.json"
    );
    const data = await response.json();
    res.status(200).json(data); // Send the fetched data back in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
