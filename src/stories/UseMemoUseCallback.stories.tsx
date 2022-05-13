import React, {ChangeEvent, useCallback, useMemo, useState} from 'react';
import { Select } from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useMemo&useCallback',
}

export const DificultCounting = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    let resultX = 1
    let resultY = 1

    let resultYMemo = useMemo(() => {
        for (let index = 1; index<=x; index++){
            let fake = 0
            while (fake<10000000) {
                fake++
                let fakeValue = Math.random()
            }
            resultX = resultX * index
        }
        return resultX
    }, [x])

    for (let index = 1; index<=y; index++){
        resultY = resultY * index
    }

    return (
        <>
            <input value={x}
                   onChange={(e:ChangeEvent<HTMLInputElement>) => setX(+e.currentTarget.value)}
            />
            <input value={y}
                   onChange={(e:ChangeEvent<HTMLInputElement>) => setY(+e.currentTarget.value)}
            />
            <div>
                ResultX: {resultX}
            </div>
            <div>
                ResultY: {resultY}
            </div>
        </>
    )
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("NewMessagesCounter rendering")

    return <div>{props.count}</div>
}
const NewMessagesCounterWithReactMemo = React.memo(NewMessagesCounter)
const Users = (props: { users: Array<string> }) => {
    console.log("Users rendering")

    return <div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const UsersWithReactMemo = React.memo(Users)
export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo rendering")
    const [users, setUsers] = useState<Array<string>>(["Svyat", "Sveta", "Katya", "Valera"])
    const [count, setCount] = useState(0)

    const onClickCountHandler = () => {
        setCount(count + 1)
    }

    const onClickAddUserHandler = () => {
        setUsers([...users, "New User"])
    }
    const filteredUsersMemo = useMemo(() => {
        return users.filter(user => user.toLowerCase().indexOf("v"))
    }, [users])

    return (
        <>
            <button onClick={onClickCountHandler}>+</button>
            <button onClick={onClickAddUserHandler}>Add User</button>

            <NewMessagesCounterWithReactMemo count={count}/>
            <UsersWithReactMemo users={filteredUsersMemo} />
        </>
    )
}

const Books = (props: { books: Array<string>, addBook: () => void }) => {
    console.log("Users rendering")

    return <div>
        <button onClick={() => props.addBook()}>Add Book</button>
        {props.books.map((user, index) => <div key={index}>{user}</div>)}
    </div>
}
const BooksWithReactMemo = React.memo(Books)
export const LikeUseCallback = () => {
    console.log("LikeUseCallback rendering")
    const [books, setBooks] = useState<Array<string>>(["Wedzmin", "Harry Potter", "Clean code", "Learn JS"])
    const [count, setCount] = useState(0)

    const onClickCountHandler = () => {
        setCount(count + 1)
    }

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, "Some book"])
        }
    }, [books])
    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, "Some book"])
    }, [books])

    return (
        <>
            <button onClick={onClickCountHandler}>+</button>

            <NewMessagesCounterWithReactMemo count={count}/>
            <BooksWithReactMemo books={books} addBook={memoizedAddBook2} />
        </>
    )
}
