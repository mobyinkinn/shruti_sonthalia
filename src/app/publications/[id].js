import { useRouter } from "next/router";
import Head from "next/head";

const PDFViewer = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>View Publication</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <iframe
          src={`/pdfs/${id}.pdf`}
          width="80%"
          height="800px"
          className="rounded-lg shadow-lg border"
        ></iframe>
      </div>
    </>
  );
};

export default PDFViewer;
