import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Index = () => {
    return <h2>LFC</h2>
}

const List = () => {
    return <h2>good</h2>
}

const Example = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count+1)
            }}>
                click me
            </button>
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页
                        </Link>
                    </li>
                    <li>
                        <Link to="/list/">列表
                        </Link>
                    </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}

export default Example