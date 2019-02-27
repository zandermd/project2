//sequelize set up for making the people/contact tables in the database

module.exports = function (sequelize, DataTypes) {
    var People = sequelize.define("People", {
        
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        contacted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },    
        {
            timestamps: false,
        });
    return People;
};
