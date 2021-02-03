import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/action/category.action';
import '../components.css';

const MenuHeader = () => {
    const dispatch = useDispatch();
    const { category } = useSelector(state => state, shallowEqual);

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    const categoriesRender = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li key={cat?._id}>
                    {
                        cat?.parentId ?
                            <a href={`/products/${cat?.slug}`}>
                                {cat?.name}
                            </a>
                            : <span>
                                {cat?.name}
                                <img className='rotate-image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVQ4T82STQ5AMBBGn3AI5+EubBzABeyx8nMXB+IEdjJJRwTVJhZ02fS9fPN1Al6e4CXPPwQRMAAlMHuOFAMVkOkIBZADqYdE4Aloge7YgUoSYLEkUbgBenlzLvFJcoHvBHInksyMo0kUrk1fe0DbNx4loZn5AtsSqF0lIhB4vOvFtUgiWW2wK4HXSrgSOCXfCzYpORoU1SJ0uwAAAABJRU5ErkJggg==' alt='arrow-down' />
                                {/* <i  className="pl-2 fas fa-angle-down angle-down" /> */}
                            </span>
                    }
                    {cat?.children.length > 0 && <ul>{categoriesRender(cat?.children)}</ul>}
                </li>

            )
        }
        return myCategories;
    }
    // console.log(category?.categories);

    return (
        <div className='menu-header'>
            <ul>
                {
                    category?.categories?.length > 0 &&
                    categoriesRender(category?.categories)
                }
            </ul>
        </div>
    );
};

export default MenuHeader;