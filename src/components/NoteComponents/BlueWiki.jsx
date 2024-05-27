import { useState, useEffect } from "react";
import styles from "./BlueWiki.module.css";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

const BlueWiki = () => {
  const navigate = useNavigate();
  const param = useParams();
  const defaultData = {
    name: '독감',
    code: 'J10-J11.8',
    content: '아직 등록된 정보가 없어요. 정보를 입력해주세요!',
  };

  const userDatas = [
    {
      name: "독감",
      code: "J10-J11.8",
      content:
        "인플루엔자(Influenza) 또는 인플루엔자바이러스 감염증(Influenza viruses disease)은 인플루엔자바이러스 감염에 의해 발생하는 급성 호흡기 질환으로, 갑작스러운 고열, 두통, 근육통, 오한 등이 특징이다.",
    },
  ];

  const otherDatas = [
    {
      name: "코로나바이러스감염증-19",
      code: "U07.1",
      content:
        "2019년 11월, 중국 후베이성 우한시에서 처음으로 발생하여 보고된 새로운 유형의 변종 코로나바이러스인 SARS-CoV-2에 의해 발병한 급성 호흡기 전염병이다.",
    },
    {
      name: "광견병",
      code: "A82",
      content:
        "광견병(狂犬病)은 사람을 포함한 포유류 동물의 뇌에 염증을 유발하는 바이러스성 질병이다. 랍도바이러스과에 속하는 바이러스 중 하나에 전염된 동물에게 발병하는 인수공통전염병이다. 극히 드물게 장기 이식으로 감염된 사례도 있다.",
    },
  ];

  const [userDisease, setUserDisease] = useState(null);
  const [otherDiseases, setOtherDiseases] = useState([]);

  useEffect(() => {
    if (userDatas.length === 0) {
      setUserDisease(defaultData);
    } else {
      setUserDisease(userDatas[0]);
    }

    if (otherDatas.length === 0) {
      setOtherDiseases([]);
    } else {
      setOtherDiseases(otherDatas);
    }
  }, []);

  const hoverEffect = {
    scale: 1.05,
  };
const goDetailWikiPageHandler = (disease) =>{
  navigate(`/detail/${disease.code}`)
}
  const renderDisease = (disease) => (
    <motion.button whileHover={hoverEffect} className={styles.diseaseContainer}
    onClick={() => goDetailWikiPageHandler(disease)}>
      <p className={styles.diseaseName}>
        {`${disease.name}: `}
        <span className={styles.diseaseCode}>{disease.code}</span>
        <HiDotsVertical className={styles.dots} />
      </p>
      <p className={styles.diseaseContent}>
        {disease.content.length > 100
          ? `${disease.content.slice(0, 100)}...`
          : disease.content}
      </p>
    </motion.button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.myDisease}>
        <IoPerson className={styles.myIcon} />나의 질병 {userDisease && renderDisease(userDisease)}</div>
      <div className={styles.otherDisease}>
        <FaUserGroup className={styles.otherIcon} />다른 질병
        {otherDiseases.map((disease, index) => (
          <div key={index}>{renderDisease(disease)}</div>
        ))}
      </div>
    </div>
  );
};

export default BlueWiki;
