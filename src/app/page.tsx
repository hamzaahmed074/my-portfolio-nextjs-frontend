import { getStaticDataFromGql } from "@/api/serverApi";
import { GetTestDocument } from "@/api/serverSdk";
import Banner from "@/components/banner";

export default async function Home() {
  const data = await getStaticDataFromGql(GetTestDocument);
  return <HomeUI />;
}
function HomeUI() {
  return (
    <>
      <Banner />
    </>
  );
}
