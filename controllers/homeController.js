import User from '../models/User.js';

// POST: Create a new user
export const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(400).send(error);
    }
};

// GET: Fetch all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

// PUT: Update a user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// DELETE: Delete a user
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};
