import { useCallback,useState } from "react"


export default function ToggleBackground(Component) {
    return (props) => {
        const [activeUser, setActiveUser] = useState(null);
        const ToggleBackground = useCallback((user)=>{
            setActiveUser(prev => user)
            },[])
        
        return <Component{...props} {...{activeUser,ToggleBackground}} />
    }
}