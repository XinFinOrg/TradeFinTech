const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Enable CORS for all routes
app.use(cors());

mongoose
  .connect('mongodb://localhost:27017/tradefintech', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Could not connect to MongoDB...', error));

// Define the inquiry schema
const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  message: { type: String, required: true },
});

// Create the model for the inquiry
const InquiryModel = mongoose.model('Inquiry', inquirySchema);

// Handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    // Create a new Inquiry document
    const newInquiry = new InquiryModel({
      name,
      email,
      number,
      message,
    });

    // Save the new inquiry to the database
    const result = await newInquiry.save();
    console.log('Inquiry saved to the database:', result);
    res.status(200).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    console.error('Error saving inquiry to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
