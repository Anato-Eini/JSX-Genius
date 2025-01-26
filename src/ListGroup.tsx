import { useEffect, useState } from "react";

interface ListGroupProps {
    items: string[],
    title: string;
};

export default function ListGroup(props: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        document.title = props.items[selectedIndex];
    }, [selectedIndex, props.items]);

    return (
        <>
            <h1>List {props.title}</h1>
            {props.items.length !== 0 ? (
                <ul className="list-group">
                    {props.items.map((item, index) => {
                        return (
                            <li
                                onClick={() => {
                                    setSelectedIndex(index)
                                    document.title = item
                                }}
                                key={item}
                                className={`list-group-item ${selectedIndex === index && "active"}`}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <h1>No items</h1>
            )}
        </>
    );
}
