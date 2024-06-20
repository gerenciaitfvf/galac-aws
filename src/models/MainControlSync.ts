import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/connection'; 

class MainControlSync extends Model {

	id : number | undefined;
	table_name : string | undefined ;
	date_updated : any;
  jinfo : any;
}

export const mcs = MainControlSync.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
	  autoIncrement: true
    },
   
    table_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

	date_updated: {
		type: DataTypes.DATE,
		allowNull: false
	},
  jinfo: {
    type: DataTypes.JSON,
		allowNull: false
  }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'main_control_sync',
	timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });
