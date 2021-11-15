import React from 'react'

const SecondPage = (props) => {
    const [items, setItems] = React.useState([]);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        fetch(`https://fakerapi.it/api/v1/images?_quantity=${props.val}&_type=kittens&_width=200`)
            .then(async res => {
                const tmp = await res.json();
                console.log(tmp);
                setItems(tmp.data);
            });
    }, []);
    return (
        <div className="second">
            <a href="/">Back</a>
            <h3 className="title">{items[current]?.title} &nbsp;&nbsp;&nbsp;&nbsp;{current + 1}</h3>
            <div className="img"><img src={items[current]?.url} width="200" height="200" /></div>
            <p style={{ width: "50%", fontSize: "20px", padding: '0 25%', minHeight: '120px' }}>
                {items[current]?.description}
            </p>
            <div className="nav">
                <button onClick={() => {
                    if (current - 1 < 0)
                        setCurrent(items.length - 1)
                    else
                        setCurrent(current - 1)

                }}>Previouse</button>
                <button
                    onClick={() => {
                        if (current + 1 >= items.length)
                            setCurrent(0)
                        else
                            setCurrent(current + 1)
                    }}
                >Next</button>
            </div>
        </div>
    )
}

export default SecondPage
