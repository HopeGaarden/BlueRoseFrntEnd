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
    name: '병명',
    code: '코드',
    content: '아직 등록된 정보가 없어요. 정보를 입력해주세요!',
  };

  const userDatas = [
    {
      name: "선천성 및 발달성 근무력증",
      code: "G70.2",
      content:
        "영아기 및 소아기에 증상이 발현하면서 근육쇠약 혹은 근력 저하를 주 증상으로 함 복시 등의 안구 증상이 나타나거나 전신적인 근육 쇠약과 함께 아세틸콜린 수용체 항체 검사에서 양성 소견이 나타나는 경우, 단 아세틸콜린 수용체 항체검사가 음성인 경우 근전도검사",
    },
  ];

  const otherDatas = [
    {
      name: "폐포단백질증",
      code: "J84.0",
      content:
        "o 흉부 CT 검사의 특이적 소견o 기관지내시경을 통한 기관지폐포세척액의 특징적 육안 소견 또는 폐조직검사로 확인",
    },
    {
      name: "색소망막염",
      code: "H35.51",
      content:
        "망막전위도 검사 등을 통해 photoreceptor기능의 손상과 시야검사를 통해 시야협착 확인",
    },
    {
      name: "척수공동증 및 연수공동증",
      code: "G95.0",
      content:
        "o 영상검사에서 척수 및 뇌간의 공동이 확인된 환자로, 상기 공동을 유발할 수 있는 외상 및 손상의 병력이 없는 경우o 두통, 배부통증, 팔저림, 사지 등의 마비 등 그 외 임상의가 판단하는 증상o Asymptomatic hydromyelia 는 제외",
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
  navigate(`/detail/${disease.name}/${disease.code}/${disease.content}`)
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
        {disease.content.length > 50
          ? `${disease.content.slice(0, 50)}...`
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
