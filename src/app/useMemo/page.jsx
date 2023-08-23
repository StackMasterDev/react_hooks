//pahalı bir işlemi tekrar yapmamak için bellekte tutmak
//ama bu memo kaybolabilir o yüzden proje memo olmadna yzılır performans için sonradan eklenir
"use client"
import React from 'react';
import Home from "@/app/page";

const users = [
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
];

const myUseMemo = () => {
    const [text, setText] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text);
    };

    const filteredUsers = React.useMemo(
        () =>
            users.filter((user) => {
                console.log('Filter function is running ...');
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        [search]
    );


    return (
        <div>
            <Home></Home>
            <h1>useMemo</h1>
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleSearch}>
                Search
            </button>

            <List list={filteredUsers} />
        </div>
    );
};

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
};



export default myUseMemo;







































