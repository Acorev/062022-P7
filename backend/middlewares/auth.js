// Imports
const jwt = require("jsonwebtoken")

/**
 * Vérification du token de l'itilisateur
 */
module.exports = (req, res, next) => {
    try {

        // Récupération le userId dans le header
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.KEY_TOKEN);
        const userId = decodedToken.userId;
        const role = decodedToken.role;

        // ajout userId et role a req
        req.auth = { userId, role };
        next();

    } catch {
        res.status(404).json({ message: 'Invalid Token' });
    }
};