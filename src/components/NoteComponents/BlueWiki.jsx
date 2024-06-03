import { useState, useEffect } from "react";
import styles from "./BlueWiki.module.css";
import { motion } from "framer-motion";
import { IoPerson,IoAddCircle  } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlueWiki = () => {

  const navigate = useNavigate();
  const accessToken = JSON.parse(sessionStorage.getItem("accesstoken"));
  const grantType = 'Bearer';


  const [myData,setMyData] = useState(null);
  const [otherData,setOtherData] = useState([]);
    
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/wiki",
        {
          withCredentials: true,
          headers: { Authorization: `${grantType} ${accessToken}` },
        }
      );
  
      const resultData = response.data.res_obj;
      console.log(resultData);
      const tempOtherData = [];
      resultData.forEach((data) => {
        console.log(data)
        console.log(sessionStorage.getItem("diseaseId"))
        if (data.disease_info_id === Number(sessionStorage.getItem("diseaseId"))) {
          setMyData(data);
        } else {
          tempOtherData.push(data);
        }
      });
      setOtherData(tempOtherData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddClick = async () => {
    console.log("checked");
    try {
      const response = await axios.post(
        "http://localhost:8080/wiki",
        {},
        {
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
      });
      console.log(response);
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const hoverEffect = {
    scale: 1.05,
  };
const goDetailWikiPageHandler = (disease) =>{
  navigate(`/detail/${disease.wiki_id}`)
}
  const renderDisease = (disease) => (
    <motion.button whileHover={hoverEffect} className={styles.diseaseContainer}
    onClick={() => goDetailWikiPageHandler(disease)}>
      <p className={styles.diseaseName}>
        {`${disease.disease_name}: `}
        <span className={styles.diseaseCode}>{disease.disease_code}</span>
        <HiDotsVertical className={styles.dots} />
      </p>
      <p className={styles.diseaseContent}>
        검사기준 : {disease.standard.length > 50
          ? `${disease.standard.slice(0, 50)}...`
          : disease.standard}
      </p>
    </motion.button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.myDisease}>
        <IoPerson className={styles.myIcon} />
        나의 질병 
      </div>
      {myData ? renderDisease(myData) : <><button className={styles.addButton} onClick={handleAddClick}><IoAddCircle className={styles.addIcon} /></button><div className={styles.noMydata}>아직 질병정보가 없습니다 !</div></>
      }
      <div className={styles.otherDisease}>
        <FaUserGroup className={styles.otherIcon} />다른 질병
        {Array.isArray(otherData) && otherData.map((disease, index) => (
          <div key={index}>{renderDisease(disease)}</div>
        ))}
      </div>
    </div>
  );
};

export default BlueWiki;
