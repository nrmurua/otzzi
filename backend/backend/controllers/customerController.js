const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    await customer.save();
    res.status(201).json({ success: true, message: 'Customer created successfully', data: customer });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create customer', error: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({ success: true, message: 'Customers retrieved successfully', data: customers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve customers', error: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.status(200).json({ success: true, message: 'Customer retrieved successfully', data: customer });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve customer', error: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.status(200).json({ success: true, message: 'Customer updated successfully', data: customer });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update customer', error: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.status(200).json({ success: true, message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete customer', error: error.message });
  }
};
