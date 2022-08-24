import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import postReducer from "../../features/posts/postsSlice"

export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
