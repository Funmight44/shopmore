import { useEffect } from "react";

const UseTitle = ({title}) => {
    useEffect(()=>{
        document.title = `${title} - Happy shopping! `
    }, [title])
    return ( 
        null
     );
}
 
export default UseTitle;