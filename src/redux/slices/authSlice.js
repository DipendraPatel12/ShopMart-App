import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Success from "../../screens/Success/Success";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, { rejectWithValue }) => {
        try {
            console.log("api called", userData)
            const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            console.log("data", data)
            if (!response.ok) {
                return rejectWithValue(data?.message || "Login failed");
            }
            await AsyncStorage.setItem("token", data?.access_token);
            return data;
        } catch (error) {
            console.log("error while login user : ",error)
            return rejectWithValue(error.message);
        }
    }
);

export const RegisterUser = createAsyncThunk("auth/RegisterUser", async (userData, { rejectWithValue }) => {
    try {
        console.log("Api Called For Register User", userData)
        const response = await fetch("https://api.escuelajs.co/api/v1/users/", { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) })

        const data = await response.json()
        console.log("REgister USer rES", data)
        if (!response.ok) {
            return rejectWithValue(data?.message || "Registration failed");
        }
    } catch (error) {
        console.error("Error while Registering User", error)
        return rejectWithValue(error.message)
    }
})

export const getUserProfile = createAsyncThunk("auth/getUserProfile", async (userData, { rejectWithValue, getState }) => {
    try {
        console.log("Api Called For Register User", userData)

        const token = await AsyncStorage.getItem("token")
        console.log("tooken", token)
        const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(userData) })

        const data = await response.json()
        console.log("get User profile res", data)

        if (!response.ok) {
            return rejectWithValue(data?.message || "Registration failed");
        }
        return data;
    } catch (error) {
        console.error("Error while Fetching User Profile", error)
        return rejectWithValue(error.message)
    }
})


const removeTokenFromAsync = async () => {
    await AsyncStorage.removeItem('token')

}
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        token: null,
        loading: false,
        error: null,
        success: false
    },
    reducers: {

        logout: (state) => {
            state.user = null;
            state.token = null;
            removeTokenFromAsync()

        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false

            }).addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.access_token;

            }).addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            }).addCase(RegisterUser.pending, (state) => {
                state.loading = true;
                state.success = false
                state.error = null

            }).addCase(RegisterUser.fulfilled, (state) => {
                state.loading = false;
                state.success = true

            }).addCase(RegisterUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
                state.success = false


            }).addCase(getUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;

            }).addCase(getUserProfile.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload

            }).addCase(getUserProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;