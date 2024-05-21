import Header from "../components/MyPageComponents/Header";
import MemberInfo from "../components/MyPageComponents/MemberInfo";
import CharacterInfo from "../components/MyPageComponents/CharacterInfo";
const MyPage = () =>{
  return(
    <>
    <div>
      <Header/>
      <CharacterInfo />
      <MemberInfo />
    </div>
    </>
  )
}

export default MyPage;