import TeaserItem from "./teaser/teaser-item";

function TeaserList({items}) {
    return (items.map(item => <TeaserItem key={item.sys.id} item={item}/>))
}

export default TeaserList;