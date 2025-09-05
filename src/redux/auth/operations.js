import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

const getToken = async () => {
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken();
  }
  return null;
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, name }, thunkAPI) => {
    try {
      const userCredentail = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredentail.user, {
        displayName: name,
      });
      const token = await getToken();

      return {
        uid: userCredentail.user.uid,
        email: userCredentail.user.email,
        name: userCredentail.user.displayName,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = await getToken();

      return {
        uid: userCredentail.user.uid,
        email: userCredentail.user.email,
        name: userCredentail.user.displayName,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      if (!auth.currentUser) {
        return thunkAPI.rejectWithValue("Жоден користувач не ввійшов");
      }

      const token = await getToken();
      return {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: auth.currentUser.displayName,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
