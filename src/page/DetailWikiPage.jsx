import { useParams } from "react-router-dom";
import { useState, useEffect, version } from "react";
import Header from "../components/DetailWikiPageComponents/Header";
import WikiContent from "../components/DetailWikiPageComponents/WikiContent";
import WikiTitle from "../components/DetailWikiPageComponents/WikiTitle";
import styles from "./DetailWikiPage.module.css";
import Footer from "../layouts/Footer";
import axios from "axios";

const DetailWikiPage = () => {
  const {wiki_id} = useParams();
  const [wikiData,setWikiData] = useState(null);
  const accessToken = JSON.parse(sessionStorage.getItem("accesstoken"));
  const grantType = 'Bearer';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/wiki/${wiki_id}`,
          {
            withCredentials: true,
            headers: { Authorization: `${grantType} ${accessToken}` },
          }
        );
        console.log(response);
        const resultData = response.data.res_obj;
        setWikiData(resultData);  
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  
// wikiData가 로드되면 해당 데이터를 기반으로 disease 객체를 생성
const disease = wikiData && {
  name: wikiData.disease_name,
  code: wikiData.disease_code,
  modifiyDate: wikiData.last_modify_time,
  standard: wikiData.standard,
  symptom: wikiData.symptom || "아직 아무런 정보도 없습니다!",
  therapy: wikiData.therapy || "아직 아무런 정보도 없습니다!",
  etc: wikiData.etc || "아직 아무런 정보도 없습니다!",
  version: wikiData.version
};

// disease 객체가 null이 아닌 경우에만 렌더링하도록 수정
return (
  <>
    <Header />
    <div className={styles.container}>
      {disease && ( // disease가 null이 아닌 경우에만 렌더링
        <>
          <WikiTitle diseaseName={disease.name} diseaseCode={disease.code} diseaseModifyDate={disease.modifiyDate} />
          <WikiContent id={{wiki_id}} diseaseStandard={disease.standard} diseaseSymptom={disease.symptom} diseaseTherapy={disease.therapy} diseaseEtc={disease.etc} diseaseVersion={disease.version} />
        </>
      )}
    </div>
    <Footer />
  </>
);
};
export default DetailWikiPage;
