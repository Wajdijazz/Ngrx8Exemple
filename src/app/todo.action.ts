import { createAction, props } from '@ngrx/store';
import ToDo from './todo.model';

/* 
    --The createAction function returns a function which when called returns Action object
    --BeginAction and SuccssAction become relevant when we start adding effects
    -- The first parameter is string which is type of action and used to identify the action dispatched in reducer
    --The second optional parameter is function which is generic and so any object can be defined
*/

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<ToDo>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Success Get ToDo',
  props<{ payload: ToDo[] }>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: ToDo }>()
);

export const SuccessCreateToDoAction = createAction(
  '[ToDo] - Success Create ToDo',
  props<{ payload: ToDo }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());