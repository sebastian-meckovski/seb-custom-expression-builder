import React, { useEffect } from 'react';

const data = { op: 0, value: { values: [{ op: 0, value: { values: [{ op: 2, value: { values: [{ op: 3, value: { values: [] } }] } }] } }, { op: 3, value: { values: [{ op: 3, value: { values: [] } }] } }] } };

function GPSolution() {
    const [mainState, setMainState] = React.useState(data);
    const [apiState, setApiState] = React.useState({ 'op': 'initial wont display', values: [] });

    useEffect(() => {
        if (mainState && mainState.value) {
            setApiState((prevState) => ({
                ...prevState,
                values: mainState.value.values
            }))
            apiState.values = mainState.value.values
        }
    }, [mainState])

    const handleChange = (path, value) => {
        setMainState((prevState) => {
            return getNestedUpdate(prevState, [...path], value);
        });
    };

    const getNestedUpdate = (state, path, value) => {
        if (path.length === 0) {
            return {
                ...state,
                op: value
            };
        }
        const level = path.shift(0);

        return {
            ...state,
            value: {
                ...state.value,
                values: state.value.values.map((item, itemIndex) =>
                    itemIndex === level ? getNestedUpdate(item, path, value) : item
                )
            }
        };
    };

    const handleAddItem = (path, value) => {
        setMainState((prevState) => {
            return AddItem(prevState, [...path], value);
        });
    };

    const AddItem = (state, path, value) => {
        if (path.length === 0) {
            if (state.value && state.value.values) {
                return {
                    ...state,
                    value: {
                        values: [...state.value.values, value]
                    }
                };
            }
            else {
                const arr = [];
                return {
                    ...state,
                    value: {
                        values: [...arr, value]
                    }
                };
            }

        }
        const level = path.shift(0);

        return {
            ...state,
            value: {
                ...state.value,
                values: state.value.values.map((item, itemIndex) =>
                    itemIndex === level ? AddItem(item, path, value) : item
                )
            }
        };
    };

    const AddMainItem = () => {
        setMainState((prevState) => ({
            ...prevState,
            value: {
                values: [...prevState.value.values, { type: 'group', op: 'new group' }]
            }
        }))
    }

    return (
        <div>
            {mainState.value.values.map((x, i) => {
                return (
                    <RecursiveGroup
                        key={i}
                        value={x}
                        path={[i]}
                        handleChange={handleChange}
                        handleAddItem={handleAddItem}
                    ></RecursiveGroup>
                );
            })}
            <button onClick={AddMainItem}>Add</button>
            <hr />
            <div>
                <pre>{JSON.stringify(apiState, null, 2)}</pre>
            </div>
        </div>
    );
}

function RecursiveGroup(props) {
    return (
        <div
            style={{
                padding: 5,
                margin: 10,
                paddingLeft: 20,
                border: "1px solid black"
            }}
            key={props.path}
        >
            <div>
                {" "}
                OP -
                <input
                    type={"text"}
                    value={props.value.op}
                    onChange={(e) => props.handleChange(props.path, e.target.value)}
                ></input>
            </div>
            {props.value.value && props.value.value.values
                ? props.value.value.values.map((x, i) => (

                    x.type == 'group' ? <RecursiveGroup
                        key={i}
                        value={x}
                        path={[...props.path, i]}
                        handleChange={props.handleChange}
                        handleAddItem={props.handleAddItem}
                    ></RecursiveGroup> : <div key={i} style={{
                        padding: 5,
                        margin: 10,
                        paddingLeft: 20,
                        border: "1px solid black"
                    }}>I am rule</div>

                ))
                : null}
            <button onClick={(e) => props.handleAddItem(props.path, {
                type: 'group',
                op: 'group'
            })}>Add Group</button>
            <button onClick={(e) => props.handleAddItem(props.path, {
                type: 'Rule',
                op: 'Rule'
            })}>Add Rule</button>
        </div>
    );
}


export default GPSolution;