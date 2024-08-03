import * as types from './types';

const INITIAL_STATE = {
  events: [],
  loading: false,
  error: null,
};

function EventReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload.data.events,
      };
    case types.GET_EVENTS_FAILED:
      return {
        ...state,
        loading: false,
        events: [],
      };
      case types.UPDATE_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case types.ADD_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case types.DELETE_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.DELETE_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      default:
      return state;
  }
}
export default EventReducer;