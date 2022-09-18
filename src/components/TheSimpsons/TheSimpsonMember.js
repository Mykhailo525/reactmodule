import './Simpsons.css'

export default function TheSimpsonMember(props) {
    let {name,pic}=props
    return (
        <div className={'card'}>
            <h2>{name}</h2>
            <img src={pic} />
        </div>
    )
}