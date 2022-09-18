import {simpsons} from "./data";
import SimpsonMember from "./SimpsonMember";

export default function Simpsons() {
    return (
        <div>
            {simpsons.map((member,index) =>(<SimpsonMember member={member} key={index}/>))}
        </div>
    )
}