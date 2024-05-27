import { useParams } from "react-router-dom";
import Header from "../components/DetailWikiPageComponents/Header";
import WikiContent from "../components/DetailWikiPageComponents/WikiContent";
import WikiTitle from "../components/DetailWikiPageComponents/WikiTitle";
import styles from "./DetailWikiPage.module.css";

const DetailWikiPage = () => {
  const { diseaseCode } = useParams();

  // api를 통해 병명코드로 나머지 내용들 가져오기
  const disease = {
    name: "병명",
    code: diseaseCode,
    content: "여기에 해당 질병에 대한 정보를 적어주세요.",
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <WikiTitle diseaseName={disease.name} diseaseCode={disease.code} />
        <WikiContent diseaseContent={disease.content} />
      </div>
    </>
  );
};
export default DetailWikiPage;
