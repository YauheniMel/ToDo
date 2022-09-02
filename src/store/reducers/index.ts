import { ToDoReducerType } from '../../types';
import {
  ADD_TODO,
  DELETE_TODO,
  SET_ERROR,
  SET_IS_COMPLETED_TODO,
  SET_IS_FAVOURITE_TODO,
  SET_IS_LOADING,
  SET_IS_NOT_COMPLETED_TODO,
  SET_IS_NOT_FAVOURITE_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from '../actions/constants';

const initialState: ToDoReducerType = {
  todos: [],
  isLoading: false,
  error: null,
};

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case SET_IS_FAVOURITE_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo = {
            ...todo,
            isFavourite: true,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    }
    case SET_IS_NOT_FAVOURITE_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo = {
            ...todo,
            isFavourite: false,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos,
      };
    }
    case SET_IS_COMPLETED_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo = {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case UPDATE_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos,
      };
    }
    case DELETE_TODO: {
      const todos = state.todos.filter((todo) => todo.id !== action.payload);

      return {
        ...state,
        todos,
      };
    }
    case SET_IS_NOT_COMPLETED_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo = {
            ...todo,
            isCompleted: false,
          };
        }
        return todo;
      });

      return {
        ...state,
        todos,
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
