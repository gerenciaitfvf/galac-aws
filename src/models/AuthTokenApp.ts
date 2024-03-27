import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/connection'; 

class AuthTokenApp extends Model {

	idauth_token_app : string | undefined;
	status_token : string | undefined ;
	name_token_client : string | undefined ;
}

export const authToken = AuthTokenApp.init({
  idauth_token_app: {
      type: DataTypes.STRING,
      primaryKey: true
    },
   
    status_token: {
      type: DataTypes.STRING,
      allowNull: false
    },

    name_token_client: {
		type: DataTypes.STRING,
		allowNull: false
	}
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'auth_token_app',
	  timestamps: false,
    /*
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
    */
    freezeTableName: true
  });
