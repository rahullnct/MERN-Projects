import { useParams } from "react-router-dom";

function Doctor(){
    let {id}=useParams();
    return(
        <div>
            <h1>{id}</h1>
        </div>
    )
};
export default Doctor;