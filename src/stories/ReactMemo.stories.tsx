import React, {useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactMemo',
    //component: Button,
}

const NewMessagesCounter = React.memo((props: { count: number }) => {
    console.log("NewMessagesCounter rendering")

    return <div>{props.count}</div>
} )
const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users rendering")

    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
} )
export const Example1 = () => {
    console.log("Example1 rendering")

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<Array<string>>(["Svyat", "Sveta", "Katya", "Valera"])

    const onClickCountHandler = () => {
        setCount(count + 1)
    }
    const onClickAddUserHandler = () => {
        setUsers([...users, "New User"])
    }

    return (
        <>
            <button onClick={onClickCountHandler}>+</button>
            <button onClick={onClickAddUserHandler}>Add User</button>

            <NewMessagesCounter count={count}/>
            <Users users={users}/>
        </>
    )
}