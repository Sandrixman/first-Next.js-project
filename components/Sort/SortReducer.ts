import { ProductModel } from '@/interfaces/product.interface';
import { SortEnum } from './Sort.props';

export type SortAction = { type: SortEnum.price } | { type: SortEnum.rating };

export interface SortReducerState {
    sort: SortEnum,
    products: ProductModel[]
}

export const SortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
    switch (action.type) {
        case SortEnum.rating:
            return {
                sort: SortEnum.rating,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
            case SortEnum.price:
                return {
                    sort: SortEnum.price,
                    products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
                };
        default: throw new Error('Неверный тип сортировки');
    }
};
