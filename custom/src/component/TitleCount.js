import { useEffect } from "react";

function TitleCount(count) {
    useEffect(() => {
        if(count >= 1){
            document.title = `Message (${count})`
        }
        else {
                document.title = `Message`
        }

    }, [count] )
}

export default TitleCount;