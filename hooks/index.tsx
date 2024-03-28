import { useEffect, useState } from "react";

export const useGetNewsData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://playvalorant.com/page-data/id-id/news/page-data.json`
        );
        const responseData = await response.json();

        if (responseData.result.data.allContentstackArticles) {
          const articlesData =
            responseData.result.data.allContentstackArticles.nodes;
          setData(articlesData);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export const useGetNewsDetail = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the news article based on its id to get the pathSlug
        const responseId = await fetch(
          `https://playvalorant.com/page-data/id-id/news/page-data.json`
        );
        const responseDataId = await responseId.json();

        if (responseDataId.result.data.allContentstackArticles) {
          const articlesDataId =
            responseDataId.result.data.allContentstackArticles.nodes;
          const foundArticleId = articlesDataId.find(
            (article: any) => article.id === id
          );

          // Once you have the pathSlug, fetch the news article details
          if (foundArticleId) {
            const responseDetail = await fetch(
              `https://playvalorant.com/page-data/id-id/news${foundArticleId.pathSlug}page-data.json`
            );
            const responseDataDetail = await responseDetail.json();

            if (responseDataDetail.result.data.contentstackArticles) {
              const articlesDataDetail =
                responseDataDetail.result.data.contentstackArticles;
              setData(articlesDataDetail);

              console.log(articlesDataDetail);
            } else {
              console.log("error");
            }
          }
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    data,
    loading,
  };
};
