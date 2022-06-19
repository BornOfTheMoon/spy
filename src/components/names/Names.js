import {Button, FormItem, FormLayout, Input, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Names.css"

function Names ({id, go, count, setPlayers, categories}) {
    let cat = Math.floor(Math.random() * (categories.length));
    let place = categories[cat].label
    console.log(place)
    let items = [];
    for (let i = 0; i < count; i++) {
        let itemId = "name" + i
        items[i] = (
            <FormItem top="Enter name" id="nameItem">
                <Input id={itemId} class="name" type="text" required="required"/>
            </FormItem>
        );
    };
    function sub(e) {
        e.preventDefault();
        let names = [];
        for (let i = 0; i < count; i++) {
            let itemId = "name" + i
            names[i] = e.target.elements[itemId].value
        };
        console.log(names)
        let countSpies = Math.floor(names.length / 4);
        let roles = []
        for (let i = 0; i < names.length; i++) {
            roles[i] = place
        }
        console.log(roles)
        for (let i = 0; i < countSpies; i++) {
            let spy = Math.floor(Math.random() * (names.length));
            if (roles[spy] === "spy") {
                i--;
            } else {
                roles[spy] = "spy";
            }
        }
        console.log(roles)
        let players = []
        for (let i = 0; i < names.length; i++) {
            players[i] = {label: names[i], value: roles[i]}
        }
        console.log(players)
        setPlayers(players)
        go(e);
    }
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="home"/>}
            >
                Name
            </PanelHeader>
            <FormLayout id="namesForm" onSubmit={sub} data-to="role">
                {items}
                <Button type="submit" className="submitButton">
                    Submit
                </Button>
            </FormLayout>
        </Panel>
    );
}

Names.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    setPlayers: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
};

export default Names;