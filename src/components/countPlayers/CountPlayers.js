import React from 'react';
import PropTypes from "prop-types";
import {
    Button,
    Div,
    FormItem,
    FormLayout,
    Group,
    Header,
    Input,
    Panel,
    PanelHeader,
    PanelHeaderBack
} from "@vkontakte/vkui";
import './CountPlayers.css'


function CountPlayers ({id, go, setCount}) {
    const sub = e => {
        e.preventDefault();
        setCount(e.target.elements.count.value);
        go(e);
    };
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="home"/>}
            >
                Names
            </PanelHeader>
            <FormLayout onSubmit={sub} data-to="playersNames">
                <FormItem top="Enter count of players" id="countItem">
                    <Input id="count" type="text" defaultValue="4" />
                </FormItem>
                <Button type="submit" className="submitButton">
                    Submit
                </Button>
            </FormLayout>
            {/*<Div>*/}
            {/*    <Button stretched size="l" mode="secondary" data-to='playersNames'>*/}
            {/*        Start game*/}
            {/*    </Button>*/}
            {/*</Div>*/}
        </Panel>
    );
}

CountPlayers.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    setCount: PropTypes.func.isRequired,
};

export default CountPlayers;