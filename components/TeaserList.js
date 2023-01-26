import React from "react";

import TeaserItem from "./TeaserItem";

function TeaserList({items}) {
    return (items.map(item => <TeaserItem key={item.sys.id} item={item}/>))
}

export default TeaserList;