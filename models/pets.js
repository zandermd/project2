//sequelize set up for making the pet tables in the database

module.exports = function (sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
        petName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        petAge: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        petGender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        petImage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        petBio: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // isAdopted: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }
    },
        {
            timestamps: false
        });
    return Pets;
};
