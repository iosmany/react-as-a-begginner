
import { Category } from '@/models/Catalog';
import * as types from './actionsType';
import { Dispatch } from '@reduxjs/toolkit';
import { categoryApi } from '@/api/CategoriesApi';

const loadCategoriesSuccess = (categories: Category[]) => {
    return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

const loadCategories = () => {

    return (dispatch: Dispatch) => {
        return categoryApi.getCategories().then((response) => {
            dispatch(loadCategoriesSuccess(response.data));
        }).catch(error => {
            throw (error);
        });
    };
}

export { loadCategories, loadCategoriesSuccess }