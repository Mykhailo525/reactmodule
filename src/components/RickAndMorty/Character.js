export default function Character(props) {
    let {member}=props
    return (
        <div>
            <h2>{member.id} {member.name} {member.status} </h2>
            <h2>{member.species} {member.gender}</h2>
            <img src={member.image} />
        </div>
    )
}