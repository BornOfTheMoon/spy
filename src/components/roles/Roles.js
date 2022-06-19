import React from 'react';
import PropTypes from "prop-types";
import {Button, Group, Header, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import './Roles.css'

function Roles ({id, go, players, counter}) {

    console.log(players)
    function sub(e) {
        e.preventDefault();
        go(e)
    }

    // setRoles(roles)
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="home"/>}
            >
                Roles
            </PanelHeader>
            <Header className="name">{players[counter].label}</Header>
            <Button onClick={sub} data-to="secretRole" counter={counter} className="button">Show role</Button>
        </Panel>
    );
}

Roles.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    // setTimer: PropTypes.func.isRequired,
};

export default Roles;