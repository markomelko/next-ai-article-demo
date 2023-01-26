import ArticleBodyItem from './article-body-item';

function ArticleBodyItems({bodyItems}) {

    console.log('bodyItems', bodyItems);

    const {content} = bodyItems;

    console.log('bodyItems', content);
    console.log('item[[[]]]', content[0].content[0].value);

    return (content.map(item => <ArticleBodyItem key={item.content[0].value} content={item.content[0].value}/>))
    // return <div>tet</div>
}

export default ArticleBodyItems;