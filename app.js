/**
 * 
 * <div id='parent'>
 * <div id='child'>
 * <h1></h1>
 * </div>
 * </div>
 */

const parent = React.createElement(
    'div', 
    {id:'parent'},
    [React.createElement(
        'div',
        {id:'child'}, 
        [React.createElement('h1',{},'Helo I am h1 tag'),React.createElement('h2',{},'I am h2 tag'),
    ]),
    React.createElement(
        'div',
        {id:'child'}, 
        [React.createElement('h1',{},'Helo I am h1 tag'),React.createElement('h2',{},'I am h2 tag'),
    ]),
]);

//JSX



// const heading = React.createElement('h1',{id:"heading"},'Hello World from React!');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);