export default function SimpsonMember(props) {
    let{member}=props
    return (
        <div>
           <h2>{member.name} {member.surname} {member.age}</h2>
            <p>{member.info}</p>
            <img src={member.photo}/>
        </div>
    )
}