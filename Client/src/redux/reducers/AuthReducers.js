import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    RegisterUser: '',
    AllUsers: '',
    
}

export const RegisterUserAsync = createAsyncThunk(
    'RegisterUser',
    async ({ name, email, password, confirmPassword, phone, deviceID }) => {
        try {
            const res = await fetch('https://multiflex.netlify.app/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confirmPassword,
                    phone,
                    deviceID

                }),
            })
            const result = await res.json();
            console.log(result);
            return result;
        } catch (error) {
            console.log(error)
        }
    }
)


export const AllUsersAsync = createAsyncThunk(
    'AllUsers',
    async () => {
        try {
            const res = await fetch('https://multiflex.netlify.app/user/allUsers');
            const result = await res.json();
            return result
        } catch (error) {
            console.log(error);
        }
    }
)

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(RegisterUserAsync.fulfilled, (state, action) => {
            state.RegisterUser = action.payload
        })
        builder.addCase(AllUsersAsync.fulfilled, (state, action) => {
            state.AllUsers = action.payload
        })
    }

})

export default AuthSlice.reducer