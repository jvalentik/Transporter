import * as calendar from '../actions/calendar.actions';

export interface State {
  title: string;
  subTitle: string;
  viewDate: Date;
  viewType: string;
  views: Array<string>
}

const initialState: State = {
    title: 'calendarHeader.day',
    subTitle: '',
    viewDate: new Date(),
    viewType: 'day',
    views: ['day', 'week', 'month']
};

export function reducer(state = initialState, action: calendar.Actions): State {
  switch (action.type) {
    case calendar.CHANGE_VIEW_DATE_COMPLETED:
      const { subTitle, viewDate } = action.payload;
      return Object.assign({}, state, {
        subTitle,
        viewDate,
      });
    case calendar.CHANGE_CALENDAR_VIEW_COMPLETED:
      const { title, viewType } = action.payload;
      return Object.assign({}, state, {
        title,
        viewType,
        subTitle: action.payload.subTitle,
    });
    default:
      return state;
  }
}

export const getTitle = (state: State) => state.title;
export const getSubtitle = (state: State) => state.subTitle;
export const getViewType = (state: State) => state.viewType;
export const getViewDate = (state: State) => state.viewDate;
export const getAllViews = (state: State) => state.views;

