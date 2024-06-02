const { sugar_goodowns, wheat_goodowns, grains_goodowns, dry_fruits_goodowns } = require('../models/cargo');

const getAllContainer = async (req, res) => {
    try {
        const { coll } = req.params;

        let Container;
        switch (coll) {
            case 'wheat_goodowns':
                Container = wheat_goodowns;
                break;
            case 'sugar_goodowns':
                Container = sugar_goodowns;
                break;
            case 'grains_goodowns':
                Container = grains_goodowns;
                break;
            case 'dry_fruits_goodowns':
                Container = dry_fruits_goodowns;
                break;
            default:
                throw new Error('Invalid whichGoodDown value');
        }
        const containers = await Container.find({});
        if (containers)
            res.status(200).send(containers);
        else
            res.status(400).send("Goodown is Empty");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getContainerByID = async (req, res) => {
    try {
        const { coll, Id } = req.params;

        let Container;
        switch (coll) {
            case 'wheat_goodowns':
                Container = wheat_goodowns;
                break;
            case 'ssugar_goodowns':
                Container = sugar_goodowns;
                break;
            case 'grains_goodowns':
                Container = grains_goodowns;
                break;
            case 'dry_fruits_goodowns':
                Container = dry_fruits_goodowns;
                break;
            default:
                throw new Error('Invalid whichGoodDown value');
        }
        const query = { containerId: Id };
        const container = await Container.findOne(query);
        if (container)
            res.status(200).send(container);
        else
            res.status(400).send("Container not found");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const addContainer = async (req, res) => {
    try {
        const { coll } = req.params;
        const { containerId, from, importedBy, goods, date } = req.body;

        let Container;
        switch (coll) {
            case 'wheat_goodowns':
                Container = wheat_goodowns;
                break;
            case 'sugar_goodowns':
                Container = sugar_goodowns;
                break;
            case 'grains_goodowns':
                Container = grains_goodowns;
                break;
            case 'dry_fruits_goodowns':
                Container = dry_fruits_goodowns;
                break;
            default:
                throw new Error('Invalid goodown value');
        }

        const newContainer = new Container({
            containerId,
            from,
            importedBy,
            goods,
            date
        });

        const savedContainer = await newContainer.save();
        res.status(200).send("saved");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateContainerByID = async (req, res) => {
    try {
        const { coll,Id} = req.params;

        let Container;
        switch (coll) {
            case 'wheat_goodowns':
                Container = wheat_goodowns;
                break;
            case 'sugar_goodowns':
                Container = sugar_goodowns;
                break;
            case 'grains_goodowns':
                Container = grains_goodowns;
                break;
            case 'dry_fruits_goodowns':
                Container = dry_fruits_goodowns;
                break;
            default:
                throw new Error('Invalid whichGoodDown value');
        }
        const query = { containerId: Id };
        const container = await Container.findOneAndUpdate(query,req.body, { new: true });
        if (container)
            res.status(200).send("Updated");
        else
            res.status(400).send("Container not found");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteContainerByID = async (req, res) => {
    try {
        const { coll, Id } = req.params;

        let Container;
        switch (coll) {
            case 'wheat_goodowns':
                Container = wheat_goodowns;
                break;
            case 'sugar_goodowns':
                Container = sugar_goodowns;
                break;
            case 'grains_goodowns':
                Container = grains_goodowns;
                break;
            case 'dry_fruits_goodowns':
                Container = dry_fruits_goodowns;
                break;
            default:
                return res.status(400).send('Invalid whichGoodDown value');
        }
        const query = { containerId: Id };
        const container = await Container.findOneAndDelete(query);

        if (container) {
            return res.status(200).send(`Container with ID ${Id} deleted successfully`);
        } else {
            return res.status(404).send("Container not found");
        }
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

module.exports = {
    getAllContainer,
    getContainerByID,
    addContainer,
    updateContainerByID,
    deleteContainerByID
}
