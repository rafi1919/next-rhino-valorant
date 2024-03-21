import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutPage from '@/templates/LandingPage/components/Layout';
import { useGetNewsDetail } from '../hooks';

export default function index() {
  const router = useRouter();
  const { newsId } = router.query;
  const [stateData, setStateData] = useState<any[]>([]);
  const { data, loading } = useGetNewsDetail({id: newsId as string});

  useEffect(() => {
    if (data) {
      setStateData([data]);
      // console.log(data)
    }
  }, [data]);

  return (
    <>
      <LayoutPage  section={stateData.length > 0 ? stateData[0].title : ''} arrow>
        <div className='my-5'>

          {loading ? (
            <p>Loading...</p>
          ) : stateData.length > 0 ? (
            <>
              <img src={stateData[0].banner.url} className='w-full' />
              <p className='text-[50px] text-blackGrey font-bold'>{stateData[0].description}</p>
              <p className='text-[50px] text-blackGrey font-bold'>{stateData[0].pathSlug}</p>
              {stateData[0]?.article_body?.map((item:any, index:any) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: item.rich_text_editor.rich_text_editor }} />
              ))}
              {/* Render other details of the article */}
            </>
          ) : (
            <p>{!loading && !data && newsId ? "Article not found" : "Loading..."}</p>
          )}
        </div>
      </LayoutPage>
    </>
  );
}
