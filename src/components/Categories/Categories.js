import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Categories extends Component {
    static propTypes = {
        categories: PropTypes.array
    };

    state = {
        categories: [
            {
                id: 1,
                name: 'Breakfast',
                img: 'https://i.pinimg.com/originals/7b/0e/12/7b0e1275049bd2eb2fe8ccb8ddda0574.jpg'
            },
            {
                id: 2,
                name: 'Lunch',
                img: 'https://i.pinimg.com/564x/d3/00/f8/d300f8d83d362723d59ab39bd61a8326.jpg'
            },
            {
                id: 3,
                name: 'Dinner',
                img: 'https://i.pinimg.com/564x/a0/9e/48/a09e48d71e60324d89d337e0ecd53b29.jpg'
            },
            {
                id: 4,
                name: 'Dessert',
                img: 'https://i.pinimg.com/564x/84/30/84/84308404844cb703a6bde3fcb1417805.jpg'
            },
            {
                id: 5,
                name: 'Holiday',
                img: 'https://i.pinimg.com/originals/01/59/c4/0159c433a385d32dcbe328a60432a140.jpg'
            },
            {
                id: 6,
                name: 'Party',
                img: 'https://i.pinimg.com/originals/3d/be/a3/3dbea37d6ada74f43ba5e28229dd3c87.jpg'
            },
            {
                id: 7,
                name: 'Date Night',
                img: 'https://i.pinimg.com/originals/51/c4/9c/51c49cb80e9109dd5c540ae6f488a6b9.jpg'
            },
            {
                id: 8,
                name: 'Cocktails',
                img: 'https://i.pinimg.com/originals/2c/d7/fa/2cd7fabb9b207aa7cb20daffabfd745d.jpg'
            }
        ]
    };

    renderCategories() {
        const styles = require('./Categories.scss');

        return this.state.categories.map(category => {
            return (
                <div key={category.id} className="col-xs-6 col-sm-3">
                    <Link to={`live?category=${category.name.toLowerCase()}`}>
                        <div className={styles.categoryBlock} style={{backgroundImage: `url(${category.img})`}}>
                            <div className={styles.categoryName}>{category.name}</div>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render() {
        const styles = require('./Categories.scss');

        return (
            <div className={styles.categories}>
                <div className="row bottom-space">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}
