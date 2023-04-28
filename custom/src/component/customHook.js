import React, {useState} from "react";
import TitleCount from "./TitleCount";

function CustomHooks(){
    const [count, setCount] = useState(0);

    TitleCount(count)

    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default CustomHooks;