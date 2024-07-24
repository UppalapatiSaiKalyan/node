import {DataTypes, Model, Optional} from "sequelize";
import sequelizeconnection from "../config";

interface LanguageAttributes {
    id: number;
    languagename: string;
    languagecode: string;
}

export interface LanguageInput extends Optional<LanguageAttributes, 'id'> {}
export interface LanguageOutput extends Required<LanguageAttributes> {}
class crud extends Model<LanguageAttributes, LanguageInput> implements LanguageAttributes {
    public id!: number;
    public languagename!: string;
    public languagecode!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

crud.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        languagename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        languagecode: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    });
    
export default crud;