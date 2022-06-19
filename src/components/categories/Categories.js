import React from 'react';
import PropTypes from "prop-types";
import {
    Button,
    ChipsInput,
    FormItem, FormLayout,
    Group,
    Header,
    IconButton,
    Panel,
    PanelHeader,
    PanelHeaderBack
} from "@vkontakte/vkui";
import './Categories.css'
import {Icon16Clear} from "@vkontakte/icons";

function Categories ({id, go, categories, setCategories}) {
    console.log(categories)
    let cat = categories;
    const confirm = (e) => {
        setCategories(cat);
        go(e);
    };
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="home" count={0}/>}
            >
                Categories
            </PanelHeader>
            <FormLayout className="categories" data-to="home" count={0} onSubmit={confirm}>
                <FormItem>
                    <ChipsInput onChange={(e)=> {
                        cat = e
                        console.log(cat)
                    }}
                        value={categories}
                        after={
                            <IconButton
                                hoverMode="opacity"
                                aria-label="Очистить поле"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCategories([]);
                                }}
                            >
                                <Icon16Clear />
                            </IconButton>
                        }/>
                </FormItem>
                <Button type="submit">Confirm</Button>
            </FormLayout>
            {/*<Group className="categories">*/}
            {/*    <Header mode="primary">Церковь</Header>*/}
            {/*    <Header mode="primary"> Бар </Header>*/}
            {/*    <Header mode="primary"> Цирк </Header>*/}
            {/*    <Header mode="primary"> Больница</Header>*/}
            {/*    <Header mode="primary"> Вездекод</Header>*/}
            {/*</Group>*/}
        </Panel>
    );
}

Categories.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
};

export default Categories;