import { useContext } from "react"
import StyleContext from "../contexts/StyleContext"

export default function Aside() {
    const {aside, innerAside} = useContext(StyleContext)

    return (
        <div style={aside}>
            <h4>Sidebar thingy</h4>
            <div style={innerAside}>
                <p>This is inside</p>
            </div>
        </div>
    )
}