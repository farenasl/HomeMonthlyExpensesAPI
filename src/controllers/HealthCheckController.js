exports.healthcheck = function(req, res) {
    res.status(200).json({ message: 'Service is UP and runnig :-P' });
};