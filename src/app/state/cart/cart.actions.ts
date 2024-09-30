import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../core/interfaces/ICourse';
const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ course: ICourse }>(),
);
