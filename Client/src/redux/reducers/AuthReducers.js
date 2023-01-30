import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    RegisterUser: '',
    LogIn: '',
    VerifyOtp: ''
}

export const RegisterUserAsync = createAsyncThunk(
    'RegisterUser',
    async () => {
        try {
            const res = await fetch('https://multiflex.netlify.app/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

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

export const LogInAsync = createAsyncThunk(
    'LogIn',
    async () => {
        try {
            const res = await fetch('https://multiflex.netlify.app/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                }),
            })
            const result = await res.json()
            console.log(result);
            return result;
        } catch (error) {
            console.log(error)
        }
    }
)

export const VerifyOtpAsync = createAsyncThunk(
    'VerifyOtp',
    async () => {
        try {
            const res = await fetch('https://multiflex.netlify.app/user/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                })
            })
            const result = await res.json()
            console.log(result);
            return result;
        } catch (error) {
            console.log(error)
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
        builder.addCase(LogInAsync.fulfilled, (state, action) => {
            state.LogIn = action.payload
        })
        builder.addCase(VerifyOtpAsync.fulfilled, (state, action) => {
            state.VerifyOtp = action.payload
        })
    }

})

export default AuthSlice.reducer