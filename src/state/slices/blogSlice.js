import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogPosts : [{
        id:'',
        title:'',
        author:'',
        date:'',
        content:''
    }]
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {

        addNewBlog(state, action) {
            state.blogPosts.push(action.payload);
        },

        updateBlog(state,action){
            const updatedPost = action.payload;
            const index = state.blogPosts.findIndex(post => post.id === updatedPost.id);
            if (index !== -1) {
                state.blogPosts[index] = updatedPost;
            }
        },

        removeBlog(state, action) {
            state.blogPosts = state.blogPosts.filter(post => post.id !== action.payload);
        }
    }
});

export const { addNewBlog, updateBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;