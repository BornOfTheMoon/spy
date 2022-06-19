import React from 'react';
import PropTypes from "prop-types";
import {Button, Group, Header, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import './SecretRole.css'

function SecretRoles ({id, go, players, counter, setCounter, setTimer}) {
    console.log(counter)
    let path = "role";
    let text = "Next player";
    let c = counter + 1;
    if (counter + 1 === players.length) {
        path = "timer";
        console.log(path)
        text = "start";
        c = 0;
    };
    function sub(e) {
        e.preventDefault();
        setCounter(c)
        go(e);
    }
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="home"/>}
            >
                Roles
            </PanelHeader>
            <Header className="role">{players[counter].value}</Header>
            <Button onClick={sub} data-to={path} counter={c} count={players.length} className="button">{text}</Button>
        </Panel>
    );
}

SecretRoles.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    setCounter: PropTypes.func.isRequired,
    setTimer: PropTypes.func.isRequired,
};

export default SecretRoles;