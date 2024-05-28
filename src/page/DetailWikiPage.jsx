import { useParams } from "react-router-dom";
import Header from "../components/DetailWikiPageComponents/Header";
import WikiContent from "../components/DetailWikiPageComponents/WikiContent";
import WikiTitle from "../components/DetailWikiPageComponents/WikiTitle";
import styles from "./DetailWikiPage.module.css";
import Footer from "../layouts/Footer";

const DetailWikiPage = () => {
  const { diseaseName } = useParams();
  const { diseaseCode } = useParams();
  const { diseaseContent } = useParams();

  // api를 통해 병명코드로 나머지 내용들 가져오기
  const disease = {
    name: diseaseName,
    code: diseaseCode,
    content: diseaseContent,
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <WikiTitle diseaseName={disease.name} diseaseCode={disease.code} />
        <WikiContent diseaseContent={disease.content} />
      </div>
      <Footer />
    </>
  );
};
export default DetailWikiPage;
