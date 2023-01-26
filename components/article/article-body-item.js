import classes from './article-body-item.module.css';

function ArticleBodyItem({content}) {
    console.log('ArticleBodyItem', content);
    return <div className={classes.bodyTextItem}>{content}</div>
}

export default ArticleBodyItem;