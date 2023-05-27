const heading = React.createElement(
    "h1",
    {
        id: "title",
    },
    "heading1"
    );

    const heading2 = React.createElement(
        'h2',
        {
            id: 'title',
            className: "hisi"

        },
        'heading 2'
    );

    const container = React.createElement(
        'div',
        {
            id: "container",
        },
        [heading, heading2]
    );
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);