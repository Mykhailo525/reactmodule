import TheSimpsonMember from "./TheSimpsonMember";

export default function TheSimpsons() {
    return (
        <div>
            {<TheSimpsonMember name={'Bart'} pic={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>}
            {<TheSimpsonMember name={'Homer'} pic={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png'}/>}
            {<TheSimpsonMember name={'Marge'} pic={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>}
            {<TheSimpsonMember name={'Meggie'} pic={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>}
            {<TheSimpsonMember name={'Liza'} pic={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>}
        </div>
    )
}