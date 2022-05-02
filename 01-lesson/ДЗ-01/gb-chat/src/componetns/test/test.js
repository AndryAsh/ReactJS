import React from "react";
/* import "./test.css"; */
import styles from "./test.module.css";

export const ComponentWithoutJSX = ({ props1, props2 }) => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { onClick: () => props2("click from jsx") },
            `Hello React! (ComponentWidchoutJSX) - ${props1}`
        )
    );
}

function FilmList({ films, title }) {
    return (
        <div style={{ border: "1px solid red" }}>
            <h1>{title}</h1>
            <div>{films.map(film => (
                <div>
                    <h3>{film.title}</h3>
                    <h3>{film.year}</h3>
                    <hr />
                </div>
            )
            )}
            </div>
        </div>
    );
}

function Info({ props1, props2, props3, props4, props5 }) {
    return (
        <div className={styles.wrapper}>
            <h1>Test function</h1>
            <h1>props1: {props1}</h1>
            <h1>props2: {props2}</h1>
            <h1>props3: {JSON.stringify(props3)}</h1>
            <h1>props5: {props5}</h1>
            <button onClick={() => props4('Hello from Test!')}>props4</button>
        </div>
    );
}

export function Test({ /* props1, props2, props3, props4, props5, */ films, test, ...rest }) {
    /* console.log(props); */
    const isVisible = true;
    return (
        <div>
            <h1>Test function</h1>
            <h1>Test Visible</h1>
            {isVisible && <div>isVisible</div>}
            <Info rest={rest} />
            {/* <h1>Test function</h1>
            <h1>props1: {props1}</h1>
            <h1>props2: {props2}</h1>
            <h1>props3: {JSON.stringify(props3)}</h1>
            <h1>props5: {props5}</h1>
            <button onClick={() => props4('Hello from Test!')}>props4</button> */}
            <FilmList films={films} title="function films" />
            {/* <div>
                <h1>films:</h1>
                <div>{films.map(film => (
                    <div>
                        <h3>{film.title}</h3>
                        <h3>{film.year}</h3>
                        <hr />
                    </div>
                )
                )}
                </div>
            </div> */}
            {test}
        </div>
    );
}

export class TestClass extends React.Component {
    render() {
        const { /* props1, props2, props3, props4, props5, */ films, ...rest } = this.props;
        return (
            <div>
                <h1>Test class</h1>
                <Info rest={rest} />
                {/* <h1>Test class</h1>
                <h1>props1: {props1}</h1>
                <h1>props2: {props2}</h1>
                <h1>props3: {JSON.stringify(props3)}</h1>
                <h1>props5: {props5}</h1>
                <button onClick={() => props4('Hello from Test!')}>props4</button> */}
                <FilmList films={films} title="class films" />
                {/* <div>
                    <h1>films:</h1>
                    <div>{films.map(film => (
                        <div>
                            <h3>{film.title}</h3>
                            <h3>{film.year}</h3>
                            <hr />
                        </div>
                    )
                    )}
                    </div>
                </div> */}
            </div>
        )
    }
}