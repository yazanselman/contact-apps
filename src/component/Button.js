import { useTheme } from "../context/ThemeContext";

export default function Button() {


  const {theme,setTheme} = useTheme()


const changeTheme = () =>{
    if(theme === "dark"){
        setTheme("white")
    }else{
        setTheme("dark")
    }
}

  return (
    <>
      <button onClick={changeTheme}>Change Theme</button>
      <div>Aktif theme : {theme}</div>
    </>
  );
}
