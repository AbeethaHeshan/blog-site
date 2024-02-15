import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogPosts : []
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {

        addNewBlog(state, action) {
            state.blogPosts = [...state.blogPosts, action.payload];
        },

        updateBlog(state,action){
            const updatedPost = action.payload;
            const index = state.blogPosts.findIndex(post => post.id === updatedPost.id);
            if (index !== -1) {
                state.blogPosts[index] = updatedPost;
            }
        },
        removeBlog(state, action) {
            const removeId = action.payload;
            const indexToRemove = state.blogPosts.findIndex(post => post.id === removeId);
            if (indexToRemove !== -1) {
                state.blogPosts.splice(indexToRemove, 1);
            }
        }
    }
});

export const { addNewBlog, updateBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;