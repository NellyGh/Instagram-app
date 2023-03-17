import { useCallback,useState } from "react"


export default function ToggleComments(Component) {
    return (props) => {
        const [showComments, setShowComments] = useState(false)
        const toggleComments = useCallback(()=>{
                setShowComments(prev => !prev)
        },[])
       
        return <Component{...props} {...{showComments, toggleComments}} />
    }
}