import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Не автентифіковано");

      const querySnapshot = await getDocs(
        collection(db, "users", user.uid, "contacts")
      );
      const contacts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Не автентифіковано");

      await deleteDoc(doc(db, "users", user.uid, "contacts", contactId));
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Не автентифіковано");

      const docRef = await addDoc(
        collection(db, "users", user.uid, "contacts"),
        newContact
      );
      return { id: docRef.id, ...newContact };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ contactId, newContactData }, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Не автентифіковано");

      const contactRef = doc(db, "users", user.uid, "contacts", contactId);
      await updateDoc(contactRef, newContactData);
      return { id: contactId, ...newContactData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
